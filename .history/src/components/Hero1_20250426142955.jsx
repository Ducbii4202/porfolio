import React from 'react';
import { HERO_CONTENT } from '../constants';
import avatar1 from '../assets/avatar1.png';

const Hero1 = () => {
    return (
        <div className=' border-neutral-900 pb-4 lg:md35 mt-10'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                            Nguyen Duc Thanh
                        </h1>
                        <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                            Front-end Develop
                        </span>
                        <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                            {HERO_CONTENT.description}
                        </p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <img src={avatar1} alt='avatar' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero1;
