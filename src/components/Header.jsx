import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Introduction from './Introduction';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';

export default function Header() {
    const [activeHref, setActiveHref] = useState('#ABOUT');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { href: '#ABOUT', label: 'ABOUT' },
        { href: '#SKILLS', label: 'SKILLS' },
        { href: '#PROJECTS', label: 'PROJECTS' },
        { href: '#EXPERIENCE', label: 'EXPERIENCE' },
        { href: '#CONTACT', label: 'CONTACT' }
    ];

    const handleNavClick = (href) => {
        setActiveHref(href);
        setIsMenuOpen(false);
    };

    return (
        <div className="min-h-screen grid grid-rows-[auto_1fr]">
            <header className="sticky top-0 z-30 bg-black">
                <div className='flex flex-col w-full bg-header-back'>
                    <div className='flex flex-row justify-between items-center'>
                        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight text-white py-5 px-6 opacity-100">
                            KE.
                        </h1>
                        <Button 
                            variant="ghost" 
                            className="lg:hidden px-6 hover:bg-transparent scroll-m-20"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6 text-white" />
                            ) : (
                                <Menu className="h-6 w-6 text-white" />
                            )}
                        </Button>

                        <div className='hidden lg:flex py-5 px-2 gap-4 scroll-m-20 text-xl font-extrabold tracking-tight'>
                            {navItems.map((item) => (
                                <Button
                                    key={item.href}
                                    variant="ghost"
                                    className={`bg-transparent w-20 !px-5 hover:text-web-m hover:scale-110 hover:bg-gray-800  ${activeHref === item.href ? "text-web-m scale-110 bg-gray-800" : "text-white"}`}
                                    onClick={() => handleNavClick(item.href)}
                                >
                                    <a href={item.href}>{item.label}</a>
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div 
                        className={`lg:hidden overflow-hidden transition-all duration-300 ${
                            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                        <div className="flex flex-col py-10 items-center pb-4 pr-5">
                            {navItems.map((item) => (
                                <Button
                                    key={item.href}
                                    variant="ghost"
                                    className={`w-full justify-center hover:text-web-m hover:scale-105 hover:bg-transparent 
                                        ${activeHref === item.href ? "text-web-m scale-105" : "text-white"}`}
                                    onClick={() => handleNavClick(item.href)}
                                >
                                    <a href={item.href}>{item.label}</a>
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <Introduction condition={activeHref} setCondition={setActiveHref}/>
                <Projects condition={activeHref} />
                <Skills condition={activeHref} />
                <Experience condition={activeHref} />
                <Contact condition={activeHref} />
            </main>
        </div>
    );
}