
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onContactClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          {/* DotLink Logo: Solid blue circle, NO white dot */}
          <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
          <span className="text-xl font-black tracking-tighter uppercase">DotLink</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#hero" className="text-gray-400 hover:text-white transition-colors">Home</a>
          <a href="#business" className="text-gray-400 hover:text-white transition-colors">Business</a>
          <a href="#biznote" className="text-gray-400 hover:text-white transition-colors">Intelligence</a>
          <a href="#info" className="text-gray-400 hover:text-white transition-colors">Technology</a>
          <button 
            onClick={onContactClick}
            className="bg-white/10 hover:bg-white/20 px-5 py-2 rounded-full transition-all border border-white/10 text-white cursor-pointer font-bold"
          >
            Contact Us
          </button>
        </nav>

        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </header>
  );
};
