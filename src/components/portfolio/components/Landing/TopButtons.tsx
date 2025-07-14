'use client'
import { useState } from "react";
import { ICONMAPS } from "@/lib/constants";
import Blurfade from "../ui/Blurfade";
import { IconFile } from "@tabler/icons-react";

const SocialButtons = () => {
  const [hover, setHover] = useState("");
  
  return (
    <div className="flex gap-2 mt-1 h-10 font-medium justify-start  items-center">
      {ICONMAPS.map((icon,index) =>
          <Blurfade  key={index} delay={index * 0.2 + 0.8} oppositeDirection={true} >
        {    icon.alt != "Resume" ? (
          <a href={icon.link} aria-label={icon.alt} target="_blank" rel="noreferrer" key={icon.alt}>
            <button
              onMouseEnter={() => setHover(icon.alt)}
              onMouseLeave={() => setHover("")}
              aria-label={icon.alt + ' Profile link button'}
              className="p-2 aspect-square group hover:bg-Secondary cursor-pointer transition-all  border rounded-md  border-border"
            >
              <icon.src
                className="mx-auto "
                fill={
                  icon.alt === "Github" && hover === "Github"
                    ? "#181717"
                    : icon.alt === "LinkedIn" && hover === "LinkedIn"
                    ? "#0A66C2"
                    : icon.alt === "Twitter" && hover === "Twitter"
                    ? "#181717"
                    : ""
                }
                stroke="white"
                strokeWidth={icon.alt == "LinkedIn" ? 0.7 : 1}
              />
            </button>
          </a>
        ) : (
          <a key={icon.alt} href="https://docs.google.com/document/d/1P97pfa8Cv2oR2PBpD1QVbEBvM-B2_DTPOjAHs96Fryg/edit?usp=sharing" target="_blank">
            <button
            key={icon.alt}
            className="w-fit flex  gap-2 items-center h-10  py-1 px-4 bg-Secondary hover:bg-Text/50 hover:text-Primary transition-all cursor-pointer  rounded-md shadow-md"
          >
            <IconFile /> Resume
          </button>
          </a>
        )}
        </Blurfade >
      )}
    </div>
  );
};

export default SocialButtons;
