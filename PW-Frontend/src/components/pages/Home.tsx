// import Content from "components/content/Content";
// import Hero from "components/hero/Hero";
// import Navbar from "components/navbar/Navbar";
import CustomScrollbar from "components/scrollbar/CustomScrollbar";
import { SectionContext } from "./Context";
import { Suspense, useState } from "react";
import clsx from "clsx";
import React from "react";
import Image from "@assets/images";

const Content = React.lazy(() => import("components/content/Content"));
const Hero = React.lazy(() => import("components/hero/Hero"));
const Navbar = React.lazy(() => import("components/navbar/Navbar"));

const Home = () => {
  const [section, setSection] = useState<string | null>("Home");
  const [isScrolledCtx, setIsScrolledCtx] = useState<boolean>(false);
  return (
    <>
      <Suspense
        fallback={
          <div className="text-white font-rubik text-center h-screen flex flex-col justify-center items-center text-[20px] gap-y-4 font-bold">
            <img src={Image.loadingCircle} className="w-10" />
            <p>Loading Assets...</p>
          </div>
        }
      >
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
      </Suspense>
    </>
  );
};

export default Home;
