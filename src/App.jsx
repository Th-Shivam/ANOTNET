
import React from 'react'
import Navbar from './components/navbar.jsx'
import LandingPage from './components/LandingPage.jsx'
import Showcase from './components/showcase.jsx'
import Intro from './components/intro.jsx'
import AboutPage from './components/AboutPage.jsx'
import ThreeDCard from './components/3d_card.jsx'
import Services from './components/services.jsx'
import ProjectsPage from './components/ProjectsPage.jsx'
import ServicesPage from './components/ServicesPage.jsx'
import JoinUs from './components/joinus.jsx'
import Footer from './components/Footer.jsx'
import { Routes, Route } from 'react-router-dom'

import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <div className=' bg-[#030317] text-white w-full min-h-screen flex flex-col'>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Helmet>
              <title>Home - ANOTNET</title>
              <meta name="description" content="Welcome to ANOTNET - Empowering your digital journey with cutting-edge solutions." />
            </Helmet>
            <LandingPage />
            <Showcase />
            <ThreeDCard />
            <Services />
            <JoinUs />
          </>
        } />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/join" element={<JoinUs />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App