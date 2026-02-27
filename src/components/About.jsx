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
        Senior Flutter Developer with experience building scalable mobile applications for iOS and Android using Flutter 3.x and Dart.
        Strong background in Clean Architecture and MVVM, advanced state management using BLoC and Provider, and deep experience integrating 
        Firebase (Auth, Firestore, Cloud Messaging, Crashlytics), GraphQL APIs, and REST services. Experienced in CI/CD pipelines, testing, 
        JWT authentication, Atomic Design, and Monorepos using Melos. Passionate about delivering high-performance, maintainable solutions.
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