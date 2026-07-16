"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import Typewriter from "../ui/Typewriter";
import { useKonamiCode } from "@/hooks/useKonamiCode";
import { useSound } from "@/hooks/useSound";

const TERMINAL_LOG = `$ sudo whoami
dandi (definitely not a robot, 73% caffeine)
$ ./deploy_confidence.sh
[OK] confidence levels: over 9000
$ echo "thanks for finding the easter egg"
thanks for finding the easter egg`;

interface BurstParticle {
  id: number;
  angle: number;
  distance: number;
  size: number;
}

function ParticleBurst() {
  const [particles] = useState<BurstParticle[]>(() =>
    Array.from({ length: 24 }, (_, i) => ({
      id: i,
      angle: (i / 24) * Math.PI * 2,
      distance: 80 + Math.random() * 120,
      size: 6 + Math.random() * 10,
    })),
  );

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{
            x: Math.cos(p.angle) * p.distance,
            y: Math.sin(p.angle) * p.distance,
            opacity: 0,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ width: p.size, height: p.size, background: "var(--accent)" }}
          className="absolute rounded-full"
        />
      ))}
    </div>
  );
}

export default function EasterEggTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBurst, setShowBurst] = useState(false);
  const { playSound } = useSound();

  useKonamiCode(() => setIsOpen(true));

  useEffect(() => {
    const handleLogoTrigger = () => setIsOpen(true);
    window.addEventListener("easter-egg-trigger", handleLogoTrigger);
    return () => window.removeEventListener("easter-egg-trigger", handleLogoTrigger);
  }, []);

  useEffect(() => {
    if (!isOpen) setShowBurst(false);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
        >
          {showBurst && <ParticleBurst />}

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-lg bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-6 font-[family-name:var(--font-jetbrains-mono)] text-sm text-accent"
            style={{ color: "var(--accent)" }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-[#666] hover:text-accent transition-colors"
              aria-label="Close"
            >
              <FaTimes />
            </button>
            <pre className="whitespace-pre-wrap leading-relaxed">
              <Typewriter
                text={TERMINAL_LOG}
                speed={20}
                onCharacter={() => playSound("typewriter-tick")}
                onComplete={() => {
                  setShowBurst(true);
                  playSound("confetti-pop");
                }}
              />
            </pre>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
