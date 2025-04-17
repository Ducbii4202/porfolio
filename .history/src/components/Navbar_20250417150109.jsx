import { a } from 'framer-motion/client';
import React, { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };
    return (
        <nav className='fixed top-0 left-0 w-full z-50'>
            <div
                className='flex justify-between items-center max-w-6xl mx-auto md:my-2 bg-stone-950/30 p-4
                md:rounded-xl backdrop-blur-lg'
            >
                <div className='text-white font-semibold text-lg uppercase'>
                    <a href='/'>Nguyen Duc Thanh</a>
                </div>
                <div className='hidden md:flex space-x-8'>
                    {LinksFill.map((link, index) => (
                        <a
                            href={link.href}
                            key={index}
                            className='text-white hover:text-stone-400 transition duration-300'
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className='md:hidden '>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className='text-white focus:outline-none'
                    ></button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
