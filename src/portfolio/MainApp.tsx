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

export type Themetype = "light" | "dark" | "";
const App = () => {
  const [ThemeColor, setThemeColor] = useState<Themetype>("");
  return (
    <div className="min-h-screen bg-Primary relative overflow-hidden">
      {" "}
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Floating Orbs with Enhanced Gradients */}
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/3 w-48 h-48 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/8 to-cyan-500/8 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Small Accent Orbs */}
        <div className="absolute top-1/5 left-2/3 w-32 h-32 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/5 left-1/2 w-24 h-24 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full blur-2xl animate-float-delayed"></div>

        {/* Floating Tech Icons */}
        <div className="absolute top-1/5 right-1/5 opacity-15 animate-float">
          <div className="text-2xl">⚛️</div>
        </div>
        <div className="absolute bottom-1/4 left-1/5 opacity-15 animate-float-delayed">
          <div className="text-xl">🚀</div>
        </div>
        <div className="absolute top-3/5 right-1/3 opacity-15 animate-float">
          <div className="text-lg">💻</div>
        </div>
        <div className="absolute bottom-1/5 right-2/3 opacity-15 animate-float-delayed">
          <div className="text-xl">⚡</div>
        </div>
        <div className="absolute top-1/3 right-1/6 opacity-10 animate-float">
          <div className="text-lg">🎨</div>
        </div>
        <div className="absolute bottom-2/5 left-1/6 opacity-10 animate-float-delayed">
          <div className="text-lg">🌟</div>
        </div>

        {/* Enhanced Geometric Shapes */}
        <div className="absolute top-1/3 left-1/2 w-16 h-16 border border-Text/8 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/2 right-1/6 w-12 h-12 border-2 border-accent/20 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-accent/10 rotate-12 animate-bounce-slow"></div>
        <div className="absolute top-1/6 right-1/3 w-6 h-20 border-l-2 border-Text/5 rotate-12 animate-float"></div>
        <div className="absolute bottom-1/6 left-2/3 w-20 h-1 bg-gradient-to-r from-transparent via-accent/10 to-transparent animate-pulse delay-1500"></div>

        {/* Enhanced Code-like Elements */}
        <div className="absolute top-1/6 left-1/3 opacity-8 font-mono text-xs animate-float">
          <span className="text-accent/30">&lt;</span>code
          <span className="text-accent/30">/&gt;</span>
        </div>
        <div className="absolute bottom-1/3 right-1/5 opacity-8 font-mono text-xs animate-float-delayed">
          <span className="text-accent/30">{"{"}</span>...
          <span className="text-accent/30">{"}"}</span>
        </div>
        <div className="absolute top-2/5 left-1/5 opacity-6 font-mono text-xs animate-float">
          <span className="text-accent/20">const</span> magic ={" "}
          <span className="text-accent/20">true</span>
        </div>
        <div className="absolute bottom-2/3 right-1/4 opacity-6 font-mono text-xs animate-float-delayed">
          <span className="text-accent/20">npm</span> run{" "}
          <span className="text-accent/20">dev</span>
        </div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(var(--Text), 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(var(--Text), 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Animated Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent animate-pulse delay-3000"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/5 to-transparent animate-pulse delay-4000"></div>
      </div>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-Secondary/5 to-Secondary/10 pointer-events-none"></div>
      <main className="relative text-Text space-y-16 flex flex-col pt-20 pb-32 px-4 max-w-lg mx-auto">
        <Blurfade>
          <MainCard />
          <Blurfade delay={0.6}>
            <div className="mt-8">
              <SpotifyWidget ThemeColor={ThemeColor} />
            </div>
          </Blurfade>
        </Blurfade>

        <Blurfade delay={0.2}>
          <div className="w-full">
            <Skills />
          </div>
        </Blurfade>

        <Blurfade delay={0.3}>
          <ProjectsCard />
        </Blurfade>

        <Blurfade delay={0.4}>
          <ContactSection />
        </Blurfade>

        {/* <Blurfade delay={0.5}>
          <WorkExperienceCard />
        </Blurfade> */}
      </main>
      {/* Portfolio Footer */}
      <motion.footer
        className="relative border-t border-border/20 bg-Secondary/5 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="max-w-xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {" "}
            {/* About Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-Text">Mohammed Awad</h3>
              <p className="text-Muted text-sm leading-relaxed">
                Full-Stack Developer passionate about creating innovative web
                solutions and exploring cutting-edge technologies.
              </p>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-2 h-2 bg-green-500 rounded-full z-10 absolute inset-0"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-ping relative"></div>
                </div>
                <span className="text-xs text-Muted">
                  Available for opportunities
                </span>
              </div>
            </div>
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-Text">Explore</h3>
              <div className="space-y-2">
                <Link
                  href="#projects"
                  className="block text-Muted hover:text-Text transition-colors text-sm"
                >
                  Projects
                </Link>
                <Link
                  href="#skills"
                  className="block text-Muted hover:text-Text transition-colors text-sm"
                >
                  Skills
                </Link>
                <Link
                  href="#contact"
                  className="block text-Muted hover:text-Text transition-colors text-sm"
                >
                  Contact
                </Link>
                <Link
                  href="/blog"
                  className="block text-Muted hover:text-Text transition-colors text-sm"
                >
                  Blog
                </Link>
              </div>
            </div>
            {/* Tech Stack */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-Text">Built With</h3>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Tailwind", "Framer Motion"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-Secondary/20 text-Muted rounded-md border border-border/20"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>{" "}
            </div>
          </div>
          {/* Bottom Bar */}{" "}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 mb-8 border-t border-border/10">
            <p className="text-xs text-Muted/70 order-2 sm:order-1 mt-4 sm:mt-0">
              © {new Date().getFullYear()} Mohammed Awad. Crafted with care and
              lots of coffee ☕
            </p>
            <div className="flex items-center gap-2 order-1 sm:order-2">
              <div className="w-1 h-1 bg-Muted/30 rounded-full"></div>
              <span className="text-xs text-Muted/50 font-mono">
                ~ portfolio.exe
              </span>
            </div>
          </div>
        </div>
      </motion.footer>
      <motion.div
        className="flex items-center justify-center fixed bottom-6 w-full z-50"
        transition={{ delay: 1.2, duration: 0.8, type: "spring", damping: 12 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <FloatingDock ThemeColor={ThemeColor} setThemeColor={setThemeColor} />
      </motion.div>
    </div>
  );
};

export default App;
