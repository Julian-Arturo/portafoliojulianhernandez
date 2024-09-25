import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import PropTypes from "prop-types";
import { fadeIn } from "../../utils/motion";

const ServiceCard = ({ index, title, icon, tags }) => {
  const [showTags, setShowTags] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 780);
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Tilt
      className="xs:w-[300px] lg:w-[250px] w-full"
      options={{
        max: isMobile ? 0 : 45,
        scale: isMobile ? 0 : 1.05,
        speed: isMobile ? 0 : 450,
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.8)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        onMouseEnter={() => !isMobile && setShowTags(true)}
        onMouseLeave={() => !isMobile && setShowTags(false)}
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[260px] flex justify-evenly items-center flex-col">
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
            loading="lazy"
            width={64}
            height={64}
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
        <motion.div
          className="my-4 flex flex-wrap gap-2 px-5 font-bold"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: showTags || isMobile ? "auto" : 0,
            opacity: showTags || isMobile ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }} // Ajustar duración y easing
          style={{
            overflow: "hidden",
          }}
        >
          {tags.map((tag) => (
            <p key={`card-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </motion.div>
      </motion.div>
    </Tilt>
  );
};

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ServiceCard;
