import { PROJECTS } from "../lib/constants";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
} from "./ui/morphing-dialog";
import ProjectTile from "./ProjectTile";
import ProjectContainer from "./ProjectContainer";

export type ProjectType = {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  links: {
    type: string;
    href: string;
    icon: JSX.Element;
  }[];
  image: string;
};

const ProjectsCard = () => {
  return (
    <>
      <h1>My recent projects</h1>
      <div className="grid grid-cols-1 gap-4">
        {PROJECTS.map((project) => (
          <MorphingDialog
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            key={project.title}
          >
            <MorphingDialogTrigger className="flex flex-col gap-1">
              <ProjectTile project={project} />
            </MorphingDialogTrigger>
            <MorphingDialogContainer >
              <ProjectContainer project={project} />
            </MorphingDialogContainer>
          </MorphingDialog>
        ))}
      </div>
    </>
  );
};

export default ProjectsCard;
