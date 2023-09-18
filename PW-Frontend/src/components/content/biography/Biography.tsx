import image from "@assets/images";
import "./Biography.css";

const Biography = () => {
  return (
    <>
      <div className="flex flex-col p-6 gap-y-4 h-full">
        <p className="text-left font-rubik text-2xl">Derry Renaldy</p>
        <div className="flex gap-x-4">
          <img
            src={image.profile}
            alt="Derry Renaldy"
            className="w-[171px] h-[228px] rounded-lg"
          />
          <div className="grid grid-cols-2 gap-4 place-content-start">
            <div className="p-2 bg-[#353536]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              error.
            </div>
            <div className="p-2 bg-[#353536]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores culpa nisi suscipit ipsum esse nulla nihil nemo tempora
              saepe quod?
            </div>
            <div className="p-2 bg-[#353536]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              temporibus, amet sint perspiciatis soluta maxime.
            </div>
            <div className="p-2 bg-[#353536]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, ullam.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Biography;
