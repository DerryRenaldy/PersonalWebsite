import Slider from "react-slick";
import { MusicMetaData } from "../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Music.css";

const Music = () => {
  const sliderSettings = {
    centerMode: true,
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
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
    // customPaging: (_) => (
    //   <div
    //     style={{
    //       width: "5px",
    //       height: "5px",
    //       backgroundColor: "rgba(255, 255, 255, 0.8)",
    //     }}
    //   ></div>
    // ),
  };
  return (
    <div className="w-full h-[190px] overflow-hidden">
      <Slider {...sliderSettings}>
        {MusicMetaData.map((data, i) => (
          <div key={i}>
            <iframe
              className="scale-90 md:scale-100"
              style={{ borderRadius: "12px" }}
              src={data.source}
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Music;
