import MainCard from "./components/Introduction/LandingCard";
import ProjectsCard from "./components/ProjectsCard";
import Skills from "./components/Skills";
import SpotifyWidget from "./components/SpotifyWidget";
import WorkExperienceCard from "./components/WorkExperienceCard";

const App = () => {
  return (
    <main className="space-y-10 flex flex-col my-20 w-lg px-3 sm:my-50 sm:pb-12 mx-auto">
      <div>
        <MainCard />
        <SpotifyWidget />
      </div>
      <div>
        <Skills />
      </div>
      <ProjectsCard />
      <WorkExperienceCard/>
    </main>
  );
};

export default App;
