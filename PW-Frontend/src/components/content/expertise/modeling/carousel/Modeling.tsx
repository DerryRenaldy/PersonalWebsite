import Slider from "react-slick";
import VideoCard from "../VideoCard";
import { ModelingExpertiseDataMobile } from "../MetaData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "@assets/images";
import "./Modeling.css";
import { useEffect, useState } from "react";

interface IResponsive {
  md: boolean;
  xl: boolean;
}
const Modeling = () => {
  const [screenSize, setScreenSize] = useState<IResponsive>({
    md: false,
    xl: false,
  });

  useEffect(() => {
    if (window.innerWidth > 768 && window.innerWidth < 1280) {
      setScreenSize({ md: true, xl: false });
    } else if (window.innerWidth > 1280) {
      setScreenSize({ md: false, xl: true });
    } else {
      setScreenSize({ md: false, xl: false });
    }
  }, []);

  const windowResizeHandler = () => {
    if (window.innerWidth > 768 && window.innerWidth < 1280) {
      setScreenSize({ md: true, xl: false });
    } else if (window.innerWidth > 1280) {
      setScreenSize({ md: false, xl: true });
    } else {
      setScreenSize({ md: false, xl: false });
    }
  };

  useEffect(() => {
    window.addEventListener("resize", windowResizeHandler);

    return () => {
      window.removeEventListener("resize", windowResizeHandler);
    };
  }, []);

  const sliderSettings = {
    centerMode: true,
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: screenSize.md ? 2 : screenSize.xl ? 3 : 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    cssEase: "ease",
    appendDots: (dots: any) => (
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          borderRadius: "10px",
          width: "fit-Content",
          position: "absolute",
          bottom: "-30px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <ul
          style={{
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
  };
  return (
    <div className="flex justify-center items-center p-4">
      <div className="relative h-[476px] items-center rounded-xl border border-[#454444] overflow-hidden text-white w-[calc(100svw/1.1)]">
        {/* BACKGROUND */}
        <div
          className="absolute overflow-hidden  w-[calc(100svw/1.1)]"
          style={{
            height: 476,
          }}
        >
          <img
            src={Image.doodle}
            className="absolute top-1/2 -translate-y-[50%] left-1/2 -translate-x-[50%]"
          />
        </div>
        <ul className="h-full w-full flex flex-col justify-center">
          <Slider {...sliderSettings} vertical={false}>
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
          </Slider>
        </ul>
      </div>
    </div>
  );
};

export default Modeling;
