"use client";

import { motion } from "framer-motion";
import { IoVolumeMute, IoVolumeHigh } from "react-icons/io5";
import { useSound } from "@/hooks/useSound";

export default function SoundToggle() {
  const { enabled, toggleEnabled } = useSound();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleEnabled}
      className="fixed bottom-6 right-24 z-50 w-12 h-12 bg-black border border-white/20 rounded-full flex items-center justify-center text-white shadow-lg backdrop-blur-sm hover:border-accent transition-colors"
      style={{ borderColor: enabled ? "var(--accent)" : undefined }}
      aria-label={enabled ? "Mute sound effects" : "Enable sound effects"}
      title={enabled ? "Sound effects on" : "Sound effects off"}
    >
      {enabled ? (
        <IoVolumeHigh size={20} style={{ color: "var(--accent)" }} />
      ) : (
        <IoVolumeMute size={20} className="text-[#666]" />
      )}
    </motion.button>
  );
}
