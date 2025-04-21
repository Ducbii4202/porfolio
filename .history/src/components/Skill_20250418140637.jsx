import { RiTailwindCssFill } from '@remixicon/react';
import { section } from 'framer-motion/client';
import React from 'react';
import { RiReactjsFill } from 'react-icons/ri';
import { TbBrandNodejs } from 'react-icons/tb';

const Skill = () => {
    return (
        <section
            className='min-h-screen flex flex-col justify-center px-4 md:px-10'
            id='skill'
        >
            <h2 className='text-4xl md:text-6xl font-medium tracking-tight mb-10'>
                Skill
            </h2>
            <div className='h-1 w-20 bg-white mb-8' />
            <div className='flex flex-wrap items-center justify-center gap-4'>
                <div>
                    <RiReactjsFill className='text-7xl text-cyan-400' />
                </div>
                <div className='p-4'>
                    <TbBrandNodejs className='text-7xl text-green-500' />
                </div>
                <div className='p-4'>
                    <RiTailwindCssFill className='text-9xl text-cyan-400' />
                </div>
            </div>
        </section>
    );
};

export default Skill;
