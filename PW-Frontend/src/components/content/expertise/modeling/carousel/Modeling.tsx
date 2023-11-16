import VideoCard from "../VideoCard";
import { ModelingExpertiseDataMobile } from "../MetaData";
import Image from "@assets/images";
import SliderComp from "components/common/SliderComp";
import { useResponsive } from "components/hooks/useResponsive";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Modeling.css";

const Modeling = () => {
  const { screenType } = useResponsive();
  return (
    <div className="flex justify-center items-center p-4">
      <div className="relative h-[476px] items-center rounded-xl border border-[#454444] overflow-hidden text-white w-[calc(100svw/1.1)]">
        {/* BACKGROUND */}
        <div
          className="absolute overflow-hidden select-none w-[calc(100svw/1.1)]"
          style={{
            height: 476,
          }}
        >
          <img
            src={Image.doodle}
            className="absolute top-1/2 -translate-y-[50%] left-1/2 -translate-x-[50%]"
          />
        </div>
        <div className="h-full w-full flex flex-col justify-center">
          <SliderComp
            slideNum={
              screenType === "TABLET" ? 2 : screenType === "DESKTOP" ? 3 : 1
            }
            autoplay={true}
            autoplaySpeed={2000}
          >
            {ModelingExpertiseDataMobile.map((data) => (
              <li key={data.key}>
                <div className="rounded-2xl">
                  <VideoCard
                    videoUrl={data.videoUrl}
                    title={data.title}
                    thumbnailUrl={data.thumbnailUrl}
                  />
                </div>
              </li>
            ))}
          </SliderComp>
        </div>
      </div>
    </div>
  );
};

export default Modeling;
