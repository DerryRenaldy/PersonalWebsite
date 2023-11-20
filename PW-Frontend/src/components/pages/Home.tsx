import { useState, useEffect, lazy, Suspense } from "react";
import CustomScrollbar from "components/scrollbar/CustomScrollbar";
import { SectionContext } from "./Context";
import Image from "@assets/images";
import clsx from "clsx";

const Navbar = lazy(() => import("components/navbar/Navbar"));
const Hero = lazy(() => import("components/hero/Hero"));
const Content = lazy(() => import("components/content/Content"));

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [section, setSection] = useState<string | null>("Home");
  const [isScrolledCtx, setIsScrolledCtx] = useState<boolean>(false);

  useEffect(() => {
    const fakeLoadingTimeout = setTimeout(() => {
      // Simulate loading completion
      setLoading(false);
    }, 1000); // Adjust the duration as needed

    return () => {
      // Clear the timeout if the component is unmounted
      clearTimeout(fakeLoadingTimeout);
    };
  }, []);

  if (loading) {
    return (
      <div className="text-white font-rubik text-center h-screen flex flex-col justify-center items-center text-[20px] gap-y-4 font-bold">
        <img src={Image.loadingCircle} className="w-10" alt="Loading" />
        <p>Loading Assets...</p>
      </div>
    );
  }

  return (
    <>
      <div className="noise" />
      <div className={clsx("md:block", "hidden")}>
        <CustomScrollbar />
      </div>

      <SectionContext.Provider
        value={{ section, setSection, isScrolledCtx, setIsScrolledCtx }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Hero />
          <Content />
          {/* <CustomName /> */}
        </Suspense>
      </SectionContext.Provider>
    </>
  );
};

export default Home;
