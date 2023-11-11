import clsx from "clsx";
import { AnimationControls, motion } from "framer-motion";

type Props = {
  ImageURL: string;
  Control: AnimationControls;
};

const ScrollIndicator = ({ ImageURL, Control }: Props) => {
  return (
    <motion.div
      className={clsx(
        "absolute flex font-rubik items-center justify-center md:text-sm text-white pointer-events-none md:right-10 md:bottom-10 font-extralight",
        "right-6 bottom-6 text-xs"
      )}
      animate={Control}
    >
      <div>Scroll to explore</div>
      <div
        className={clsx(
          "md:p-2 ml-2 bg-white border md:rounded-xl arrowContainer",
          "rounded-md p-1"
        )}
      >
        <img
          className={clsx(
            "md:w-[16px] md:h-[16px] arrowScroll",
            "w-[12px] h-[12px]"
          )}
          src={ImageURL}
          alt="scroll"
        />
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;
