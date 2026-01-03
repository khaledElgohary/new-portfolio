import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function SkillList({ skills, tooltip }) {
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex flex-wrap justify-start items-center gap-4 lg:gap-6 px-4 py-6 max-w-7xl mx-auto">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="group relative"
        >
          <div
            className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 
                         rounded-2xl transition-all duration-300 
                         hover:border-web-m hover:shadow-lg hover:shadow-web-m/20
                         h-[140px] w-[160px] cursor-pointer
                         flex flex-col"
          >
            <div className="flex-1 flex items-center justify-center pt-6 px-6">
              <div className="relative">
                <div
                  className="absolute inset-0 bg-web-m/20 blur-xl rounded-full scale-0 
                               group-hover:scale-100 transition-transform duration-300"
                />
                <img
                  src={skill}
                  width={50}
                  height={50}
                  alt={tooltip[index]}
                  className="relative z-10 transition-transform duration-300 
                            group-hover:scale-110 drop-shadow-lg"
                />
              </div>
            </div>

            <div className="pb-6 px-3 justify-center flex">
              <span
                className="text-lg font-semibold text-gray-300 group-hover:text-web-m 
                           transition-colors duration-300 justify-center"
              >
                {tooltip[index]}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

SkillList.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  tooltip: PropTypes.arrayOf(PropTypes.string).isRequired,
};
