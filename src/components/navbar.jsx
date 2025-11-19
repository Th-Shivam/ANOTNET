import React, { useState, useEffect } from "react";
import anotnetLogo from "../assets/anotnet.jpg";
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // Scroll down → hide navbar
      setShowNavbar(false);
    } else {
      // Scroll up → show navbar
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 z-50 w-full px-6 md:px-20 py-5 flex justify-between items-center transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
        } backdrop-blur-md bg-white/10 border-b border-white/20 shadow-md`}
    >
      {/* Logo */}
      <nav className="flex items-center">
        <img
          src={anotnetLogo}
          alt="Anotnet Logo"
          className="h-10 w-auto rounded-full"
        />
      </nav>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`md:flex space-x-6 text-white ${isMobileMenuOpen ? 'flex flex-col absolute top-full left-0 w-full bg-white/10 backdrop-blur-md py-4 items-center space-x-0 space-y-4' : 'hidden'}`}>
        <Link to="/" className="hover:text-blue-400" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        <Link to="/about" className="hover:text-blue-400" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
        <Link to="/services" className="hover:text-blue-400" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
        <Link to="/projects" className="hover:text-blue-400" onClick={() => setIsMobileMenuOpen(false)}>Project</Link>
        <Link to="/join" className="hover:text-blue-400" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
      </div>
    </div>
  );
}

export default Navbar;
