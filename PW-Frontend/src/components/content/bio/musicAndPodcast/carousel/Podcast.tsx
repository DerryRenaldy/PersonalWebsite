import Slider from "react-slick";
import { PodcastMetaData } from "../data";
import "./Music.css";

const Podcast = () => {
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
          bottom: "-25px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
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
    <div className="w-full">
      <Slider {...sliderSettings}>
        {PodcastMetaData.map((data, i) => (
          <div key={i}>
            <iframe
              style={{ borderRadius: "12px" }}
              src={data.source}
              width="496"
              height="279"
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

export default Podcast;
