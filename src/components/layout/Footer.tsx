"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { profile } from "@/data/profile";
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaWhatsapp,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappLink = `https://wa.me/${profile.whatsapp}?text=Hi%20Dandi,%20I%20found%20your%20profile%20and%20would%20like%20to%20connect!`;

  return (
    <footer className="py-8 md:py-12 px-4 md:px-6 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold font-[family-name:var(--font-space-grotesk)] mb-1 md:mb-2">
              {profile.name}
            </h3>
            <p className="text-[#666] text-xs md:text-sm">{profile.title}</p>
            <p className="text-[#888] text-xs md:text-sm mt-1 md:mt-2">
              📍 {profile.location} • 📱 {profile.phone}
            </p>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <Link
              href={profile.github}
              target="_blank"
              className="text-lg md:text-xl text-[#888] hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </Link>
            <Link
              href={profile.linkedin}
              target="_blank"
              className="text-lg md:text-xl text-[#888] hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
            <Link
              href={profile.medium}
              target="_blank"
              className="text-lg md:text-xl text-[#888] hover:text-accent transition-colors"
              aria-label="Medium"
            >
              <FaMedium />
            </Link>
            <Link
              href={whatsappLink}
              target="_blank"
              className="text-lg md:text-xl text-[#888] hover:text-[#25D366] transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </Link>
            <Link
              href={`mailto:${profile.email}`}
              className="text-lg md:text-xl text-[#888] hover:text-accent transition-colors"
              aria-label="Email"
            >
              <FaEnvelope />
            </Link>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 md:p-3 border border-accent text-accent hover:bg-accent hover:text-black transition-all duration-300"
            aria-label="Back to top"
          >
            <FaArrowUp />
          </motion.button>
        </div>

        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-[#1a1a1a] text-center">
          <p className="text-[#666] text-xs md:text-sm">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
