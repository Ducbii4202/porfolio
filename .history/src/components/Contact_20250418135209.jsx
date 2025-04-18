import React from 'react';
import { CONTACT_CONTENT } from '../constants';
import { motion } from 'framer-motion';
import {
    RiTwitterXFill,
    RiGithubFill,
    RiLinkedinBoxFill as RiLinkedFill
} from '@remixicon/react';

const textVariants = {
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

const iconVariants = {
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
            className='min-h-screen flex flex-col items-center justify-center px-4 md:px-10 py-20 text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black'
            id='contact'
        >
            <h2 className='text-4xl md:text-6xl font-medium tracking-tight mb-6 text-center'>
                Contact
            </h2>
            <div className='h-1 w-20 bg-white mb-10 rounded-full'></div>

            <motion.h3
                className='text-5xl md:text-7xl font-semibold leading-tight text-center'
                initial='hidden'
                whileInView='visible'
                custom={0.4}
                variants={textVariants}
            >
                {CONTACT_CONTENT.headline}
            </motion.h3>

            <motion.p
                className='text-lg md:text-2xl mt-6 max-w-3xl text-center text-gray-300'
                initial='hidden'
                whileInView='visible'
                custom={0.6}
                variants={textVariants}
            >
                {CONTACT_CONTENT.description}
            </motion.p>

            <motion.a
                href={`mailto:${CONTACT_CONTENT.email}`}
                className='text-2xl md:text-3xl font-medium mt-10 hover:underline'
                initial='hidden'
                whileInView='visible'
                custom={0.8}
                variants={textVariants}
            >
                {CONTACT_CONTENT.email}
            </motion.a>

            <div className='flex gap-6 mt-12'>
                {CONTACT_CONTENT.socialLinks.map((link, index) => {
                    const Icon =
                        link.icon === 'RiTwitterXFill'
                            ? RiTwitterXFill
                            : link.icon === 'RiGithubFill'
                            ? RiGithubFill
                            : RiLinkedFill;
                    return (
                        <motion.a
                            key={link.platform}
                            href={link.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label={link.ariaLabel}
                            initial='hidden'
                            whileInView='visible'
                            custom={1.0 + index * 0.2}
                            variants={iconVariants}
                            className='hover:text-primary transition-colors'
                        >
                            <Icon size={36} />
                        </motion.a>
                    );
                })}
            </div>

            <motion.p
                className='text-sm text-stone-400 mt-36 text-center'
                initial='hidden'
                whileInView='visible'
                custom={1.6}
                variants={textVariants}
            >
                {CONTACT_CONTENT.footerText}
            </motion.p>
        </section>
    );
};

export default Contact;
