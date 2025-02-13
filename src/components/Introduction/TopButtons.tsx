import { Github, Linkedin, Twitter, File } from "lucide-react";
import { useState } from "react";

const SocialButtons = () => {
  const [hover,setHover] = useState('');
  let iconmaps = [
    { src: File, alt: "Resume"  },
    { src: Github, alt: "Github", link: 'https://github.com/Mawhadmd'},
    { src: Linkedin, alt: "LinkedIn", link: 'https://www.linkedin.com/in/mhmdawad/' },
    { src: Twitter, alt: "Twitter", link: 'https://x.com/Mawhadmd' },
  ];
  return (
    <div className="flex gap-2 mt-1 h-10 font-medium  items-center">
      {iconmaps.map((icon, index) =>
        icon.alt != "Resume" ? (
            <a href={icon.link} target="_blank" rel="noreferrer" key={index}>
              <button
             
              onMouseEnter={() => setHover(icon.alt)}
              onMouseLeave={() => setHover('')}
              className="size-9 aspect-square group hover:bg-gray-800 cursor-pointer transition-all content-center border rounded-md border-gray-800"
            >
              <icon.src
              className="mx-auto "
              
              fill={
                icon.alt === "Github" && hover === "Github"
                  ? "#181717"
                  : icon.alt === "LinkedIn" && hover === "LinkedIn"
                  ? "#0A66C2"
                  : icon.alt === "Twitter" && hover === "Twitter"
                  ? "#1DA1F2"
                  : ""
              }
              stroke="white"
              strokeWidth={0.6}
              />
            </button>
            </a>
        ) : (
          <button
            key={index}
            className="w-fit flex  gap-2 items-center h-10  py-1 px-4 bg-gray-600 hover:bg-gray-900 transition-all cursor-pointer  rounded-md shadow-md"
          >
            <File /> Resume
          </button>
        )
      )}
    </div>
  );
};

export default SocialButtons;
