import {
    RiJavaLine,
    RiJavascriptFill,
    RiTailwindCssFill
} from '@remixicon/react';
import { section } from 'framer-motion/client';
import React from 'react';
import { BiLogoPostgresql } from 'react-icons/bi';
import { DiJavascript, DiJavascript1, DiSass } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa6';
import { MdJavascript } from 'react-icons/md';
import { PiFigmaLogo, PiFigmaLogoLight, PiFigmaLogoThin } from 'react-icons/pi';
import { RiReactjsFill, RiTailwindCssLine } from 'react-icons/ri';
import { SiCss3, SiMongodb, SiSass } from 'react-icons/si';
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
                    <DiJavascript1 className='text-7xl text-yellow-400' />
                </div>
                <div>
                    <RiReactjsFill className='text-7xl text-cyan-400' />
                </div>
                <div>
                    <RiTailwindCssLine className='text-7xl text-cyan-400' />
                </div>
                <div>
                    <DiSass className='text-7xl text-pink-400' />
                </div>
                <div>
                    <PiFigmaLogoThin className='text-7xl text-pink-500' />
                </div>
                <div className='p-4'>
                    <FaNodeJs className='text-7xl text-green-500' />
                </div>
                <div className='p-4'>
                    <SiMongodb className='text-7xl text-green-500' />
                </div>
                <div className='p-4'>
                    <BiLogoPostgresql className='text-9xl text-sky-700' />
                </div>
            </div>
        </section>
    );
};

export default Skill;
