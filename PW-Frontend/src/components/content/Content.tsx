import clsx from "clsx";
import Biography from "./bio/Biography";
// import Modeling3DDesktop from "./expertise/modeling3d/desktop/Modeling3D";
// import Modeling3DMobile from "./expertise/modeling3d/mobile/Modeling3D";
import WebDevelopment from "./expertise/softwareDevelopment/WebDevelopment";
import { Suspense, lazy } from "react";

const Modeling3DDesktop = lazy(
  () => import("./expertise/modeling3d/desktop/Modeling3D")
);
const Modeling3DMobile = lazy(
  () => import("./expertise/modeling3d/mobile/Modeling3D")
);

const Content = () => {
  return (
    <>
      <Biography />
      <Suspense fallback={<div>Loading...</div>}>
        <div className={clsx("md:block", "hidden")}>
          <Modeling3DDesktop />
        </div>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div className={clsx("md:hidden", "block")}>
          <Modeling3DMobile />
        </div>
      </Suspense>
      <WebDevelopment />
    </>
  );
};

export default Content;
