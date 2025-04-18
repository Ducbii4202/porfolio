import React from 'react';
import { motion } from 'framer-motion';
import { clipPath, section } from 'framer-motion/client';
import { HERO_CONTENT } from '../constants';
import avatar1 from '../assets/avatar1.png';
import TiltedCard from '../pages/TiltedCard';
import TextPressure from '../pages/TextPressure ';

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

const containerVariants = {
    hidden: {
        opacity: 1
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const imageVariants = {
    hidden: { clipPath: 'inset(0 50% 0 50%)' },
    visible: {
        clipPath: 'inset(0 0% 0 0%)',
        transition: { duration: 1.2, ease: 'easeInOut' }
    }
};

const Hero = () => {
    return (
        <section className='w-full overflow-x-hidden bg-black'>
            <div className='max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between min-h-screen text-white'>
                {/* LEFT: TEXT */}
                <motion.div
                    className='w-full md:w-1/2 p-4 md:p-8'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    <TextPressure
                        text='Hey there!'
                        flex={true}
                        alpha={false}
                        stroke={false}
                        width={true}
                        weight={true}
                        italic={true}
                        textColor='#ffffff'
                        strokeColor='#ff0000'
                        minFontSize={36}
                        className='text-2xl md:text-3xl lg:text-5xl my-14'
                        variants={textVariants}
                    />

                    <motion.p
                        className='text-xl md:text-2xl lg:text-4xl mb-4 transition-all duration-300 hover:scale-105 hover:text-amber-400'
                        variants={textVariants}
                    >
                        {HERO_CONTENT.introduction}
                    </motion.p>

                    <motion.p
                        className='text-xl md:text-2xl lg:text-4xl transition-all duration-300 hover:scale-105 hover:text-amber-400'
                        variants={textVariants}
                    >
                        {HERO_CONTENT.description}
                    </motion.p>

                    <motion.a
                        className='bg-stone-50 text-stone-900 p-3 lg:p-4 mt-8 inline-block rounded-2xl'
                        href={HERO_CONTENT.resumeLink}
                        download
                        rel='noopener noreferrer'
                        target='_blank'
                        variants={textVariants}
                    >
                        {HERO_CONTENT.resumeLinkText}
                    </motion.a>
                </motion.div>

                {/* RIGHT: AVATAR */}
                <motion.div
                    className='w-full md:w-1/2 flex justify-center p-4 md:p-8'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.3 }}
                    variants={imageVariants}
                >
                    <div className='max-w-[320px] w-full'>
                        <TiltedCard
                            imageSrc={avatar1}
                            alt='Duc Thanh'
                            containerHeight='100%'
                            containerWidth='100%'
                            imageHeight='100%'
                            imageWidth='100%'
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
