import MainCard from "./components/Introduction/LandingCard";
import ProjectsCard from "./components/ProjectsCard";
import Skills from "./components/Skills";
import SpotifyWidget from "./components/SpotifyWidget";
import { FloatingDock } from "./components/FloatingDock";
import WorkExperienceCard from "./components/WorkExperienceCard";
import { useEffect, useState } from "react";

const App = () => {
  const [ThemeColor, setThemeColor] = useState<"light" | "dark">(
    (localStorage.getItem('theme') as "light" | "dark") ||
    (window.matchMedia && (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"))  
  );
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }
    } else {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")!
      );
    }
  }, []);
  return (
    <>
      <main className="  text-Text space-y-10 flex flex-col my-20 w-lg px-3 sm:my-50 sm:pb-12 mx-auto">
        <div>
          <MainCard />
          <SpotifyWidget ThemeColor={ThemeColor} />
        </div>
        <div className=" h-full w-full">
          <Skills />
        </div>
        <ProjectsCard />
        <WorkExperienceCard />
      </main>

      <FloatingDock ThemeColor={ThemeColor} setThemeColor={setThemeColor} />
    </>
  );
};

export default App;
