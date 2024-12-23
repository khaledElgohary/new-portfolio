import {motion} from 'framer-motion'
import PropTypes from 'prop-types';


export default function Introduction(props) { 



    return (
            props.condition === "#ABOUT" ? (
                <div className="text-white font-extrabold tracking-tight text-3xl lg:text-5xl sm:text-3xl md:text-4xl z-10">
                <>
                    <div className='flex flex-row justify-start pl-12 pt-20'>
                        <h1>
                            Hello
                        </h1>
                        <motion.h1 animate={{ rotateZ: [0, 14, -8, 14, -4, 10, 0.0, 0.0] }} transition={{ duration: 2.5 }}>👋🏽</motion.h1>
                    </div>

                    <div className='pl-12'>
                        <h1>I&apos;m Khaled,</h1>
                    </div>
                        
                    <div className='flex flex-row justify-start pl-12'>
                            <h1>A Software <span className='text-web-m'>Engineer</span> & Web <span className='text-web-m'>Developer</span></h1> 
                    </div>
                </>
                    <>
                        <div className='flex lg-[flex-row] flex-wrap sm:gap-12 justify-between'>
                            <div className='flex flex-col pl-24 mt-12 gap-6 mr-16 w-full'>
                                <h1>
                                    Few things about <span className='text-web-m'>me</span>
                                </h1>
                                <h3 className="lg:text-2xl text-lg font-semibold tracking-tight ml-3">
                                    I&apos;m a Computer Science fresh grad based in Winnipeg (Canada), specializing in Software Engineering and Web Development.
                                    Currently working at a startup called <span className='text-web-m'><a href='https://www.caremate.ai/' target='_blank'>Caremate</a></span> as a frontend developer.
                                </h3>

                                <h3 className="lg:text-2xl text-lg  font-semibold tracking-tight ml-3">
                                    Graduated from the University of Manitoba in September with a BSc, majoring in computer science and minoring in mathematics.
                                    During university, I discovered that I&apos;m passionate about anything tech related. I love doing my magic on computers and
                                    then seeing stuff come to life.
                                </h3>

                                <h3 className="lg:text-2xl text-lg font-semibold tracking-tight ml-3">
                                    Currently I&apos;m looking for a full-time position as Data Analyst or Software Developer, and looking forward to putting my foot in the door
                                    and working on products and solutions that is used daily. Feel free to <a href='#CONTACT' className='text-web-m'>contact me</a> if you&apos;d
                                    like to discuss potential opportunities.
                            </h3>
                                <div className='flex flex-row justify-center'>
                                    <img src='/ghost.png' width={200} height={350} className='border border-transparent rounded-full'/>
                                </div>
                            </div>
                        </div>

                    </>
            
        </div>
            ): (
                    <></>
        )
    );
}


Introduction.propTypes = {
    condition:PropTypes.string,
}