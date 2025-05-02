import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaDownload } from 'react-icons/fa';
import avatar2 from '../assets/avatar2.png';
import { ABOUT_CONTENT, CONTACT_CONTENT } from '../constants';
import {
    RiTwitterXFill,
    RiGithubFill,
    RiLinkedinBoxFill as RiLinkedFill
} from '@remixicon/react';
import { toast, Toaster } from 'react-hot-toast';

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

const About = () => {
    const handleDownload = () => {
        toast.success('Download started!');
    };

    return (
        <section className='border-neutral-900 pb-4' id='about'>
            <h1 className='my-20 text-center text-4xl font-bold'>
                About <span className='text-neutral-500'>Me</span>
            </h1>

            <div className='flex flex-col lg:flex-row flex-wrap'>
                {/* Avatar */}
                <div className='w-full lg:w-1/2 p-4 lg:p-8 flex justify-center items-center'>
                    <motion.img
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        src={avatar2}
                        alt='about'
                        className='rounded-2xl w-80 h-auto object-cover'
                    />
                </div>

                {/* Text + School + CV + Socials */}
                <div className='w-full lg:w-1/2 p-4 flex flex-col justify-center lg:justify-start'>
                    {/* About text */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        whileHover={{
                            scale: 1.02,
                            y: -2,
                            transition: { type: 'spring', stiffness: 200 }
                        }}
                        className='max-w-xl py-6 px-2 rounded-lg text-justify leading-relaxed transition-all duration-300 '
                    >
                        {ABOUT_CONTENT.paragraphs1}
                        <br />
                        <br />
                        {ABOUT_CONTENT.paragraphs2}
                    </motion.p>

                    {/* University Info */}
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
                            <p>
                                <strong>Major:</strong> Software Engineer
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Toast Notification */}
            <Toaster position='bottom-right' reverseOrder={false} />
        </section>
    );
};

export default About;
