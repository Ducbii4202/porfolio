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
        <section>
            <div className='relative z-10 min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-white '>
                <motion.div
                    className='w-full md:w-1/2 p-8'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    {/* <motion.h1
                        className='text-2xl md:text-3xl lg:text-5xl my-14'
                        variants={textVariants}
                    >
                        {HERO_CONTENT.greeting}
                    </motion.h1> */}
                    <motion.div variants={textVariants}>
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
                        />
                    </motion.div>

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

                <motion.div
                    className='w-full md:w-1/2 p-8'
                    initial='hidden'
                    animate='visible'
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
