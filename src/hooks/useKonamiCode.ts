"use client";

import { useEffect, useRef } from "react";

const KONAMI_SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function useKonamiCode(onTrigger: () => void) {
  const progressRef = useRef(0);
  const callbackRef = useRef(onTrigger);
  callbackRef.current = onTrigger;

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      const expected = KONAMI_SEQUENCE[progressRef.current];
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;

      if (key === expected) {
        progressRef.current += 1;
        if (progressRef.current === KONAMI_SEQUENCE.length) {
          progressRef.current = 0;
          callbackRef.current();
        }
      } else {
        progressRef.current = key === KONAMI_SEQUENCE[0] ? 1 : 0;
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);
}
