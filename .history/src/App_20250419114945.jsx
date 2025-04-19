import React from 'react';
import BlurBackground from './components/BlurBackground';
import Navbar from './components/Navbar';

import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Hero1 from './components/Hero1';

const App = () => {
    return (
        <>
            <BlurBackground />
            <Navbar />
            <main className='antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10'>
                <Navbar />
                <Hero1 />
                <About />

                <Projects />

                <Experience />
                <Skill />
                <Contact />
            </main>
        </>
    );
};

export default App;
