"use client";

import { motion } from "framer-motion";
import { AnimatedBadge } from "./AnimatedBadge";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative max-w-7xl mx-auto px-6 py-24 md:py-28
                 flex flex-col-reverse md:flex-row items-center gap-14 text-white"
    >
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="mb-4">
          <AnimatedBadge />
        </div>
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl tracking-tight"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Build Your Startup with{" "}
          <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300
                           bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">
            Autonomous AI Agents
          </span>
        </motion.h1>
        <motion.p
          className="mt-4 text-base md:text-lg text-indigo-200/80 max-w-xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Design, deploy, and scale AI-powered workflows that automate
          operations and deliver real business insights.
        </motion.p>
        <motion.div
          className="mt-6 flex flex-col sm:flex-row gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Link
            href="#features"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-indigo-300 font-semibold shadow-lg shadow-purple-600/40 hover:opacity-90 transition"

          >
            Get Started
          </Link>
          <Link
            href="#how-it-works"
            className="px-8 py-4 rounded-xl border border-indigo-500/60
                       text-indigo-300 hover:bg-indigo-700/20 transition"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
      <motion.div
        className="flex-1 relative w-full max-w-xl md:max-w-none"
        initial={{ opacity: 0, y: 18, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.4 }}
      >
        <div
          className="absolute inset-0 rounded-3xl
                     bg-gradient-to-tr from-indigo-500/30 via-purple-500/30 to-pink-500/30
                     blur-3xl -z-10"
        />

        <motion.img
          src="/images/ai-image.png"
          alt="AI automation system visualization"
          className="rounded-3xl shadow-xl w-full h-auto object-cover
                     border border-white/5 bg-[#0b0f1a]"
          animate={{ y: [0, -10, 0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
