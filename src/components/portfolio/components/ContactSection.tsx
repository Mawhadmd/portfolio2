import { motion } from "motion/react";
import { IconMail, IconArticle } from "@tabler/icons-react";
import Blurfade from "./ui/Blurfade";
import Link from "next/link";

const ContactSection = () => {
  return (
    <Blurfade>
      <div className="w-full rounded-md flex flex-col sm:flex-row gap-4 justify-center items-center">
        {/* Email Button */}
        <motion.a
          href="mailto:contact@moawad.dev"
          className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-lg tracking-wide text-Text transition-all duration-300 ease-in-out transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-1 -translate-y-1 bg-Secondary/70 group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-Secondary/50 border-2 border-Secondary/60 group-hover:bg-Secondary"></span>
          <span className="relative flex items-center gap-2">
            <IconMail className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
            Let&#39;s Connect
          </span>
        </motion.a>

        {/* Blog Button */}
        <Link href="/blog" passHref target="_blank">
          <motion.div
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-lg tracking-wide text-Text transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-1 -translate-y-1 bg-accent/30 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-accent/20 border-2 border-accent/30 group-hover:bg-accent/30"></span>
            <span className="relative flex items-center gap-2">
              <IconArticle className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
              Read My Blog
            </span>
          </motion.div>
        </Link>
      </div>
    </Blurfade>
  );
};

export default ContactSection;
