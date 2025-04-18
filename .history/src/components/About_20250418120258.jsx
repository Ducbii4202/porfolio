import { section } from 'framer-motion/client';
import React from 'react';

const About = () => {
    const textVariants = {
        hidden: { opacity: mx_bilerp_0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    };
    return (
        <section className='px-6 py-10 ' id='about'>
            <h1 className='text-4xl md:text-6xl font-medium tracking-normal mb-10'>
                About
            </h1>
        </section>
    );
};

export default About;
