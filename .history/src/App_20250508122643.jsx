import React from 'react';
import BlurBackground from './components/BlurBackground';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

import Experience from './components/Experience';
import Skill from './components/Skill';
import Hero1 from './components/Hero1';
import Contact1 from './components/Contact1';
import { Toaster } from 'react-hot-toast'; // ✅ IMPORT TOASTER

const App = () => {
    return (
        <>
            <BlurBackground />
            <Navbar /> {/* ✅ Chỉ giữ 1 lần */}
            <main className='antialiased overflow-x-hidden max-w-7xl mx-auto relative mt-5 z-10'>
                <Hero1 />
                {/* <About /> */}
                <Projects />
                <Experience />
                <Skill />
                <Contact1 />
            </main>
            <Toaster position='top-center' reverseOrder={false} />{' '}
            {/* ✅ Toast dùng toàn cục */}
        </>
    );
};

export default App;
