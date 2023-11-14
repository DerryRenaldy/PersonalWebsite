// import useIsTopInView from "components/hooks/useIsTopInView";
// import { useSectionContext } from "components/pages/Context";
import { useRef } from "react";
import VideoCard from "../VideoCard";
import { ModelingExpertiseDataMobile } from "../MetaData";

const Modeling3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // const isTopInView = useIsTopInView(containerRef, "Expertise - 3d mobile");
  // const { setSection } = useSectionContext();

  // useEffect(() => {
  //   if (isTopInView) {
  //     setSection("Expertise");
  //   }
  // }, [isTopInView]);

  return (
    <div className="relative py-48" ref={containerRef}>
      <ul className="relative flex flex-col items-center justify-center gap-y-36">
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
      </ul>
    </div>
  );
};

export default Modeling3D;
