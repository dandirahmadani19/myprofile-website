"use client";

import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { profile } from "@/data/profile";

export default function About() {
  const highlights = [
    { value: "3+", label: "Years Experience" },
    { value: "10+", label: "Projects Delivered" },
    { value: "3", label: "Companies" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="ABOUT ME" />

        <div className="grid grid-cols-3 gap-3 md:gap-6 mb-8 md:mb-12">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-3 md:p-6 border border-[#1a1a1a] bg-[#0a0a0a]"
            >
              <span className="text-xl md:text-4xl font-bold text-[#ff6b00] font-[family-name:var(--font-space-grotesk)]">
                {item.value}
              </span>
              <p className="text-[10px] md:text-sm text-[#888] mt-1 md:mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-[#aaa] space-y-4 md:space-y-6 text-sm md:text-base leading-relaxed"
        >
          {profile.summary.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
