import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    BiLogoJavascript,
    BiLogoPostgresql,
    BiLogoTypescript
} from 'react-icons/bi';
import { DiSass } from 'react-icons/di';
import { SiFigma, SiMongodb, SiNodedotjs } from 'react-icons/si';
import { RiReactjsFill, RiTailwindCssLine } from 'react-icons/ri';

const skills = [
    {
        Icon: BiLogoJavascript,
        className: 'text-yellow-400',
        label: 'JavaScript',
        category: 'Frontend'
    },
    {
        Icon: BiLogoTypescript,
        className: 'text-blue-400',
        label: 'TypeScript',
        category: 'Frontend'
    },
    {
        Icon: RiReactjsFill,
        className: 'text-cyan-400',
        label: 'React',
        category: 'Frontend'
    },
    {
        Icon: RiTailwindCssLine,
        className: 'text-cyan-400',
        label: 'Tailwind CSS',
        category: 'Frontend'
    },
    {
        Icon: DiSass,
        className: 'text-pink-400',
        label: 'Sass',
        level: 70,
        category: 'Frontend'
    },
    {
        Icon: SiFigma,
        className: 'text-pink-500',
        label: 'Figma',
        level: 75,
        category: 'Design'
    },
    {
        Icon: SiNodedotjs,
        className: 'text-green-500',
        label: 'Node.js',
        category: 'Backend'
    },
    {
        Icon: SiMongodb,
        className: 'text-green-500',
        label: 'MongoDB',
        category: 'Database'
    },
    {
        Icon: BiLogoPostgresql,
        className: 'text-sky-700',
        label: 'PostgreSQL',
        category: 'Database'
    },
    {
        // Use an image for Postman
        Icon: () => (
            <img
                src='https://png.pngtree.com/png-vector/20220519/ourlarge/pngtree-male-person-holding-a-white-banner-with-glyph-icon-vector-png-image_36736042.png'
                alt='Postman'
                // className='w-10 h-10 object-contain'
            />
        ),
        label: 'Postman',
        category: 'Tools'
    }
];

const categories = [
    'All',
    'Frontend',
    'Backend',
    'Database',
    'Diagramming',
    'Design'
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
        transition: { duration: 0.6, ease: 'easeOut', delay }
    })
};

const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
};

const CircularSkill = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
    const tabRefs = useRef({});

    const filteredSkills =
        selectedCategory === 'All'
            ? skills
            : skills.filter(skill => skill.category === selectedCategory);

    useEffect(() => {
        const el = tabRefs.current[selectedCategory];
        if (el) {
            const { offsetLeft, offsetWidth } = el;
            setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
        }
    }, [selectedCategory]);

    return (
        <section className='pt-16 pb-8 px-3' id='skills'>
            <motion.h1
                className='text-center text-4xl font-bold mb-8'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Skills
            </motion.h1>

            {/* Tabs */}
            <div className='relative flex justify-center gap-4 mb-6 flex-wrap'>
                {categories.map(category => (
                    <motion.button
                        key={category}
                        ref={el => (tabRefs.current[category] = el)}
                        onClick={() => setSelectedCategory(category)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative px-4 py-2 text-sm font-medium border rounded-full transition-colors duration-300 cursor-pointer ${
                            selectedCategory === category
                                ? 'bg-white text-black'
                                : 'text-white border-white'
                        }`}
                    >
                        {category}
                    </motion.button>
                ))}

                {/* Animated underline */}
                <motion.div
                    layout
                    className='absolute rounded-full bottom-0'
                    animate={underlineStyle}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    style={{
                        position: 'absolute',
                        bottom: -6,
                        left: underlineStyle.left,
                        width: underlineStyle.width
                    }}
                />
            </div>

            {/* Skills */}
            <AnimatePresence mode='wait'>
                <motion.div
                    key={selectedCategory}
                    variants={fadeVariants}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                    className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center'
                >
                    {filteredSkills.map(
                        ({ Icon, className, label, level = 80 }, index) => {
                            const offset =
                                circumference - (level / 100) * circumference;

                            return (
                                <motion.div
                                    key={label}
                                    className='flex flex-col items-center gap-2 transition-all duration-300 cursor-pointer'
                                    initial='hidden'
                                    whileInView='visible'
                                    viewport={{ once: true }}
                                    custom={index * 0.15}
                                    variants={circleVariants}
                                    whileHover={{ scale: 1.05 }}
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
                                                animate={{
                                                    strokeDashoffset: offset
                                                }}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 50,
                                                    damping: 14,
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

                                        <motion.div
                                            className='absolute inset-0 flex items-center justify-center cursor-pointer'
                                            whileHover={{ scale: 1.2 }}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 200
                                            }}
                                        >
                                            <Icon
                                                className={`text-3xl ${className}`}
                                            />
                                        </motion.div>
                                    </div>

                                    <div className='text-sm text-white font-medium'>
                                        {label}
                                    </div>
                                </motion.div>
                            );
                        }
                    )}
                </motion.div>
            </AnimatePresence>
        </section>
    );
};

export default CircularSkill;
