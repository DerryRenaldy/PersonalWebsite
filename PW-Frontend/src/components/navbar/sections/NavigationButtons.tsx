import { motion, useAnimation } from "framer-motion";
import VariantsNavbar from "../variants";
import clsx from "clsx";
import CVButton from "./CVButton";
import { useSectionContext } from "components/pages/Context";
import { useEffect, useRef, useState } from "react";

const NavigationButtons = () => {
  const { section, isScrolledCtx } = useSectionContext();
  const [inputValue, setInputValue] = useState("Unknown");
  const positionInput = useAnimation();
  const positionButton = useAnimation();
  const inputRef = useRef<HTMLInputElement>(null!);

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
    if (event.target.value === "") {
      setInputValue("Unknown");
    }
  };

  useEffect(() => {
    document.body.style.overflow = "unset";
  }, []);

  useEffect(() => {
    if (isScrolledCtx) {
      positionInput.start({
        x: "101%",
        transition: {
          x: { duration: 1.5 },
          type: "tween",
          ease: "circOut",
        },
      });

      positionButton.start({
        x: "0%",
        type: "ease",
        transition: { x: { duration: 1.5, ease: "circIn" } },
      });
    } else {
      positionInput.start({
        x: "0%",
        transition: {
          x: {
            duration: 1.5,
            type: "tween",
            ease: "circIn",
          },
        },
      });

      positionButton.start({
        x: "101%",
        type: "ease",
        transition: { x: { duration: 1.5, ease: "circOut" } },
      });
    }
  }, [isScrolledCtx]);

  return (
    <div
      className={clsx(
        "relative flex flex-row justify-between items-center font-rubik p-[5px] rounded-2xl border border-[#626064] backdrop-blur bg-[#151515]/70",
        "md:gap-x-8",
        "gap-x-4"
      )}
    >
      <div
        className={clsx(
          "md:text-[24px] font-bold uppercase ml-2 h-full select-none",
          "text-[18px]"
        )}
      >
        <p className="">DR</p>
      </div>
      <div
        className={clsx(
          "relative flex flex-row h-full mr-[6px] justify-center items-center sm:text-sm font-bold text-[#575757] md:gap-x-2",
          "text-xs"
        )}
      >
        <div className="relative sm:h-10 h-6 flex flex-row overflow-hidden justify-center rounded-xl items-center">
          <motion.div
            className={clsx(
              "absolute z-[50] right-0 w-full gap-x-4 rounded-xl h-full flex flex-row font-rubik font-semibold"
            )}
            initial={{ x: 0 }}
            animate={positionInput}
            onAnimationStart={() => {
              // console.log("Start Animation");
              document.body.style.overflow = "hidden";
              inputRef.current.blur();
            }}
            onAnimationComplete={() => {
              // console.log("Complete Animation");
              document.body.style.overflow = "unset";
              inputRef.current.blur();
            }}
          >
            <input
              ref={inputRef}
              onChange={handleInputChange}
              maxLength={16}
              className="rounded-xl h-full w-full focus:outline-1 focus:outline-[#626064] text-[#6D6D6D] bg-[#303030] z-[100] px-6"
              placeholder="Enter Your Name..."
            />
          </motion.div>
          <div className="flex flex-row h-full rounded-xl">
            <div className={clsx("rounded-xl mr-2 overflow-hidden")}>
              <motion.div
                className={clsx(
                  "flex flex-row gap-x-2 h-full rounded-xl justify-center items-center"
                )}
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

            {/* NAME CONTAINER */}
            <div
              className={clsx(
                "h-full bg-[#212023] border border-[#626064] rounded-xl px-3 ml-2 justify-center items-center",
                "md:flex",
                "hidden"
              )}
            >
              <div className="">Hi, {inputValue}!</div>
            </div>
          </div>
        </div>

        {/* BUTTON OPEN CV */}
        <CVButton
          textButton={
            section === "Home" || section === "Biography"
              ? "Open CV"
              : "3D Portfolio"
          }
          fileUrl={
            section === "Home"
              ? "https://cv.derryrenaldy.tech"
              : "https://drive.google.com/file/d/1R5tTl0XEhJTRB8-A-fD4hY9VspwrkVHX/view?usp=drive_link"
          }
        />
      </div>

      <div
        className={clsx(
          "absolute -translate-x-[50%] font-rubik sm:h-10 h-8 left-1/2 text-xs translate-y-[120%] font-semibold text-[#575757] bg-[#212023] border border-[#626064] rounded-xl px-3 ml-2 justify-center items-center",
          "md:hidden",
          "flex"
        )}
      >
        <div className="w-32 text-center">Hi, {inputValue}!</div>
      </div>
    </div>
  );
};

export default NavigationButtons;
