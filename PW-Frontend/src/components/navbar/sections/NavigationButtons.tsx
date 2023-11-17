import { motion, useAnimation } from "framer-motion";
import VariantsNavbar from "../variants";
import clsx from "clsx";
import CVButton from "./CVButton";
import { useSectionContext } from "components/pages/Context";
import { useEffect } from "react";

const NavigationButtons = () => {
  const { section, isScrolledCtx } = useSectionContext();
  const positionInput = useAnimation();
  const positionButton = useAnimation();

  useEffect(() => {
    if (isScrolledCtx) {
      positionInput.start({
        x: "101%",
        type: "ease",
        transition: { x: { duration: 1, ease: "circOut" } },
      });

      positionButton.start({
        x: "0%",
        type: "ease",
        transition: { x: { duration: 1, ease: "circIn" } },
      });
    } else {
      positionInput.start({
        x: "0%",
        type: "spring",
        transition: { x: { duration: 1, ease: "circIn" } },
      });

      positionButton.start({
        x: "101%",
        type: "ease",
        transition: { x: { duration: 1, ease: "circOut" } },
      });
    }
  }, [isScrolledCtx]);

  return (
    <div
      className={clsx(
        "relative flex flex-row justify-between items-center font-rubik p-[5px] rounded-2xl backdrop-blur bg-[#1D1D1D]/70",
        "md:gap-x-10",
        "gap-x-4"
      )}
    >
      <div
        className={clsx(
          "md:text-[24px] font-extrabold uppercase ml-2 h-full select-none",
          "text-[18px]"
        )}
      >
        <p className="">DR</p>
      </div>
      <div
        className={clsx(
          "relative flex flex-row h-full mr-[6px] justify-center items-center md:text-sm font-bold text-[#575757] md:gap-x-2",
          "text-xs"
        )}
      >
        <div className="relative h-10 flex flex-row overflow-hidden justify-center rounded-xl items-center">
          <motion.input
            className="rounded-xl absolute right-0 w-full h-full focus:outline-1 focus:outline-[#626064] text-[#6D6D6D] bg-[#303030] font-rubik font-semibold z-[100] px-6"
            placeholder="Enter Your Name..."
            initial={{ x: 0 }}
            animate={positionInput}
            onAnimationStart={() => {
              // console.log("Start Animation");
              document.body.style.overflow = "hidden";
            }}
            onAnimationComplete={() => {
              // console.log("Complete Animation");
              document.body.style.overflow = "unset";
            }}
          />
          <div className="flex flex-row h-full rounded-xl">
            <div className="rounded-xl overflow-hidden">
              <motion.div
                className="flex flex-row gap-x-2 h-full rounded-xl justify-center items-center"
                initial={{ x: 0 }}
                animate={positionButton}
              >
                {/* BUTTON 1 */}
                <motion.div
                  className="relative overflow-hidden font-semibold"
                  variants={VariantsNavbar.hovered}
                  whileHover="hover"
                >
                  <motion.button
                    variants={VariantsNavbar.hoverButtonInactive}
                    className="select-none"
                  >
                    Home
                  </motion.button>
                  <motion.a
                    className="absolute left-0 text-white"
                    initial={{ y: 12, opacity: 0 }}
                    variants={VariantsNavbar.hoverButtonActive}
                  >
                    <button className="select-none">Home</button>
                  </motion.a>
                </motion.div>

                {/* BUTTON 2 */}
                <motion.div
                  className="relative overflow-hidden font-semibold"
                  variants={VariantsNavbar.hovered}
                  whileHover="hover"
                >
                  <motion.button
                    variants={VariantsNavbar.hoverButtonInactive}
                    className="select-none"
                  >
                    Biography
                  </motion.button>
                  <motion.a
                    className="absolute left-0 text-white"
                    initial={{ y: 12, opacity: 0 }}
                    variants={VariantsNavbar.hoverButtonActive}
                  >
                    <button className="select-none">Biography</button>
                  </motion.a>
                </motion.div>

                {/* BUTTON 3 */}
                <motion.div
                  className="relative overflow-hidden font-semibold"
                  variants={VariantsNavbar.hovered}
                  whileHover="hover"
                >
                  <motion.button
                    variants={VariantsNavbar.hoverButtonInactive}
                    className="select-none"
                  >
                    Expertise
                  </motion.button>
                  <motion.a
                    className="absolute left-0 text-white"
                    initial={{ y: 12, opacity: 0 }}
                    variants={VariantsNavbar.hoverButtonActive}
                  >
                    <button className="select-none">Expertise</button>
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
            <div className="h-full bg-[#212023] border border-[#626064] rounded-xl px-3 ml-2 flex justify-center items-center">
              <div className="">testing</div>
            </div>
          </div>
        </div>

        {/* BUTTON OPEN CV */}
        <CVButton
          textButton={section === "Home" ? "Open CV" : "3D Portfolio"}
          fileUrl={
            section === "Home"
              ? "https://cv.derryrenaldy.tech"
              : "https://drive.google.com/file/d/1R5tTl0XEhJTRB8-A-fD4hY9VspwrkVHX/view?usp=drive_link"
          }
        />
      </div>
    </div>
  );
};

export default NavigationButtons;
