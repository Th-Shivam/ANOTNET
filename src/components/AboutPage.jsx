import React from 'react';
import Intro from './intro.jsx';
import About from './about.jsx';
import { Helmet } from 'react-helmet-async';

const AboutPage = () => {
    return (
        <div className='w-full min-h-screen bg-[#030317]'>
            <Helmet>
                <title>About Us - ANOTNET</title>
                <meta name="description" content="Learn about ANOTNET, our mission, and our team." />
            </Helmet>
            <Intro />
            <About />
        </div>
    );
};

export default AboutPage;
