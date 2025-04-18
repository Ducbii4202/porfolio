import React from 'react';

const textVariats = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: 'easeOut',
            delay
        }
    })
};
const Contact = () => {
    return <div>Contact</div>;
};

export default Contact;
