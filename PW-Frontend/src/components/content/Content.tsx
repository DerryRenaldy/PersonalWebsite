import Title from "components/common/Title";
import Biography from "./bio/Biography";
import Expertise from "./expertise/Expertise";
import ReactPlayer from "react-player";
import { ModelingExpertiseDataMobile } from "./expertise/modeling/MetaData";

const Content = () => {
  return (
    <>
      <Biography />
      <Expertise />
      <div className="h-screen">
        <Title title={"Something Else"} />
        <div className="flex justify-center">
          <div className="w-fit">
            <ReactPlayer
              url={ModelingExpertiseDataMobile[1].videoUrl}
              light={true}
              controls={true}
              playing={true}
              loop={true}
              muted={true}
              // height="auto"
              width={220}
              style={{
                border: "solid 1px white",
                borderRadius: 16,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
