import { motion } from "framer-motion";

export function AnimatedBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative inline-flex items-center gap-2
      rounded-full px-5 py-2 text-sm
      border border-white/10 bg-white/5
      text-neutral-200 backdrop-blur"
    >
      {/* Shimmer overlay */}
      <motion.span
        className="absolute inset-0 rounded-full
        bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{ x: ["-120%", "120%"] }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Glow pulse */}
      <motion.span
        className="absolute inset-0 rounded-full
        bg-indigo-500/20 blur-lg -z-10"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <span className="relative z-10">⚡ Autonomous AI Agents Platform</span>
    </motion.div>
  );
}
