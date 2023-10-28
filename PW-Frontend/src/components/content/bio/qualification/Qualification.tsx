import image from "@assets/images";

const Qualification = () => {
  return (
    <div className="flex flex-col p-6 gap-y-4 font-rubik h-full">
      <p className="text-left text-2xl">Qualification</p>
      <div className="flex gap-x-6">
        <img
          src={image.collage}
          className="rounded-2xl object-cover w-[252px] h-[187px]"
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
