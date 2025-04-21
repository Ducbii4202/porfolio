import React from 'react';
import { motion } from 'framer-motion';
import { HERO_CONTENT } from '../constants';
import avatar1 from '../assets/avatar1.png';
import TiltedCard from '../pages/TiltedCard';

// Text animation
const textVariants = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' }
    }
};

// Container with stagger
const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

// Image animation (clip reveal)
const imageVariants = {
    hidden: { clipPath: 'inset(0 50% 0 50%)', opacity: 0 },
    visible: {
        clipPath: 'inset(0 0% 0 0%)',
        opacity: 1,
        transition: { duration: 1.2, ease: 'easeInOut' }
    }
};

const Hero = () => {
    return (
        <section className='min-h-screen text-white' id='hero'>
            <div className='relative z-10 flex flex-wrap flex-col md:flex-row items-center justify-center'>
                {/* Left side text */}
                <motion.div
                    className='w-full md:w-1/2 p-8'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    <motion.h1
                        className='text-2xl md:text-3xl lg:text-5xl my-14'
                        variants={textVariants}
                    >
                        {HERO_CONTENT.greeting}
                    </motion.h1>

                    <motion.p
                        className='text-xl md:text-2xl lg:text-4xl mb-4'
                        variants={textVariants}
                    >
                        {HERO_CONTENT.introduction}
                    </motion.p>

                    <motion.p
                        className='text-xl md:text-2xl lg:text-4xl'
                        variants={textVariants}
                    >
                        {HERO_CONTENT.description}
                    </motion.p>

                    <motion.a
                        className='bg-stone-50 text-stone-900 p-3 lg:p-4 mt-8 inline-block rounded-2xl font-semibold hover:bg-stone-200 transition-all'
                        href={HERO_CONTENT.resumeLink}
                        download
                        rel='noopener noreferrer'
                        target='_blank'
                        variants={textVariants}
                    >
                        {HERO_CONTENT.resumeLinkText}
                    </motion.a>
                </motion.div>

                {/* Right side image card */}
                <motion.div
                    className='w-full md:w-1/2 p-8'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.3 }}
                    variants={imageVariants}
                >
                    <TiltedCard
                        imageSrc={avatar1}
                        alt='Duc Thanh'
                        containerHeight='400px'
                        containerWidth='400px'
                        imageHeight='400px'
                        imageWidth='400px'
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={true}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
