import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const projectVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        rotate: -40,
        y: 50
    },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
            typy: 'spring',
            bounce: 0.4
        }
    }
};
const Projects = () => {
    return (
        <section className='px-6 py-10' id='work'>
            <h1 className='text-4xl md:text-6xl font-medium tracking-tight mb-10'>
                Work
            </h1>
            <div className='h-1 w-20 mb-8 bg-white'></div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {PROJECTS.map((project, index) => (
                    <motion.div
                        className='relative rounded-lg overflow-hidden h-[500px] transform transition'
                        initial='hidden'
                        whileInView='visible'
                    ></motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
