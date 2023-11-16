import image from "@assets/images";
import clsx from "clsx";

const Qualification = () => {
  return (
    <div className="flex flex-col p-6 gap-y-4 font-rubik h-full">
      <p className={clsx("text-left", "xl:text-2xl", "text-xl")}>
        Qualification
      </p>
      <div
        className={clsx("flex", "xl:flex-row xl:gap-x-6", "flex-col gap-y-6")}
      >
        <img
          src={image.collage}
          className={clsx(
            "rounded-2xl object-cover aspects-ratio",
            "xl:w-[280px]",
            "w-full"
          )}
        />
        <div className="text-left gap-y-4 flex flex-col">
          <p className="text-lg">Bachelor of Electrical Engineering</p>
          <p className="font-light">Maratha Christian University</p>
          <p className="text-[rgba(255,255,255,0.5)] flex gap-x-2">
            <span>
              <img src={image.building} className="w-5 h-5" alt="campus" />
            </span>
            Bandung, Indonesia
          </p>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
