import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity } from 'react-icons/fa';
import avatar1 from '../assets/avatar1.png';
import { ABOUT_CONTENT } from '../constants';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' }
    }
};

const About = () => {
    return (
        <section className='border-neutral-900 pb-4' id='about'>
            <h1 className='my-20 text-center text-4xl font-bold'>
                About
                <span className='text-neutral-500'> Me</span>
            </h1>

            <div className='flex flex-col lg:flex-row flex-wrap'>
                {/* Avatar */}
                <div className='w-full lg:w-1/2 p-4 lg:p-8 flex justify-center items-center'>
                    <motion.img
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        src={avatar1}
                        alt='about'
                        className='rounded-2xl w-80 h-auto object-cover'
                    />
                </div>

                {/* Text & School Info */}
                <div className='w-full lg:w-1/2 p-4 flex flex-col justify-center lg:justify-start'>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className='max-w-xl py-6 text-justify leading-relaxed'
                    >
                        {ABOUT_CONTENT.paragraphs1}
                        <br />
                        <br />
                        {ABOUT_CONTENT.paragraphs2}
                    </motion.p>

                    {/* University Info with Motion */}
                    <motion.div
                        variants={fadeInUp}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                        className='mt-6 bg-neutral-800 p-4 rounded-xl shadow-md text-white'
                    >
                        <div className='flex items-center space-x-2 mb-2'>
                            <FaUniversity
                                className='text-yellow-400'
                                size={20}
                            />
                            <span className='text-lg font-semibold'>
                                FPT University
                            </span>
                        </div>
                        <div className='ml-6 text-sm'>
                            <p>
                                <strong>Major:</strong> Software
                            </p>
                            <p>
                                <strong>GPA:</strong> 7.0
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
