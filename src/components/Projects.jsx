import Projectscard from "./Projects-card";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useAnimateOnce } from "./hooks/useAnimateOnce";
import { useEffect } from "react";

export default function Projects(props) {
  const controls = useAnimateOnce(props.condition === "#PROJECTS");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
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

  const projects = [
    {
      title: "High School Hub 🏫",
      skills: ["git-icon.svg", "android-icon.svg", "mysql-icon.svg", "java.svg"],
      tooltip: ["Git", "Android Studio", "SQL", "Java"],
      description:
        "Android app that lets you connect with long lost high school friends and staff, without the traditional chat feature in common social media apps.",
      projectLink: "https://github.com/khaledElgohary/high-school-hub",
      featured: true,
    },
    {
      title: "Elopie Website",
      skills: ["python.svg", "git-icon.svg", "selenium.svg", "html-5.svg", "css-3.svg", "mysql-icon.svg"],
      tooltip: ["Python", "Git", "Selenium", "HTML", "CSS", "SQL"],
      description:
        "Scrapes data from the UofM registration website Aurora to find courses eligible for transfer credits across all faculties.",
      projectLink: "https://github.com/khaledElgohary/Elopie-wesbite",
    },
    {
      title: "Portfolio Website",
      skills: ["react.svg", "javascript.svg", "tailwindcss-icon.svg", "vite.svg", "vercel-icon.svg"],
      tooltip: ["React", "JavaScript", "TailwindCSS", "Vite", "Vercel"],
      description:
        "This is the website you are currently viewing — the second portfolio I've designed and deployed.",
      projectLink: "https://khaledelgohary.dev/",
    },
    {
      title: "USA Flights Analyzer",
      skills: ["java.svg", "mysql-icon.svg", "git-icon.svg"],
      tooltip: ["Java", "SQL", "Git"],
      description:
        "Terminal UI application that surfaces insights from a normalized USA flights database based on user input.",
      projectLink: "https://github.com/Aymanhki/FlightsAnalyzer",
    },
    {
      title: "Julisten Website",
      skills: ["javascript.svg", "html-5.svg", "css-3.svg", "git-icon.svg"],
      tooltip: ["JavaScript", "HTML", "CSS", "Git"],
      description:
        "Spotify-inspired music player with drag-and-drop media queue, live visualization, and applied HCI principles.",
      projectLink: "https://github.com/khaledElgohary/Julisten-Website",
    },
    {
      title: "Message Board",
      skills: ["python.svg"],
      tooltip: ["Python"],
      description:
        "Message board app in Python supporting POST and GET requests to view messages or entire boards via the sockets library.",
      projectLink: "https://github.com/khaledElgohary/Message-Board",
    },
    {
      title: "Chess Game",
      skills: ["java.svg"],
      tooltip: ["Java"],
      description:
        "A simple chess game written in Java with verified logic and StdDraw visuals. One of the first projects I worked on!",
      projectLink: "https://github.com/khaledElgohary/Chess-Game",
    },
  ];

  return (
    <>
      {props.condition === "#PROJECTS" ? (
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col w-full py-10 gap-10 min-h-[calc(100vh-80px)] px-4 max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <p className="text-web-m text-sm font-semibold tracking-widest uppercase">
              My Work
            </p>
            <h1 className="text-white font-extrabold tracking-tight lg:text-5xl text-4xl leading-tight">
              Projects
            </h1>
            <p className="text-gray-400 text-base mt-1">
              Feel free to check out my{" "}
              <a
                href="https://github.com/khaledElgohary"
                target="_blank"
                rel="noreferrer"
                className="text-web-m underline underline-offset-4 hover:text-cyan-400 transition-colors duration-200"
              >
                GitHub
              </a>{" "}
              for more.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={project.featured ? "md:col-span-2 lg:col-span-2" : ""}
              >
                <Projectscard {...project} />
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

Projects.propTypes = {
  condition: PropTypes.string,
};