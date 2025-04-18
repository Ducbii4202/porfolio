import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

const Experience = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
                staggerChildren: 0.3
            }
        }
    };

    const childVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut'
            }
        }
    };

    return (
        <section
            className='relative px-6 py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white'
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
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    {EXPERIENCES.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={childVariants}
                            className='bg-white/5 p-6 rounded-2xl backdrop-blur-md border border-white/10 shadow-md hover:scale-[1.01] transition-all duration-300'
                        >
                            <div className='flex flex-col md:flex-row md:justify-between mb-4'>
                                <span className='text-sm text-gray-400 font-medium mb-2 md:mb-0 md:w-1/4'>
                                    {exp.yearRange}
                                </span>
                                <div className='md:w-3/4'>
                                    <h3 className='text-2xl font-semibold mb-1'>
                                        {exp.title}
                                    </h3>
                                    <p className='text-sm text-gray-400 italic mb-4'>
                                        {exp.location}
                                    </p>
                                    <ul className='list-disc list-inside space-y-2 text-base leading-relaxed'>
                                        {exp.description.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
