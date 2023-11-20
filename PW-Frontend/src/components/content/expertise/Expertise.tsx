import Title from "components/common/Title";
import MatterJS from "./matterJS/MatterJS";
// import Modeling from "./modeling/carousel/Modeling";
import { useEffect, useRef } from "react";
import { useSectionContext } from "components/pages/Context";
import useIsTopInView from "components/hooks/useIsTopInView";

const Expertise = () => {
  const containerRef = useRef<HTMLDivElement>(null!);

  const isTopInView = useIsTopInView(
    containerRef,
    "Expertise - Web Developemnt"
  );
  const { setSection } = useSectionContext();

  useEffect(() => {
    if (isTopInView) {
      setSection("Expertise");
    }
  }, [isTopInView]);
  return (
    <div
      ref={containerRef}
      className="border border-[#0B0B0B] flex flex-col justify-center items-center"
    >
      <Title title={"Expertise"} />
      <div className="py-6">
        <MatterJS />
        {/* <Modeling /> */}
      </div>
    </div>
  );
};

export default Expertise;
