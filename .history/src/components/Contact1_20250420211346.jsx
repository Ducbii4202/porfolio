import { div } from 'framer-motion/client';
import React from 'react';

const Contact1 = () => {
    return (
        <section
            className='min-h-screen flex flex-col justify-center px-4 md:px-10'
            id='contact'
        >
            <motion.h1
                className='my-20 text-center text-4xl'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Contact Wi
                <span className='text-neutral-500'>th Me</span>
            </motion.h1>
        </section>
    );
};

export default Contact1;
