import React from 'react'
import Navbar from './components/navbar.jsx'
import LandingPage from './components/LandingPage.jsx'
import Showcase from './components/showcase.jsx'
import Intro from './components/intro.jsx'
import About from './components/about.jsx'
import ThreeDCard from './components/3d_card.jsx'
import Services from './components/services.jsx'
import ProjectsPage from './components/ProjectsPage.jsx'
import Footer from './components/Footer.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className=' bg-[#030317] text-white w-full min-h-screen'>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <LandingPage/>
            <Showcase />
            <Intro/>
            <About/>
            <ThreeDCard/>
            <Services/>
          </>
        } />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App