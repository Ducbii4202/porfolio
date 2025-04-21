import React from 'react';
import BlurBackground from './components/BlurBackground';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <>
            <BlurBackground />
            <Navbar />
            <main className='antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10'></main>
        </>
    );
};

export default App;
