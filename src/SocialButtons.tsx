import React from 'react';
import linkedin from "./assets/linkedin.svg";
import twitter from "./assets/twitter.svg";
import github from "./assets/github.svg";
import SocialsButton from './SocialsButton';

const SocialButtons = () => {
    let iconmaps = [
        { src: github, alt: "Resume" },
        { src: linkedin, alt: "LinkedIn" },
        { src: twitter, alt: "Twitter" },
      ];
    return (
      <>
        {iconmaps.map((icon, index) => (
              <SocialsButton
        key={index}
    >
        <img
          src={icon.src}
          alt={icon.alt}
          className="size-4 invert m-auto "
          style={{ fill: "red" }}
        />
      </SocialsButton>
        ))}
        </>
   
    );
}

export default SocialButtons;
