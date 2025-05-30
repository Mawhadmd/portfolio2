// MOTION PRIMITIVES or Aceternity
import {
  MorphingDialogClose,
  MorphingDialogContent,
  MorphingDialogDescription,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogTitle,
} from "../ui/morphing-dialog";
import Markdown from "react-markdown"; // Adjust the import path as necessary
import { ProjectType } from "./ProjectsCard";

import Techbadge from "../ui/Skillsbadge";
import ContainerButton from "./ProjectContainerButton";
const ProjectContainer = ({ project }: { project: ProjectType }) => {
  return (
    <MorphingDialogContent
      style={{
        borderRadius: "12px",
      }}
      className="relative h-auto w-[500px] border border-border text-Text  bg-Primary"
    >
      <div className="overflow-y-auto h-[90vh]">
        {" "}
        <div className="relative p-6 space-y-4">
          <div className="flex justify-center pt-10 pb-6">
            <MorphingDialogImage
              src={project.image || ""}
              alt={project.title}
              className="h-auto w-full object-cover object-top"
            />
          </div>
          <div>
            <time className="text-Muted text-xs text-muted-foreground">
              {project.dates}
            </time>
            <MorphingDialogTitle className="font-semibold leading-none text-Text">
              {project.title}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="font-light">
              <p className="text-sm font-normal mt-2">Tech stack: </p>
              {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-1">
                  {project.technologies?.map((tag) => (
                    <Techbadge key={tag}>{tag}</Techbadge>
                  ))}
                </div>
              )}
            </MorphingDialogSubtitle>
          </div>
          <MorphingDialogDescription>
            <hr className="my-2 text-gray-700" />
            <Markdown className="prose  max-w-full whitespace-pre-wrap font-sans text-sm text-Muted dark:prose-invert prose-headings:mt-4 prose-headings:mb-2 prose-p:my-2 prose-ul:my-2">
              {project.description}
            </Markdown>
            <hr className="my-2 text-gray-700" />
          </MorphingDialogDescription>
          {project.links && project.links.length > 0 && (
            <div className=" flex gap-2 justify-center items-center">
              {project.links?.map((link, idx) => (
                <ContainerButton
                  variant={link.type === "Source" ? "Source" : "Web"}
                  link={link.href}
                  key={idx}
                >
                  <div className="flex items-center gap-1">
                    <span>{link.icon}</span>
                    <div
                      className="font-mono text-sm"
                      // duration={1.2}
                      // characterSet=". "
                    >
                      {link.type}
                    </div>
                  </div>
                </ContainerButton>
              ))}
            </div>
          )}
        </div>
      </div>
      <MorphingDialogClose className="text-zinc-500" />
    </MorphingDialogContent>
  );
};

export default ProjectContainer;
