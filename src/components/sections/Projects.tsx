"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";
import TechBadge from "../ui/TechBadge";
import DetailDialog from "../ui/DetailDialog";
import { projects } from "@/data/profile";
import { staggerContainer, staggerItem } from "../animations/variants";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section id="projects" className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="PROJECTS" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={staggerItem}
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="border border-[#1a1a1a] bg-gradient-to-br from-[#0a0a0a] to-[#080808] p-4 md:p-6 flex flex-col h-full cursor-pointer rounded-lg group transition-all duration-300 hover:border-[var(--accent)]"
            >
              <div className="flex items-center justify-between mb-2 md:mb-3">
                <span className="text-accent text-xl md:text-2xl">📁</span>
                <span className="text-[#666] text-[10px] md:text-xs font-[family-name:var(--font-jetbrains-mono)] bg-[#111] px-2 py-0.5 rounded">
                  {project.period}
                </span>
              </div>

              <h3 className="text-sm md:text-lg font-bold font-[family-name:var(--font-space-grotesk)] mb-1.5 md:mb-2 group-hover:text-accent transition-colors">
                {project.name}
              </h3>

              <p className="text-[#888] text-xs md:text-sm mb-3 md:mb-4 flex-grow line-clamp-3">
                {project.description}
              </p>

              {/* Impact with star icon */}
              <div className="flex items-start gap-2 mb-3 md:mb-4 p-2 bg-accent/5 rounded border-l-2 border-accent">
                <FaStar className="text-accent text-xs mt-0.5 flex-shrink-0" />
                <p className="text-accent text-[10px] md:text-xs font-[family-name:var(--font-jetbrains-mono)] line-clamp-2">
                  {project.impact}
                </p>
              </div>

              {/* Horizontally scrollable tech stack - showing ALL skills */}
              <div className="overflow-x-auto pb-2 -mx-2 px-2 mt-auto scrollbar-hide">
                <div className="flex gap-1.5 md:gap-2 min-w-max">
                  {project.techStack.map((tech, i) => (
                    <TechBadge key={tech} tech={tech} index={i} />
                  ))}
                </div>
              </div>

              <p className="text-[#666] text-[10px] md:text-xs mt-2 md:mt-3 text-right opacity-60 group-hover:opacity-100 group-hover:text-accent transition-all">
                Click for details →
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Detail Dialog */}
      <DetailDialog
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.name || ""}
        period={selectedProject?.period}
        techStack={selectedProject?.techStack}
        content={selectedProject?.fullDescription || ""}
        impact={selectedProject?.impact}
      />
    </section>
  );
}
