import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

const Experience = () => {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
                ease: 'easeInOut'
            }
        }
    };

    const getChildVariants = index => ({
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: 'easeInOut',
                delay: index * 0.1
            }
        }
    });

    return (
        <section
            className='px-6 py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white'
            id='experience'
        >
            <div className='max-w-5xl mx-auto'>
                <h2 className='text-4xl md:text-6xl font-medium tracking-tight mb-10 text-center'>
                    Work Experience
                </h2>
                <div className='h-1 w-20 mb-14 bg-white mx-auto rounded-full'></div>

                <motion.div
                    className='space-y-12'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {EXPERIENCES.map((experience, index) => (
                        <motion.div
                            key={index}
                            variants={getChildVariants(index)}
                            whileHover={{ scale: 1.015 }}
                            className='bg-white/5 rounded-2xl p-6 border border-white/10 shadow-lg backdrop-blur-md transition-all duration-300'
                        >
                            <div className='flex flex-col md:flex-row md:justify-between mb-4'>
                                <span className='text-sm text-gray-400 font-medium md:w-1/4 mb-2 md:mb-0'>
                                    {experience.yearRange}
                                </span>
                                <div className='md:w-3/4 space-y-2'>
                                    <h3 className='text-2xl font-semibold'>
                                        {experience.company}
                                    </h3>
                                    <p className='text-lg text-gray-200'>
                                        {experience.title}
                                    </p>
                                    <p className='text-sm italic text-gray-400'>
                                        {experience.location}
                                    </p>
                                </div>
                            </div>
                            <ul className='list-disc list-inside space-y-2 text-base text-gray-100 leading-relaxed pl-5'>
                                {experience.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
