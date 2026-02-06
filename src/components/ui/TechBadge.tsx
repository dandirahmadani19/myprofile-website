"use client";

import { motion } from "framer-motion";

interface TechBadgeProps {
  tech: string;
  index?: number;
}

export default function TechBadge({ tech, index = 0 }: TechBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.05,
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      whileHover={{
        scale: 1.05,
        borderColor: "var(--accent)",
        transition: { duration: 0.2 },
      }}
      className="inline-block px-2 py-1 text-xs font-[family-name:var(--font-jetbrains-mono)] border border-[#333] bg-[#0a0a0a] text-[#ccc] rounded-sm mr-2 mb-2"
    >
      {tech}
    </motion.span>
  );
}
