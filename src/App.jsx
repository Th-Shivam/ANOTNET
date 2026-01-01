
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
    <div className="flex flex-col items-center justify-center gap-6">
      {/* Swan Logo with Animations */}
      <div className="relative">
        <img
          src="/SWAN.svg"
          alt="Loading..."
          className="w-32 h-32 animate-pulse"
          style={{
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite, float 3s ease-in-out infinite'
          }}
        />
        {/* Glow Effect */}
        <div className="absolute inset-0 blur-2xl opacity-50 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
      </div>

      {/* Loading Text */}
      <div className="text-center">
        <p className="text-lg font-medium text-gray-300 animate-pulse">Loading...</p>
      </div>

      {/* Animated Progress Bar */}
      <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full"
          style={{
            animation: 'loading 2s ease-in-out infinite',
            backgroundSize: '200% 100%'
          }}
        ></div>
      </div>
    </div>

    {/* CSS Animations */}
    <style>{`
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-20px);
        }
      }
      
      @keyframes loading {
        0% {
          transform: translateX(-100%);
        }
        50% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(100%);
        }
      }
    `}</style>
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