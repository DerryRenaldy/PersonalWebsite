import { AnimationControls, motion } from "framer-motion";
import VariantsNavbar from "../variants";

type Props = {
  isScrolled: boolean;
  buttonPos: AnimationControls;
};

const CVButton = ({ isScrolled, buttonPos }: Props) => {
  return (
    <>
      {!isScrolled && (
        <motion.div
          exit={{
            x: 50,
            opacity: 0,
            transition: {
              x: {
                duration: 0.5,
              },
            },
          }}
          layout
          animate={buttonPos}
          className="relative text-sm flex items-center font-rubik font-semibold text-[#575757]"
        >
          <motion.div
            variants={VariantsNavbar.hovered}
            whileHover="hover"
            className="relative z-50 px-3 py-2 text-sm text-center bg-white cursor-pointer rounded-xl"
          >
            <div className="relative overflow-hidden text-[#6e6e6e] z-30">
              <motion.button
                variants={VariantsNavbar.hoverButtonInactive}
                className="select-none"
              >
                Open CV
              </motion.button>
              <motion.a
                className="absolute left-0 text-black"
                initial={{ y: 12, opacity: 0 }}
                variants={VariantsNavbar.hoverButtonActive}
                href="https://cv.derryrenaldy.tech"
                target="_blank"
              >
                <button className="select-none">Open CV</button>
              </motion.a>
            </div>
          </motion.div>

          {/* GLOW BUTTON */}
          <div className="absolute top-0 bottom-0 left-0 right-0 z-10">
            <div className="absolute border w-[80%] h-[60%] top-[50%] translate-y-[-50%] left-1 bg-[rgb(213,159,255)] blur-[15px]"></div>
            <div className="absolute border w-[80%] h-[60%] top-[50%] translate-y-[-50%] right-1 bg-[rgb(117,215,245)] blur-[15px]"></div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default CVButton;
