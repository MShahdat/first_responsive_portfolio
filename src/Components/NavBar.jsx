import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useState } from 'react';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);  // Renamed for clarity

    return (
        <div className='text-white flex flex-wrap items-center justify-between px-10 pt-6 md:px-20'>
            <span className='text-2xl font-bold tracking-wide'>Portfolio</span>
            
            {/* Mobile Menu Button (always visible on mobile) */}
            <div className='md:hidden'>
                {isMenuOpen 
                    ? <RiCloseLine size={30} onClick={() => setIsMenuOpen(false)} /> 
                    : <RiMenu2Line size={30} onClick={() => setIsMenuOpen(true)} />
                }
            </div>

            {/* Navigation Menu */}
            <ul 
                className={`
                    ${isMenuOpen ? 'flex flex-col' : 'hidden'} 
                    w-full py-2 mt-4 font-semibold bg-black rounded-xl 
                    md:bg-transparent md:mt-0 md:flex md:flex-row md:w-auto
                    md:static md:space-x-8 space-y-2 md:space-y-0
                `}
            >
                <li>
                    <a href='#about' className='block p-1 md:p-0 hover:text-gray-300 transition-all'>About</a>
                </li>
                <li>
                    <a href='#experience' className='block p-1 md:p-0 hover:text-gray-300 transition-all'>Experience</a>
                </li>
                <li>
                    <a href='#projects' className='block p-1 md:p-0 hover:text-gray-300 transition-all'>Projects</a>
                </li>
                <li>
                    <a href='#footer' className='block p-1 md:p-0 hover:text-gray-300 transition-all'>Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;