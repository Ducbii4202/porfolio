import React from 'react';
import { ABOUT_CONTENT } from '../constants';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2 // Thời gian delay giữa các children
        }
    }
};

const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

const About = () => {
    return (
        <section className='px-6 py-10' id='about'>
            <h1 className='text-4xl md:text-6xl font-medium tracking-normal mb-10'>
                About
            </h1>
            <div className='h-1 w-20 mb-8 bg-white'></div>
            <motion.div
                className='max-w-4xl mx-auto'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                    <motion.p
                        key={index}
                        className='text-xl md:text-2xl lg:text-4xl mb-10 leading-relaxed'
                        variants={textVariants}
                    >
                        {paragraph}
                    </motion.p>
                ))}
            </motion.div>
        </section>
    );
};

export default About;
