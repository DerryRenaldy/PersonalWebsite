import image from "@assets/images";

const Skills = () => {
  return (
    <div className="flex flex-col h-full p-6 font-rubik gap-y-4">
      <div className="text-2xl text-left">My Skills</div>
      <ul className="flex flex-col text-left gap-y-3">
        <li className="flex flex-row gap-2 border-b border-b-primary-400">
          <img src={image.bulletPoints} className="w-[24px] h-[24px]" />
          <div>Skill 1</div>
        </li>
        <li className="flex flex-row gap-2 border-b border-b-primary-400">
          <img src={image.bulletPoints} className="w-[24px] h-[24px]" />
          <div>Skill 2</div>
        </li>
        <li className="flex flex-row gap-2 border-b border-b-primary-400">
          <img src={image.bulletPoints} className="w-[24px] h-[24px]" />
          <div>Skill 3</div>
        </li>
        <li className="flex flex-row gap-2 border-b border-b-primary-400">
          <img src={image.bulletPoints} className="w-[24px] h-[24px]" />
          <div>Skill 4</div>
        </li>
        <li className="flex flex-row gap-2 border-b border-b-primary-400">
          <img src={image.bulletPoints} className="w-[24px] h-[24px]" />
          <div>Skill 5</div>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
