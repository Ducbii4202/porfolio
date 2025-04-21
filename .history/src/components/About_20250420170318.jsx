import React from 'react';
import avatar1 from '../assets/avatar1.png';
import { ABOUT_CONTENT } from '../constants';
import { FaUniversity } from 'react-icons/fa'; // Icon trường đại học

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

                {/* Text & School Info */}
                <div className='w-full lg:w-1/2 p-4 flex flex-col justify-center lg:justify-start'>
                    <p className='max-w-xl py-6 text-justify leading-relaxed'>
                        {ABOUT_CONTENT.paragraphs1}
                        <br />
                        <br />
                        {ABOUT_CONTENT.paragraphs2}
                    </p>

                    {/* University Info */}
                    <div className='mt-6 bg-neutral-800 p-4 rounded-xl shadow-md text-white'>
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
