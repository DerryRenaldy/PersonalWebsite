import { AnimationControls, motion } from "framer-motion";
import VariantsHero from "../variants";

type Props = {
  ImageURL: string;
  Control: AnimationControls;
};

const HoverIndicator = ({ ImageURL, Control }: Props) => {
  return (
    <motion.div
      variants={VariantsHero.child4}
      transition={{ duration: 0.5 }}
      className="pointer-events-none object absolute top-[30px] bottom-0 right-0 left-0"
    >
      <motion.div animate={Control} className="flex flex-col select-none">
        <h1 className="text-sm">Hover Me!</h1>
        <div className="flex justify-center ">
          <img src={ImageURL} alt="" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HoverIndicator;
