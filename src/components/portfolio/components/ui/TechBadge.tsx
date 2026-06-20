"use client";
import React from "react";
import { motion } from "motion/react";

const Techbadge = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.span
      whileHover={{ scale: 1.12, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className="inline-block cursor-default rounded-md border border-border px-2.5 py-0.5 text-[10px] font-medium transition-colors duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_14px_-2px_hsl(var(--accent))]"
    >
      {children}
    </motion.span>
  );
};

export default Techbadge;
