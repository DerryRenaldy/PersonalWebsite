import VideoCard from "../VideoCard";
import Image from "@assets/images";
import { useEffect, useRef, useState } from "react";
// import useIsTopInView from "components/hooks/useIsTopInView";
// import { useSectionContext } from "components/pages/Context";
import { ModelingExpertiseDataDesktop } from "../MetaData";

const Modeling3D = () => {
  const [width, setWidth] = useState<number>(window.screen.width);

  const containerRef = useRef<HTMLDivElement>(null);
  // const isTopInView = useIsTopInView(containerRef, "Expertise - 3d desktop");
  // const { setSection } = useSectionContext();

  // useEffect(() => {
  //   if (isTopInView) {
  //     setSection("Expertise");
  //   }
  // }, [isTopInView]);

  const windowResizeHandler = () => {
    setWidth(window.screen.width);
  };

  useEffect(() => {
    window.addEventListener("resize", windowResizeHandler);

    return () => {
      window.removeEventListener("resize", windowResizeHandler);
    };
  }, []);

  useEffect(() => {
    console.log("Component is mounted or re-rendered");
  }, []);

  console.log("Component is re-rendered");

  return (
    <div className="relative pt-48" ref={containerRef}>
      <div className="absolute h-[390svh] w-[100svw] -translate-y-24">
        <div className="sticky top-6 h-[110svh] overflow-hidden">
          <div
            className="absolute"
            style={{ width: width, left: `calc(50% - ${width}px/2)` }}
          >
            <img
              src={Image.doodle}
              className="scale-95"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="relative">
        <ul className="flex flex-col gap-y-[300px]">
          {ModelingExpertiseDataDesktop.map((data, i) => (
            <li key={i}>
              <ul className="flex gap-x-[300px] justify-center items-center">
                <li key={data.first.key} className="rounded-2xl">
                  <VideoCard
                    videoUrl={data.first.videoUrl}
                    title={data.first.title}
                    thumbnailUrl={data.first.thumbnailUrl}
                  />
                </li>
                {data.second && (
                  <li key={data.second?.key} className="rounded-2xl">
                    <VideoCard
                      videoUrl={data.second.videoUrl}
                      title={data.second.title}
                      thumbnailUrl={data.second.thumbnailUrl}
                    />
                  </li>
                )}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modeling3D;
