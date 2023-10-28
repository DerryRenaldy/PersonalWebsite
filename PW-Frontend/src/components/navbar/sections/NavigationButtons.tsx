import { motion } from "framer-motion";
import VariantsNavbar from "../variants";
import { useSectionContext } from "components/pages/Context";

const NavigationButtons = () => {
  const { section } = useSectionContext();

  return (
    <div className="relative flex flex-row justify-between px-2 py-2 rounded-2xl backdrop-blur bg-[#464646]/40 gap-x-10">
      <div className="text-[24px] font-extrabold uppercase ml-2 select-none">
        DR
      </div>
      <div className="mr-2 relative flex items-center text-sm font-bold text-[#575757] gap-x-4">
        {/* BUTTON 1 */}
        <motion.div
          className="relative overflow-hidden"
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
          className="relative overflow-hidden"
          variants={VariantsNavbar.hovered}
          whileHover="hover"
        >
          <motion.button
            variants={VariantsNavbar.hoverButtonInactive}
            className="select-none"
          >
            About
          </motion.button>
          <motion.a
            className="absolute left-0 text-white"
            initial={{ y: 12, opacity: 0 }}
            variants={VariantsNavbar.hoverButtonActive}
          >
            <button className="select-none">About</button>
          </motion.a>
        </motion.div>

        {/* BUTTON 3 */}
        <motion.div
          className="relative overflow-hidden"
          variants={VariantsNavbar.hovered}
          whileHover="hover"
        >
          <motion.button
            variants={VariantsNavbar.hoverButtonInactive}
            className="select-none"
          >
            Contacts
          </motion.button>
          <motion.a
            className="absolute left-0 text-white"
            initial={{ y: 12, opacity: 0 }}
            variants={VariantsNavbar.hoverButtonActive}
          >
            <button className="select-none">Contacts</button>
          </motion.a>
        </motion.div>
        <div className="text-white uppercase">{section}</div>
      </div>
    </div>
  );
};

export default NavigationButtons;
