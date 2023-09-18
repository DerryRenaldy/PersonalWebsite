import "./Hero.css";
import { AnimationControls, useAnimation } from "framer-motion";
import Image from "../../assets/images";
import react from "react";
import TitleText from "./heroContent/TitleText";
import ScrollIndicator from "./heroContent/ScrollIndicator";
import RockModel from "./heroContent/rockModel3d/RockModel";

const showHideIndicator = (
  isScrolled: boolean,
  indicator: AnimationControls
) => {
  isScrolled
    ? indicator.start({ y: -20, opacity: 0 })
    : indicator.start({ y: 0, opacity: 1 });
};

const updateScrollPosition = (
  setScrollY: React.Dispatch<React.SetStateAction<number>>,
  setIsScrolled: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const newScrollY = window.scrollY;
  setScrollY(newScrollY);
  if (newScrollY > 0) {
    setIsScrolled(true);
  } else {
    setIsScrolled(false);
  }
};

// ================ MAIN COMPONENT ================

const Hero = () => {
  // const ref = react.useRef<HTMLDivElement>(null);
  const [_scrollY, setScrollY] = react.useState(0);
  const [isScrolled, setIsScrolled] = react.useState(false);
  const indicator = useAnimation();

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["end end", "end start"],
  // });
  // const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  react.useEffect(() => {
    showHideIndicator(isScrolled, indicator);

    window.addEventListener("scroll", () =>
      updateScrollPosition(setScrollY, setIsScrolled)
    );
    return () => {
      window.removeEventListener("scroll", () =>
        updateScrollPosition(setScrollY, setIsScrolled)
      );
    };
  }, [isScrolled]);

  return (
    <section className="relative">
      {/* <div className="absolute top-0 bottom-0 left-0 right-0" ></div> */}
      {/* <RockModel /> */}
      <div className="hero-full flex justify-center items-center z-[100]">
        <div className="z-[100] pointer-events-none text-white font-nunito font-bold text-center flex flex-col gap-y-2">
          {/* <CVWebsite /> */}
          {/* <HoverIndicator ImageURL={Image.arrowWhite} Control={indicator} /> */}
          <TitleText />
        </div>
        <ScrollIndicator ImageURL={Image.arrowBlack} Control={indicator} />
      </div>
    </section>
  );
};

export default Hero;
