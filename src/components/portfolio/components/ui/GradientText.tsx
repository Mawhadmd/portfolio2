"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

// Text with an accent gradient that continuously sweeps across it.
const GradientText = ({ children }: { children: ReactNode }) => {
  return (
    <motion.span
      className="bg-[linear-gradient(90deg,hsl(var(--Text)),hsl(var(--accent)),hsl(var(--Text)))] bg-[length:200%_auto] bg-clip-text font-bold text-transparent"
      animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    >
      {children}
    </motion.span>
  );
};

export default GradientText;
