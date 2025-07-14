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
  const type = variant == "Source" ? "bg-Primary hover:bg-Secondary/20 border border-border shadow-sm  shadow-muted text-Text" : "bg-Secondary/80 shadow-sm  shadow-muted text-Text hover:bg-Secondary";
  return (
    <a
      href={link}
      className={`p-2 rounded-lg w-1/2 shadow-[0px_1px_5px_rgba(0,0,0,0.5)]  transition  border-border items-center flex justify-center ${type}`}
      target="_blank"
      //Styles in css file
   
    >
      {children}
    </a>
  );
};

export default ContainerButton;
