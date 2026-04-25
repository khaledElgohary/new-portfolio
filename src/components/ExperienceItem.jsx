import PropTypes from "prop-types";
import Lottie from "react-lottie";

export default function ExperienceItem({ name, position, date, description, animation }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: JSON.parse(JSON.stringify(animation)),
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };

  return (
    <div className="group relative w-full h-full">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-web-m/0 to-web-m/0 group-hover:from-web-m/20 group-hover:to-cyan-400/20 rounded-2xl blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100" />

      <div className="relative flex flex-col h-full bg-gray-900/80 border border-gray-700/60 group-hover:border-web-m/50 rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-sm">
        <div className="h-[3px] w-full bg-gradient-to-r from-web-m via-cyan-400 to-web-m/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="flex flex-col flex-1 gap-4 p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <h3 className="text-white font-bold sm:text-3xl text-2xl leading-snug group-hover:text-web-m transition-colors duration-300">
                {name}
              </h3>
              <p className="text-web-m sm:text-2xl text-xl font-semibold">{position}</p>
              <p className="text-gray-500 text-sm font-medium tracking-wide mt-0.5">{date}</p>
            </div>
            <div className="shrink-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              <Lottie options={defaultOptions} height={70} width={70} isClickToPauseDisabled={true} />
            </div>
          </div>

          <div className="h-px w-full bg-gray-700/60 group-hover:bg-web-m/30 transition-colors duration-300" />

          <p className="text-gray-400 sm:text-lg text-md leading-relaxed flex-1">{description}</p>
        </div>
      </div>
    </div>
  );
}

ExperienceItem.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  position: PropTypes.string,
  animation: PropTypes.object,
};