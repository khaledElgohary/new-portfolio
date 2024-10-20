import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Introduction from './Introduction';
import Projects from './Projects';
import Skills from './Skills';
export default function Header() { 
    const [activeHref, setActiveHref] = useState('#ABOUT');
    return (
        <>
            <div className='flex flex-row justify-between bg-transparent backdrop-blur-lg'>
            <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight text-white py-5 px-6
            ">
                KE.
            </h1>
            <div className='py-5 px-2 scroll-m-20 text-xl font-extrabold tracking-tight'>
                <Button variant="ghost"
                    className={`bg-transparent hover:text-web-m hover:scale-110 hover:bg-transparent ${activeHref === '#ABOUT' ? "text-web-m scale-110" : "text-white"}`} 
                    onClick={() => setActiveHref('#ABOUT') }
                    >
                    <a href='#ABOUT'>ABOUT</a>
                    </Button>
                <Button variant="ghost"
                    className={`bg-transparent hover:text-web-m hover:scale-110 hover:bg-transparent ${activeHref === '#SKILLS' ? "text-web-m scale-110" : "text-white"}`} 
                    onClick={() => setActiveHref('#SKILLS') }
                    >
                    <a href='#SKILLS'>SKILLS</a>
                </Button>
                <Button variant="ghost" className={`bg-transparent hover:text-web-m hover:bg-transparent hover:scale-110 ${activeHref === '#PROJECTS' ? "text-web-m scale-110" : "text-white"}`} 
                    onClick={() => setActiveHref('#PROJECTS')}>
                    <a href='#PROJECTS'>PROJECTS</a>
                </Button>
                <Button variant="ghost" className={`bg-transparent hover:text-web-m hover:scale-110 hover:bg-transparent ${activeHref === '#EXPERIENCE' ? "text-web-m scale-110" : "text-white"}`} 
                    onClick={() => setActiveHref('#EXPERIENCE')}>
                    <a href='#EXPERIENCE'>EXPERIENCE</a>
                </Button>
                <Button variant="ghost" className={`bg-transparent hover:text-web-m hover:scale-110 hover:bg-transparent ${activeHref === '#CONTACT' ? "text-web-m scale-110" : "text-white"}`} 
                    onClick={() => setActiveHref('#CONTACT')}>
                    <a href='#CONTACT'>CONTACT</a>
                </Button>
            </div>
            </div>
            <Introduction condition={activeHref} />
            <Projects condition={activeHref} />
            <Skills condition={activeHref}/>
        </>
    )
}