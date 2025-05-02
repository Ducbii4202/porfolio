import React from 'react';
import { HERO_CONTENT, CONTACT_CONTENT } from '../constants';
import avatar1 from '../assets/avatar1.png';
import {
    RiTwitterXFill,
    RiGithubFill,
    RiLinkedinBoxFill as RiLinkedFill
} from '@remixicon/react';
import { motion } from 'framer-motion';

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
        <div className=' border-neutral-900 pb-4 lg:md35 mt-10'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                            Nguyen Duc Thanh
                        </h1>
                        <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                            Front-end Developer
                        </span>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <img src={avatar1} alt='avatar' />
                    </div>
                    {/* Download CV Button */}
                    <div className='mt-4'>
                        <motion.a
                            href='/cv.pdf'
                            download
                            onClick={handleDownload}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='inline-flex items-center gap-2 bg-neutral-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300'
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

                <div className='flex justify-start gap-4 mt-8'>
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
        </div>
    );
};

export default Hero1;
