import React from 'react';
import { motion } from 'framer-motion';

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

const Hero = () => {
    return <div>Hero</div>;
};

export default Hero;
