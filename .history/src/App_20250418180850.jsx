import React from 'react';
import BlurBackground from './components/BlurBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Skill from './components/Skill';
import Contact from './components/Contact';

const App = () => {
    return (
        <>
            <BlurBackground />
            <Navbar />

            <main className='antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10'>
                <Navbar />
                <Hero />
                <Projects />
                <About />
                <Experience />
                <Skill />
                <Contact />
            </main>
        </>
    );
};

export default App;
