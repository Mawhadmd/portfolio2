import { Github, Linkedin, Twitter, File } from "lucide-react";
import SocialsButton from './SocialsButton';

const SocialButtons = () => {
    let iconmaps = [
        { src: File, alt: "Resume" },
        { src: Github, alt: "Github" },
        { src: Linkedin, alt: "LinkedIn" },
        { src: Twitter, alt: "Twitter" },
      ];
    return (
      <>
        {iconmaps.map((icon, index) => (
              icon.alt != "Resume"? <SocialsButton
        key={index}
    >
       <icon.src className='mx-auto'/>
      </SocialsButton>:
        <button key={index} className="w-fit flex  gap-2 items-center h-10  py-1 px-4 bg-gray-600 hover:bg-gray-900 transition-all cursor-pointer  rounded-md shadow-md">
        <File/> Resume
      </button>
        ))}
        </>
   
    );
}

export default SocialButtons;
