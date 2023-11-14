import { motion, useAnimation } from "framer-motion";
import "./Navbar.css";
import { useEffect, useRef, useState } from "react";
import NavigationButtons from "./sections/NavigationButtons";
import CVButton from "./sections/CVButton";
import clsx from "clsx";
import { useSectionContext } from "components/pages/Context";

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
      className={clsx(
        "gap-y-4 w-screen fixed z-[1000] justify-center items-center pointer-events-none text-white flex flex-col font-rubik",
        "md:p-6",
        "pb-4"
      )}
    >
      <p
        className={clsx(
          "py-1 px-10 rounded-b-lg pointer-events-none backdrop-blur bg-[#2a2a2a]/50 font-bold text-center text-[#C49B66]",
          "md:text-lg md:absolute md:left-0 md:[writing-mode:vertical-lr] md:px-1 md:py-10 md:top-10 md:rounded-lg",
          "text-sm rounded-b-lg"
        )}
        // animate={{ opacity: 1 }}
        // initial={{ opacity: 0 }}
      >
        {section}
      </p>

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
    </header>
  );
};

export default Navbar;
