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
            className='min-h-screen flex flex-col justify-center  md:px-10'
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

            <form
                ref={form}
                onSubmit={sendEmail}
                className='max-w-xl mx-auto bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-lg space-y-4 w-full'
            >
                <div>
                    <label className='block mb-1 font-medium text-neutral-700 dark:text-neutral-200'>
                        Name
                    </label>
                    <input
                        type='text'
                        name='user_name'
                        className='w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white'
                        required
                    />
                </div>

                <div>
                    <label className='block mb-1 font-medium text-neutral-700 dark:text-neutral-200'>
                        Email
                    </label>
                    <input
                        type='email'
                        name='user_email'
                        className='w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white'
                        required
                    />
                </div>

                <div>
                    <label className='block mb-1 font-medium text-neutral-700 dark:text-neutral-200'>
                        Message
                    </label>
                    <textarea
                        name='message'
                        rows='5'
                        className='w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white'
                        required
                    ></textarea>
                </div>

                <div className='text-center'>
                    <input
                        type='submit'
                        value='Send'
                        className='px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300 cursor-pointer'
                    />
                </div>
            </form>
        </section>
    );
};

export default Contact1;
