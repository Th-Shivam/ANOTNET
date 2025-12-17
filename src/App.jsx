
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
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
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
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App