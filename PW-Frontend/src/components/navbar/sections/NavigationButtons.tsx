import { motion } from "framer-motion";
import VariantsNavbar from "../variants";
import clsx from "clsx";

const NavigationButtons = () => {
  return (
    <div
      className={clsx(
        "relative flex flex-row justify-between font-rubik p-2 rounded-2xl backdrop-blur bg-[#464646]/40",
        "md:gap-x-10",
        "gap-x-4"
      )}
    >
      <div
        className={clsx(
          "md:text-[24px] font-extrabold uppercase ml-2 select-none",
          "text-[18px]"
        )}
      >
        DR
      </div>
      <div
        className={clsx(
          "mr-2 relative flex items-center md:text-sm font-bold text-[#575757] md:gap-x-4",
          "text-xs gap-x-2"
        )}
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
      </div>
    </div>
  );
};

export default NavigationButtons;
