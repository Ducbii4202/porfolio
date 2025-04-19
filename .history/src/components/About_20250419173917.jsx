import React from 'react';
import avatar1 from '../assets/avatar1.png';
import { ABOUT_CONTENT } from '../constants';
import PixelCard from '../pages/PixelCard';

const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4' id='about'>
            <h1 className='my-20 text-center text-4xl'>
                About <span className='text-neutral-500'>Me</span>
            </h1>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2 lg:p-8 flex justify-center'>
                    <PixelCard variant='pink' img={avatar1}></PixelCard>
                </div>
                <div className='w-full lg:w-1/2 flex justify-center lg:justify-start'>
                    <div className='my-2 max-w-xl py-6 px-4'>
                        {ABOUT_CONTENT.paragraphs.map((para, index) => (
                            <p
                                key={index}
                                className='mb-4 text-base leading-relaxed'
                            >
                                {para}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
