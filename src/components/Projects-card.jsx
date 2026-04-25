import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function Projectscard({
  title,
  skills,
  tooltip,
  description,
  projectLink,
  featured = false,
}) {
  return (
    <motion.div
      className={`group relative w-full h-full`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-web-m/0 to-web-m/0 group-hover:from-web-m/20 group-hover:to-cyan-400/20 rounded-2xl blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100" />

      <div className="relative flex flex-col h-full bg-gray-900/80 border border-gray-700/60 group-hover:border-web-m/50 rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-sm">
        <div className="h-[3px] w-full bg-gradient-to-r from-web-m via-cyan-400 to-web-m/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div
          className={`flex flex-col flex-1 gap-4 ${featured ? "p-8" : "p-6"}`}
        >
          <div className="flex items-start justify-between gap-3">
            <h3
              className={`font-bold text-white group-hover:text-web-m transition-colors duration-300 leading-tight ${featured ? "text-2xl" : "text-lg"}`}
            >
              {title}
            </h3>
            <a
              href={projectLink}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-gray-800 border border-gray-700 hover:border-web-m hover:bg-gray-700 transition-all duration-200 mt-0.5"
              aria-label="View on GitHub"
            >
              <img
                src="/github-icon (1).svg"
                width={16}
                height={16}
                alt="GitHub"
                className="opacity-70 group-hover:opacity-100"
              />
            </a>
          </div>

          <p
            className={`text-gray-400 leading-relaxed flex-1 ${featured ? "text-base" : "text-sm"}`}
          >
            {description}
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {skills.map((url, index) => (
              <div
                key={index}
                title={tooltip[index]}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-800/80 border border-gray-700/60 hover:border-web-m/50 hover:bg-gray-800 transition-all duration-200 cursor-default"
              >
                <img
                  src={url}
                  width={14}
                  height={14}
                  alt={tooltip[index]}
                  className="shrink-0"
                />
                <span className="text-xs text-gray-400 font-medium whitespace-nowrap">
                  {tooltip[index]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

Projectscard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  projectLink: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string),
  tooltip: PropTypes.arrayOf(PropTypes.string),
  featured: PropTypes.bool,
};
