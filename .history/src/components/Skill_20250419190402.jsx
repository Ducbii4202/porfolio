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
    { Icon: BiLogoJavascript, className: 'text-yellow-400' },
    { Icon: BiLogoTypescript, className: 'text-blue-400' },
    { Icon: RiReactjsFill, className: 'text-cyan-400' },
    { Icon: RiTailwindCssLine, className: 'text-cyan-400' },
    { Icon: DiSass, className: 'text-pink-400' },
    { Icon: PiFigmaLogoThin, className: 'text-pink-500' },
    { Icon: FaNodeJs, className: 'text-green-500' },
    { Icon: SiMongodb, className: 'text-green-500' },
    { Icon: BiLogoPostgresql, className: 'text-sky-700 text-9xl' } // custom size
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
        <section className='px-6 py-10' id='skill'>
            <motion.h1
                className='my-20 text-center text-4xl'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Skill
            </motion.h1>

            <div className='h-1 w-20 bg-white mb-8' />
            <div className='flex flex-wrap items-center justify-center gap-6'>
                {skills.map(({ Icon, className }, index) => (
                    <motion.div
                        key={index}
                        className='p-4 hover:scale-110 transition-transform duration-300'
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                        custom={index * 0.15}
                        variants={iconVariants}
                    >
                        <Icon className={`text-7xl ${className}`} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skill;
