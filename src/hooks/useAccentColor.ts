"use client";

import { useEffect, useMemo, useState } from "react";
import { Color } from "three";

const DEFAULT_ACCENT = "#ff6b00";

function readAccentFromDOM(): string {
  if (typeof document === "undefined") return DEFAULT_ACCENT;
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue("--accent")
    .trim();
  return value || DEFAULT_ACCENT;
}

// Event-driven, not polled: ThemeSwitcher dispatches "accent-color-change"
// whenever it sets --accent, so this hook never checks per-frame.
export function useAccentColor(): { hex: string; threeColor: Color } {
  const [hex, setHex] = useState(DEFAULT_ACCENT);

  useEffect(() => {
    setHex(readAccentFromDOM());

    const handleChange = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      setHex(detail || readAccentFromDOM());
    };

    window.addEventListener("accent-color-change", handleChange);
    return () => window.removeEventListener("accent-color-change", handleChange);
  }, []);

  const threeColor = useMemo(() => new Color(hex), [hex]);

  return { hex, threeColor };
}
