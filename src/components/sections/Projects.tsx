"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, type MotionValue } from "framer-motion";
import { FaStar } from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";
import TechBadge from "../ui/TechBadge";
import DetailDialog from "../ui/DetailDialog";
import { projects } from "@/data/profile";
import { useCylinderEmphasis } from "@/hooks/useCylinderEmphasis";
import { useIsDesktopViewport } from "@/hooks/useIsDesktopViewport";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type Project = (typeof projects)[0];

function ProjectCardContent({ project }: { project: Project }) {
  return (
    <>
      {project.images.length > 0 && (
        <div className="relative w-full aspect-video border-b border-[#1a1a1a] flex-shrink-0">
          <Image src={project.images[0]} alt={`${project.name} screenshot`} fill className="object-cover" />
          {project.images.length > 1 && (
            <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded font-[family-name:var(--font-jetbrains-mono)]">
              +{project.images.length - 1} more
            </span>
          )}
        </div>
      )}

      <div className="p-4 md:p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2 md:mb-3">
          {project.images.length === 0 && <span className="text-accent text-xl md:text-2xl">📁</span>}
          <span className="text-[#666] text-[10px] md:text-xs font-[family-name:var(--font-jetbrains-mono)] bg-[#111] px-2 py-0.5 rounded ml-auto">
            {project.period}
          </span>
        </div>

        <h3 className="text-sm md:text-lg font-bold font-[family-name:var(--font-space-grotesk)] mb-1.5 md:mb-2 group-hover:text-accent transition-colors">
          {project.name}
        </h3>

        <p className="text-[#888] text-xs md:text-sm mb-3 md:mb-4 flex-grow line-clamp-3">{project.description}</p>

        <div className="flex items-start gap-2 mb-3 md:mb-4 p-2 bg-accent/5 rounded border-l-2 border-accent">
          <FaStar className="text-accent text-xs mt-0.5 flex-shrink-0" />
          <p className="text-accent text-[10px] md:text-xs font-[family-name:var(--font-jetbrains-mono)] line-clamp-2">
            {project.impact}
          </p>
        </div>

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
      </div>
    </>
  );
}

