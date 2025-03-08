
import Techbadge from '../ui/Skillsbadge';
import { MorphingDialogImage, MorphingDialogSubtitle, MorphingDialogTitle } from '../ui/morphing-dialog';
import { ProjectType } from './ProjectsCard';

const ProjectTile = ({project}: {project: ProjectType}) => {

    return (
        <div
        className="relative cursor-pointer border border-gray-800 p-4 flex gap-2 rounded-md"
      >
        <div className="w-1/3">
        <MorphingDialogImage
          src={project.image}
          className="h-full   object-contain sm:object-cover sm:object-top rounded-sm"
          alt=""
        />
        </div>
        <div className="w-2/3">
        <MorphingDialogTitle>
          <time className="text-xs">{project.dates}</time>
          <h2 className="font-semibold">{project.title}</h2>
        </MorphingDialogTitle>
        <MorphingDialogSubtitle>
          <p className="text-xs">Tech Stack:</p>
          <div className="flex flex-wrap gap-1 mt-1">
          {project.technologies.map((tech: string) => (
            <Techbadge
            key={tech}
            
            >
            {tech}
            </Techbadge>
          ))}
          </div>
        </MorphingDialogSubtitle>
        </div>
      </div>
    );
}

export default ProjectTile;
