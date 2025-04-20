import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const fadeInItem = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6
        }
    })
};

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
            className='min-h-screen flex flex-col justify-center px-4 md:px-10 py-10 bg-white dark:bg-neutral-950'
            id='contact'
        >
            <motion.h1
                className='mb-10 text-center text-4xl font-bold text-neutral-800 dark:text-white'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Contact <span className='text-neutral-500'>Me</span>
            </motion.h1>

            <motion.form
                ref={form}
                onSubmit={sendEmail}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                className='max-w-xl mx-auto bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-lg space-y-6 w-full'
            >
                <motion.div variants={fadeInItem} custom={1}>
                    <label className='block mb-1 font-medium text-neutral-700 dark:text-neutral-200'>
                        Name
                    </label>
                    <input
                        type='text'
                        name='user_name'
                        className='w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white'
                        required
                    />
                </motion.div>

                <motion.div variants={fadeInItem} custom={2}>
                    <label className='block mb-1 font-medium text-neutral-700 dark:text-neutral-200'>
                        Email
                    </label>
                    <input
                        type='email'
                        name='user_email'
                        className='w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white'
                        required
                    />
                </motion.div>

                <motion.div variants={fadeInItem} custom={3}>
                    <label className='block mb-1 font-medium text-neutral-700 dark:text-neutral-200'>
                        Message
                    </label>
                    <textarea
                        name='message'
                        rows='5'
                        className='w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white'
                        required
                    ></textarea>
                </motion.div>

                <motion.div
                    variants={fadeInItem}
                    custom={4}
                    className='text-center'
                >
                    <input
                        type='submit'
                        value='Send'
                        className='px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300 cursor-pointer'
                    />
                </motion.div>
            </motion.form>
        </section>
    );
};

export default Contact1;
