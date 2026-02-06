"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoColorPalette } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const colors = [
  { name: "Orange", value: "#ff6b00" },
  { name: "Cyan", value: "#00e5ff" },
  { name: "Purple", value: "#a855f7" },
  { name: "Green", value: "#22c55e" },
  { name: "Red", value: "#ef4444" },
  { name: "Pink", value: "#ec4899" },
  { name: "Yellow", value: "#eab308" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Indigo", value: "#6366f1" },
  { name: "Teal", value: "#14b8a6" },
  { name: "Lime", value: "#84cc16" },
  { name: "Emerald", value: "#10b981" },
  { name: "Sky", value: "#0ea5e9" },
  { name: "Violet", value: "#8b5cf6" },
  { name: "Fuchsia", value: "#d946ef" },
  { name: "Rose", value: "#f43f5e" },
  { name: "Slate", value: "#94a3b8" },
  { name: "Amber", value: "#f59e0b" },
  { name: "Zinc", value: "#a1a1aa" },
  { name: "Neutral", value: "#a3a3a3" },
  { name: "Stone", value: "#a8a29e" },
];

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeColor, setActiveColor] = useState(colors[0].value);

  // Initialize theme from localStorage
  useEffect(() => {
    const savedColor = localStorage.getItem("accent-color") || colors[0].value;
    setActiveColor(savedColor);
    document.documentElement.style.setProperty("--accent", savedColor);
  }, []);

  const handleColorChange = (color: string) => {
    setActiveColor(color);
    document.documentElement.style.setProperty("--accent", color);
    localStorage.setItem("accent-color", color);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl"
          >
            <div className="text-xs font-mono text-gray-400 mb-3 uppercase tracking-wider">
              Select Theme
            </div>
            <div className="grid grid-cols-4 gap-2">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => handleColorChange(color.value)}
                  className={`w-8 h-8 rounded-full transition-all duration-300 relative group ${
                    activeColor === color.value
                      ? "ring-2 ring-white scale-110"
                      : "hover:scale-110"
                  }`}
                  style={{ backgroundColor: color.value }}
                  aria-label={`Set theme to ${color.name}`}
                >
                  {activeColor === color.value && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute inset-0 rounded-full border-2 border-white"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-black border border-white/20 rounded-full flex items-center justify-center text-white shadow-lg backdrop-blur-sm group hover:border-[#ff6b00] transition-colors"
        style={{ borderColor: isOpen ? activeColor : undefined }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <IoMdClose size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="palette"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <IoColorPalette size={24} style={{ color: activeColor }} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
