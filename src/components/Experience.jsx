import PropTypes from "prop-types";

export default function Experience(props) {


    return (
        <>
            {props.condition === '#EXPERIENCE' ? (
                <>
                    <div className="flex flex-col ml-6 mt-10 text-white font-extrabold tracking-tight lg:text-3xl text-2xl">
                        <div className="flex flex-row justify-center">
                            
                        </div>
                    </div>
                </>
            ): (
                    <>

                    </>
            )} 
        </>
    )
}


Experience.propTypes = {
    condition:PropTypes.string,
}