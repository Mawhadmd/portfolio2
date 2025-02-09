import React from 'react';

import resume from "./assets/resume.svg";
import SocialButtons from './SocialButtons';
const TopButtons = () => {
    
    return (
        <div className="flex gap-2 mt-1 h-10 font-medium  items-center">
        <button className="w-fit flex  gap-2 items-center h-10  py-1 px-4 bg-gray-600 hover:bg-gray-900 transition-all cursor-pointer  rounded-md shadow-md">
          <img className="size-4 invert " src={resume} alt="resume" /> Resume
        </button>
        <SocialButtons/> 
      </div>
    );
}

export default TopButtons;
