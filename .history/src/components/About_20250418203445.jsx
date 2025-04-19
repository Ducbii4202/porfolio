import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_CONTENT } from '../constants';
import Masonry from '../pages/Masonry';

// Typewriter effect with hover interaction
const TypewriterText = ({ text }) => {
    const letters = Array.from(text);
    return (
        <h1 className='text-4xl md:text-6xl font-bold tracking-tight mb-10 flex flex-wrap gap-1'>
            {letters.map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.2, color: '#facc15' }} // vàng khi hover
                    className='cursor-default'
                >
                    {char}
                </motion.span>
            ))}
        </h1>
    );
};

// Container animation with stagger
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3
        }
    }
};

// Alternating paragraph entrance (left/right)
const getTextVariants = index => ({
    hidden: {
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut'
        }
    }
});
const data = [
    { id: 1, image: 'https://picsum.photos/id/10/200/300', height: 400 },
    { id: 2, image: 'https://picsum.photos/id/14/200/300', height: 300 },
    { id: 3, image: 'https://picsum.photos/id/15/200/300', height: 300 },
    { id: 4, image: 'https://picsum.photos/id/16/200/300', height: 300 },
    { id: 5, image: 'https://picsum.photos/id/17/200/300', height: 300 },
    { id: 6, image: 'https://picsum.photos/id/19/200/300', height: 300 },
    { id: 7, image: 'https://picsum.photos/id/37/200/300', height: 200 },
    { id: 8, image: 'https://picsum.photos/id/39/200/300', height: 300 },
    { id: 9, image: 'https://picsum.photos/id/85/200/300', height: 200 },
    { id: 10, image: 'https://picsum.photos/id/103/200/300', height: 400 }
];

const About = () => {
    return (
        <section
            className='relative px-6 py-16 bg-gradient-to-br text-white'
            id='about'
        >
            <div className='relative z-10 max-w-5xl mx-auto'>
                {/* Title */}
                <TypewriterText text='About' />
                <div className='h-1 w-20 mb-8 bg-white' />

                {/* Paragraphs */}
                <motion.div
                    className='space-y-10'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                        <motion.p
                            key={index}
                            className='text-xl md:text-2xl lg:text-4xl leading-relaxed hover:scale-[1.01] transition-transform duration-300'
                            variants={getTextVariants(index)}
                        >
                            {paragraph}
                        </motion.p>
                    ))}
                    <Masonry data={data} />
                </motion.div>
            </div>
        </section>
    );
};

export default About;
