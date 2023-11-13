// import Content from "components/content/Content";
import Hero from "components/hero/Hero";
import Navbar from "components/navbar/Navbar";
import CustomScrollbar from "components/scrollbar/CustomScrollbar";
import { SectionContext } from "./Context";
import { Suspense, lazy, useState } from "react";
import clsx from "clsx";
import Image from "@assets/images";

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
        <Suspense
          fallback={
            <div className="text-white font-rubik text-center h-screen flex flex-col justify-center items-center text-[20px] gap-y-4 font-bold">
              <img src={Image.loadingCircle} className="w-10" />
              <p>Loading Assets...</p>
            </div>
          }
        >
          <Content />
        </Suspense>
      </SectionContext.Provider>
    </>
  );
};

export default Home;
