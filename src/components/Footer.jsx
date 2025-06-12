import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#030317] text-white py-8 border-t border-gray-700 mt-20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm md:text-base text-gray-400">&copy; {new Date().getFullYear()} ANOTNET. All rights reserved.</p>
        <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-6 mt-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 