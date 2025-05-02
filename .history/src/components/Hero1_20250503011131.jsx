import React from 'react';
import { HERO_CONTENT, CONTACT_CONTENT } from '../constants';
import avatar1 from '../assets/avatar1.png';
import {
    RiTwitterXFill,
    RiGithubFill,
    RiLinkedinBoxFill as RiLinkedFill
} from '@remixicon/react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' }
    }
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

const Hero1 = () => {
    const handleDownload = () => {
        toast.success('Download started!');
    };

    return (
        <div className='border-neutral-900 pb-10 pt-10'>
            <div className='flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 lg:px-12'>
                {/* Text Content */}
                <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left'>
                    <motion.h1
                        className='text-5xl lg:text-7xl font-thin tracking-tight mb-6'
                        initial='hidden'
                        whileInView='visible'
                        variants={fadeInUp}
                    >
                        Nguyen Duc Thanh
                    </motion.h1>
                    <motion.span
                        className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'
                        initial='hidden'
                        whileInView='visible'
                        variants={fadeInUp}
                        transition={{ delay: 0.3 }}
                    >
                        Front-end Developer
                    </motion.span>
                    <motion.div
                        variants={fadeInUp}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                        className='mt-6 bg-neutral-800 p-4 rounded-xl shadow-md text-white'
                    >
                        <div className='flex items-center space-x-2 mb-2'>
                            <FaUniversity
                                className='text-yellow-400'
                                size={20}
                            />
                            <span className='text-lg font-semibold'>
                                FPT University
                            </span>
                        </div>
                        <div className='ml-6 text-sm'>
                            <p>Software Engineer</p>
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <div className='flex justify-center lg:justify-start gap-4 mt-8'>
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
                                    custom={index * 0.2}
                                    variants={iconVariants}
                                    className='hover:scale-110 transition-transform'
                                >
                                    <Icon size={30} />
                                </motion.a>
                            );
                        })}
                    </div>
                </div>

                {/* Avatar + Download Button */}
                <div className='w-full lg:w-1/2 flex flex-col items-center mb-10 lg:mb-0'>
                    <motion.img
                        src={avatar1}
                        alt='avatar'
                        className='rounded-2xl w-80 h-auto object-cover'
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />

                    {/* Download Button dưới ảnh */}
                    <motion.a
                        href='/cv.pdf'
                        download
                        onClick={handleDownload}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='mt-6 inline-flex items-center gap-2 bg-neutral-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300'
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{
                                repeat: Infinity,
                                duration: 1,
                                ease: 'linear'
                            }}
                        >
                            <FaDownload />
                        </motion.div>
                        Download CV
                    </motion.a>
                </div>
            </div>
        </div>
    );
};

export default Hero1;
