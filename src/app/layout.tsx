import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { yearsOfExperience } from "@/data/profile";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dandi Rahmadani | Full Stack Software Engineer",
  description: `Full Stack Software Engineer with ${yearsOfExperience}+ years of experience building end-to-end systems for digital banking, real estate, e-commerce, and CRM products.`,
  keywords: [
    "Full Stack Developer",
    "Golang",
    "Node.js",
    "React",
    "Flutter",
    "Software Engineer",
  ],
  authors: [{ name: "Dandi Rahmadani" }],
  openGraph: {
    title: "Dandi Rahmadani | Full Stack Software Engineer",
    description:
      "Building high-performance backend systems for digital banking & enterprise platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-black text-white`}
      >
        {children}
        <ThemeSwitcher />
      </body>
    </html>
  );
}
