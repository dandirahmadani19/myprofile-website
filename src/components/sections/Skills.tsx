"use client";

import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { skills } from "@/data/profile";
import { staggerContainer, staggerItem } from "../animations/variants";

const skillCategories = [
  { key: "backend", label: "Backend" },
  { key: "frontend", label: "Frontend" },
  { key: "mobile", label: "Mobile" },
  { key: "database", label: "Database" },
  { key: "devops", label: "DevOps" },
  { key: "security", label: "Security" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-6 bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="SKILLS" />

        <div className="space-y-6 md:space-y-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-accent pl-4 md:pl-6"
            >
              <h3 className="text-base md:text-lg font-bold font-[family-name:var(--font-space-grotesk)] mb-2 md:mb-3">
                {category.label}
              </h3>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-1.5 md:gap-2"
              >
                {skills[category.key as keyof typeof skills].map(
                  (skill, index) => (
                    <motion.span
                      key={skill}
                      variants={staggerItem}
                      className="px-2 md:px-3 py-1 md:py-1.5 text-[10px] md:text-xs font-[family-name:var(--font-jetbrains-mono)] border border-[#333] text-[#aaa] hover:border-accent hover:text-accent transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ),
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
