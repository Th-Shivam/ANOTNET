import React from 'react';
import Intro from './intro.jsx';
import About from './about.jsx';

const AboutPage = () => {
    return (
        <div className="bg-[#030317] min-h-screen w-full">
            <Intro />
            <About />
        </div>
    );
};

export default AboutPage;
