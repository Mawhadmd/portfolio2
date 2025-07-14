import { PROJECTS } from "../../../../lib/constants";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
} from "../ui/morphing-dialog";
import ProjectTile from "./ProjectTile";
import ProjectContainer from "./ProjectContainer";
import Blurfade from "../ui/Blurfade";
import { StaticImageData } from "next/image";

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
    icon: React.ReactNode;
  }[];
  image: StaticImageData;
};

const ProjectsCard = () => {
  return (
    <>
      <div className="mb-4">
        <h2 className="!mb-0">My recent projects</h2>
        <small>
          Few of my favorites.{" "}
          <span className="underline font-bold">Click</span> on a{" "}
          <span className="underline font-bold">tile</span> to{" "}
          <span className="font-medium">learn more</span>.
        </small>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {PROJECTS.map((project, i) => (
          <MorphingDialog
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            key={project.title}
          >
            <MorphingDialogTrigger className="flex flex-col gap-1">
              <Blurfade delay={i * 0.2}>
                <ProjectTile project={project} />
              </Blurfade>
            </MorphingDialogTrigger>
            <MorphingDialogContainer>
              <ProjectContainer project={project} />
            </MorphingDialogContainer>
          </MorphingDialog>
        ))}
      </div>
    </>
  );
};

export default ProjectsCard;
