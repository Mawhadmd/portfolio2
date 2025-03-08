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
export type Themetype = "light" | "dark" | undefined;
const App = () => {
  const [ThemeColor, setThemeColor] = useState<Themetype>();
  useEffect(() => {
   
    if (!localStorage.getItem("theme")) {
      let pref =
        window.matchMedia &&
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light");

      if (pref) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
      }
    } else {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")!
      );
      setThemeColor(localStorage.getItem("theme") as "light" | "dark");
    }
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
