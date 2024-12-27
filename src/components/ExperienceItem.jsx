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
        <div className="flex flex-wrap ml-6  text-black font-bold tracking-tight lg:text-2xl text-xl bg-blue-50 p-8 mr-8 border rounded-xl">
            <div className=" gap-10 z-0 ">
                <div className="flex flex-col gap-1 fit">
                    <div className="flex flex-row items-center gap-3">
                        <h1 className="font-extrabold">{props.name +" - " +props.position}</h1>
                        <p className="font-extralight text-lg">{props.date}</p>
                        <Lottie options={defaultOptions} height={100} width={100} isClickToPauseDisabled={true} />
                    </div>
                    <div className="px-4 lg:text-xl text-base ">
                        <p className="font-medium">{ [props.description]}</p>
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