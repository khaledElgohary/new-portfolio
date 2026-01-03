import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { ReactTyped } from "react-typed";
import { Download, ArrowRight, Terminal, Server, Code2 } from "lucide-react";
import { Button } from "./ui/button";
import { useAnimateOnce } from "./hooks/useAnimateOnce";

export default function Introduction(props) {
  const controls = useAnimateOnce(props.condition === "#ABOUT");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const aboutVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 1.2,
      },
    },
  };

  const terminalVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 1.5,
      },
    },
  };

  const handleProjectsClick = (e) => {
    e.preventDefault();
    props.setCondition("#PROJECTS");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.condition]);

  return props.condition === "#ABOUT" ? (
    <div className="flex items-center text-white justify-center min-h-[calc(100vh-80px)] px-5">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="w-full"
      >
        <div className="flex items-center justify-center w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center max-w-8xl justify-center">
            <div className="space-y-8">
              <div className="flex flex-col gap-3 justify-center text-left">
                <motion.div
                  variants={itemVariants}
                  className="flex items-center justify-start gap-3"
                >
                  <h1 className="text-xl xl:text-3xl font-extrabold text-web-m">
                    Hello, I'm
                  </h1>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h1 className="text-5xl xl:text-7xl font-extrabold">
                    Khaled Elgohary
                  </h1>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h1 className="text-4xl xl:text-6xl font-extrabold opacity-50">
                    <ReactTyped
                      strings={[
                        "Software Developer",
                        "IT Enthusiast",
                        "Problem Solver",
                        "Lifelong Learner",
                      ]}
                      typeSpeed={80}
                      backSpeed={40}
                      loop
                      className="text-web-m"
                      cursorChar="|"
                      showCursor={true}
                      style={{ color: "inherit" }}
                    />
                  </h1>
                </motion.div>
              </div>

              <motion.div
                variants={aboutVariants}
                className="text-left text-2xl text-gray-400 max-w-3xl"
              >
                Full-stack developer with a passion for IT operations and
                cybersecurity, focused on building resilient, secure systems
                from code to infrastructure.
              </motion.div>

              <motion.div
                variants={aboutVariants}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 bg-web-m text-black border-none hover:bg-web-m/70 transition-all duration-300 h-12 w-52"
                  onClick={handleProjectsClick}
                >
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 bg-gray-800 border-none h-12 w-52"
                  asChild
                >
                  <a href="/resume.pdf" download>
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </div>

            <motion.div
              variants={terminalVariants}
              className="relative flex justify-center lg:justify-end mr-10"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-web-m/20 blur-3xl rounded-full scale-75" />

                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-14 lg:p-14 space-y-6 w-full max-w-2xl lg:max-w-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-4 text-xs text-gray-400 font-mono">
                      ~/developer
                    </span>
                  </div>

                  <div className="font-mono text-base lg:text-lg space-y-2">
                    <p className="text-gray-400">
                      <span className="text-web-m">const</span> developer ={" "}
                      {"{"}
                    </p>
                    <p className="pl-4">
                      <span className="text-gray-400">name:</span>{" "}
                      <span className="text-green-400">"Khaled Elgohary"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-gray-400">role:</span>{" "}
                      <span className="text-green-400">"Full Stack Dev"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-gray-400">interests:</span> [
                    </p>
                    <p className="pl-8">
                      <span className="text-green-400">"Cloud"</span>,
                    </p>
                    <p className="pl-8">
                      <span className="text-green-400">"DevOps"</span>,
                    </p>
                    <p className="pl-8">
                      <span className="text-green-400">"IT Operations"</span>
                    </p>
                    <p className="pl-4">],</p>
                    <p className="pl-4">
                      <span className="text-gray-400">available:</span>{" "}
                      <span className="text-web-m">true</span>
                    </p>
                    <p className="text-gray-400">{"}"}</p>
                  </div>

                  <div className="absolute -top-4 -right-4 p-3 lg:p-4 bg-gray-800 rounded-xl border border-gray-700 shadow-lg shadow-web-m/20 animate-float">
                    <Terminal className="w-6 h-6 lg:w-7 lg:h-7 text-web-m" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 p-3 lg:p-4 bg-gray-800 rounded-xl border border-gray-700 shadow-lg shadow-web-m/20 animate-float delay-300">
                    <Server className="w-6 h-6 lg:w-7 lg:h-7 text-web-m" />
                  </div>
                  <div className="absolute top-1/2 -right-8 lg:-right-10 p-3 lg:p-4 bg-gray-800 rounded-xl border border-gray-700 shadow-lg shadow-web-m/20 animate-float delay-500">
                    <Code2 className="w-6 h-6 lg:w-7 lg:h-7 text-web-m" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  ) : (
    <></>
  );
}

Introduction.propTypes = {
  condition: PropTypes.string,
  setCondition: PropTypes.func,
};
