"use client";
import { motion, useScroll, useSpring } from "motion/react";

// Thin accent bar pinned to the top that fills as the page scrolls.
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-accent via-accent to-Text/50"
    />
  );
};

export default ScrollProgress;
