import MainCard from "./components/Introduction/LandingCard";
import ProjectsCard from "./components/ProjectsCard";
import Skills from "./components/Skills";
import SpotifyWidget from "./components/SpotifyWidget";
import { FloatingDock } from "./components/FloatingDock";
import WorkExperienceCard from "./components/WorkExperienceCard";
import { useEffect } from "react";


const App = () => {
    useEffect(() => {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute("data-theme", 'dark');
      }else{
      document.documentElement.setAttribute("data-theme", 'light');
    }
  
    }, []);
  return (
    <>
      <main  className="  text-Text space-y-10 flex flex-col my-20 w-lg px-3 sm:my-50 sm:pb-12 mx-auto">
        <div>
          <MainCard />
          <SpotifyWidget />
        </div>
        <div className=" h-full w-full">
          <Skills />
        </div>
        <ProjectsCard />
        <WorkExperienceCard />
      </main>


          <FloatingDock />
 

    </>
  );
};

export default App;
