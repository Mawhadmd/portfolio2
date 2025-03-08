import React from "react";
import MainApp from "./MainApp";
import { DistortedGlass } from "./components/ui/Distorted_Glass";

const App = () => {
  return (
    <>
      <div className="sticky top-0 z-50 w-full hidden sm:flex ">
        <DistortedGlass />
      </div>
      <MainApp />
    </>
  );
};

export default App;
