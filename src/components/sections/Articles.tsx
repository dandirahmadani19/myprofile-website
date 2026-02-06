"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionTitle from "../ui/SectionTitle";
import { profile } from "@/data/profile";
import { staggerContainer, staggerItem } from "../animations/variants";

interface Article {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/api/medium");
        if (response.ok) {
          const data = await response.json();
          // Check if data is an array and has items
          if (Array.isArray(data) && data.length > 0) {
            setArticles(data.slice(0, 6));
          } else {
            // No articles yet - show placeholder
            setArticles([]);
          }
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Show placeholder when no articles
  const showPlaceholder = !loading && !error && articles.length === 0;

  return (
    <section id="articles" className="py-16 md:py-24 px-4 md:px-6 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="ARTICLES" />

        {loading && (
          <div className="flex items-center justify-center py-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full"
            />
          </div>
        )}

        {(error || showPlaceholder) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <span className="text-2xl">✍️</span>
            </div>
            <h3 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
              Articles Coming Soon
            </h3>
            <p className="text-[#888] mb-4 max-w-md mx-auto text-sm">
              I&apos;m working on new articles about software engineering, best
              practices, and lessons learned. Stay tuned!
            </p>
            <Link
              href={profile.medium}
              target="_blank"
              className="inline-flex items-center gap-2 text-accent hover:underline"
            >
              <span>Visit my Medium profile</span>
              <span>→</span>
            </Link>
          </motion.div>
        )}

        {!loading && !error && articles.length > 0 && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {articles.map((article) => (
              <motion.div
                key={article.link}
                variants={staggerItem}
                whileHover={{ y: -5, borderColor: "var(--accent)" }}
                className="border border-[#1a1a1a] bg-gradient-to-br from-[#0a0a0a] to-[#080808] p-4 md:p-6 rounded-lg group"
              >
                <span className="text-accent text-xs font-[family-name:var(--font-jetbrains-mono)] bg-accent/10 px-2 py-0.5 rounded">
                  {new Date(article.pubDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>

                <h3 className="text-base md:text-lg font-bold font-[family-name:var(--font-space-grotesk)] mt-3 mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>

                <p className="text-[#888] text-xs md:text-sm mb-4 line-clamp-3">
                  {article.description.replace(/<[^>]*>/g, "").slice(0, 120)}...
                </p>

                <Link
                  href={article.link}
                  target="_blank"
                  className="text-accent text-sm hover:underline inline-flex items-center gap-1"
                >
                  Read on Medium <span>→</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link
            href={profile.medium}
            target="_blank"
            className="inline-block px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-black transition-all duration-300 rounded-lg"
          >
            View All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
