"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";
import TechBadge from "../ui/TechBadge";
import DetailDialog from "../ui/DetailDialog";
import { experiences } from "@/data/profile";

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState<
    (typeof experiences)[0] | null
  >(null);

  return (
    <section
      id="experience"
      className="py-16 md:py-24 px-4 md:px-6 bg-[#050505]"
    >
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="EXPERIENCE" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-[2px] bg-[#1a1a1a]">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full bg-gradient-to-b from-accent to-accent/30"
            />
          </div>

          <div className="space-y-8 md:space-y-12 pl-6 md:pl-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative"
              >
                {/* Timeline dot with glow */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                  className="absolute -left-6 md:-left-16 top-2"
                >
                  <div className="w-3 md:w-4 h-3 md:h-4 bg-accent rounded-full border-2 md:border-4 border-black relative">
                    <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20" />
                  </div>
                </motion.div>

                <motion.div
                  onClick={() => setSelectedExp(exp)}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="border border-[#1a1a1a] bg-gradient-to-br from-[#0a0a0a] to-[#080808] p-4 md:p-6 cursor-pointer rounded-lg group transition-all duration-300 hover:border-[var(--accent)]"
                >
                  <div className="flex flex-col gap-2 mb-2">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                      <h3 className="text-base md:text-xl font-bold font-[family-name:var(--font-space-grotesk)] group-hover:text-accent transition-colors">
                        {exp.company}
                      </h3>
                      <span className="text-accent text-xs md:text-sm font-[family-name:var(--font-jetbrains-mono)] bg-accent/10 px-2 py-0.5 rounded">
                        {exp.period}
                      </span>
                    </div>
                    {/* Industry Badge */}
                    <span className="inline-block w-fit text-[10px] md:text-xs text-[#888] px-2 py-0.5 border border-[#333] bg-[#111] rounded">
                      {exp.industry}
                    </span>
                  </div>

                  <p className="text-[#888] text-sm md:text-base mb-3 md:mb-4">
                    {exp.role} • {exp.location}
                  </p>

                  <ul className="space-y-2 md:space-y-2.5 mb-3 md:mb-4">
                    {exp.achievements.slice(0, 3).map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                        className="text-[#aaa] text-xs md:text-sm flex items-start gap-2"
                      >
                        <span className="flex-shrink-0 mt-0.5">
                          <FaCheckCircle className="text-accent text-xs" />
                        </span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Horizontally scrollable tech stack */}
                  <div className="overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
                    <div className="flex gap-1.5 md:gap-2 min-w-max">
                      {exp.techStack.map((tech, i) => (
                        <TechBadge key={tech} tech={tech} index={i} />
                      ))}
                    </div>
                  </div>

                  <p className="text-accent text-[10px] md:text-xs mt-2 md:mt-3 text-right opacity-60 group-hover:opacity-100 transition-opacity">
                    Click to see full details →
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Detail Dialog */}
      <DetailDialog
        isOpen={!!selectedExp}
        onClose={() => setSelectedExp(null)}
        title={selectedExp?.company || ""}
        subtitle={selectedExp?.role}
        period={selectedExp?.period}
        industry={selectedExp?.industry}
        techStack={selectedExp?.techStack}
        content={selectedExp?.fullDescription || ""}
      />
    </section>
  );
}
