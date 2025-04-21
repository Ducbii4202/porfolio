import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact1 = () => {
    const form = useRef();

    const sendEmail = e => {
        e.preventDefault();

        emailjs
            .sendForm('service_6hylgca', 'template_b091toq', form.current, {
                publicKey: '8SStp7D9mCQTUclr5'
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                error => {
                    console.log('FAILED...', error.text);
                }
            );
    };

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

            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type='text' name='user_name' />
                <label>Email</label>
                <input type='email' name='user_email' />
                <label>Message</label>
                <textarea name='message' />
                <input type='submit' value='Send' />
            </form>
        </section>
    );
};

export default Contact1;
