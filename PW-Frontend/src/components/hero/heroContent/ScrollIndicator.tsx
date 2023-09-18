import { AnimationControls, motion } from "framer-motion";

type Props = {
  ImageURL: string;
  Control: AnimationControls;
};

const ScrollIndicator = ({ ImageURL, Control }: Props) => {
  return (
    <motion.div
      className="absolute flex items-center justify-center text-sm text-white pointer-events-none right-10 bottom-10 font-nunito font-extralight"
      animate={Control}
    >
      <div>Scroll to explore</div>
      <div className="p-2 ml-2 bg-white border rounded-xl arrowContainer">
        <img
          className="w-[16px] h-[16px] arrowScroll"
          src={ImageURL}
          alt="scroll"
        />
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;
