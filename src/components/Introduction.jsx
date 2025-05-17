import PropTypes from 'prop-types';
import { motion, AnimatePresence } from "framer-motion"
import { useEffect } from 'react';

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
        <div className="text-white max-w-5xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
            <AnimatePresence mode="wait">
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="space-y-12"
                >
                    <div className="space-y-3">
                        <motion.div variants={itemVariants} className="flex items-center gap-3">
                            <h1 className="text-4xl lg:text-6xl font-extrabold">Hello</h1>
                            <motion.span 
                                className="text-4xl lg:text-6xl"
                                animate={{ rotateZ: [0, 14, -8, 14, -4, 10, 0, 0] }} 
                                transition={{ duration: 2.5, delay: 0.3 }}
                            >
                                👋🏽
                            </motion.span>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <h1 className="text-4xl lg:text-6xl font-extrabold">I'm Khaled,</h1>
                        </motion.div>
                            
                        <motion.div variants={itemVariants}>
                            <h1 className="text-4xl lg:text-6xl font-extrabold">
                                A Software <span className="text-web-m">Engineer</span> & Web <span className="text-web-m">Developer</span>
                            </h1> 
                        </motion.div>
                    </div>

                    <motion.div 
                        variants={aboutVariants}
                        className="space-y-10"
                    >
                        <h2 className="text-3xl lg:text-5xl font-extrabold">
                            Few things about <span className="text-web-m">me</span>
                        </h2>

                        <div className='flex md:flex-row flex-col gap-5 px-5'>

                            <div className="space-y-6 max-w-3xl">
                                <p className="text-lg lg:text-xl font-medium leading-relaxed">
                                    I'm a Computer Science fresh grad based in Winnipeg (Canada), specializing in Software Engineering and Web Development.
                                    Currently working at <span className="text-web-m"><a href="https://www.polysensesolutions.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">PolySense Solutions</a></span> as an Operations & Technical Specialist.
                                </p>

                                <p className="text-lg lg:text-xl font-medium leading-relaxed">
                                    Graduated from the University of Manitoba in September 2025 with a BSc, majoring in computer science and minoring in mathematics.
                                    During university, I discovered that I'm passionate about anything tech related. I love doing my magic on computers and
                                    then seeing stuff come to life.
                                </p>

                                <p className="text-lg lg:text-xl font-medium leading-relaxed">
                                    Feel free to <a href="#CONTACT" className="text-web-m hover:underline transition-all" onClick={handleContactClick}>contact me</a> if you'd
                                    like to discuss potential opportunities.
                                </p>
                            </div>


                            <div className="flex justify-center">
                                <div className="relative w-48 h-48 lg:w-60 lg:h-60 overflow-hidden rounded-full border-4 border-web-m/30 shadow-xl">
                                    <img 
                                        src="/ghost.png" 
                                        alt="Ghost" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                        
                        
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