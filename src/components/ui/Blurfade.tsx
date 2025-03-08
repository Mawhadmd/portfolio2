import { motion } from "motion/react";
import { ReactNode } from "react";
type BlurFadeProps = {
    children: ReactNode;
    delay?: number;
    duration?: number;
    onlyBlur?: boolean;
    oppositeDirection?: boolean
  }
const Blurfade = ({
  children,
  delay = 0,
  duration = 0.8,
  onlyBlur = false,
  oppositeDirection = false
}: BlurFadeProps) => {
  return (
    <motion.div
      initial={!onlyBlur ? { y:oppositeDirection? 0: 20,x:oppositeDirection? 50: 0, opacity: 0, filter: "blur(8px)" }:{filter: "blur(8px)" }}
      whileInView={!onlyBlur ? { y: 0,x:0, opacity: 1, filter: "blur(0px)" }: {filter: "blur(0px)" }}
      transition={{ duration: duration, delay: delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default Blurfade;
