"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Articles", href: "#articles" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 overflow-hidden"
    >
      {/* Animated background with beautiful effects */}
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl border-b border-[#1a1a1a]">
        {/* Animated gradient mesh background */}
        <div className="absolute inset-0 opacity-30">
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 0% 0%, #ff6b00 0%, transparent 50%)",
                "radial-gradient(circle at 100% 0%, #ff6b00 0%, transparent 50%)",
                "radial-gradient(circle at 100% 100%, #ff6b00 0%, transparent 50%)",
                "radial-gradient(circle at 0% 100%, #ff6b00 0%, transparent 50%)",
                "radial-gradient(circle at 0% 0%, #ff6b00 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 opacity-20"
          />
        </div>

        {/* Floating glowing orbs */}
        <motion.div
          animate={{
            x: [0, 150, 0],
            y: [0, 10, 0],
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-10 -top-10 w-32 h-32 bg-[#ff6b00] blur-[80px] rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -5, 0],
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute right-20 -top-5 w-40 h-24 bg-[#ff6b00] blur-[60px] rounded-full"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute left-1/3 top-0 w-24 h-16 bg-[#ff6b00] blur-[50px] rounded-full"
        />

        {/* Animated scanning line */}
        <motion.div
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-[#ff6b00] to-transparent opacity-60"
        />
        
        {/* Secondary accent line moving opposite direction */}
        <motion.div
          animate={{
            x: ["200%", "-100%"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 left-0 w-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#ff6b00]/50 to-transparent"
        />

        {/* Subtle particle dots */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className="absolute w-1 h-1 bg-[#ff6b00] rounded-full"
            style={{
              left: `${15 + i * 20}%`,
              bottom: "0px",
            }}
          />
        ))}
      </div>

      <nav className="relative max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-xl md:text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-white hover:text-[#ff6b00] transition-colors relative group"
        >
          <span className="relative z-10">DR</span>
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -inset-2 bg-[#ff6b00]/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="text-xs lg:text-sm text-[#888] hover:text-[#ff6b00] transition-colors font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ff6b00] group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 relative"
          aria-label="Toggle menu"
        >
          <motion.div className="w-5 h-4 relative flex flex-col justify-between">
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6, backgroundColor: "#ff6b00" } : { rotate: 0, y: 0, backgroundColor: "#fff" }}
              className="w-full h-[2px] block origin-center"
            />
            <motion.span
              animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="w-full h-[2px] bg-white block"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6, backgroundColor: "#ff6b00" } : { rotate: 0, y: 0, backgroundColor: "#fff" }}
              className="w-full h-[2px] block origin-center"
            />
          </motion.div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/98 border-t border-[#1a1a1a] overflow-hidden relative"
          >
            {/* Mobile menu glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#ff6b00]/5 to-transparent pointer-events-none" />
            
            <div className="px-4 py-4 flex flex-col gap-1 relative">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base text-[#888] hover:text-[#ff6b00] hover:bg-[#ff6b00]/5 transition-all block py-3 px-3 rounded-lg"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
