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
        <div className="min-h-screen">
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
                <div className='flex flex-row justify-between items-center px-6 h-20'>
                    <h1 className="text-xl font-extrabold tracking-tight text-white">
                        KE.
                    </h1>

                    <Button 
                        variant="ghost" 
                        className="lg:hidden hover:bg-transparent"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6 text-white" />
                        ) : (
                            <Menu className="h-6 w-6 text-white" />
                        )}
                    </Button>

                    <nav className='hidden lg:flex gap-2'>
                        {navItems.map((item) => (
                            <Button
                                key={item.href}
                                variant="ghost"
                                className={`px-6 transition-all duration-300 hover:text-web-m hover:scale-105 hover:bg-gray-800/50 ${
                                    activeHref === item.href 
                                        ? "text-web-m scale-105 bg-gray-800/50" 
                                        : "text-white"
                                }`}
                                onClick={() => handleNavClick(item.href)}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </nav>
                </div>

                <div 
                    className={`lg:hidden fixed top-20 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-gray-800 transition-all duration-300 ${
                        isMenuOpen 
                            ? 'opacity-100 translate-y-0 pointer-events-auto' 
                            : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}
                >
                    <nav className="flex flex-col py-4 px-6 gap-2">
                        {navItems.map((item) => (
                            <Button
                                key={item.href}
                                variant="ghost"
                                className={`w-full justify-center py-6 text-lg transition-all duration-300 hover:text-web-m hover:bg-gray-800/50 ${
                                    activeHref === item.href 
                                        ? "text-web-m bg-gray-800/50" 
                                        : "text-white"
                                }`}
                                onClick={() => handleNavClick(item.href)}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </nav>
                </div>

                {isMenuOpen && (
                    <div 
                        className="lg:hidden fixed inset-0 top-20 bg-black/50 backdrop-blur-sm z-40"
                        onClick={() => setIsMenuOpen(false)}
                    />
                )}
            </header>

            <main className="pt-20">
                <Introduction condition={activeHref} setCondition={setActiveHref}/>
                <Projects condition={activeHref} />
                <Skills condition={activeHref} />
                <Experience condition={activeHref} />
                <Contact condition={activeHref} />
            </main>
        </div>
    );
}