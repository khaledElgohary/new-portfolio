import Projectscard from "./Projects-card";
import PropTypes from "prop-types";
import { motion } from "framer-motion"; // Import motion from framer-motion

export default function Projects(props) {
  return (
    <>
      {props.condition === "#PROJECTS" ? (
        <div className="flex flex-col">
          <div className="ml-6 mt-10 gap-6 max-w-screen-md text-white font-extrabold tracking-tight lg:text-5xl text-4xl">
            <h1>
              Feel free to checkout my{" "}
              <a
                href="https://github.com/khaledElgohary"
                target="_blank"
                className="text-web-m underline"
              >
                Github
              </a>
            </h1>
          </div>

          <div className="flex flex-wrap justify-center mr-4 py-3 px-4">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Projectscard
                title="High School Hub 🏫"
                skills={['git-icon.svg','android-icon.svg', 'mysql-icon.svg','java.svg']}
                tooltip={['Git','Android Studio', 'SQL', 'Java']}
                description="Android app that lets you connect with long lost high school friends and staff, without the traditional chat feature in common social media apps."
                projectLink="https://github.com/khaledElgohary/high-school-hub"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Projectscard
                title="Elopie website"
                skills={['python.svg','git-icon.svg','selenium.svg','html-5.svg','css-3.svg','mysql-icon.svg']}
                tooltip={['Python','Git','Selenium','HTML','CSS','SQL']}
                description="Elopie website scrapes data from the uofm registration website aurora, to find courses eligible for transfer credits across all faculties."
                projectLink="https://github.com/khaledElgohary/Elopie-wesbite"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Projectscard
                title="Portfolio website"
                skills={['react.svg','javascript.svg','tailwindcss-icon.svg','vite.svg', 'vercel-icon.svg']}
                tooltip={['React', 'JavaScript','TailwindCSS','Vite', 'Vercel']}
                description="This is the website you are currently viewing, and it is the second portfolio website I have designed and deployed."
                projectLink="https://khaledelgohary.dev/"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Projectscard
                title="USA Flights Analyzer"
                skills={['java.svg','mysql-icon.svg','git-icon.svg']}
                tooltip={['Java','SQL','Git']}
                description="Flights Analyzer is a terminal UI application that provides peeks from a normalized USA flights DB based on user input."
                projectLink="https://github.com/Aymanhki/FlightsAnalyzer"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <Projectscard
                title="Julisten Website"
                skills={['javascript.svg','html-5.svg','css-3.svg','git-icon.svg']}
                tooltip={['JavaScript','HTML','CSS','Git']}
                description="A website design inspired by spotify with added features such as drag and drop media queue with live visualization, and also applied HCI priniciples."
                projectLink="https://github.com/khaledElgohary/Julisten-Website"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              <Projectscard
                title="Message Board"
                skills={['python.svg']}
                tooltip={['Python']}
                description="Message board application in Python that supports sending POST and GET requests to view a certain message or an entire message board, using sockets library."
                projectLink="https://github.com/khaledElgohary/Message-Board"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 2.4 }}
            >
              <Projectscard
                title="Chess game"
                skills={['java.svg']}
                tooltip={['Java']}
                description="A simple chess game written in Java with verified logic, and designed using simple Java StdDraw. One of the first projects I worked on !"
                projectLink="https://github.com/khaledElgohary/Chess-Game"
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

Projects.propTypes = {
  condition: PropTypes.string,
};
