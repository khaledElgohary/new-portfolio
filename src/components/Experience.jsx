import PropTypes from "prop-types";
import { motion } from "framer-motion";
import ExperienceItem from "./ExperienceItem";
import pharma from "./animations/pharmacy.json";
import museum from "./animations/museum.json";
import research from "./animations/research.json";
import lab from "./animations/lab.json"

import { useEffect} from "react";


export default function Experience(props) {
  
  useEffect(() => {
          window.scrollTo(0,0)
      }, [props.condition])


  return (
    <>
      {props.condition === "#EXPERIENCE" ? (
        <div className="flex flex-col justify-center align-center md:justify-normal md:ml-6 mt-10 text-white font-extrabold tracking-tight lg:text-3xl text-xl gap-10 w-auto">
          <motion.h1
            className="font-extrabold tracking-tight lg:text-5xl text-4xl ml-6"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            You can download my resume from{" "}
            <a
              href="/resume.pdf"
              className="text-web-m underline cursor-pointer"
              download={true}
            >
              here
            </a>
          </motion.h1>
          <div className="grid lg:grid-cols-2 justify-center align-center gap-8 py-2 px-3">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-fit"
            >
              <ExperienceItem
                description="At PolySense, I work in a dual role combining operations and full-stack development, where I enhanced internal tools, improved platform reliability, and delivered several key features across our Django and JavaScript stack. I collaborated closely with product and engineering teams to streamline workflows, optimize data handling, and maintain frontend-backend consistency. One of my most impactful contributions was building a full-featured annotation and reporting system for amCharts, allowing precise data tracking, editing, and exporting—improving user insight and platform usability across clients."
                name="PolySense Solutions"
                date="January 2025 - Present"
                position="Operations & Technical Specialist"
                animation={lab}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay:0.4 }}
            >
              <ExperienceItem
                description="At Caremate, I'm working as a Frontend Developer, where I optimized React components, boosted performance, and launched five new features in collaboration with the UI/UX and development team. I played a key role in planning, code reviews, and managing merge requests, ensuring seamless integration between frontend and backend systems. One of my proudest achievements was designing and implementing a customer communication framework using Postmark for email automation, cutting feedback and issue resolution time by 60%."
                name="Caremate"
                date="May 2024 - Present"
                position="Frontend Developer"
                animation={pharma}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <ExperienceItem
                description="As part of my university's co-op alternative program, I collaborated with the Canadian Museum for Human Rights on an industrial project to develop a fully local speech-to-text model. The system featured live transcription, automatic language detection, and seamless language switching. I fine-tuned a BERT-based model to achieve 90% accuracy with limited data and containerized the application using Docker, reducing deployment time by over 40%."
                name="Canadian Museum for Human Rights"
                date="Dec 2023 - April 2024"
                position="Software Developer"
                animation={museum}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <ExperienceItem
                description="As a Data Analyst at the Pacific Institute for the Mathematical Sciences, I worked with R to create visualizations and analyze data patterns. I used Python and Numpy for data collection and manipulation and wrote research reports in LaTeX to present findings with precision and clarity."
                name="Pacific Institute for the Mathematical Sciences"
                date="October 2022 - April 2023"
                position="Software Developer"
                animation={research}
              />
            </motion.div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

Experience.propTypes = {
  condition: PropTypes.string,
};
