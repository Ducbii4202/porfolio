import React from 'react';
import { ABOUT_CONTENT } from '../constants';
import { motion } from 'framer-motion';
import SplashCursor from '../pages/SplashCursor';

// Typewriter effect for heading
const TypewriterText = ({ text }) => {
    const letters = Array.from(text);
    return (
        <h1 className='text-4xl md:text-6xl font-medium tracking-normal mb-10 flex flex-wrap'>
            {letters.map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                >
                    {char}
                </motion.span>
            ))}
        </h1>
    );
};

// Container animation for stagger
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3
        }
    }
};

// Alternating slide-in left/right
const getTextVariants = index => ({
    hidden: {
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut'
        }
    }
});

const About = () => {
    return (
        <section
            className='relative px-6 py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white'
            id='about'
        >
            <div className='relative z-10 max-w-5xl mx-auto'>
                <TypewriterText text='About' />
                <div className='h-1 w-20 mb-8 bg-white'></div>
                <motion.SplashCursor
                    className='space-y-10'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                        <motion.p
                            key={index}
                            className='text-xl md:text-2xl lg:text-4xl leading-relaxed'
                            variants={getTextVariants(index)}
                        >
                            {paragraph}
                        </motion.p>
                    ))}
                </motion.SplashCursor>
            </div>
        </section>
    );
};

export default About;
