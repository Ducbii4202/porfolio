import React from 'react';
import avatar1 from '../assets/avatar1.png';
import { ABOUT_CONTENT } from '../constants';

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
                    <img
                        src={avatar1}
                        alt='about'
                        className='rounded-2xl w-80 h-auto object-cover'
                    />
                </div>

                {/* Text */}
                <div className='w-full lg:w-1/2 p-4 flex justify-center lg:justify-start'>
                    <p className='max-w-xl py-6 text-justify leading-relaxed'>
                        {ABOUT_CONTENT.paragraphs1}
                        <br />
                        <br />
                        {ABOUT_CONTENT.paragraphs2}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
