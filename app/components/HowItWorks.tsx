"use client";

import { motion, Variants } from "framer-motion";

const steps = [
  {
    title: "Sign Up & Setup",
    description: "Create an account and configure your AI workflows quickly.",
    gradient: "from-indigo-500 via-purple-500 to-violet-500",
  },
  {
    title: "Connect Your Tools",
    description: "Integrate popular services and APIs to automate processes.",
    gradient: "from-cyan-400 via-blue-400 to-indigo-500",
  },
  {
    title: "Launch & Monitor",
    description: "Deploy your AI solutions and monitor performance in real time.",
    gradient: "from-pink-500 via-purple-500 to-indigo-500",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 20 } },
  hover: { scale: 1.05, boxShadow: "0 25px 50px rgba(139,92,246,0.25)" },
};

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 text-white"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        How It Works
      </motion.h2>

      <motion.div
        className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-stretch"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {steps.map(({ title, description, gradient }, i) => (
          <motion.div
            key={title}
            className="relative overflow-hidden rounded-3xl p-8 shadow-lg cursor-pointer bg-[#111827]/70 backdrop-blur-md flex-1 flex flex-col gap-6 transition-transform duration-300"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-20 blur-2xl pointer-events-none z-0`}
              animate={{ x: [0, 50, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 flex flex-col gap-2">
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="text-indigo-300 leading-relaxed">{description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
