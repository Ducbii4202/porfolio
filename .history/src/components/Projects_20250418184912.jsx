import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const projectVariants = {
    hidden: {
        opacity: 0,
        scale: 0.9,
        y: 50
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
            type: 'spring',
            stiffness: 100,
            damping: 12
        }
    }
};

const Projects = () => {
    return (
        <section className='px-6 py-10' id='project'>
            <motion.h1
                className='text-4xl md:text-6xl font-medium tracking-tight mb-10'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Project
            </motion.h1>

            <div className='h-1 w-20 mb-8 bg-white' />

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        className='relative rounded-2xl overflow-hidden h-[500px] shadow-lg group'
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.2 }}
                        variants={projectVariants}
                    >
                        <img
                            src={project.image}
                            alt={project.name}
                            className='absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                        />

                        {/* Overlay */}
                        <div className='relative z-10 p-6 flex flex-col justify-between h-full bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white'>
                            <h2 className='text-2xl font-bold mb-4'>
                                {project.name}
                            </h2>
                            <p className='mb-6 text-base flex-grow'>
                                {project.description}
                            </p>
                            <a
                                href={project.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='bg-white text-stone-900 font-semibold rounded-full py-2 px-4 text-sm hover:bg-gray-100 transition-colors duration-300 text-center w-fit'
                            >
                                View on GitHub
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
