import Content from "components/content/Content";
import Hero from "components/hero/Hero";
import Navbar from "components/navbar/Navbar";
import CustomScrollbar from "components/scrollbar/CustomScrollbar";
import { SectionContext } from "./Context";
import { useState } from "react";
import clsx from "clsx";
// import CustomName from "components/customName/CustomName";
// import Image from "@assets/images";

// const Content = lazy(() =>
//   wait(200).then(() => import("components/content/Content"))
// );

const Home = () => {
  const [section, setSection] = useState<string | null>("Home");
  const [isScrolledCtx, setIsScrolledCtx] = useState<boolean>(false);
  return (
    <>
      <div className="noise" />
      <div className={clsx("md:block", "hidden")}>
        <CustomScrollbar />
      </div>
      <SectionContext.Provider
        value={{ section, setSection, isScrolledCtx, setIsScrolledCtx }}
      >
        <Navbar />
        <Hero />
        <Content />
        {/* <CustomName /> */}
      </SectionContext.Provider>
    </>
  );
};

// function wait(time: number) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, time);
//   });
// }

export default Home;
