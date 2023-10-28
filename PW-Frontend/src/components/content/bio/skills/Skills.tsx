import Skill from "./Skill";
import { SkillMetaData } from "./data";

const Skills = () => {
  return (
    <div className="flex flex-col h-full p-6 font-rubik gap-y-4">
      <div className="text-2xl text-left">My Skills</div>
      <ul className="flex flex-col text-left gap-y-3">
        {SkillMetaData.map((data, i) => (
          <li key={i}>
            <Skill skill={data.skill} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
