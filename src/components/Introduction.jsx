import {motion} from 'framer-motion'
import { Button } from '@/components/ui/button';
import { ChevronRightIcon } from "@radix-ui/react-icons"
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Introduction(props) { 

    const [view, setView] = useState(true);

    const handleView = () => { 
        setView(!view);
    }

    return (
            props.condition === "#ABOUT" ? (
                <div className="text-white font-extrabold tracking-tight text-3xl lg:text-5xl sm:text-3xl md:text-4xl z-10">
            {view? (
                <>
                    <div className='flex flex-row justify-start ml-12 mt-36'>
                        <h1>
                            Hello
                        </h1>
                        <motion.h1 animate={{ rotateZ: [0, 14, -8, 14, -4, 10, 0.0, 0.0] }} transition={{ duration: 2.5 }}>👋🏽</motion.h1>
                    </div>

                    <div className='ml-12'>
                        <h1>I&apos;m Khaled,</h1>
                    </div>
                        
                    <div className='flex flex-row justify-start ml-12'>
                            <h1>A Software <span className='text-web-m'>Engineer</span> & Web <span className='text-web-m'>Developer</span></h1> 
                    </div>

                    <div className='flex flex-col items-center gap-10 mt-72 '>
                        <h1 className='text-xl '>Click to Discover More</h1>
                        <Button className="bg-transparent"variant="outline" size="icon" onClick={handleView}>
                            <ChevronRightIcon className="h-5 w-5" />
                        </Button>
                    </div>
                </>
            ): (
                    <>
                        <div className='flex flex-wrap sm:gap-12'>
                            <div className='flex flex-col ml-12 mt-16 gap-6 mr-16 max-w-screen-md '>
                                    <h1>
                                        Few things about <span className='text-web-m'>me</span>
                                    </h1>
                                <h3 className="lg:text-2xl md:text-xl sm:text-md text-sm  font-semibold tracking-tight  text-justify">
                                    I&apos;m Khaled, a fresh grad software developer based in Winnipeg(Canada), specializing in full-stack development and data analysis.
                                    Currently working pro bono at a startup called <span className='text-web-m'><a href='https://www.caremate.ai/' target='_blank'>Caremate</a></span> as a frontend developer.
                                </h3>

                                <h3 className="lg:text-2xl md:text-xl sm:text-md text-sm  font-semibold tracking-tight  text-justify">
                                    I just graduated from the University of Manitoba with a BSc, majoring in computer science and minoring in mathematics.
                                    During university I discovered that I&apos;m passionate about anything tech related. I love doing my magic on computer and
                                    then seeing stuff come to life.
                                </h3>

                                <h3 className="lg:text-2xl md:text-xl sm:text-md text-sm  font-semibold tracking-tight text-justify">
                                    Currently I&apos;m looking for a full-time position as data analysis or software developer, and looking forward to putting my foot in the door
                                    and working on products and solutions that is used daily. Feel free to <a href='#CONTACT' className='text-web-m'>contact me</a> if you&apos;d
                                    like to discuss potential opportunities.
                                </h3>
                            </div>

                            <div className='max-w-screen-md rounded'>
                                <img src='photo.JPG' className='mt-16 rounded-ss-full rounded-ee-full p-5'></img>
                            </div>
                        </div>

                        <div className='flex flex-col items-center gap-10 py-12'>
                            <h1 className='text-xl '>Click to Return</h1>
                            <Button className="bg-transparent"variant="outline" size="icon" onClick={handleView}>
                                <ChevronRightIcon className="h-5 w-5" />
                            </Button>
                        </div>
                    </>
            )
            }
        </div>
            ): (
                    <></>
        )
    );
}


Introduction.propTypes = {
    condition:PropTypes.string,
}