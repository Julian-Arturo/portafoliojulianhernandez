import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { mas } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import PropTypes from "prop-types";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("left", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl lg:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={`${name} project`}
            className="w-full h-full object-cover rounded-2xl"
            loading="lazy" 
          />

          {source_code_link && ( // Aquí verificamos si source_code_link existe
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                aria-label="View source code" 
              >
                <img
                  src={mas}
                  alt="source code icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          )}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  })).isRequired, 
  image: PropTypes.string.isRequired,
  source_code_link: PropTypes.string,
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects demonstrate my expertise as a versatile
          developer in both mobile and web development across a wide range of
          industries. Each project highlights my proficiency in Flutter,
          ReactJS, and Next.js, with links to code repositories and live demos.
          They showcase my ability to build scalable solutions, from
          transportation systems to smart home technologies, leveraging MVC
          architecture, microcontroller integration, and geolocation services to
          create user-centric, effective applications.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects
          .slice()
          .reverse()
          .map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
      </div>
    </>
  );
};

const WrappedWorks = SectionWrapper(Works, "works", ""); 

export default WrappedWorks;
