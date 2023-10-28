import { IGoalsMetaData } from "./data";
import "./CheckMark.css";

const CheckMark = ({ isDone, goalName }: IGoalsMetaData) => {
  return (
    <div
      className={`flex gap-x-2 items-center pb-2 ${
        isDone ? "text-[rgba(255,255,255,0.5)]" : ""
      }`}
    >
      <div
        className={`border-solid border-2 w-5 h-5 ${
          isDone ? "checkmark border-[rgba(255,255,255,0.5)]" : ""
        }`}
      ></div>
      <p
        className={`${
          isDone
            ? "line-through decoration-2 decoration-[rgba(255,255,255,0.5)]"
            : ""
        }`}
      >
        {goalName}
      </p>
    </div>
  );
};

export default CheckMark;
