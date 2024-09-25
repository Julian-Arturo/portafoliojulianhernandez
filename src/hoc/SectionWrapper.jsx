import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName, additionalClasses = "") => {
  function HOC() {
    console.log("Rendering section wrapper with id:", idName);
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }} 
        className={`${styles.padding} max-w-7xl mx-auto relative ${additionalClasses}`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  }

  return HOC;
};

export default SectionWrapper;
