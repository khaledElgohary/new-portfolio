import PropTypes from "prop-types";
import { motion } from "framer-motion";
import SkillList from "./Skill-list";
import { useEffect } from "react";
import { useAnimateOnce } from "./hooks/useAnimateOnce";

export default function Skills(props) {
  const controls = useAnimateOnce(props.condition === "#SKILLS");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.condition]);

  return (
    <>
      {props.condition === "#SKILLS" ? (
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col w-full py-10 gap-16 min-h-[calc(100vh-80px)] px-4 max-w-7xl mx-auto"
        >
          <motion.div variants={sectionVariants}>
            <div className="flex flex-col items-start w-full max-w-7xl">
              <h1 className="lg:text-2xl text-xl text-white font-extrabold  mb-3">
                Programming Languages
              </h1>
              <hr className="w-52 border-web-m border-2 mb-6" />
              <SkillList
                skills={[
                  "python.svg",
                  "java.svg",
                  "javascript.svg",
                  "typescript-icon.svg",
                  "c-plusplus.svg",
                  "c-sharp.svg",
                  "android-icon.svg",
                ]}
                tooltip={[
                  "Python",
                  "Java",
                  "JavaScript",
                  "TypeScript",
                  "C++",
                  "C#",
                  "Android Studio",
                ]}
              />
            </div>
          </motion.div>

          <motion.div variants={sectionVariants}>
            <div className="flex flex-col items-start w-full max-w-7xl">
              <h1 className="lg:text-2xl text-xl text-white font-extrabold mb-3">
                Web Development
              </h1>
              <hr className="w-52 border-web-m border-2 mb-6" />
              <SkillList
                skills={[
                  "html-5.svg",
                  "css-3.svg",
                  "react.svg",
                  "nextjs-icon.svg",
                  "tailwindcss-icon.svg",
                  "flask.svg",
                  "django-icon.svg"
                ]}
                tooltip={[
                  "HTML",
                  "CSS",
                  "React",
                  "Next.js",
                  "TailwindCSS",
                  "Flask",
                  "Django"
                ]}
              />
            </div>
          </motion.div>

          <motion.div variants={sectionVariants}>
            <div className="flex flex-col items-start w-full max-w-7xl">
              <h1 className="lg:text-2xl text-xl text-white font-extrabold mb-3">
                Data Analytics
              </h1>
              <hr className="w-52 border-web-m border-2 mb-6" />
              <SkillList
                skills={[
                  "RStudio.svg",
                  "numpy.svg",
                  "pandas-icon.svg",
                  "microsoft-power-bi.svg",
                  "tableau-icon.svg",
                  "SSIS.svg",
                ]}
                tooltip={[
                  "RStudio",
                  "Numpy",
                  "Pandas",
                  "PowerBI",
                  "Tableau",
                  "SSIS",
                ]}
              />
            </div>
          </motion.div>

          <motion.div variants={sectionVariants}>
            <div className="flex flex-col items-start w-full max-w-7xl">
              <h1 className="lg:text-2xl text-xl text-white font-extrabold mb-3">
                Databases, Tools & Technologies
              </h1>
              <hr className="w-52 border-web-m border-2 mb-6" />
              <SkillList
                skills={[
                  "aws.svg",
                  "jira.svg",
                  "linear-icon.svg",
                  "bash-icon.svg",
                  "selenium.svg",
                  "mysql-icon.svg",
                  "postgresql.svg",
                  "neo4j.svg",
                  "docker-icon.svg",
                  "git-icon.svg",
                ]}
                tooltip={[
                  "AWS",
                  "Jira",
                  "Linear",
                  "Bash",
                  "Selenium",
                  "MySQL",
                  "PostgreSQL",
                  "Neo4j",
                  "Docker",
                  "Git",
                ]}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <></>
      )}
    </>
  );
}

Skills.propTypes = {
  condition: PropTypes.string,
};