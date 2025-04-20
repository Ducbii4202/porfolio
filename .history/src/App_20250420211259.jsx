import React from 'react';
import BlurBackground from './components/BlurBackground';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Skill from './components/Skill';
// import Contact from './components/Contact';
import Hero1 from './components/Hero1';
import Contact1 from './components/Contact1';

const App = () => {
    return (
        <>
            <BlurBackground />
            <Navbar />
            <main className='antialiased overflow-x-hidden max-w-7xl mx-auto relative mt-5 z-10'>
                <Navbar />
                <Hero1 />
                <About />

                <Projects />

                <Experience />
                <Skill />
                {/* <Contact /> */}
                <Contact1 />
            </main>
        </>
    );
};

export default App;
