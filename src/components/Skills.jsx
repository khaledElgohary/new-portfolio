import PropTypes from "prop-types";

export default function Skills(props) {
    return (
        <>
            {props.condition === "#SKILLS" ? (
                <div className="flex flex-col">
                    <h1 className="lg:text-5xl text-4xl text-white font-extrabold py-20 flex flex-row justify-center">Hello world</h1>
                </div>
            ): (
                <></>        
            )}
        </>
    )
}

Skills.propTypes = {
    condition: PropTypes.string,
}