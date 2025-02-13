import { PROJECTS } from "../../lib/constants";

const ProjectsCard = () => {
  return (
    <div >
      <h1>My recent projects</h1>
      <div className="grid grid-cols-1  gap-4">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="relative cursor-pointer border border-gray-800 p-4  flex gap-2 rounded-md "
          >
            <div className="w-1/3">
              <img
                src={project.image}
                className="h-12 sm:h-20 object-cover object-top rounded-sm"
                alt=""
              />
            </div>
            <div className="w-2/3">
              <p className="text-xs">{project.dates}</p>
              <h2 className=" font-semibold">{project.title}</h2>
              <p className="text-xs">Tech Stack:</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="border border-gray-800 text-[10px] px-2  rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
