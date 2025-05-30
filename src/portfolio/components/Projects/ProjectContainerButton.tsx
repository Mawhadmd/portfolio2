import React from "react";

const ContainerButton = ({
  children,
  variant,
  link,
}: {
  children: React.ReactNode;
  variant: "Source" | "Web";
  link: string;
}) => {
  return (
    <a
      href={link}
      className="p-2 rounded-lg w-1/2 shadow-[0px_1px_5px_rgba(0,0,0,0.5)]  transition  border-border items-center flex justify-center"
      target="_blank"
      //Styles in css file
      id={variant == "Source" ? "Github_Button" : "Website_Button"}
    >
      {children}
    </a>
  );
};

export default ContainerButton;
