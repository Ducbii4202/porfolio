import { RiCloseFill, RiMenu3Fill } from '@remixicon/react';
import React, { useState } from 'react';
import { LINKS } from '../constants';
import GooeyNav from '../pages/GooeyNav';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    const items = LINKS.map(link => ({
        label: link.label,
        href: link.href
    }));

    return (
        <nav className='fixed top-0 left-0 w-full z-50'>
            <div className='flex justify-between items-center max-w-6xl mx-auto md:my-2 bg-stone-950/30 p-4 md:rounded-xl backdrop-blur-lg'>
                <div className='text-white font-semibold text-lg uppercase'>
                    <a href='/'>Nguyen Duc Thanh</a>
                </div>

                <div className='hidden md:flex space-x-8'>
                    {LINKS.map((link, index) => (
                        <a
                            href={link.href}
                            key={index}
                            className='text-white hover:text-stone-400 transition duration-300'
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className='md:hidden'>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className='text-white focus:outline-none'
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {menuOpen ? (
                            <RiCloseFill className='w-6 h-6' />
                        ) : (
                            <RiMenu3Fill className='w-6 h-6' />
                        )}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className='md:hidden fixed top-20 left-4 right-4 z-40 p-4 bg-stone-950/80 backdrop-blur-lg rounded-2xl shadow-lg flex flex-col space-y-4'>
                    {/* ✅ GooeyNav */}
                    <GooeyNav
                        items={items}
                        animationTime={600}
                        pCount={15}
                        minDistance={20}
                        maxDistance={42}
                        maxRotate={75}
                        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                        timeVariance={300}
                    />

                    {/* ✅ Các link thường */}
                    {LINKS.map((link, index) => (
                        <a
                            href={link.href}
                            key={index}
                            onClick={handleLinkClick}
                            className='text-white text-lg font-medium hover:text-stone-400 transition duration-300'
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
