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
                    alert('Email sent successfully!');
                },
                error => {
                    console.log('FAILED...', error.text);
                    alert('Email failed to send.');
                }
            );
    };

    return (
        <section
            className='min-h-screen flex flex-col justify-center items-center px-4 md:px-10 bg-gray-50'
            id='contact'
        >
            <motion.h1
                className='mt-20 text-center text-4xl font-bold'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Contact <span className='text-blue-500'>With Me</span>
            </motion.h1>

            <form
                ref={form}
                onSubmit={sendEmail}
                className='w-full max-w-xl bg-white shadow-md rounded-2xl p-8 mt-10 space-y-6'
            >
                <div>
                    <label className='block text-sm font-medium text-gray-700'>
                        Name
                    </label>
                    <input
                        type='text'
                        name='user_name'
                        required
                        className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                    />
                </div>

                <div>
                    <label className='block text-sm font-medium text-gray-700'>
                        Email
                    </label>
                    <input
                        type='email'
                        name='user_email'
                        required
                        className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                    />
                </div>

                <div>
                    <label className='block text-sm font-medium text-gray-700'>
                        Message
                    </label>
                    <textarea
                        name='message'
                        rows='5'
                        required
                        className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none'
                    />
                </div>

                <div className='text-center'>
                    <button
                        type='submit'
                        className='px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300'
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Contact1;
