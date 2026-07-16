"use client";

import { useEffect, useRef, useState } from "react";

export type ActivityState = "idle" | "asleep" | "normal" | "fast";

const IDLE_MS = 8000;
const ASLEEP_MS = 45000;
const FAST_PX_PER_MS = 1.2;

interface PointerVelocityState {
  state: ActivityState;
  angle: number; // radians, direction from viewport center to pointer
}

// Shared plumbing for the cursor mascot (sleepy/startled reactions) and the
// idle "surprise" state — both key off the same activity timer instead of
// running two separate ones.
export function usePointerVelocity(): PointerVelocityState {
  const [state, setState] = useState<ActivityState>("normal");
  const [angle, setAngle] = useState(0);
  const lastMoveRef = useRef({ x: 0, y: 0, t: 0 });
  const lastActivityRef = useRef(Date.now());

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      const now = performance.now();
      const { x: lastX, y: lastY, t: lastT } = lastMoveRef.current;
      const dt = now - lastT;

      if (lastT > 0 && dt > 0) {
        const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
        const speed = dist / dt;
        setState(speed > FAST_PX_PER_MS ? "fast" : "normal");
      }

      lastMoveRef.current = { x: e.clientX, y: e.clientY, t: now };
      lastActivityRef.current = Date.now();

      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setAngle(Math.atan2(e.clientY - cy, e.clientX - cx));
    };

    const handleActivity = () => {
      lastActivityRef.current = Date.now();
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("scroll", handleActivity, { passive: true });
    window.addEventListener("keydown", handleActivity);

    const interval = setInterval(() => {
      const idleFor = Date.now() - lastActivityRef.current;
      setState((prev) => {
        if (idleFor > ASLEEP_MS) return "asleep";
        if (idleFor > IDLE_MS) return "idle";
        return prev === "fast" || prev === "normal" ? prev : "normal";
      });
    }, 1000);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("scroll", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      clearInterval(interval);
    };
  }, []);

  return { state, angle };
}
