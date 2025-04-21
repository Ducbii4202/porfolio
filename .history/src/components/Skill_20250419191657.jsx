import React from 'react';
import { motion } from 'framer-motion';
import {
    BiLogoJavascript,
    BiLogoPostgresql,
    BiLogoTypescript
} from 'react-icons/bi';
import { DiSass } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa6';
import { PiFigmaLogoThin } from 'react-icons/pi';
import { RiReactjsFill, RiTailwindCssLine } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';

const skills = [
    {
        Icon: BiLogoJavascript,
        className: 'text-yellow-400',
        label: 'JavaScript',
        level: 90
    },
    {
        Icon: BiLogoTypescript,
        className: 'text-blue-400',
        label: 'TypeScript',
        level: 85
    },
    {
        Icon: RiReactjsFill,
        className: 'text-cyan-400',
        label: 'React',
        level: 90
    },
    {
        Icon: RiTailwindCssLine,
        className: 'text-cyan-400',
        label: 'Tailwind CSS',
        level: 80
    },
    { Icon: DiSass, className: 'text-pink-400', label: 'Sass', level: 70 },
    {
        Icon: PiFigmaLogoThin,
        className: 'text-pink-500',
        label: 'Figma',
        level: 75
    },
    {
        Icon: FaNodeJs,
        className: 'text-green-500',
        label: 'Node.js',
        level: 85
    },
    {
        Icon: SiMongodb,
        className: 'text-green-500',
        label: 'MongoDB',
        level: 80
    },
    {
        Icon: BiLogoPostgresql,
        className: 'text-sky-700',
        label: 'PostgreSQL',
        level: 65
    }
];

const iconVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
            delay
        }
    })
};

const Skill = () => {
    return (
        <section className='border-neutral-900 pb-20 px-6' id='skill'>
            <motion.h1
                className='my-20 text-center text-4xl font-bold'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Skill
            </motion.h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-start'>
                {skills.map(({ Icon, className, label, level }, index) => (
                    <motion.div
                        key={index}
                        className='w-full max-w-xs p-4 bg-neutral-900 border border-neutral-700 rounded-xl shadow-md'
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                        custom={index * 0.15}
                        variants={iconVariants}
                    >
                        <div className='flex items-center gap-3 mb-4'>
                            <Icon className={`text-4xl ${className}`} />
                            <span className='text-lg font-semibold text-white'>
                                {label}
                            </span>
                        </div>

                        <div className='w-full h-2 bg-neutral-700 rounded-full overflow-hidden'>
                            <div
                                className='h-full bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-500'
                                style={{ width: `${level}%` }}
                            />
                        </div>

                        <div className='text-right text-xs text-neutral-400 mt-1'>
                            {level}%
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skill;
