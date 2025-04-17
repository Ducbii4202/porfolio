import React from 'react';
import { animate, motion } from 'framer-motion';

const circleVariants = {
    animate: {
        scale: [1, 1.2, 1],
        x: [0, 100, 0],
        y: [0, 50, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut'
        }
    },

    animate2: {
        scare: [1, 1.1, 1],
        x: [0, 120, 0],
        y: [0, -60, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
        }
    }
};
const BlurBackground = () => {
    return <div>BlurBackground</div>;
};

export default BlurBackground;
