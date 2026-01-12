"use client";

import { motion, Variants } from "framer-motion";

const testimonials = [
  {
    name: "Aarav",
    role: "Founder, Finlytics",
    quote:
      "This platform completely transformed how we automate workflows. We saved weeks of manual effort within the first month.",
    gradient: "from-indigo-500 via-purple-500 to-violet-500",
  },
  {
    name: "Sarah",
    role: "Product Manager, NovaTech",
    quote:
      "The real-time analytics are insanely powerful. We finally understand user behavior as it happens.",
    gradient: "from-cyan-400 via-blue-400 to-indigo-500",
  },
  {
    name: "Rohan",
    role: "CTO, ScaleUp AI",
    quote:
      "Seamless integrations and AI-driven insights helped us scale faster than ever. It feels built for startups.",
    gradient: "from-yellow-400 via-orange-400 to-red-500",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
  hover: { scale: 1.05, boxShadow: "0 25px 50px rgba(99,102,241,0.35)" },
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 text-white"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        Loved by Growing Teams
      </motion.h2>

      <motion.div
        className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-stretch flex-wrap"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {testimonials.map(({ name, role, quote, gradient }) => (
          <motion.div
            key={name}
            className="relative overflow-hidden rounded-3xl p-8 shadow-lg cursor-pointer bg-[#111827]/70 backdrop-blur-md flex-1 min-w-[280px] flex flex-col gap-6"
            variants={cardVariants}
            whileHover="hover"
          >
            {/* Animated gradient background */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-20 blur-2xl pointer-events-none z-0`}
              animate={{ x: [0, 50, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <p className="relative z-10 text-indigo-200 leading-relaxed text-lg">
              “{quote}”
            </p>
            <div className="relative z-10 mt-auto flex items-center gap-4">
              <div
                className={`h-12 w-12 rounded-full flex items-center justify-center font-bold bg-gradient-to-tr ${gradient}`}
              >
                {name.charAt(0)}
              </div>
              <div>
                <h4 className="font-semibold text-lg">{name}</h4>
                <p className="text-indigo-300 text-sm">{role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
