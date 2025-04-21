import React from 'react';
import avatar1 from '../assets/avatar1.png';
import { ABOUT_CONTENT } from '../constants';

const About = () => {
    return (
        <section className=' border-neutral-900 pb-4' id='about'>
            <h1 className='my-20 text-center text-4xl'>
                About
                <span className='text-neutral-500'> Me</span>
            </h1>
            <div className='flex flex-warp'>
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
                        <p className='my-2 max-w-xl py-6 mb-4'>
                            {ABOUT_CONTENT.paragraphs1}
                        </p>
                        <p> {ABOUT_CONTENT.paragraphs2}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
