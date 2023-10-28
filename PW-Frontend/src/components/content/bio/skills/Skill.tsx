import image from "@assets/images";
import { ISkillMetaData } from "./data";

const Skill = ({ skill }: ISkillMetaData) => {
  return (
    <div className="flex flex-row">
      <img src={image.bulletPoints} className="w-[24px] h-[24px]" />
      <div>{skill}</div>
    </div>
  );
};

export default Skill;
