"use client";

import { motion } from "framer-motion";
import { fadeInLeft, drawLine } from "../animations/variants";

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <motion.div
      className="mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2
        variants={fadeInLeft}
        className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-wide"
      >
        {title}
      </motion.h2>
      <motion.div
        variants={drawLine}
        className="h-[2px] bg-accent mt-3 max-w-[100px]"
      />
    </motion.div>
  );
}
