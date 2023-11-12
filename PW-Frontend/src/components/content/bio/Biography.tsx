import MusicAndPodcast from "./musicAndPodcast/MusicAndPodcast";
import Quotes from "./quotes/Quotes";
import MissionAndGoal from "./missionAndGoal/MissionAndGoal";
import Now from "./currentSituation/Now";
import Qualification from "./qualification/Qualification";
import WorkApproach from "./workApproach/WorkApproach";
import Skills from "./skills/Skills";
import Contact from "./contact/Contact";
import Introduction from "./introduction/Introduction";
import { useSectionContext } from "components/pages/Context";
import { useEffect, useRef } from "react";
import useIsTopInView from "components/hooks/useIsTopInView";
import clsx from "clsx";

const Biography = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isTopInView = useIsTopInView(containerRef);
  const { setSection } = useSectionContext();

  useEffect(() => {
    if (isTopInView) {
      setSection("Biography");
    }
  }, [isTopInView]);

  return (
    <div ref={containerRef} className={clsx("md:pt-36", "pt-32")}>
      <div className="relative">
        <div className={clsx("md:p-10", "p-4")}>
          <div
            className={clsx(
              "h-full grid-cols-5 gap-6 text-center text-white content-round",
              "md:grid",
              "flex flex-col"
            )}
          >
            {/* FIRST SECTION */}
            <div className="col-span-3 bg-secondary">
              <Introduction />
            </div>
            <div className="col-span-2 bg-secondary">
              <MusicAndPodcast />
            </div>
            {/* SECOND SECTION */}
            <div className={clsx("md:block", "hidden")}></div>
            <div className="bg-secondary">
              <Quotes />
            </div>
            <div className="col-span-2 bg-secondary">
              <MissionAndGoal />
            </div>
            <div className={clsx("md:block", "hidden")}></div>
            {/* THIRD SECTION */}
            <div className="bg-secondary">
              <Now />
            </div>
            <div className="bg-secondary col-span-2">
              <Qualification />
            </div>
            <div className="bg-secondary">
              <WorkApproach />
            </div>
            <div className="bg-secondary">
              <Skills />
            </div>
            {/* FOURTH SECTION */}
            <div className="bg-secondary col-span-2">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
