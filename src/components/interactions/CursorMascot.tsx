"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePointerVelocity } from "@/hooks/usePointerVelocity";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useSound } from "@/hooks/useSound";

const FACES = {
  normal: "{ o.o }",
  fast: "{ O.O }",
  idle: "{ -.- }",
  asleep: "{ u.u } z z z",
};

const BUBBLES: Record<string, string | null> = {
  normal: null,
  fast: "whoa, slow down!",
  idle: null,
  asleep: "waiting for you...",
};

export default function CursorMascot() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { state, angle } = usePointerVelocity();
  const { playSound } = useSound();
  const prevStateRef = useRef(state);

  useEffect(() => {
    if (prevStateRef.current !== state) {
      if (state === "fast") playSound("surprise");
      if (state === "asleep") playSound("blip");
      prevStateRef.current = state;
    }
  }, [state, playSound]);

  if (prefersReducedMotion) return null;

  const rotationDeg = state === "normal" || state === "fast" ? (angle * 180) / Math.PI + 90 : 0;
  const bubble = BUBBLES[state];

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start pointer-events-none">
      <AnimatePresence>
        {bubble && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            className="mb-2 bg-black/80 border border-[#1a1a1a] text-white text-xs font-[family-name:var(--font-jetbrains-mono)] px-3 py-1.5 rounded-lg"
          >
            {bubble}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={{ rotate: rotationDeg * 0.15 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        className="text-accent font-[family-name:var(--font-jetbrains-mono)] text-sm bg-black/60 border border-[#1a1a1a] rounded-full px-3 py-1.5"
        style={{ color: "var(--accent)" }}
      >
        {FACES[state]}
      </motion.div>
    </div>
  );
}
