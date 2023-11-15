import clsx from "clsx";
import Biography from "./bio/Biography";
import Modeling3DDesktop from "./expertise/modeling3d/desktop/Modeling3D";
import Modeling3DMobile from "./expertise/modeling3d/mobile/Modeling3D";
import MatterJS from "./expertise/matterJS/MatterJS";

const Content = () => {
  return (
    <>
      <Biography />
      <MatterJS />
      <div className={clsx("md:block", "hidden")}>
        <Modeling3DDesktop />
      </div>

      <div className={clsx("md:hidden", "block")}>
        <Modeling3DMobile />
      </div>
      {/* <WebDevelopment /> */}
      <div className="border font-rubik h-[100svh] flex items-center justify-center text-white text-2xl">
        <p>Something Else</p>
      </div>
    </>
  );
};

export default Content;
