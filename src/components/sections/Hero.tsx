"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Typewriter from "../ui/Typewriter";
import { profile } from "@/data/profile";
import { FaGithub, FaLinkedin, FaEnvelope, FaMedium, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const [nameComplete, setNameComplete] = useState(false);

  const whatsappLink = `https://wa.me/${profile.whatsapp}?text=Hi%20Dandi,%20I%20found%20your%20profile%20and%20would%20like%20to%20connect!`;

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-20 pb-10">
      <div className="max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-8">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#ff6b00] font-[family-name:var(--font-jetbrains-mono)] text-xs md:text-sm mb-3 md:mb-4"
          >
            Hi, my name is
          </motion.p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] mb-3 md:mb-4">
            <Typewriter 
              text={profile.name} 
              delay={500} 
              speed={80}
              onComplete={() => setNameComplete(true)}
            />
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] text-[#888] mb-4 md:mb-6">
            {nameComplete && (
              <Typewriter 
                text={profile.title} 
                delay={200} 
                speed={50}
              />
            )}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: nameComplete ? 1 : 0, y: nameComplete ? 0 : 20 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-[#888] text-sm md:text-lg max-w-xl mb-6 md:mb-8 leading-relaxed mx-auto lg:mx-0"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: nameComplete ? 1 : 0, y: nameComplete ? 0 : 20 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex items-center justify-center lg:justify-start gap-4 md:gap-6 mb-6 md:mb-8"
          >
            <Link
              href={profile.github}
              target="_blank"
              className="text-xl md:text-2xl text-[#888] hover:text-[#ff6b00] transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </Link>
            <Link
              href={profile.linkedin}
              target="_blank"
              className="text-xl md:text-2xl text-[#888] hover:text-[#ff6b00] transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
            <Link
              href={profile.medium}
              target="_blank"
              className="text-xl md:text-2xl text-[#888] hover:text-[#ff6b00] transition-colors"
              aria-label="Medium"
            >
              <FaMedium />
            </Link>
            <Link
              href={whatsappLink}
              target="_blank"
              className="text-xl md:text-2xl text-[#888] hover:text-[#25D366] transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </Link>
            <Link
              href={`mailto:${profile.email}`}
              className="text-xl md:text-2xl text-[#888] hover:text-[#ff6b00] transition-colors"
              aria-label="Email"
            >
              <FaEnvelope />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: nameComplete ? 1 : 0, y: nameComplete ? 0 : 20 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4"
          >
            <Link
              href="#services"
              className="w-full sm:w-auto text-center px-5 md:px-6 py-2.5 md:py-3 bg-transparent border-2 border-[#ff6b00] text-[#ff6b00] font-medium text-sm md:text-base hover:bg-[#ff6b00] hover:text-black transition-all duration-300"
            >
              View Services
            </Link>
            <Link
              href={whatsappLink}
              target="_blank"
              className="w-full sm:w-auto text-center px-5 md:px-6 py-2.5 md:py-3 bg-[#25D366] text-white font-medium text-sm md:text-base hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaWhatsapp />
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Profile Photo - Responsive sizing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          className="relative flex-shrink-0"
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Modern gradient background */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ff6b00]/20 via-[#ff6b00]/5 to-transparent" />
            
            {/* Orange glow effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 bg-[#ff6b00] opacity-20 blur-3xl rounded-full" />
            
            {/* Photo with modern styling */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#ff6b00]/30">
              <Image
                src="/images/profile.png?v=6"
                alt={profile.name}
                fill
                className="object-cover object-top"
                priority
                unoptimized
              />
            </div>
            
            {/* Industrial corner accents */}
            <div className="absolute -top-1.5 md:-top-2 -left-1.5 md:-left-2 w-5 md:w-8 h-5 md:h-8 border-t-2 border-l-2 border-[#ff6b00]" />
            <div className="absolute -top-1.5 md:-top-2 -right-1.5 md:-right-2 w-5 md:w-8 h-5 md:h-8 border-t-2 border-r-2 border-[#ff6b00]" />
            <div className="absolute -bottom-1.5 md:-bottom-2 -left-1.5 md:-left-2 w-5 md:w-8 h-5 md:h-8 border-b-2 border-l-2 border-[#ff6b00]" />
            <div className="absolute -bottom-1.5 md:-bottom-2 -right-1.5 md:-right-2 w-5 md:w-8 h-5 md:h-8 border-b-2 border-r-2 border-[#ff6b00]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
