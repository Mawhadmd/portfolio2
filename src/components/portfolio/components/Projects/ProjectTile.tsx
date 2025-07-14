import Techbadge from "../ui/TechBadge";
import {
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogTitle,
} from "../ui/morphing-dialog";
import { ProjectType } from "./ProjectsCard";

const ProjectTile = ({ project }: { project: ProjectType }) => {
  return (
    <div className="relative cursor-pointer border border-border p-4 flex gap-2 rounded-md h-40">
      <div className="w-1/3">
        <MorphingDialogImage
          src={project.image}
          className="w-full h-full  object-contain object-center rounded-sm"
          alt={`Project Exhibition: ${project.title}`}
        />
      </div>
      <div className="w-2/3">
        <MorphingDialogTitle>
          <time className="text-xs">{project.dates}</time>
          <h3 className="font-semibold">{project.title}</h3>
        </MorphingDialogTitle>
        <MorphingDialogSubtitle>
          <p className="text-xs">Tech Stack:</p>
          <div className="flex flex-wrap gap-1 mt-1">
            {project.technologies.map((tech: string) => (
              <Techbadge key={tech}>{tech}</Techbadge>
            ))}
          </div>
        </MorphingDialogSubtitle>
      </div>
    </div>
  );
};

export default ProjectTile;
