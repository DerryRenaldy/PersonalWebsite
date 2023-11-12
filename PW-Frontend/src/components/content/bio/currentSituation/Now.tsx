import clsx from "clsx";

const Now = () => {
  return (
    <div className="flex flex-col p-6 gap-y-4 font-rubik h-full">
      <p className={clsx("text-left", "md:text-2xl", "text-xl")}>/Now</p>
      <div className="text-left flex flex-col gap-y-4">
        <p>
          I'm working at a software company in Bandung as a contract employee.
        </p>
        <p>
          I have experience with Unity Engine, work with IoT, and handle both
          backend or Frontend development.
        </p>
        <p>
          Feel free to reach out to me if you have ideas, opportunities or
          feedback to share.
        </p>
      </div>
    </div>
  );
};

export default Now;
