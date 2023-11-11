import { AnimationControls, motion, useAnimation } from "framer-motion";
import "./Navbar.css";
import { useEffect, useState } from "react";
import NavigationButtons from "./sections/NavigationButtons";
import CVButton from "./sections/CVButton";
import clsx from "clsx";
import { useSectionContext } from "components/pages/Context";
import styled from "styled-components";

const updateScrollPosition = (
  setIsScrolled: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const newScrollY = window.scrollY;
  if (newScrollY > 0) {
    setIsScrolled(true);
  } else {
    setIsScrolled(false);
  }
};

const moveOpenCVButton = (
  isScrolled: boolean,
  buttonPos: AnimationControls
) => {
  if (!isScrolled) {
    buttonPos.set({ x: -50, opacity: 0, transition: { delay: 0.2 } });
    buttonPos.start({ x: 0, opacity: 1, transition: { delay: 0.2 } });
  }
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const buttonPos = useAnimation();
  const { section } = useSectionContext();

  useEffect(() => {
    moveOpenCVButton(isScrolled, buttonPos);

    window.addEventListener("scroll", () =>
      updateScrollPosition(setIsScrolled)
    );
    return () => {
      window.removeEventListener("scroll", () =>
        updateScrollPosition(setIsScrolled)
      );
    };
  }, [isScrolled]);

  return (
    <header className="py-4 my-4 w-screen fixed z-[1000] justify-center items-center pointer-events-none text-white flex flex-col font-rubik">
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
        <CVButton isScrolled={isScrolled} buttonPos={buttonPos} />
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
