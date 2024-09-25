import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { yo } from "../assets";

const Hero = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col gap-5 items-center z-[10]`}>
        <div className="flex flex-row items-start gap-5 z-[30]">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-52 h-40 violet-gradient"></div>
          </div>

          <div>
            <h1 className={`${styles.heroHeadText}`}>
              Hi, I&apos;m <span className="text-[#915eff]">Julian</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Mobile and web developer across various industries. <br className="sm:block hidden" /> Skilled in Flutter, ReactJS, and Next.js
            </p>
          </div>
        </div>

        <div className="mt-0">
          <img
            src={yo}
            alt="Julian"
            className="sm:w-[40vw] md:w-[60vw] lg:w-[25vw] 2xl:w-[20vw] 3xl:w-[30vw] h-auto rounded-full object-cover z-[20]"
            width={400} 
            height={400} 

          />
        </div>
      </div>

      {!hasScrolled && (
        <div className="absolute md:bottom-10 bottom-10 w-full flex justify-center z-[15]">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      )}
    </section>
  );
};

export default Hero;
