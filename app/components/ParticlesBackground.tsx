// "use client";

// import { useEffect, useState } from "react";
// import { motion, useReducedMotion } from "framer-motion";

// type Particle = {
//   top: number;
//   left: number;
//   size: number;
//   color: string;
//   xMove: number;
//   yMove: number;
// };

// export default function ParticlesBackground() {
//   const prefersReducedMotion = useReducedMotion();
//   const [particles, setParticles] = useState<Particle[]>([]);
//   const [tinyParticles, setTinyParticles] = useState<Particle[]>([]);

//   useEffect(() => {
//     if (prefersReducedMotion) return;

//     // Big particles
//     setParticles(
//       Array.from({ length: 40 }, () => ({
//         top: Math.random() * 100,
//         left: Math.random() * 100,
//         size: 4 + Math.random() * 8,
//         color: `hsla(${Math.floor(Math.random() * 360)}, 80%, 65%, 0.8)`,
//         xMove: (Math.random() - 0.5) * 120,
//         yMove: (Math.random() - 0.5) * 120,
//       }))
//     );

//     // Tiny floating dust
//     setTinyParticles(
//       Array.from({ length: 70 }, () => ({
//         top: Math.random() * 100,
//         left: Math.random() * 100,
//         size: 1 + Math.random() * 3,
//         color: `hsla(${Math.floor(Math.random() * 360)}, 80%, 70%, 0.5)`,
//         xMove: (Math.random() - 0.5) * 40,
//         yMove: (Math.random() - 0.5) * 40,
//       }))
//     );
//   }, [prefersReducedMotion]);

//   if (prefersReducedMotion) return null;

//   return (
//     <div className="fixed inset-0 z-0 pointer-events-none select-none">
//       {particles.map((p, i) => (
//         <motion.span
//           key={i}
//           className="absolute rounded-full"
//           style={{
//             top: `${p.top}%`,
//             left: `${p.left}%`,
//             width: `${p.size}px`,
//             height: `${p.size}px`,
//             background: p.color,
//             filter: "blur(4px)",
//           }}
//           animate={{
//             x: [0, p.xMove, 0, -p.xMove, 0],
//             y: [0, p.yMove, 0, -p.yMove, 0],
//             opacity: [0.5, 0.85, 0.5],
//           }}
//           transition={{
//             duration: 30 + Math.random() * 20,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       ))}

//       {tinyParticles.map((p, i) => (
//         <motion.span
//           key={`tiny-${i}`}
//           className="absolute rounded-full"
//           style={{
//             top: `${p.top}%`,
//             left: `${p.left}%`,
//             width: `${p.size}px`,
//             height: `${p.size}px`,
//             background: p.color,
//             filter: "blur(1.5px)",
//           }}
//           animate={{
//             x: [0, p.xMove, 0, -p.xMove, 0],
//             y: [0, p.yMove, 0, -p.yMove, 0],
//             opacity: [0.3, 0.6, 0.3],
//           }}
//           transition={{
//             duration: 25 + Math.random() * 20,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       ))}

//       {/* Large gradient blobs */}
//       <motion.div
//         className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 opacity-35 blur-3xl"
//         animate={{ x: [0, 50, 0, -50, 0], y: [0, 30, 0, -30, 0] }}
//         transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute -bottom-40 right-0 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 opacity-30 blur-3xl"
//         animate={{ x: [0, -40, 0, 40, 0], y: [0, 20, 0, -20, 0] }}
//         transition={{ duration: 70, repeat: Infinity, ease: "easeInOut" }}
//       />
//     </div>
//   );
// }
// ./components/ParticlesBackground.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Particle = {
  top: number;
  left: number;
  size: number;
  color: string;
  xMove: number;
  yMove: number;
};

export default function ParticlesBackground() {
  const prefersReducedMotion = useReducedMotion();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const generated: Particle[] = Array.from({ length: 60 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 3 + Math.random() * 6,
      color: `hsla(${Math.floor(Math.random() * 280 + 160)}, 70%, 75%, 0.65)`,
      xMove: (Math.random() - 0.5) * 150,
      yMove: (Math.random() - 0.5) * 150,
    }));

    setParticles(generated);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none select-none">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            filter: "blur(3px)",
          }}
          animate={{
            x: [0, p.xMove, 0, -p.xMove, 0],
            y: [0, p.yMove, 0, -p.yMove, 0],
            opacity: [0.3, 0.85, 0.3],
          }}
          transition={{
            duration: 45 + Math.random() * 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Large gradient blobs for depth */}
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
