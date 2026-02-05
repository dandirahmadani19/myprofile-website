"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionTitle from "../ui/SectionTitle";
import { profile, freelanceServices } from "@/data/profile";
import { staggerContainer, staggerItem } from "../animations/variants";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Services() {
  const whatsappLink = `https://wa.me/${profile.whatsapp}?text=Hi%20Dandi,%20I'd%20like%20to%20discuss%20a%20project%20with%20you!`;

  return (
    <section id="services" className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-[#0a0a0a] to-black">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="SERVICES" />

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-16"
        >
          {freelanceServices.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-4 md:p-6 border border-[#1a1a1a] bg-[#0a0a0a]"
            >
              <span className="text-2xl md:text-4xl font-bold text-[#ff6b00] font-[family-name:var(--font-space-grotesk)]">
                {stat.value}
              </span>
              <p className="text-xs md:text-sm text-[#888] mt-1 md:mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="text-[#ff6b00] text-xs md:text-sm font-[family-name:var(--font-jetbrains-mono)] mb-2 block">
            {freelanceServices.subheadline}
          </span>
          <h3 className="text-xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-3 md:mb-4">
            {freelanceServices.headline}
          </h3>
          <p className="text-sm md:text-base text-[#888] max-w-2xl mx-auto px-2">
            {freelanceServices.description}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12"
        >
          {freelanceServices.services.map((service) => (
            <motion.div
              key={service.title}
              variants={staggerItem}
              whileHover={{ y: -5, borderColor: "#ff6b00" }}
              className="border border-[#1a1a1a] bg-[#0a0a0a] p-4 md:p-6 text-center"
            >
              <span className="text-3xl md:text-4xl mb-3 md:mb-4 block">{service.icon}</span>
              <h4 className="text-base md:text-lg font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
                {service.title}
              </h4>
              <p className="text-xs md:text-sm text-[#888]">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Link
              href={whatsappLink}
              target="_blank"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-[#25D366] text-white font-bold text-sm md:text-lg hover:bg-[#128C7E] transition-all duration-300"
            >
              <FaWhatsapp size={20} />
              <span>Let&apos;s Discuss Your Project</span>
            </Link>
            <Link
              href={`mailto:${profile.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 border-2 border-[#ff6b00] text-[#ff6b00] font-bold text-sm md:text-lg hover:bg-[#ff6b00] hover:text-black transition-all duration-300"
            >
              <FaEnvelope size={18} />
              <span>Send Email</span>
            </Link>
          </div>
          <p className="text-[#666] text-xs md:text-sm mt-3 md:mt-4">
            Available for remote work worldwide • Response within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}
