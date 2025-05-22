import { motion } from "motion/react";
import { IconMail } from "@tabler/icons-react";
import Blurfade from "./ui/Blurfade";

const ContactSection = () => {
  return (
    <Blurfade>
      <div className="w-full rounded-md flex justify-center">
        <motion.a
          href="mailto:contact@moawad.dev"
          className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-lg tracking-wide text-Text transition-all duration-300 ease-in-out transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-1 -translate-y-1 bg-gray-400/30 group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-gray-400/20 border-2 border-gray-400/30 group-hover:bg-gray-400/30"></span>
          <span className="relative flex items-center gap-2">
            <IconMail className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
            Let&#39;s Connect
          </span>
        </motion.a>
      </div>
    </Blurfade>
  );
};

export default ContactSection;
