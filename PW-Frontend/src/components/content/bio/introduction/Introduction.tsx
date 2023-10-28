import image from "@assets/images";
import "./Introduction.css";

const Introduction = () => {
  return (
    <>
      <div className="flex flex-col p-6 gap-y-4 h-full">
        <p className="text-left font-rubik text-2xl">Derry Renaldy</p>
        <div className="flex gap-x-4 text-center">
          <img
            src={image.profile}
            alt="Derry Renaldy"
            className="w-[171px] h-[228px] rounded-lg"
          />
          <div className="grid grid-cols-2 gap-4 place-content-start">
            <div className="p-2 bg-[#353536]">
              Software Engineer — an early generalist and late specializer in
              programming.
            </div>
            <div className="p-2 bg-[#353536]">
              I thrive on curiosity, gaining expertise through hands-on
              experience, and continuous learning that extends beyond the realm
              of code.
            </div>
            <div className="p-2 bg-[#353536]">
              My passion lies in crafting systems that harmoniously integrate,
              building experiences that eloquently communicate ideas, and
              developing interactions that push the boundaries of convention.
            </div>
            <div className="p-2 bg-[#353536]">
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
