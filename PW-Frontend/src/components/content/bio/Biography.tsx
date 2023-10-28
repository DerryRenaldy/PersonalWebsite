import Title from "components/common/Title";
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
import { useEffect } from "react";

const Biography = () => {
  const { setSection } = useSectionContext();

  useEffect(() => {
    setSection("Biography");
  }, []);

  return (
    <>
      <Title title={"Biography"} />
      <div className="relative">
        <div className="p-10">
          <div className="grid h-full grid-cols-5 gap-6 text-center text-white content-round">
            {/* FIRST SECTION */}
            <div className="col-span-3 bg-secondary">
              <Introduction />
            </div>
            <div className="col-span-2 bg-secondary">
              <MusicAndPodcast />
            </div>
            {/* SECOND SECTION */}
            <div></div>
            <div className="bg-secondary">
              <Quotes />
            </div>
            <div className="col-span-2 bg-secondary">
              <MissionAndGoal />
            </div>
            <div></div>
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
    </>
  );
};

export default Biography;
