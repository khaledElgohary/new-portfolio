import PropTypes from 'prop-types';
import { motion, AnimatePresence } from "framer-motion"
import { useEffect } from 'react';
import { ReactTyped } from "react-typed";


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

    const handleContactClick = (e) => {
        e.preventDefault();
        props.setCondition("#CONTACT")
    }


    useEffect(() => {
          window.scrollTo(0,0)
      }, [props.condition])

    return props.condition === "#ABOUT" ? (
        <div className="flex items-center text-white justify-center min-h-[calc(100vh-80px)] px-5">
            <AnimatePresence mode="wait">
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="space-y-12"
                >
                    <div className="flex flex-col gap-10 justify-center text-center">
                        <motion.div variants={itemVariants} className="flex items-center justify-center gap-3">
                            <h1 className="text-xl lg:text-3xl font-extrabold text-web-m">Hello, I'm</h1>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <h1 className="text-4xl lg:text-6xl font-extrabold">Khaled Elgohary</h1>
                        </motion.div>
                            
                        <motion.div variants={itemVariants}>
                        <h1 className="text-4xl lg:text-6xl font-extrabold opacity-50">
                            <ReactTyped
                                strings={[
                                    "Software Developer",
                                    "IT Enthusiast",
                                    "Problem Solver",
                                    "Lifelong Learner"
                                ]}
                                typeSpeed={80}
                                backSpeed={40}
                                loop
                                className="text-web-m"
                                cursorChar="|"
                                showCursor={true}
                                style={{ color: 'inherit' }}
                            />
                        </h1> 
                    </motion.div>
                    </div>

                    <motion.div 
                        variants={aboutVariants}
                        className="justify-center text-center"
                    >
                        
                        
                        
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </div>
    ) : (
        <></>
    );
}

Introduction.propTypes = {
    condition: PropTypes.string,
    setCondition: PropTypes.func
};