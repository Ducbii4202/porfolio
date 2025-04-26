import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact1 = () => {
    const form = useRef();
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        if (!formData.user_name.trim()) {
            setIsSuccess(false);
            setMessage('❌ Vui lòng nhập tên của bạn.');
            return false;
        }
        if (!formData.user_email.trim()) {
            setIsSuccess(false);
            setMessage('❌ Vui lòng nhập email.');
            return false;
        }
        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(formData.user_email)) {
            setIsSuccess(false);
            setMessage('❌ Email không hợp lệ.');
            return false;
        }
        if (!formData.message.trim()) {
            setIsSuccess(false);
            setMessage('❌ Vui lòng nhập nội dung tin nhắn.');
            return false;
        }
        return true;
    };

    const sendEmail = e => {
        e.preventDefault();

        if (!validateForm()) {
            setTimeout(() => setMessage(''), 3000);
            return;
        }

        setIsLoading(true);

        emailjs
            .sendForm('service_6hylgca', 'template_b091toq', form.current, {
                publicKey: '8SStp7D9mCQTUclr5'
            })
            .then(
                () => {
                    setIsSuccess(true);
                    setMessage('✅ Gửi email thành công!');
                    form.current.reset();
                    setFormData({ user_name: '', user_email: '', message: '' });
                },
                error => {
                    setIsSuccess(false);
                    setMessage('❌ Gửi email thất bại. Vui lòng thử lại!');
                    console.error('FAILED...', error.text);
                }
            )
            .finally(() => {
                setIsLoading(false);
                setTimeout(() => setMessage(''), 3000);
            });
    };

    return (
        <section
            className='pt-12 pb-20 flex flex-col justify-center px-4 md:px-10'
            id='contact'
        >
            <motion.h1
                className='mt-4 mb-10 text-center text-4xl'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Contact Wi<span className='text-neutral-500'>th Me</span>
            </motion.h1>

            {message && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`max-w-xl mx-auto text-center mb-4 p-3 rounded-md font-medium ${
                        isSuccess
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                    }`}
                >
                    {message}
                </motion.div>
            )}

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
                        value={formData.user_name}
                        onChange={handleChange}
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
                        value={formData.user_email}
                        onChange={handleChange}
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
                        value={formData.message}
                        onChange={handleChange}
                        rows='5'
                        className='w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white'
                        required
                    ></textarea>
                </div>

                <div className='text-center'>
                    <motion.button
                        whileHover={!isLoading ? { scale: 1.05 } : {}}
                        whileTap={!isLoading ? { scale: 0.95 } : {}}
                        type='submit'
                        disabled={isLoading}
                        className={`px-6 py-2 font-semibold rounded-md transition duration-300 ${
                            isLoading
                                ? 'relative overflow-hidden bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700 text-white'
                        }`}
                    >
                        {isLoading ? (
                            <span className='flex items-center justify-center'>
                                <span className='absolute inline-flex h-6 w-6 rounded-full bg-blue-400 opacity-75 animate-ping'></span>
                                <span className='relative text-white'>
                                    Đang gửi...
                                </span>
                            </span>
                        ) : (
                            'Send'
                        )}
                    </motion.button>
                </div>
            </form>
        </section>
    );
};

export default Contact1;
