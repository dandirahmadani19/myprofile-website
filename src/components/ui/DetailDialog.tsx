"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import TechBadge from "./TechBadge";

interface DetailDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  period?: string;
  industry?: string;
  techStack?: string[];
  content: string;
  impact?: string;
}

export default function DetailDialog({
  isOpen,
  onClose,
  title,
  subtitle,
  period,
  industry,
  techStack,
  content,
  impact,
}: DetailDialogProps) {
  // Format content with beautiful bullet points
  const formatContent = (text: string) => {
    return text.split("\n").map((line, index) => {
      const trimmedLine = line.trim();

      // Handle bullet points (• or -)
      if (trimmedLine.startsWith("•") || trimmedLine.startsWith("-")) {
        const bulletContent = trimmedLine.substring(1).trim();

        // Check if it has a colon (feature: description format)
        const colonIndex = bulletContent.indexOf(":");
        if (colonIndex > 0 && colonIndex < 40) {
          const feature = bulletContent.substring(0, colonIndex);
          const description = bulletContent.substring(colonIndex + 1).trim();
          return (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-3 mb-3 group"
            >
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                <FaArrowRight className="text-accent text-[10px]" />
              </span>
              <span>
                <strong className="text-white">{feature}:</strong>{" "}
                <span className="text-[#aaa]">{description}</span>
              </span>
            </motion.li>
          );
        }

        return (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex items-start gap-3 mb-2"
          >
            <span className="flex-shrink-0 mt-1">
              <FaCheckCircle className="text-accent text-sm" />
            </span>
            <span className="text-[#aaa]">{bulletContent}</span>
          </motion.li>
        );
      }

      // Handle "Key Achievements:" or "Key Features:" headers
      if (trimmedLine.startsWith("Key ") || trimmedLine.startsWith("Impact:")) {
        return (
          <h4
            key={index}
            className="text-accent font-bold text-sm mt-5 mb-3 flex items-center gap-2 border-b border-[#1a1a1a] pb-2"
          >
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            {trimmedLine}
          </h4>
        );
      }

      // Empty lines
      if (!trimmedLine) {
        return <div key={index} className="h-2" />;
      }

      // Regular paragraphs
      return (
        <motion.p
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.03 }}
          className="mb-3 text-[#bbb] leading-relaxed"
        >
          {trimmedLine}
        </motion.p>
      );
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-50"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl md:max-h-[85vh] bg-gradient-to-b from-[#0d0d0d] to-[#080808] border border-[#1a1a1a] z-50 overflow-hidden flex flex-col rounded-lg shadow-2xl shadow-black/50"
          >
            {/* Decorative top line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />

            {/* Header */}
            <div className="p-4 md:p-6 border-b border-[#1a1a1a] bg-[#0a0a0a]/50">
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-4">
                  <h3 className="text-lg md:text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                    {title}
                  </h3>
                  {subtitle && (
                    <p className="text-[#888] text-sm md:text-base mt-1">
                      {subtitle}
                    </p>
                  )}
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-2">
                    {period && (
                      <span className="text-accent text-xs md:text-sm font-[family-name:var(--font-jetbrains-mono)] bg-accent/10 px-2 py-0.5 rounded">
                        {period}
                      </span>
                    )}
                    {industry && (
                      <span className="text-[#888] text-xs px-2 py-0.5 border border-[#333] bg-[#111] rounded">
                        {industry}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-[#666] hover:text-accent hover:bg-accent/10 rounded-lg transition-all"
                  aria-label="Close dialog"
                >
                  <FaTimes size={18} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6">
              <ul className="text-sm md:text-base leading-relaxed list-none">
                {formatContent(content)}
              </ul>

              {impact && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 p-4 bg-gradient-to-r from-accent/10 to-transparent border-l-2 border-accent rounded-r-lg"
                >
                  <p className="text-accent font-bold text-sm mb-1 flex items-center gap-2">
                    <span>✨</span> Impact & Results
                  </p>
                  <p className="text-[#ccc] text-sm">{impact}</p>
                </motion.div>
              )}

              {techStack && techStack.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6"
                >
                  <p className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                    <span>🛠</span> Technologies Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, i) => (
                      <TechBadge key={tech} tech={tech} index={i} />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
