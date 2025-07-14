"use client";
import MainCard from "./components/Landing/LandingCard";
import ProjectsCard from "./components/Projects/ProjectsCard";
import Skills from "./components/Skills";
import SpotifyWidget from "@/components/portfolio/components/SpotifyWidget";
import { FloatingDock } from "./components/FloatingDock";
import { useState } from "react";
import { motion } from "motion/react";
import Blurfade from "./components/ui/Blurfade";
import ContactSection from "./components/ContactSection";

import CoolBackgroundElements from "./components/ui/CoolBackgroundElements";
import CurrentlyLearning from "./components/CurrentlyLearning";
import PortfolioFooter from "./components/PortfolioFooter";
import { DistortedGlass } from "./components/ui/Distorted_Glass";

export type Themetype = "light" | "dark" | "";

const App = () => {
  const [ThemeColor, setThemeColor] = useState<Themetype>("");

  return (
    <>
      
  
        <DistortedGlass />
 
      <div className="min-h-screen bg-Primary relative overflow-hidden sm:mt-20">
        {/* Animated Background Elements */}
        <CoolBackgroundElements />

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
                  id="skills"
                  aria-label="Currently playing music"
                >
                  <SpotifyWidget ThemeColor={ThemeColor} />
                </div>
              </Blurfade>
            </section>
          </Blurfade>

          {/* Skills Section */}
          <Blurfade delay={0.2}>
            <section className="w-full" id="projects" aria-labelledby="skills-section">
              <h2 id="skills-section" className="sr-only">
                Technical Skills and Expertise
              </h2>
              <Skills />
            </section>
          </Blurfade>

          {/* Currently Learning Section */}
          <Blurfade delay={0.25}>
            <CurrentlyLearning />
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
              {/* TODO maybe add an interactive button */}
            </section>
          </Blurfade>
        </main>

        {/* Portfolio Footer */}
        <PortfolioFooter></PortfolioFooter>
        {/* Floating Navigation Dock */}
        <motion.div
          className="flex items-center justify-center fixed bottom-6 w-full z-50"
          transition={{
            delay: 1.2,
            duration: 0.8,
            type: "spring",
            damping: 12,
          }}
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
    </>
  );
};

export default App;
