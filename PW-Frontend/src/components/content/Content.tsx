import Title from "components/common/Title";
import "./Content.css";
import Biography from "./biography/Biography";
import Skills from "./skills/Skills";
import WorkApproach from "./workApproach/WorkApproach";
import Quotes from "./quotes/Quotes";

const Content = () => {
  return (
    <>
      <Title />
      <div className="relative">
        <div className="p-10">
          <div className="grid h-full grid-cols-5 gap-6 text-center text-white content-round">
            <div className="col-span-3 bg-secondary">
              <Biography />
            </div>
            <div className="bg-secondary">
              <WorkApproach />
            </div>
            <div className="row-span-2 bg-secondary">
              <Skills />
            </div>
            <div className="bg-secondary">
              <Quotes />
            </div>
            <div className="relative col-span-2 row-span-2 border">Iframe</div>
            <div className="border">Tool Stack</div>
            <div className="border">Mission and Goals</div>
            <div className="col-span-2 border">Interest</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
