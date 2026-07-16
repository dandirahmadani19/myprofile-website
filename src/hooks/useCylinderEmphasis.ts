"use client";

import { useTransform, type MotionValue } from "framer-motion";

function normalizeAngle(deg: number): number {
  let d = deg % 360;
  if (d > 180) d -= 360;
  if (d < -180) d += 360;
  return d;
}

// Given the drum's shared rotation and a card's fixed angle on the ring,
// derives how "front and center" that card currently is — the front card
// reads crisp and full-size, the rest recede: dimmer, smaller, softly
// blurred, and non-interactive so a stray click can't open the wrong one.
export function useCylinderEmphasis(rotation: MotionValue<number>, angle: number) {
  const diffAbs = (r: number) => Math.abs(normalizeAngle(angle + r));

  const opacity = useTransform(rotation, (r) => {
    const diff = diffAbs(r);
    if (diff < 20) return 1;
    if (diff < 70) return 0.55;
    if (diff < 130) return 0.25;
    return 0.12;
  });

  // Kept below 1 even for the front card: the ring's perspective/translateZ
  // already magnifies apparent size, so this compensates rather than stacking
  // on top of it (otherwise the front card reads as oversized).
  const scale = useTransform(rotation, (r) => {
    const diff = diffAbs(r);
    if (diff < 20) return 0.82;
    if (diff < 70) return 0.7;
    return 0.58;
  });

  const filter = useTransform(rotation, (r) => {
    const diff = diffAbs(r);
    if (diff < 20) return "blur(0px)";
    if (diff < 70) return "blur(1.5px)";
    return "blur(3px)";
  });

  const pointerEvents = useTransform(rotation, (r) => (diffAbs(r) < 25 ? "auto" : "none"));

  return { opacity, scale, filter, pointerEvents };
}
