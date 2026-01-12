"use client";

import { motion } from "framer-motion";

const founders = [
  { name: "Dharam Tiwari", role: "CEO", bio: "25+ years in IT and founder of Kartavya Technology.", photo: "/founders/dharam.jpg", gradient: "from-indigo-500 via-purple-500 to-pink-500" },
  { name: "Sunil", role: "CTO", bio: "Technical lead building scalable AI infrastructure.", photo: "/founders/sunil.jpg", gradient: "from-cyan-400 via-blue-400 to-indigo-500" },
  { name: "Michael", role: "COO", bio: "Operations expert ensuring smooth workflows.", photo: "/founders/michael.jpg", gradient: "from-pink-500 via-purple-500 to-indigo-500" },
];

export default function AboutUs() {
  return (
    <section id="about-us" className="relative max-w-7xl mx-auto px-6 md:px-12 py-28 text-white">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Meet the Team
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-stretch">
        {founders.map((f, i) => (
          <motion.div
            key={f.name}
            className="relative overflow-hidden rounded-3xl p-6 shadow-lg cursor-pointer bg-[#111827]/70 backdrop-blur-md flex-1 flex flex-col items-center text-center gap-4 transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div className={`w-28 h-28 rounded-full bg-gradient-to-tr ${f.gradient} overflow-hidden flex items-center justify-center`}>
              <img src={f.photo} alt={f.name} className="w-full h-full object-cover rounded-full border-4 border-white/20" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold">{f.name}</h3>
              <p className="text-indigo-400 font-medium">{f.role}</p>
              <p className="text-violet-200/80 text-sm mt-2">{f.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
