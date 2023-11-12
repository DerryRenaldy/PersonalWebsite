import clsx from "clsx";
import DnDContent from "./DnDContent";

const WorkApproach = () => {
  return (
    <div className="p-6 font-rubik flex flex-col gap-y-4">
      <div className={clsx("text-left", "md:text-2xl", "text-xl")}>
        Work Approach
      </div>
      <div>
        <DnDContent />
      </div>
    </div>
  );
};

export default WorkApproach;
