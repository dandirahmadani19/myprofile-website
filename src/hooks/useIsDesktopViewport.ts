"use client";

import { useEffect, useState } from "react";

// The rotating cylinder carousel needs room to show neighboring cards
// peeking in from the sides; below this width it degrades to a plain
// stacked list instead of a cramped/cut-off drum.
export function useIsDesktopViewport(breakpoint = 768): boolean {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isDesktop;
}
