import React from 'react';

const Experience = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
                staggerChildren: 0.3
            }
        }
    };

    const childVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut'
            }
        }
    };
    return (
        <section className='px-6 py-10' id='experience'>
            <h2 className='text-4xl md: text-6xl font-medium tracking-tight mb-10'>
                Work Experience
            </h2>
            <div className='h1 w-20 mb-8 bg-white'></div>
            <motion.div
                className='space-y-10'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.3 }}
                variants={{ containerVariants }}
            ></motion.div>
        </section>
    );
};

export default Experience;
