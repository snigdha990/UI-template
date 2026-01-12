"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Particle = { top: number; left: number; size: number; color: string; xMove: number; yMove: number; };

export default function ParticlesBackground() {
  const prefersReducedMotion = useReducedMotion();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    setParticles(Array.from({ length: 60 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 3 + Math.random() * 6,
      color: `hsla(${Math.floor(Math.random() * 280 + 160)}, 70%, 75%, 0.65)`,
      xMove: (Math.random() - 0.5) * 150,
      yMove: (Math.random() - 0.5) * 150,
    })));
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none select-none">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{ top: `${p.top}%`, left: `${p.left}%`, width: `${p.size}px`, height: `${p.size}px`, background: p.color, filter: "blur(3px)" }}
          animate={{ x: [0, p.xMove, 0, -p.xMove, 0], y: [0, p.yMove, 0, -p.yMove, 0], opacity: [0.3, 0.85, 0.3] }}
          transition={{ duration: 45 + Math.random() * 25, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 opacity-30 blur-3xl"
        animate={{ x: [0, 40, 0, -40, 0], y: [0, 30, 0, -30, 0] }}
        transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 right-0 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 opacity-25 blur-3xl"
        animate={{ x: [0, -30, 0, 30, 0], y: [0, 15, 0, -15, 0] }}
        transition={{ duration: 70, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
