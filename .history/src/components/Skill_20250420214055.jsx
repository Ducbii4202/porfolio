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
import { SiFigma, SiMongodb, SiNodedotjs } from 'react-icons/si';

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
        Icon: SiFigma,
        className: 'text-pink-500',
        label: 'Figma',
        level: 75
    },
    {
        Icon: SiNodedotjs,
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

const radius = 50;
const stroke = 8;
const normalizedRadius = radius - stroke / 2;
const circumference = 2 * Math.PI * normalizedRadius;

const circleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (delay = 0) => ({
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
            delay
        }
    })
};

const CircularSkill = () => {
    return (
        <section className='py-20 px-3' id='skill'>
            <motion.h1
                className='text-center text-4xl font-bold mb-12'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Skill
            </motion.h1>

            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-8 justify-center items-center'>
                {skills.map(({ Icon, className, label, level }, index) => {
                    const offset =
                        circumference - (level / 100) * circumference;

                    return (
                        <motion.div
                            key={index}
                            className='group flex flex-col items-center gap-2 transition-all duration-300'
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true }}
                            custom={index * 0.15}
                            variants={circleVariants}
                            whileHover={{
                                scale: 1.1
                            }}
                        >
                            <div className='relative w-[120px] h-[120px]'>
                                <svg
                                    height='120'
                                    width='120'
                                    className='transform -rotate-90'
                                >
                                    <circle
                                        stroke='#2e2e2e'
                                        fill='transparent'
                                        strokeWidth={stroke}
                                        r={normalizedRadius}
                                        cx='60'
                                        cy='60'
                                    />
                                    <motion.circle
                                        stroke='url(#grad)'
                                        fill='transparent'
                                        strokeWidth={stroke}
                                        strokeLinecap='round'
                                        r={normalizedRadius}
                                        cx='60'
                                        cy='60'
                                        strokeDasharray={circumference}
                                        strokeDashoffset={circumference}
                                        animate={{ strokeDashoffset: offset }}
                                        transition={{
                                            duration: 1.2,
                                            delay: index * 0.1
                                        }}
                                    />
                                    <defs>
                                        <linearGradient
                                            id='grad'
                                            x1='0%'
                                            y1='0%'
                                            x2='100%'
                                            y2='0%'
                                        >
                                            <stop
                                                offset='0%'
                                                stopColor='#d946ef'
                                            />
                                            <stop
                                                offset='100%'
                                                stopColor='#818cf8'
                                            />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                <div className='absolute inset-0 flex items-center justify-center'>
                                    <Icon
                                        className={`text-3xl group-hover:scale-110 transition-transform duration-300 ${className}`}
                                    />
                                </div>
                            </div>

                            <div className='text-sm text-white font-medium'>
                                {label}
                            </div>
                            <div className='text-xs text-neutral-400'>
                                {level}%
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default CircularSkill;
