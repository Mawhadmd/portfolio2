"use client";
import MainCard from "./components/Landing/LandingCard";
import ProjectsCard from "./components/Projects/ProjectsCard";
import Skills from "./components/Skills";
import SpotifyWidget from "@/portfolio/components/SpotifyWidget";
import { FloatingDock } from "./components/FloatingDock";
import { useState } from "react";
import { motion } from "motion/react";
import Blurfade from "./components/ui/Blurfade";
import ContactSection from "./components/ContactSection";
import Link from "next/link";
import CoolBackgroundElements from "./components/ui/CoolBackgroundElements";
import CurrentlyLearning from "./components/CurrentlyLearning";

export type Themetype = "light" | "dark" | "";

const App = () => {
  const [ThemeColor, setThemeColor] = useState<Themetype>("");

  return (
    <div className="min-h-screen bg-Primary relative overflow-hidden">
      {/* Animated Background Elements */}
  <CoolBackgroundElements/>

      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-Secondary/5 to-Secondary/10 pointer-events-none"
        aria-hidden="true"
        role="presentation"
      />  
    <h1 className="hidden  ">Portfolio</h1>
      {/* Main Content */}
      <main
        className="relative text-Text space-y-16 flex flex-col pt-20 pb-32 px-4 max-w-lg mx-auto"
        role="main"
        aria-label="Mohammed Awad's Portfolio"
      >
        {/* Landing Card Section */}
        <Blurfade>
          <section aria-labelledby="landing-section">
            <h2 id="landing-section" className="sr-only">
              Introduction and Personal Information
            </h2>
            <MainCard />
            <Blurfade delay={0.6}>
              <div
                className="mt-8"
                role="region"
                aria-label="Currently playing music"
              >
                <SpotifyWidget ThemeColor={ThemeColor} />
              </div>
            </Blurfade>
          </section>
        </Blurfade>

        {/* Skills Section */}
        <Blurfade delay={0.2}>
          <section className="w-full" aria-labelledby="skills-section">
            <h2 id="skills-section" className="sr-only">
              Technical Skills and Expertise
            </h2>
            <Skills />
          </section>
        </Blurfade>

        {/* Currently Learning Section */}
        <Blurfade delay={0.25}>
         <CurrentlyLearning/>
        </Blurfade>

        {/* Projects Section */}
        <Blurfade delay={0.3}>
          <section aria-labelledby="projects-section">
            <h2 id="projects-section" className="sr-only">
              Featured Projects and Work
            </h2>
            <ProjectsCard />
          </section>
        </Blurfade>

        {/* Contact Section */}
        <Blurfade delay={0.4}>
          <section aria-labelledby="contact-section">
            <h2 id="contact-section" className="sr-only">
              Contact Information and Communication
            </h2>
            <ContactSection />
          </section>
        </Blurfade>
      </main>

      {/* Portfolio Footer */}
      <motion.footer
        className="relative border-t border-border/20 bg-Secondary/5 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        role="contentinfo"
        aria-label="Portfolio footer information"
      >
        <div className="max-w-xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div
              className="space-y-4"
              role="region"
              aria-labelledby="about-heading"
            >
              <h3
                id="about-heading"
                className="text-lg font-semibold text-Text"
              >
                Mohammed Awad
              </h3>
              <p className="text-Muted text-sm leading-relaxed">
                Full-Stack Developer passionate about creating innovative web
                solutions and exploring cutting-edge technologies.
              </p>
              <div
                className="flex items-center gap-2"
                role="status"
                aria-live="polite"
              >
                <div className="relative" aria-hidden="true">
                  <div className="w-2 h-2 bg-green-500 rounded-full z-10 absolute inset-0"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-ping relative"></div>
                </div>
                <span className="text-xs text-Muted">
                  Available for opportunities
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <nav
              className="space-y-4"
              role="navigation"
              aria-labelledby="footer-nav"
            >
              <h3 id="footer-nav" className="text-lg font-semibold text-Text">
                Explore
              </h3>
              <div className="space-y-2" role="list">
                <Link
                  href="#projects"
                  className="block text-Muted hover:text-Text transition-colors text-sm"
                  role="listitem"
                  aria-label="View featured projects"
                >
                  Projects
                </Link>
                <Link
                  href="#skills"
                  className="block text-Muted hover:text-Text transition-colors text-sm"
                  role="listitem"
                  aria-label="View technical skills"
                >
                  Skills
                </Link>
                <Link
                  href="#contact"
                  className="block text-Muted hover:text-Text transition-colors text-sm"
                  role="listitem"
                  aria-label="View contact information"
                >
                  Contact
                </Link>
                <Link
                  href="/blog"
                  className="block text-Muted hover:text-Text transition-colors text-sm"
                  role="listitem"
                  aria-label="Read technical blog posts"
                >
                  Blog
                </Link>
              </div>
            </nav>

            {/* Tech Stack */}
            <div
              className="space-y-4"
              role="region"
              aria-labelledby="tech-stack"
            >
              <h3 id="tech-stack" className="text-lg font-semibold text-Text">
                Built With
              </h3>
              <div
                className="flex flex-wrap gap-2"
                role="list"
                aria-label="Technologies used"
              >
                {["Next.js", "TypeScript", "Tailwind", "Framer Motion"].map(
                  (tech) => (
                    <span
                      key={tech}
                      role="listitem"
                      className="px-2 py-1 text-xs bg-Secondary/20 text-Muted rounded-md border border-border/20"
                      aria-label={`Built with ${tech}`}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 mb-8 border-t border-border/10">
            <p
              className="text-xs text-Muted/70 order-2 sm:order-1 mt-4 sm:mt-0"
              role="contentinfo"
            >
              © {new Date().getFullYear()} Mohammed Awad. Crafted with care and
              lots of coffee ☕
            </p>
            <div
              className="flex items-center gap-2 order-1 sm:order-2"
              aria-hidden="true"
            >
              <div className="w-1 h-1 bg-Muted/30 rounded-full"></div>
              <span className="text-xs text-Muted/50 font-mono">
                ~ portfolio.exe
              </span>
            </div>
          </div>
        </div>
      </motion.footer>

      {/* Floating Navigation Dock */}
      <motion.div
        className="flex items-center justify-center fixed bottom-6 w-full z-50"
        transition={{ delay: 1.2, duration: 0.8, type: "spring", damping: 12 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        role="navigation"
        aria-label="Quick navigation and theme controls"
      >
        <FloatingDock
          ThemeColor={ThemeColor}
          setThemeColor={setThemeColor}
          aria-label="Portfolio navigation and settings"
        />
      </motion.div>
    </div>
  );
};

export default App;