// A fixed-height face for the ring that reuses the site's established card
// language (bordered image up top, dark gradient body, mono period tag,
// a couple of tech badges) instead of a full-bleed "poster" — screenshots
// stretched edge-to-edge with a scrim read cheap; this keeps the ring
// visually consistent with the rest of the site. Full description/impact
// text is left to the click-to-open DetailDialog.
function DrumCardFace({ project }: { project: Project }) {
  const cover = project.images[0] ?? "/images/projects/default.webp";

  return (
    <div className="flex flex-col h-full">
      <div className="relative w-full h-[100px] md:h-[120px] border-b border-[#1a1a1a] flex-shrink-0">
        <Image src={cover} alt={`${project.name} screenshot`} fill className="object-cover" />
      </div>

      <div className="p-3 md:p-4 flex flex-col flex-grow min-h-0">
        <span className="self-start text-[9px] md:text-[10px] font-[family-name:var(--font-jetbrains-mono)] text-[#666] bg-[#111] px-2 py-0.5 rounded mb-2">
          {project.period}
        </span>

        <h3 className="text-sm md:text-base font-bold font-[family-name:var(--font-space-grotesk)] mb-1.5 line-clamp-1 group-hover:text-accent transition-colors">
          {project.name}
        </h3>

        <p className="text-[#888] text-[11px] md:text-xs leading-snug mb-2 line-clamp-2 flex-grow">
          {project.description}
        </p>

        <div className="flex gap-1.5 flex-wrap mt-auto">
          {project.techStack.slice(0, 3).map((tech, i) => (
            <TechBadge key={tech} tech={tech} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

const RADIUS = 400;
const CARD_SIZE = "w-[210px] h-[300px] md:w-[250px] md:h-[350px]";

function CylinderCard({
  project,
  angle,
  rotation,
  onClick,
}: {
  project: Project;
  angle: number;
  rotation: MotionValue<number>;
  onClick: () => void;
}) {
  const { opacity, scale, filter, pointerEvents } = useCylinderEmphasis(rotation, angle);

  return (
    <div
      className="absolute top-1/2 left-1/2"
      style={{
        transform: `rotateY(${angle}deg) translateZ(${RADIUS}px) translate(-50%, -50%)`,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        onClick={onClick}
        style={{ opacity, scale, filter, pointerEvents, backfaceVisibility: "hidden" }}
        className={`${CARD_SIZE} border border-[#1a1a1a] bg-gradient-to-br from-[#0a0a0a] to-[#080808] rounded-lg cursor-pointer group transition-colors duration-300 hover:border-[var(--accent)] overflow-hidden shadow-2xl shadow-black/60`}
      >
        <DrumCardFace project={project} />
      </motion.div>
    </div>
  );
}

// Progress per full deltaY unit accumulated; lower = faster rotation per scroll tick.
const SCROLL_DISTANCE = 1800;

function CylinderCarousel({ onSelect }: { onSelect: (project: Project) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const anglePerCard = 360 / projects.length;
  const totalRotation = (projects.length - 1) * anglePerCard;

  const rotationRaw = useMotionValue(0);
  const rotation = useSpring(rotationRaw, { stiffness: 140, damping: 24, mass: 0.6 });

  // Scroll-jacking: while the cursor is over the drum, wheel input spins the
  // ring instead of scrolling the page. Once the ring reaches either end,
  // the next wheel tick in that direction is let through so the page scroll
  // resumes normally — the drum never traps the visitor.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      const goingDown = e.deltaY > 0;
      if (goingDown && progressRef.current >= 1) return;
      if (!goingDown && progressRef.current <= 0) return;

      e.preventDefault();
      const next = Math.min(1, Math.max(0, progressRef.current + e.deltaY / SCROLL_DISTANCE));
      progressRef.current = next;
      rotationRaw.set(-next * totalRotation);
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [rotationRaw, totalRotation]);

  return (
    <div
      ref={containerRef}
      className="relative h-[75vh] md:h-[85vh] flex items-center justify-center overflow-hidden [perspective:1200px]"
    >
      <motion.div
        style={{ rotateY: rotation, transformStyle: "preserve-3d" }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {projects.map((project, index) => (
          <CylinderCard
            key={project.name}
            project={project}
            angle={index * anglePerCard}
            rotation={rotation}
            onClick={() => onSelect(project)}
          />
        ))}
      </motion.div>

      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] md:text-xs text-[#666] font-[family-name:var(--font-jetbrains-mono)] tracking-wide">
        scroll to rotate
      </p>
    </div>
  );
}

function StackedList({ onSelect }: { onSelect: (project: Project) => void }) {
  return (
    <div className="flex flex-col gap-6">
      {projects.map((project) => (
        <motion.div
          key={project.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          onClick={() => onSelect(project)}
          className="border border-[#1a1a1a] bg-gradient-to-br from-[#0a0a0a] to-[#080808] flex flex-col cursor-pointer rounded-lg group transition-colors duration-300 hover:border-[var(--accent)] overflow-hidden"
        >
          <ProjectCardContent project={project} />
        </motion.div>
      ))}
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const isDesktop = useIsDesktopViewport();
  const prefersReducedMotion = usePrefersReducedMotion();

  const useCylinder = isDesktop && !prefersReducedMotion;

  return (
    <section id="projects" className="py-16 md:py-24 px-4 md:px-6">
      {/* Horizontal clipping lives on the sticky drum wrapper below, not
          here — overflow-x on this section would implicitly force
          overflow-y: auto (CSS overflow-x/y are linked), which breaks the
          drum's position: sticky pinning. */}
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="PROJECTS" />
      </div>

      <div className="mt-8 md:mt-12">
        {useCylinder ? (
          <CylinderCarousel onSelect={setSelectedProject} />
        ) : (
          <div className="max-w-3xl mx-auto px-0">
            <StackedList onSelect={setSelectedProject} />
          </div>
        )}
      </div>

      <DetailDialog
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.name || ""}
        period={selectedProject?.period}
        techStack={selectedProject?.techStack}
        content={selectedProject?.fullDescription || ""}
        impact={selectedProject?.impact}
        images={selectedProject?.images}
        purpose={selectedProject?.purpose}
      />
    </section>
  );
}
