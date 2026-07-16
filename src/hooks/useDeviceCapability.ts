"use client";

import { useEffect, useState } from "react";

export type DeviceTier = "full" | "off";

// Small viewports / low-core devices skip the WebGL hero scene entirely
// and fall back to the existing static glow — least screen room for a
// HUD-frame effect anyway, and the least CPU/GPU headroom to render it.
export function useDeviceCapability(): DeviceTier {
  const [tier, setTier] = useState<DeviceTier>("full");

  useEffect(() => {
    const isSmallViewport = window.innerWidth < 640;
    const isLowPower = (navigator.hardwareConcurrency ?? 4) <= 2;
    setTier(isSmallViewport || isLowPower ? "off" : "full");
  }, []);

  return tier;
}
