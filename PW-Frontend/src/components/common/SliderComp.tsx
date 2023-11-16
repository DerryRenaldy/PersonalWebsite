import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import "./SliderComp.css";

type ISliderProps = {
  slideNum: number;
  autoplay: boolean;
  autoplaySpeed: number;
} & React.ComponentProps<"ul">;

const SliderComp = ({
  children,
  slideNum,
  autoplay,
  autoplaySpeed,
  ...rest
}: ISliderProps) => {
  const sliderSettings = {
    centerMode: true,
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    slidesToShow: slideNum,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 2000,
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
    <>
      <ul {...rest}>
        <Slider {...sliderSettings}>{children}</Slider>
      </ul>
    </>
  );
};

export default SliderComp;
