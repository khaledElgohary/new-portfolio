import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { ReactTyped } from "react-typed";
import { Download, ArrowRight, Terminal, Server, Code2 } from "lucide-react";

export default function Introduction(props) {
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

  const handleContactClick = (e) => {
    e.preventDefault();
    props.setCondition("#CONTACT");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.condition]);

  return props.condition === "#ABOUT" ? (
    <div className="flex items-center text-white justify-center min-h-[calc(100vh-80px)] px-5">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <div className="flex items-center justify-center w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center max-w-6xl justify-center ">
            <div className="space-y-8">
              <div className="flex flex-col gap-10 justify-center text-center lg:text-left">
                <motion.div
                  variants={itemVariants}
                  className="flex items-center justify-center lg:justify-start gap-3"
                >
                  <h1 className="text-xl lg:text-3xl font-extrabold text-web-m">
                    Hello, I'm
                  </h1>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h1 className="text-4xl lg:text-6xl font-extrabold">
                    Khaled Elgohary
                  </h1>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h1 className="text-4xl lg:text-6xl font-extrabold opacity-50">
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
                className="text-center lg:text-left text-xl text-gray-300 max-w-3xl"
              >
                Full-stack developer with a passion for IT operations and
                cybersecurity, focused on building resilient, secure systems
                from code to infrastructure.
              </motion.div>
            </div>

            {/* Right Content - Terminal */}
            <motion.div
              variants={terminalVariants}
              className="relative flex justify-center lg:justify-end mr-5"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-web-m/20 blur-3xl rounded-full scale-75" />

                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 space-y-6 max-w-md">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-4 text-xs text-gray-400 font-mono">
                      ~/developer
                    </span>
                  </div>

                  <div className="font-mono text-sm space-y-2">
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

                  <div className="absolute -top-4 -right-4 p-3 bg-gray-800 rounded-xl border border-gray-700 shadow-lg shadow-web-m/20 animate-float">
                    <Terminal className="w-6 h-6 text-web-m" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 p-3 bg-gray-800 rounded-xl border border-gray-700 shadow-lg shadow-web-m/20 animate-float delay-300">
                    <Server className="w-6 h-6 text-web-m" />
                  </div>
                  <div className="absolute top-1/2 -right-8 p-3 bg-gray-800 rounded-xl border border-gray-700 shadow-lg shadow-web-m/20 animate-float delay-500">
                    <Code2 className="w-6 h-6 text-web-m" />
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
