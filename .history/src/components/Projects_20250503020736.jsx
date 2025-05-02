import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const projectVariants = {
    hidden: {
        opacity: 0,
        scale: 0.95,
        y: 40
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
            damping: 14
        }
    }
};

const Projects = () => {
    return (
        <section className='border-neutral-900 pb-10 pt-4' id='projects'>
            <motion.h1
                className='my-16 text-center text-4xl font-bold'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Projects
            </motion.h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4'>
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        className='relative rounded-2xl overflow-hidden h-[500px] group shadow-xl border border-white/10 bg-black/30'
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.3 }}
                        variants={projectVariants}
                    >
                        {/* Background Image */}
                        <img
                            src={project.image}
                            alt={project.name}
                            className='absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition duration-500'
                        />

                        {/* Overlay Info Card */}
                        <div className='relative z-10 h-full flex flex-col justify-between p-6'>
                            <div className='bg-gray-800 opacity-10 text-white rounded-lg p-4 shadow-lg'>
                                <h2 className='text-xl font-bold mb-2'>
                                    {project.name}
                                </h2>
                                <p className='text-sm text-white'>
                                    {project.description}
                                </p>
                            </div>

                            <a
                                href={project.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='bg-white text-black font-semibold rounded-full py-2 px-4 text-sm 
                                    hover:bg-gray-100 border border-transparent hover:border-gray-600 transition-all duration-300 w-fit mt-6'
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
