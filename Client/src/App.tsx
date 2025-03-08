"use client";
import MainCard from "./components/Landing/LandingCard";
import ProjectsCard from "./components/Projects/ProjectsCard";
import Skills from "./components/Skills";
import SpotifyWidget from "./components/SpotifyWidget";
import { FloatingDock } from "./components/FloatingDock";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Blurfade from "./components/ui/Blurfade";
import { DistortedGlass } from "./components/ui/Distorted_Glass";
import ThemeControl from "./lib/ThemeControl";
export type Themetype = "light" | "dark" | '';
const App = () => {
  const [ThemeColor, setThemeColor] = useState<Themetype>('');
  
  useEffect(() => {
    setThemeColor(ThemeControl())
  }, []);

  return (
    <>
      <div className="sticky top-0 z-50 w-full hidden sm:flex ">
        <DistortedGlass />
      </div>
      <main className=" relative text-Text space-y-10 flex flex-col my-20 sm:px-3 w-sm sm:w-lg sm:pb-12 mx-auto">
        <Blurfade>
          <MainCard />
          <Blurfade delay={0.6}>
            <SpotifyWidget ThemeColor={ThemeColor} />
          </Blurfade>
        </Blurfade>
        <Blurfade>
          <div className=" h-full w-full">
            <Skills />
          </div>
        </Blurfade>
        <Blurfade>
          <ProjectsCard />
        </Blurfade>
        {/* <Blurfade>
          <WorkExperienceCard />
        </Blurfade> */}
      </main>
      <motion.div
        className="flex items-center justify-center fixed bottom-3 w-full"
        transition={{ delay: 1, duration: 1, type: "spring", damping: 10 }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <FloatingDock ThemeColor={ThemeColor} setThemeColor={setThemeColor} />
      </motion.div>
    </>
  );
};

export default App;
