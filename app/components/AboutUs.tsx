"use client";

import { motion } from "framer-motion";

const founders = [
  {
    name: "Dharam Tiwari",
    role: "Co-Founder & CEO",
    bio: "Founder & CEO, Kartavya Technology & 25+ years in IT.",
    photo: "/founders/dharam.jpg",
    gradient: "from-indigo-500 via-purple-500 to-violet-500",
  },
  {
    name: "Sunil",
    role: "Co-Founder & CTO",
    bio: "Technical lead building scalable AI solutions and infrastructure.",
    photo: "/founders/sunil.jpg",
    gradient: "from-cyan-400 via-blue-400 to-indigo-500",
  },
  {
    name: "Michael",
    role: "Co-Founder & COO",
    bio: "Operations expert ensuring smooth workflows and team efficiency.",
    photo: "/founders/michael.jpg",
    gradient: "from-pink-500 via-purple-500 to-indigo-500",
  },
];

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 text-white"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        About Us
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-stretch">
        {founders.map((founder, index) => (
          <motion.div
            key={founder.name}
            className="relative overflow-hidden rounded-3xl p-6 shadow-lg cursor-pointer bg-[#111827]/70 backdrop-blur-md flex-1 flex flex-col items-center text-center gap-4 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(139,92,246,0.25)" }}
          >
            <div
              className={`w-28 h-28 rounded-full bg-gradient-to-tr ${founder.gradient} overflow-hidden flex items-center justify-center`}
            >
              <img
                src={founder.photo}
                alt={founder.name}
                className="w-full h-full object-cover rounded-full border-4 border-white/20"
              />
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold">{founder.name}</h3>
              <p className="text-indigo-400 font-medium">{founder.role}</p>
              <p className="text-violet-200/80 text-sm mt-2">{founder.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
