// import React, { useState, useEffect } from "react";
// import anotnetLogo from "../assets/anotnet.jpg";

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10); // 10px ke baad effect lage
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       className={`fixed top-0 z-50 w-full px-20 py-5 flex justify-between items-center transition-all duration-300 ${
//         scrolled
//           ? "backdrop-blur-md bg-white/10 border-b border-white/20 shadow-md"
//           : "bg-transparent"
//       }`}
//     >
//       {/* Logo */}
//       <nav className="flex items-center">
//         <img
//           src={anotnetLogo}
//           alt="Anotnet Logo"
//           className="h-10 w-auto rounded-full"
//         />
//       </nav>

//       {/* Navigation Links */}
//       <div className="flex space-x-6 text-white">
//         <a href="#" className="hover:text-blue-400">Home</a>
//         <a href="#" className="hover:text-blue-400">About</a>
//         <a href="#" className="hover:text-blue-400">Services</a>
//         <a href="#" className="hover:text-blue-400">Project</a>
//         <a href="#" className="hover:text-blue-400">Contact Us</a>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from "react";
import anotnetLogo from "../assets/anotnet.jpg";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
      className={`fixed top-0 z-50 w-full px-20 py-5 flex justify-between items-center transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
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

      {/* Navigation Links */}
      <div className="flex space-x-6 text-white">
        <a href="#" className="hover:text-blue-400">Home</a>
        <a href="#" className="hover:text-blue-400">About</a>
        <a href="#" className="hover:text-blue-400">Services</a>
        <a href="#" className="hover:text-blue-400">Project</a>
        <a href="#" className="hover:text-blue-400">Contact Us</a>
      </div>
    </div>
  );
}

export default Navbar;
