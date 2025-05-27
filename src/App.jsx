import React from 'react'
import Navbar from './components/navbar.jsx'
import LandingPage from './components/LandingPage.jsx'
import Showcase from './components/showcase.jsx'
import Intro from './components/intro.jsx'
import About from './components/about.jsx'
import ThreeDCard from './components/3d_card.jsx'
import Services from './components/services.jsx'


function App() {
  return (
    <div className=' bg-[#030317] text-white w-full min-h-screen'>
      <Navbar />
      <LandingPage/>
      <Showcase />
      <Intro/>
      <About/>
      <ThreeDCard/>
      <Services/>
     
    </div>
  )
}

export default App