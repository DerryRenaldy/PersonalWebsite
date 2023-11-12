// import Content from "components/content/Content";
// import Hero from "components/hero/Hero";
// import Navbar from "components/navbar/Navbar";
import CustomScrollbar from "components/scrollbar/CustomScrollbar";
import { SectionContext } from "./Context";
import { lazy, useState } from "react";
import clsx from "clsx";

const Navbar = lazy(() => import("components/navbar/Navbar"));
const Hero = lazy(() => import("components/hero/Hero"));
const Content = lazy(() => import("components/content/Content"));

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
      </SectionContext.Provider>
    </>
  );
};

export default Home;
