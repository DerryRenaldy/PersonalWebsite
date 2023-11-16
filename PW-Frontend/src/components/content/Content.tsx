import Biography from "./bio/Biography";
import MatterJS from "./expertise/matterJS/MatterJS";
import Modeling from "./expertise/modeling/carousel/Modeling";
// import Modeling3DDesktop from "./expertise/modeling3d/desktop/Modeling3D";
// import Modeling3DMobile from "./expertise/modeling3d/mobile/Modeling3D";

const Content = () => {
  return (
    <>
      <Biography />
      <div>
        <MatterJS />
        <Modeling />
      </div>
      {/* <div className={clsx("md:block", "hidden")}>
        <Modeling3DDesktop />
      </div>

      <div className={clsx("md:hidden", "block")}>
        <Modeling3DMobile />
      </div> */}
    </>
  );
};

export default Content;
