"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
}

export default function FallingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // Random percentage
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10, // 10-20 seconds
      size: Math.random() * 20 + 10, // 10-30px
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: "110vh",
            opacity: [0, 0.6, 0],
            rotate: 360,
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
          style={{
            left: `${particle.x}%`,
            width: particle.size,
            height: particle.size,
            background: "var(--accent)", // Uses the current theme accent color
          }}
          className="absolute rounded-full blur-md opacity-20"
        />
      ))}
    </div>
  );
}
