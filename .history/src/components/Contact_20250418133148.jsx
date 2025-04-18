import { text } from 'framer-motion/client';
import React from 'react';

const textVariats = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: 'easeOut',
            delay
        }
    })
};

const inconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (delay = 0) => ({
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
            delay
        }
    })
};
const Contact = () => {
    return (
        <section
            className='min-h-screen flex flex-col justify-center px-4 md:px-10'
            id='contact'
        >
            <h2 className='text-4xl md:text-6xl font-medium tracking-tight mb-10'>
                Contact
            </h2>
            <div className='h-1 w-20 bg-white mb-8'>
                <motion.h3
                    className='text-6xl md:text-8xl leading-none'
                    initial='hidden'
                    whileInView='visible'
                    custom={0.4}
                    variants={textVariats}
                ></motion.h3>
            </div>
        </section>
    );
};

export default Contact;
