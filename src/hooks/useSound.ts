"use client";

import { useCallback, useEffect, useState } from "react";

export type SoundName = "blip" | "surprise" | "typewriter-tick" | "confetti-pop";

const STORAGE_KEY = "sound-enabled";

let sharedContext: AudioContext | null = null;

function getContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const AudioContextCtor =
    window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextCtor) return null;
  if (!sharedContext) sharedContext = new AudioContextCtor();
  return sharedContext;
}

// Short procedural blips via oscillator + gain envelope — no audio files,
// no licensing concerns, near-zero bundle cost.
function synthesize(ctx: AudioContext, name: SoundName) {
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);

  switch (name) {
    case "blip":
      osc.type = "square";
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(660, now + 0.08);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.start(now);
      osc.stop(now + 0.12);
      break;
    case "surprise":
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);
      gain.gain.setValueAtTime(0.07, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      osc.start(now);
      osc.stop(now + 0.2);
      break;
    case "typewriter-tick":
      osc.type = "square";
      osc.frequency.setValueAtTime(1400, now);
      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
      osc.start(now);
      osc.stop(now + 0.03);
      break;
    case "confetti-pop": {
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(1320, now + 0.25);
      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
      break;
    }
  }
}

const SOUND_EVENT = "sound-enabled-change";

// Shared across every useSound() consumer via a window CustomEvent, the same
// pattern as useAccentColor — one toggle (SoundToggle) updates all listeners.
export function useSound() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(localStorage.getItem(STORAGE_KEY) === "true");

    const handleChange = (e: Event) => {
      setEnabled((e as CustomEvent<boolean>).detail);
    };
    window.addEventListener(SOUND_EVENT, handleChange);
    return () => window.removeEventListener(SOUND_EVENT, handleChange);
  }, []);

  const toggleEnabled = useCallback(() => {
    const next = localStorage.getItem(STORAGE_KEY) !== "true";
    localStorage.setItem(STORAGE_KEY, String(next));
    if (next) getContext()?.resume();
    window.dispatchEvent(new CustomEvent(SOUND_EVENT, { detail: next }));
  }, []);

  const playSound = useCallback(
    (name: SoundName) => {
      if (!enabled) return;
      const ctx = getContext();
      if (!ctx) return;
      if (ctx.state === "suspended") ctx.resume();
      synthesize(ctx, name);
    },
    [enabled],
  );

  return { enabled, toggleEnabled, playSound };
}
