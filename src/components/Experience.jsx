import PropTypes from "prop-types";
import ExperienceItem from "./ExperienceItem";
import pharma from "./animations/pharmacy.json"
import museum from "./animations/museum.json"
import research from "./animations/research.json"
import residence from "./animations/residence.json"


export default function Experience(props) {


    return (
        <>
            {props.condition === '#EXPERIENCE' ? (
                <>
                    <div className="flex flex-col ml-6 mt-10 text-white font-extrabold tracking-tight lg:text-3xl text-xl gap-10">
                        <h1 className="font-extrabold tracking-tight lg:text-5xl text-4xl">You can download my resume from <a href="/resume.pdf" className="text-web-m underline cursor-pointer" download={true}>here</a></h1>
                        <div className="grid lg:grid-cols-2 justify-center gap-8 py-2">
                            <ExperienceItem description="At Caremate, I'm working as a Frontend Developer, where I optimized React components, boosted performance, and launched five new features in collaboration with the UI/UX and development team. I played a key role in planning, code reviews, and managing merge requests, ensuring seamless integration between frontend and backend systems. One of my proudest achievements was designing and implementing a customer communication framework using Postmark for email automation, cutting feedback and issue resolution time by 60%." name="Caremate" date="May 2024 - Present" position="Frontend Developer" animation={pharma } />
                            <ExperienceItem description="As part of my university's co-op alternative program, I collaborated with the Canadian Museum for Human Rights on an industrial project to develop a fully local speech-to-text model. The system featured live transcription, automatic language detection, and seamless language switching. I fine-tuned a BERT-based model to achieve 90% accuracy with limited data and containerized the application using Docker, reducing deployment time by over 40%." name="Canadian Museum for Human Rights" date="Dec 2023 - April 2024" position="Software Developer" animation={museum } />
                            <ExperienceItem description="As a Data Analyst at the Pacific Institute for the Mathematical Sciences, I worked with R to create visualizations and analyze data patterns. I used Python and Numpy for data collection and manipulation and wrote research reports in LaTeX to present findings with precision and clarity." name="Pacific Institute for the Mathematical Sciences" date="October 2022 - April 2023" position="Software Developer" animation={research } />
                            <ExperienceItem description="As a Senior Resident Advisor at the University of Manitoba, I led the design and execution of engaging programs for the Residence community, aligning with the Residence Life Programming Model to foster connection and inclusion. I also mentored and supported Resident Advisors and Residential Assistants, promoting teamwork and personal growth while building a strong, cohesive community through leadership initiatives." name="University of Manitoba " date="August 2022 - April 2024" position="Senior Resident Advisor" animation={residence } />

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