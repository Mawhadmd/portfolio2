import { IconBrandGithub, IconBrandX, IconFile } from "@tabler/icons-react";
import { Linkedin } from "lucide-react";
import { useState } from "react";

const SocialButtons = () => {
  const [hover, setHover] = useState("");
  let iconmaps = [
    { src: IconFile, alt: "Resume" },
    {
      src: IconBrandGithub,
      alt: "Github",
      link: "https://github.com/Mawhadmd",
    },
    {
      src: Linkedin,
      alt: "LinkedIn",
      link: "https://www.linkedin.com/in/mhmdawad/",
    },
    { src: IconBrandX, alt: "Twitter", link: "https://x.com/Mawhadmd" },
  ];
  return (
    <div className="flex gap-2 mt-1 h-10 font-medium justify-start  items-center">
      {iconmaps.map((icon) =>
        icon.alt != "Resume" ? (
          <a href={icon.link} target="_blank" rel="noreferrer" key={icon.alt}>
            <button
              onMouseEnter={() => setHover(icon.alt)}
              onMouseLeave={() => setHover("")}
              className="p-2 aspect-square group hover:bg-Secondary cursor-pointer transition-all  border rounded-md  border-gray-800"
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
            className="w-fit flex  gap-2 items-center h-10  py-1 px-4 bg-border hover:bg-Text/60 hover:text-Primary transition-all cursor-pointer  rounded-md shadow-md"
          >
            <IconFile /> Resume
          </button>
          </a>
        )
      )}
    </div>
  );
};

export default SocialButtons;
