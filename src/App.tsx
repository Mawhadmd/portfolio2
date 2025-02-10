import { Suspense } from "react";
import MainCard from "./LandingCard";
import SpotifyWidget from "./SpotifyWidget";

const App = () => {
  return (
    <main className="flex flex-col my-20 w-lg px-3 mx-auto">
      <MainCard/>

        <SpotifyWidget />

      
  </main>
  );
};

export default App;
