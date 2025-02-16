import { SKILLS } from "../lib/constants";
const Skills = () => {
  return (
    <>

      <h1 >Skills</h1>
      <div className="w-[90%] mt-4 flex flex-wrap gap-2 justify-center">
        {SKILLS.map((skill, index) => (
          <div
            className="text-Text  border rounded-md p-1 text-[10px]  border-gray-800 inline"
            key={index}
          >
            {skill}
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
