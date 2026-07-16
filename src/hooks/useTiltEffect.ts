"use client";

import { useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

interface TiltEffect {
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  glareX: MotionValue<number>;
  glareY: MotionValue<number>;
  onMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave: () => void;
}

const MAX_TILT_DEG = 6;

export function useTiltEffect(): TiltEffect {
  const prefersReducedMotion = usePrefersReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(py, [0, 1], [MAX_TILT_DEG, -MAX_TILT_DEG]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-MAX_TILT_DEG, MAX_TILT_DEG]), {
    stiffness: 300,
    damping: 30,
  });
  const glareX = useTransform(px, [0, 1], [0, 100]);
  const glareY = useTransform(py, [0, 1], [0, 100]);

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const onMouseLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return { rotateX, rotateY, glareX, glareY, onMouseMove, onMouseLeave };
}
