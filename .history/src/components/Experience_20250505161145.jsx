import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';
import SpotlightCard from '../pages/SpotlightCard';

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
        <section className='border-neutral-900 pb-10 pt-4' id='experience'>
            <motion.h1
                className='my-20 text-center text-4xl'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Experiences
            </motion.h1>

            <motion.div
                className='flex flex-col items-center gap-10'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                {EXPERIENCES.map((experience, index) => (
                    <motion.div
                        key={index}
                        variants={childVariants}
                        className='w-full max-w-4xl mx-auto'
                    >
                        <SpotlightCard
                            spotlightColor='rgba(0, 229, 255, 0.2)'
                            className='custom-spotlight-card bg-white/5 p-6 rounded-2xl backdrop-blur-md border border-white/10 shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col items-center'
                        >
                            <div className='text-sm mb-2 md:mb-0 p-4 text-center'>
                                {experience.yearRange}
                            </div>
                            <div className='max-w-3xl backdrop-blur-3xl p-4 bg-stone-600/10 rounded-lg text-center'>
                                <h2 className='text-2xl mb-2'>
                                    {experience.company}
                                </h2>
                                <h2 className='text-lg mb-2'>
                                    {experience.title}
                                </h2>
                                <p className='text-sm italic text-gray-400 mb-4'>
                                    {experience.location}
                                </p>
                                <ul className='list-disc list-inside space-y-2 text-base text-gray-100 leading-relaxed pl-5 text-left'>
                                    {experience.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </SpotlightCard>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Experience;
