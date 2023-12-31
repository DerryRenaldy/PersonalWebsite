import "./Hero.css";
import { useAnimation } from "framer-motion";
import Image from "../../assets/images";
import react, { useEffect, useRef } from "react";
import TitleText from "./heroContent/TitleText";
import ScrollIndicator from "./heroContent/ScrollIndicator";
import { useSectionContext } from "components/pages/Context";
import useIsTopInView from "components/hooks/useIsTopInView";
import RockModel from "./heroContent/rockModel3d/RockModel";

// ================ MAIN COMPONENT ================

const Hero = () => {
  // const ref = react.useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = react.useState(false);
  const indicator = useAnimation();

  const containerRef = useRef<HTMLDivElement>(null);
  const isTopInView = useIsTopInView(containerRef, "Home");
  const { setSection, setIsScrolledCtx } = useSectionContext();

  useEffect(() => {
    if (isTopInView) {
      setSection("Home");
    }
  }, [isTopInView]);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolledCtx(!entry.isIntersecting);
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    isScrolled
      ? indicator.start({ y: -20, opacity: 0 })
      : indicator.start({ y: 0, opacity: 1 });
  }, [isScrolled]);

  return (
    <div className="relative h-[150svh]">
      <div ref={containerRef} className="absolute w-full h-[100svh]" />
      <section className="sticky top-0">
        <div className="hidden md:block">
          <RockModel />
        </div>
        <div className="h-[100svh] flex justify-center items-center z-[100]">
          <div className="z-[100] pointer-events-none text-white font-nunito font-bold text-center flex flex-col gap-y-2">
            {/* <CVWebsite /> */}
            {/* <HoverIndicator ImageURL={Image.arrowWhite} Control={indicator} /> */}
            <TitleText />
          </div>
          <ScrollIndicator ImageURL={Image.arrowBlack} Control={indicator} />
        </div>
      </section>
    </div>
  );
};

export default Hero;
