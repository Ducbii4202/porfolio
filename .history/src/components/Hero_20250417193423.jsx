import React from 'react';
import { motion } from 'framer-motion';
import { clipPath, section } from 'framer-motion/client';

const textVariants = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' }
    }
};

const containerVariants = {
    hidden: {
        opacity: 1
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const imageVariants = {
    hidden: { clipPath: 'inset(0 50% 0 50%)' },
    visible: {
        clipPath: 'inset(0 0% 0 0%)',
        transition: { duration: 1.2, ease: 'easeInOut' }
    }
};

const Hero = () => {
    return (
        <section>
            <div className='relative z-10 min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-white '></div>
        </section>
    );
};

export default Hero;
