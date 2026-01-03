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
          className="flex flex-col w-full py-10 gap-16 min-h-[calc(100vh-80px)] px-4"
        >
          <motion.div variants={sectionVariants}>
            <div className="flex flex-col items-start max-w-7xl mx-auto w-full">
              <h1 className="lg:text-2xl text-xl text-white font-extrabold mb-3">
                Programming Languages
              </h1>
              <hr className="w-52 border-web-m border-2 mb-6" />
              <SkillList
                skills={[
                  "python.svg",
                  "java.svg",
                  "C.svg",
                  "c-plusplus.svg",
                  "android-icon.svg",
                  "JUnit.svg",
                  "docker-icon.svg",
                  "git-icon.svg",
                ]}
                tooltip={[
                  "Python",
                  "Java",
                  "C",
                  "C++",
                  "Android Studio",
                  "JUnit",
                  "Docker",
                  "Git",
                ]}
              />
            </div>
          </motion.div>

          <motion.div variants={sectionVariants}>
            <div className="flex flex-col items-start max-w-7xl mx-auto w-full">
              <h1 className="lg:text-2xl text-xl text-white font-extrabold mb-3">
                Web Development
              </h1>
              <hr className="w-52 border-web-m border-2 mb-6" />
              <SkillList
                skills={[
                  "javascript.svg",
                  "typescript-icon.svg",
                  "html-5.svg",
                  "css-3.svg",
                  "react.svg",
                  "angular-icon.svg",
                  "nextjs-icon.svg",
                  "jquery.svg",
                  "tailwindcss-icon.svg",
                  "flask.svg",
                ]}
                tooltip={[
                  "JavaScript",
                  "TypeScript",
                  "HTML",
                  "CSS",
                  "React",
                  "Angular",
                  "Next.js",
                  "jQuery",
                  "TailwindCSS",
                  "Flask",
                ]}
              />
            </div>
          </motion.div>

          <motion.div variants={sectionVariants}>
            <div className="flex flex-col items-start max-w-7xl mx-auto w-full">
              <h1 className="lg:text-2xl text-xl text-white font-extrabold mb-3">
                Data Analytics
              </h1>
              <hr className="w-52 border-web-m border-2 mb-6" />
              <SkillList
                skills={[
                  "RStudio.svg",
                  "numpy.svg",
                  "pandas-icon.svg",
                  "matplotlib-icon.svg",
                  "seaborn-icon.svg",
                  "microsoft-power-bi.svg",
                  "tableau-icon.svg",
                  "SSIS.svg",
                  "databricks.svg",
                ]}
                tooltip={[
                  "RStudio",
                  "Numpy",
                  "Pandas",
                  "Matplotlib",
                  "Seaborn",
                  "PowerBI",
                  "Tableau",
                  "SSIS",
                  "Databricks",
                ]}
              />
            </div>
          </motion.div>

          <motion.div variants={sectionVariants}>
            <div className="flex flex-col items-start max-w-7xl mx-auto w-full">
              <h1 className="lg:text-2xl text-xl text-white font-extrabold mb-3">
                Databases, Tools & Technologies
              </h1>
              <hr className="w-52 border-web-m border-2 mb-6" />
              <SkillList
                skills={[
                  "aws.svg",
                  "microsoft-azure.svg",
                  "jira.svg",
                  "linear-icon.svg",
                  "bash-icon.svg",
                  "selenium.svg",
                  "cypress-icon.svg",
                  "mysql-icon.svg",
                  "postgresql.svg",
                  "neo4j.svg",
                ]}
                tooltip={[
                  "AWS",
                  "Azure",
                  "Jira",
                  "Linear",
                  "Bash",
                  "Selenium",
                  "Cypress",
                  "SQL",
                  "PostgreSQL",
                  "Neo4j",
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