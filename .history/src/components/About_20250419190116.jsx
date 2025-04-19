import React from 'react';
import avatar1 from '../assets/avatar1.png';
import { ABOUT_CONTENT } from '../constants';

const About = () => {
    return (
        <section className=' border-neutral-900 pb-4' id='about'>
            <motion.h1
                className='my-20 text-center text-4xl'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Project
                <span className='text-neutral-500'> Experience</span>
            </motion.h1>

            <motion.div className='flex flex-warp'>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex items-center justify-center'>
                        <img
                            src={avatar1}
                            alt='about'
                            className='rounded-2xl'
                        />
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6'>
                            {ABOUT_CONTENT.paragraphs}
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
