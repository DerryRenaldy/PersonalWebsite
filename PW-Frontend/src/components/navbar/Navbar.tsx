import { AnimationControls, motion, useAnimation } from "framer-motion";
import "./Navbar.css";
import { useEffect, useState } from "react";
import NavigationButtons from "./sections/NavigationButtons";
import CVButton from "./sections/CVButton";
import clsx from "clsx";

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
    <header
      className={clsx(
        `justify-center pointer-events-none text-white flex font-nunito`,
        `py-4 my-4 w-[50%] fixed left-1/2 translate-x-[-50%] z-[1000]`
      )}
    >
      <motion.div
        initial={false}
        layout="position"
        // transition={{ layout: { duration: 5 } }}
        className="pointer-events-auto gap-x-4 rounded-2xl"
        // animate={{ boxShadow: "0px 10px 50px 2px #888888" }}
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
    </header>
  );
};

export default Navbar;
