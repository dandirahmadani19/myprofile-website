"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionTitle from "../ui/SectionTitle";
import { profile } from "@/data/profile";
import { staggerContainer, staggerItem } from "../animations/variants";
import { FaStar, FaCodeBranch } from "react-icons/fa";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

const languageColors: Record<string, string> = {
  Go: "#00ADD8",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Dart: "#0175C2",
  Python: "#3776AB",
  HTML: "#E34F26",
  CSS: "#1572B6",
};

export default function GitHubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("/api/github");
        if (response.ok) {
          const data = await response.json();
          setRepos(data.slice(0, 6));
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="github" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="GITHUB" />

        {loading && (
          <div className="flex items-center justify-center py-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full"
            />
          </div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-[#888] mb-4">Repositories loading...</p>
            <Link
              href={profile.github}
              target="_blank"
              className="text-accent hover:underline"
            >
              Visit my GitHub profile →
            </Link>
          </motion.div>
        )}

        {!loading && !error && repos.length > 0 && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {repos.map((repo) => (
              <motion.div
                key={repo.id}
                variants={staggerItem}
                whileHover={{ y: -5, borderColor: "var(--accent)" }}
                className="border border-[#1a1a1a] bg-[#0a0a0a] p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-accent text-lg">📦</span>
                  <div className="flex items-center gap-4 text-[#888] text-sm">
                    <span className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCodeBranch />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
                  {repo.name}
                </h3>

                <p className="text-[#888] text-sm mb-4 line-clamp-2">
                  {repo.description || "No description"}
                </p>

                <div className="flex items-center justify-between">
                  {repo.language && (
                    <span className="flex items-center gap-2 text-sm text-[#888]">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{
                          backgroundColor:
                            languageColors[repo.language] || "#888",
                        }}
                      />
                      {repo.language}
                    </span>
                  )}

                  <Link
                    href={repo.html_url}
                    target="_blank"
                    className="text-accent text-sm hover:underline"
                  >
                    View Repo →
                  </Link>
                </div>
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
            href={profile.github}
            target="_blank"
            className="inline-block px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-black transition-all duration-300"
          >
            View GitHub Profile
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
