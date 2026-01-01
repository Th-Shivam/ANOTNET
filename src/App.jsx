
import React, { Suspense } from 'react'
import Navbar from './components/navbar.jsx'
import LandingPage from './components/LandingPage.jsx'
import Showcase from './components/showcase.jsx'
import ThreeDCard from './components/3d_card.jsx'
import Services from './components/services.jsx'
import Footer from './components/Footer.jsx'
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';

// Lazy load pages
const AboutPage = React.lazy(() => import('./components/AboutPage.jsx'));
const ProjectsPage = React.lazy(() => import('./components/ProjectsPage.jsx'));
const ServicesPage = React.lazy(() => import('./components/ServicesPage.jsx'));
const JoinUs = React.lazy(() => import('./components/joinus.jsx'));
const BlogPage = React.lazy(() => import('./components/BlogPage.jsx'));
const BlogDetail = React.lazy(() => import('./components/BlogDetail.jsx'));

// Loading Fallback Component
const LoadingFallback = () => (
  <div className="min-h-screen w-full flex items-center justify-center bg-[#030317] text-white">
    <div className="flex flex-col items-center justify-center gap-8">
      {/* Animated Loader Circles */}
      <div className="relative w-24 h-24">
        {/* Outer spinning ring */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-purple-500 animate-spin"></div>

        {/* Middle spinning ring - opposite direction */}
        <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-cyan-400 border-l-indigo-400"
          style={{ animation: 'spin 1.5s linear infinite reverse' }}></div>

        {/* Inner pulsing circle */}
        <div className="absolute inset-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 animate-pulse"></div>

        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-40 animate-pulse"></div>
      </div>

      {/* Brand Name */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
          ANOTNET
        </h2>
        <p className="text-sm text-gray-400">Loading your experience...</p>
      </div>

      {/* Animated dots */}
      <div className="flex gap-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <div className=' bg-[#030317] text-white w-full min-h-screen flex flex-col'>
      <Navbar />
      <Suspense fallback={<LoadingFallback />}>
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
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App