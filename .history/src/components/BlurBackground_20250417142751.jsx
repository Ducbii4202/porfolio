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
            ease: 'easeInOut'
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
    },
    animate3: {
        scare: [1, 1.3, 1],
        x: [0, 140, 0],
        y: [0, 70, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
        }
    },

    animate4: {
        scare: [1, 1.4, 1],
        x: [0, 160, 0],
        y: [0, -80, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
        }
    },
    animate5: {
        scare: [1, 1.5, 1],
        x: [0, 100, 0],
        y: [0, 90, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
        }
    }
};
const BlurBackground = () => {
    return <div>BlurBackground</div>;
};

export default BlurBackground;
