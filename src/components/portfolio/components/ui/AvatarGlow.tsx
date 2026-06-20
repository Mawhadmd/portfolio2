"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

// Wraps the profile picture with a slowly-rotating accent glow ring and a
// springy hover scale.
const AvatarGlow = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative size-20">
      <motion.div
        aria-hidden="true"
        className="absolute -inset-[3px] rounded-full opacity-70 blur-[2px]"
        style={{
          background:
            "conic-gradient(from 0deg, transparent, hsl(var(--accent)), transparent 40%, hsl(var(--accent)) 75%, transparent)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        whileHover={{ scale: 1.06 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        className="relative aspect-square size-20 flex items-center justify-center overflow-hidden rounded-full bg-Primary"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AvatarGlow;
