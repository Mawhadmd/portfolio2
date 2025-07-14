import { SKILLS } from "../../../lib/constants";
import Blurfade from "./ui/Blurfade";
import Techbadge from "./ui/TechBadge";

const Skills = () => {
  return (
    <>
      <h2 >Skills</h2>
      <div className="sm:w-[90%] mx-auto mt-4 flex  flex-wrap gap-1 sm:gap-2 justify-center">
        {SKILLS.map((skill, i) => (
          <Blurfade key={skill} delay={i * 0.03}>
            <Techbadge key={skill}>{skill}</Techbadge>
          </Blurfade>
        ))}
      </div>
    </>
  );
};

export default Skills;
