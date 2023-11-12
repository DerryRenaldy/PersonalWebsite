import { motion, useAnimation } from "framer-motion";
import "./Navbar.css";
import { useEffect, useRef, useState } from "react";
import NavigationButtons from "./sections/NavigationButtons";
import CVButton from "./sections/CVButton";
import clsx from "clsx";
import { useSectionContext } from "components/pages/Context";
import styled from "styled-components";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const buttonPos = useAnimation();
  const { section, isScrolledCtx } = useSectionContext();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );

    observer.observe(ref.current);

    console.log(isScrolled);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // useEffect(() => {
  //   moveOpenCVButton(isScrolled, buttonPos);

  //   window.addEventListener("scroll", () =>
  //     updateScrollPosition(setIsScrolled)
  //   );
  //   return () => {
  //     window.removeEventListener("scroll", () =>
  //       updateScrollPosition(setIsScrolled)
  //     );
  //   };
  // }, [isScrolled]);

  return (
    <header
      ref={ref}
      className="py-4 my-4 w-screen fixed z-[1000] justify-center items-center pointer-events-none text-white flex flex-col font-rubik"
    >
      <motion.div
        initial={false}
        layout="position"
        className="pointer-events-auto gap-x-4 rounded-2xl"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* NAVIGATION BUTTONS*/}
        <NavigationButtons />
        {/* BUTTON OPEN CV */}
        <CVButton isScrolled={isScrolledCtx} buttonPos={buttonPos} />
      </motion.div>

      <TitleText
        className={clsx(
          "uppercase p-2 m-2 font-bold w-fit tracking-widest text-center text-[#C49B66]",
          "md:text-xl",
          "text-sm"
        )}
        // animate={{ opacity: 1 }}
        // initial={{ opacity: 0 }}
      >
        -{section}-
      </TitleText>
    </header>
  );
};

export default Navbar;

const TitleText = styled.div`
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;

  &:hover {
    -webkit-text-fill-color: initial;
    -webkit-text-stroke-width: initial;
  }
`;
