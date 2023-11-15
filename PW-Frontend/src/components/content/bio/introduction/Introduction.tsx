import image from "@assets/images";
import "./Introduction.css";
import clsx from "clsx";

const Introduction = () => {
  return (
    <>
      <div className="flex flex-col p-6 gap-y-4 h-full">
        <p className={clsx("text-left font-rubik", "md:text-2xl", "text-xl")}>
          Derry Renaldy
        </p>
        <div
          className={clsx(
            "flex",
            "md:gap-x-4 md:flex-row md:text-center",
            "gap-4 flex-col justify-center items-center"
          )}
        >
          <img
            src={image.profile}
            alt="Derry Renaldy"
            className={clsx(
              "aspect-auto rounded-lg",
              "md:w-[171px] ",
              "w-full"
            )}
          />
          <div
            className={clsx(
              "gap-4 place-content-start font-rubik",
              "md:grid md:grid-cols-2",
              "flex flex-col text-start text-md"
            )}
          >
            <div className="p-3 bg-[#353536]">
              Software Engineer — an early generalist and late specializer in
              programming.
            </div>
            <div className="p-3 bg-[#353536]">
              I thrive on curiosity, gaining expertise through hands-on
              experience, and continuous learning that extends beyond the realm
              of code.
            </div>
            <div className="p-3 bg-[#353536]">
              My passion lies in crafting systems that harmoniously integrate,
              building experiences that eloquently communicate ideas, and
              developing interactions that push the boundaries of convention.
            </div>
            <div className="p-3 bg-[#353536]">
              In the coding landscape, clarity and a forward-thinking mindset
              steer my course.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
