import { GoalMetaData } from "./data";
import CheckMark from "./CheckMark";

const MissionAndGoal = () => {
  return (
    <div className="flex flex-row h-full p-6 font-rubik gap-x-6">
      <div className="basis-1/2">
        <div className="text-2xl text-left">Mission</div>
        <p className="mt-4 text-left">
          Craft code with purpose—creating software that is not just functional,
          but meaningful, ethical, and empowering. Elevate the design
          conversation through every line of code written.
        </p>
      </div>
      <div>
        <div className="text-2xl text-left">Goals</div>
        <div className="mt-4 text-left">
          <ul>
            {GoalMetaData.map((data, i) => (
              <li key={i}>
                <CheckMark isDone={data.isDone} goalName={data.goalName} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MissionAndGoal;
