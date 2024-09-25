import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ServiceCard from "./components/ServiceCard";
import SectionWrapper from "../hoc/SectionWrapper";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Julian is a versatile developer with expertise in mobile and web
        development across diverse industries. Proficient in Flutter, ReactJS,
        and Next.js, I&apos;ve built scalable apps from transportation to smart
        home solutions. I excel in MVC architecture, microcontroller integration, and geolocation services.
      </motion.p>

      <div className=" mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, "about", "");

export default WrappedAbout;