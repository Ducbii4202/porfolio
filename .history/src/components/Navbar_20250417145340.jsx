import React, { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false),
    
    const handleLinkClick = () => {
    setMenuOpen(false)
    }
    return (
        <div>
            <nav className='fixed top-0 left-0 w-full z-50'>
                <div className="flex justify-between items-center max-w-6xl mx-auto md:my-2 bg-stone-950/30 p-4
                md:rounded-xl backdrop-blur-lg">
                    <div className="text-white font-semibold text-lg uppercase">
                        <a href="/">
                            Nguyen Duc Thanh
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;