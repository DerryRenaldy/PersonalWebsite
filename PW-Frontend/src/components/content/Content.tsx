import Title from "components/common/Title";
import Biography from "./bio/Biography";
import Expertise from "./expertise/Expertise";

const Content = () => {
  return (
    <>
      <Biography />
      <Expertise />
      <div className="h-screen">
        <Title title={"Something Else"} />
      </div>
    </>
  );
};

export default Content;
