import React from 'react';
import avatar1 from '../assets/avatar1.png';
import { ABOUT_CONTENT } from '../constants';

const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
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
                        <p className='my-2 max-w-xl py-6'>
                            {ABOUT_CONTENT.paragraphs}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
