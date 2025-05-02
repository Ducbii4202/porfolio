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
        <section className='border-neutral-900 pb-4' id='projects'>
            <motion.h1
                className='my-20 text-center text-4xl'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Projects
            </motion.h1>

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
                        {/* Background image */}
                        <img
                            src={project.image}
                            alt={project.name}
                            className='absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                        />

                        {/* Overlay content */}
                        <div
                            className='relative z-10 p-6 flex flex-col justify-between h-full 
                            bg-gradient-to-t from-black/90 via-black/60 to-transparent 
                            text-white backdrop-blur-sm'
                        >
                            {/* Title with background and shadow */}
                            <h2 className='text-2xl lg:text-3xl font-bold mb-4 tracking-wide drop-shadow-md bg-black/50 px-3 py-1 rounded'>
                                {project.name}
                            </h2>

                            {/* Description */}
                            <p className='mb-6 text-base flex-grow text-white/90'>
                                {project.description}
                            </p>

                            {/* GitHub button */}
                            <a
                                href={project.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='bg-white text-stone-900 font-semibold rounded-full py-2 px-4 text-sm 
                                    hover:bg-gray-100 hover:border-stone-900 border border-transparent 
                                    hover:border-2 transition-all duration-300 text-center w-fit'
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
