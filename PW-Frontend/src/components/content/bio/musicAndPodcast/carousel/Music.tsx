import { useResponsive } from "components/hooks/useResponsive";
import { MusicMetaData } from "../data";
import SliderComp from "components/common/SliderComp";

const Music = () => {
  const { screenType } = useResponsive();
  return (
    <div className="w-full h-[190px] overflow-hidden">
      <SliderComp slideNum={1} autoplay={false} autoplaySpeed={0}>
        {MusicMetaData.map((data, i) => (
          <div
            key={i}
            className={`${screenType === "MOBILE" ? "px-0" : "px-4"}`}
          >
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
      </SliderComp>
    </div>
  );
};

export default Music;
