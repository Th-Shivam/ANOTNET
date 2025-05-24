import React from 'react'
import Navbar from './components/navbar.jsx'
import LandingPage from './components/LandingPage.jsx'
import Showcase from './components/showcase.jsx'
import Intro from './components/intro.jsx'
import Shivam from './components/shivam.jsx'


function App() {
  return (
    <div className=' bg-[#030317] text-white w-full min-h-screen'>
      <Navbar />
      <LandingPage/>
      <Showcase />
      <Intro/>
      <Shivam/>
     
    </div>
  )
}

export default App