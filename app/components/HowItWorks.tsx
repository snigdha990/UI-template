"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Sign Up & Configure",
    description: "Create your account and set up your AI workflows in minutes.",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
  },
  {
    title: "Integrate Apps",
    description: "Connect popular tools and APIs effortlessly.",
    gradient: "from-cyan-400 via-blue-400 to-indigo-500",
  },
  {
    title: "Launch & Monitor",
    description: "Deploy AI agents and track their performance live.",
    gradient: "from-pink-500 via-purple-500 to-indigo-500",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative max-w-7xl mx-auto px-6 md:px-12 py-28 text-white">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        How It Works
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map(({ title, description, gradient }, i) => (
          <motion.div
            key={title}
            className="relative overflow-hidden rounded-3xl p-6 shadow-lg cursor-pointer bg-[#111827]/70 backdrop-blur-md flex flex-col gap-4 transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-20 blur-2xl pointer-events-none z-0`}
            />
            <div className="relative z-10 flex flex-col gap-2">
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="text-indigo-300 leading-relaxed">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
