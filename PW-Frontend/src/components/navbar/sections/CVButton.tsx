import { AnimatePresence, motion } from "framer-motion";
import VariantsNavbar from "../variants";
import clsx from "clsx";

type Props = {
  textButton: string;
  fileUrl: string;
};

const CVButton = ({ textButton, fileUrl }: Props) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          className={clsx(
            "relative text-sm sm:flex h-10 w-32 rounded-xl items-center bg-white font-rubik font-semibold text-[#575757]",
            "hidden"
          )}
        >
          <motion.div
            variants={VariantsNavbar.hovered}
            whileHover="hover"
            className="relative px-3 py-2 text-sm  z-50 text-center w-full bg-white cursor-pointer rounded-xl"
          >
            <div className="relative overflow-hidden text-[#6e6e6e] z-30">
              <motion.button
                variants={VariantsNavbar.hoverButtonInactive}
                className="select-none"
              >
                {textButton}
              </motion.button>
              <motion.a
                className="absolute left-0 w-full text-black"
                initial={{ y: 12, opacity: 0 }}
                variants={VariantsNavbar.hoverButtonActive}
                href={fileUrl}
                target="_blank"
              >
                <button className="select-none">{textButton}</button>
              </motion.a>
            </div>
          </motion.div>

          {/* GLOW BUTTON */}
          <div className="absolute top-0 bottom-0 left-0 right-0 z-10">
            <div className="absolute border w-[80%] h-[60%] top-[50%] translate-y-[-50%] left-1 bg-[rgb(213,159,255)] blur-[15px]"></div>
            <div className="absolute border w-[80%] h-[60%] top-[50%] translate-y-[-50%] right-1 bg-[rgb(117,215,245)] blur-[15px]"></div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default CVButton;
