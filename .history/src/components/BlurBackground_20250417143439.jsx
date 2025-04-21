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
    },
    animate6: {
        scare: [1, 1.6, 1],
        x: [0, 200, 0],
        y: [0, -100, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
        }
    }
};
const BlurBackground = () => {
    return (
        <div className='fixed top-0 left-0 opacity-70 w-full h-full overflow-hidden -z-10 pointer-events-auto flex justify-center items-center filter blur-[100px'>
            <motion.div
                className='bg-yellow-500 w-[350px] h-[250px] rounded-full absolute'
                variants={circleVariants}
                animate='animate'
            ></motion.div>
        </div>
    );
};

export default BlurBackground;
