import clsx from "clsx";
import Biography from "./bio/Biography";
import Modeling3DDesktop from "./expertise/modeling3d/desktop/Modeling3D";
import Modeling3DMobile from "./expertise/modeling3d/mobile/Modeling3D";
import WebDevelopment from "./expertise/softwareDevelopment/WebDevelopment";

const Content = () => {
  return (
    <>
      <Biography />
      <div className={clsx("md:block", "hidden")}>
        <Modeling3DDesktop />
      </div>

      <div className={clsx("md:hidden", "block")}>
        <Modeling3DMobile />
      </div>
      <WebDevelopment />
    </>
  );
};

export default Content;
