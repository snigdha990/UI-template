"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[calc(100vh-96px)] flex items-center justify-center px-6 pt-24 md:pt-32"
    >
      <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center gap-6">
        <motion.span
          initial={{ scale: 0.95, opacity: 0.85 }}
          animate={{ scale: [0.95, 1.1, 0.95], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="px-6 py-2 rounded-full text-sm border border-purple-400 bg-purple-900/30 text-purple-300 shadow-[0_0_25px_rgba(139,92,246,0.6)]"
        >
          🚀 Built for modern startups
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500"
        >
          Launch Your{" "}
          <span className="bg-gradient-to-r from-purple-400 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
            AI
          </span>{" "}
          Product
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.2 }}
          className="mt-6 max-w-xl text-lg md:text-xl text-violet-200/80"
        >
          Build smarter, scale faster, and bring your AI to life with a
          production-ready Next.js template.
        </motion.p>
        <motion.a
          href="#features"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="relative mt-12 px-12 py-4 rounded-full font-semibold text-white overflow-hidden bg-gradient-to-r from-indigo-600 to-violet-600 shadow-lg shadow-violet-500/40"
        >
          <motion.span
            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 opacity-60"
            style={{ backgroundSize: "200% 100%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <span className="relative z-10">Get Started</span>
        </motion.a>
      </div>
    </section>
  );
}
