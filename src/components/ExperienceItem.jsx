import PropTypes from "prop-types";
import Lottie from "react-lottie";

export default function ExperienceItem(props) {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: JSON.parse(JSON.stringify(props.animation)),
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
        
    }

    return (
        <div className="w-full text-black font-bold tracking-tight lg:text-2xl text-xl bg-blue-50 p-4 sm:p-6 md:p-8 border rounded-xl">
            <div className="z-0">
                <div className="flex flex-col gap-1 h-auto">
                    <div className="flex flex-col md:flex-row items-start sm:items-center gap-2 flex-wrap">
                        <div className="flex-grow">
                            <h1 className="font-extrabold text-lg md:text-xl lg:text-2xl">{props.name + " - " + props.position}</h1>
                            <p className="font-extralight text-sm md:text-base lg:text-lg">{props.date}</p>
                        </div>
                        <div className="block">
                            <Lottie options={defaultOptions} height={80} width={80} isClickToPauseDisabled={true} />
                        </div>
                    </div>
                    <div className="mt-2 lg:text-xl text-base">
                        <p className="font-medium">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

ExperienceItem.propTypes = {
    name: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    position: PropTypes.string,
    animation: PropTypes.object
}