import PropTypes from "prop-types";
import { motion } from "framer-motion";
import ExperienceItem from "./ExperienceItem";
import pharma from "./animations/pharmacy.json";
import museum from "./animations/museum.json";
import research from "./animations/research.json";
import lab from "./animations/lab.json";
import { useEffect } from "react";
import { useAnimateOnce } from "./hooks/useAnimateOnce";

export default function Experience(props) {
  const controls = useAnimateOnce(props.condition === "#EXPERIENCE");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.condition]);

  const experiences = [
    {
      name: "PolySense Solutions",
      position: "Software Developer & Operations Specialist",
      date: "January 2025 – Present",
      animation: lab,
      description:
        "At PolySense Solutions, I design and deliver full-stack features across a Django and JavaScript IoT platform — improving application response times from 10s to 90ms through SQL optimization and N+1 query fixes, growing unit test coverage from 30% to 75%, and building Python/NumPy data ingestion pipelines to streamline client onboarding and reduce manual coordination by over 50%",
    },
    {
      name: "Caremate",
      position: "Frontend Developer",
      date: "May 2024 – Present",
      animation: pharma,
      description:
        "At Caremate, I optimized React components, boosted performance, and launched 6 new features in collaboration with the UI/UX and development team. I played a key role in planning, code reviews, and managing merge requests, ensuring seamless integration between frontend and backend systems. One of my proudest achievements was designing a customer communication framework using Postmark for email automation, cutting feedback and issue resolution time by 60%.",
    },
    {
      name: "Canadian Museum for Human Rights",
      position: "Software Developer",
      date: "Dec 2023 – April 2024",
      animation: museum,
      description:
        "As part of my university's co-op alternative program, I collaborated with the Canadian Museum for Human Rights to develop a fully local speech-to-text model featuring live transcription, automatic language detection, and seamless language switching. I fine-tuned a BERT-based model to achieve 90% accuracy with limited data and containerized the application using Docker, reducing deployment time by over 40%.",
    },
    {
      name: "Pacific Institute for the Mathematical Sciences",
      position: "Data Analyst",
      date: "October 2022 – April 2023",
      animation: research,
      description:
        "As a Data Analyst at PIMS, I worked with R to create visualizations and analyze data patterns. I used Python and NumPy for data collection and manipulation, and wrote research reports in LaTeX to present findings with precision and clarity.",
    },
  ];

  return (
    <>
      {props.condition === "#EXPERIENCE" ? (
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col w-full py-10 gap-10 min-h-[calc(100vh-80px)] px-4 max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <p className="text-web-m text-sm font-semibold tracking-widest uppercase">
              My Journey
            </p>
            <h1 className="text-white font-extrabold tracking-tight lg:text-5xl text-4xl leading-tight">
              Experience
            </h1>
            <p className="text-gray-400 text-base mt-1">
              You can download my resume from{" "}
              <a
                href="/resume.pdf"
                download
                className="text-web-m underline underline-offset-4 hover:text-cyan-400 transition-colors duration-200"
              >
                here
              </a>
              .
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-fr"
          >
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} className="h-full">
                <ExperienceItem {...exp} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ) : (
        <></>
      )}
    </>
  );
}

Experience.propTypes = {
  condition: PropTypes.string,
};