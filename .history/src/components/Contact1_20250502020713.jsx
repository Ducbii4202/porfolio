import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { FaCheckCircle, FaTimesCircle, FaSpinner } from 'react-icons/fa';

const Contact1 = () => {
    const form = useRef();
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
            toast.error('Vui lòng nhập tên của bạn.', {
                icon: <FaTimesCircle className='text-red-500' />
            });
            return false;
        }
        if (!formData.user_email.trim()) {
            toast.error('Vui lòng nhập email.', {
                icon: <FaTimesCircle className='text-red-500' />
            });
            return false;
        }
        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(formData.user_email)) {
            toast.error('Email không hợp lệ.', {
                icon: <FaTimesCircle className='text-red-500' />
            });
            return false;
        }
        if (!formData.message.trim()) {
            toast.error('Vui lòng nhập nội dung tin nhắn.', {
                icon: <FaTimesCircle className='text-red-500' />
            });
            return false;
        }
        return true;
    };

    const sendEmail = e => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);

        emailjs
            .sendForm('service_6hylgca', 'template_b091toq', form.current, {
                publicKey: '8SStp7D9mCQTUclr5'
            })
            .then(() => {
                toast.success('Gửi email thành công!', {
                    icon: <FaCheckCircle className='text-green-500' />
                });
                form.current.reset();
                setFormData({ user_name: '', user_email: '', message: '' });
            })
            .catch(error => {
                toast.error('Gửi email thất bại. Vui lòng thử lại!', {
                    icon: <FaTimesCircle className='text-red-500' />
                });
                console.error('FAILED...', error.text);
            })
            .finally(() => {
                setIsLoading(false);
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

                <div className='text-center cursor-pointer'>
                    <motion.button
                        whileHover={!isLoading ? { scale: 1.05 } : {}}
                        whileTap={!isLoading ? { scale: 0.95 } : {}}
                        type='submit'
                        disabled={isLoading}
                        className={`px-6 py-2 font-semibold rounded-md transition duration-300 ${
                            isLoading
                                ? 'relative bg-gray-400 cursor-not-allowed text-white'
                                : 'bg-blue-600 hover:bg-blue-700 text-white'
                        }`}
                    >
                        {isLoading ? (
                            <span className='flex items-center justify-center gap-2'>
                                <FaSpinner className='animate-spin' />
                                Đang gửi...
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
