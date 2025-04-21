import React from 'react';
import { motion } from 'framer-motion';
import {
    SiReact,
    SiScss,
    SiTailwindcss,
    SiNodedotjs,
    SiMongodb,
    SiFigma
} from 'react-icons/si';

const skills = [
    { name: 'React', icon: SiReact },
    // { name: 'SCSS', icon: SiScss },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Figma', icon: SiFigma }
];

const skillVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
            delay
        }
    })
};

const Skill = () => {
    return (
        <section
            id='skills'
            className='min-h-screen flex flex-col items-center justify-center px-4 md:px-10 py-20 text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
        >
            <h2 className='text-4xl md:text-6xl font-medium tracking-tight mb-10'>
                Skills
            </h2>
            <div className='h-1 w-20 bg-white mb-12' />

            <div className='grid grid-cols-2 md:grid-cols-3 gap-10'>
                {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                        <motion.div
                            key={skill.name}
                            className='flex flex-col items-center space-y-2'
                            initial='hidden'
                            whileInView='visible'
                            custom={index * 0.2}
                            variants={skillVariants}
                            viewport={{ once: true }}
                        >
                            <Icon size={50} className='text-sky-400' />
                            <span className='text-lg font-medium'>
                                {skill.name}
                            </span>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Skill;
