import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact1 = () => {
    const form = useRef();
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(true);

    const sendEmail = e => {
        e.preventDefault();

        emailjs
            .sendForm('service_6hylgca', 'template_b091toq', form.current, {
                publicKey: '8SStp7D9mCQTUclr5'
            })
            .then(
                () => {
                    setIsSuccess(true);
                    setMessage('✅ Gửi email thành công!');
                    form.current.reset();
                    setTimeout(() => setMessage(''), 3000);
                },
                error => {
                    setIsSuccess(false);
                    setMessage('❌ Gửi email thất bại. Vui lòng thử lại!');
                    console.error('FAILED...', error.text);
                    setTimeout(() => setMessage(''), 3000);
                }
            );
    };

    return (
        <section
            className='min-h-screen flex flex-col justify-center px-4 md:px-10 bg-gradient-to-br from-white to-blue-50 dark:from-neutral-900 dark:to-neutral-950'
            id='contact'
        >
            <motion.h1
                className='my-10 text-center text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Contact <span className='text-neutral-500'>With Me</span>
            </motion.h1>

            {message && (
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-xl shadow-md text-sm font-medium z-50 ${
                        isSuccess
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                    }`}
                >
                    {message}
                </motion.div>
            )}

            <motion.form
                ref={form}
                onSubmit={sendEmail}
                className='max-w-2xl mx-auto bg-white dark:bg-neutral-900 p-8 rounded-3xl shadow-2xl space-y-6 w-full'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div>
                    <label className='block mb-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300'>
                        Name
                    </label>
                    <input
                        type='text'
                        name='user_name'
                        className='w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white transition-all'
                        required
                    />
                </div>

                <div>
                    <label className='block mb-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300'>
                        Email
                    </label>
                    <input
                        type='email'
                        name='user_email'
                        className='w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white transition-all'
                        required
                    />
                </div>

                <div>
                    <label className='block mb-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300'>
                        Message
                    </label>
                    <textarea
                        name='message'
                        rows='5'
                        className='w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white transition-all resize-none'
                        required
                    ></textarea>
                </div>

                <div className='text-center'>
                    <motion.input
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type='submit'
                        value='Send Message'
                        className='px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition duration-300 cursor-pointer'
                    />
                </div>
            </motion.form>
        </section>
    );
};

export default Contact1;
