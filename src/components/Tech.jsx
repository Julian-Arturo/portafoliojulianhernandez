import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const getGlowColor = (techName) => {
  const glowColors = {
    "html 5": "shadow-orange-500",
    "css 3": "shadow-blue-500",
    "javascript": "shadow-yellow-500",
    "typescript": "shadow-blue-400",
    "react js": "shadow-cyan-400",
    "flutter": "shadow-cyan-500",
    "tailwind css": "shadow-teal-400",
    "node js": "shadow-green-500",
    "mongodb": "shadow-green-600",
    "dart": "shadow-blue-600",
    "git": "shadow-orange-600",
    "figma": "shadow-purple-500",
    "firebase": "shadow-yellow-400",
  };

  return glowColors[techName.toLowerCase()] || "shadow-gray-400";
};

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          className={`w-20 h-20 max-md:w-14 max-md:h-14 flex items-center justify-center rounded-full bg-gray-200 p-2 shadow-lg ${getGlowColor(technology.name)}`}
          key={technology.name}
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-16 h-16 object-contain"
            width="64" 
            height="64"
            loading="lazy" 
          />
        </div>
      ))}
    </div>
  );
};

// Envolviendo el componente Tech con SectionWrapper
const WrappedTech = SectionWrapper(Tech, "tech", "");

export default WrappedTech;
