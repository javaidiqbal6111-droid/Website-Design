
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenConcierge: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenConcierge }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-6 md:px-12 lg:px-20 py-8 ${
      isScrolled ? 'bg-parchment/90 backdrop-blur-md py-6 border-b border-espresso/5' : 'bg-transparent'
    }`}>
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <div className="flex gap-8 items-center text-xs uppercase tracking-widest font-semibold hidden md:flex">
          <a href="#curation" className="hover:text-copper transition-colors">Curation</a>
          <a href="#philosophy" className="hover:text-copper transition-colors">Philosophy</a>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className="font-serif text-3xl md:text-4xl tracking-tighter font-bold cursor-pointer" onClick={() => window.scrollTo({top: 0})}>
            L'ESSENCE
          </h1>
        </div>

        <div className="flex gap-8 items-center text-xs uppercase tracking-widest font-semibold">
          <button 
            onClick={onOpenConcierge}
            className="hover:text-copper transition-colors hidden md:block"
          >
            Concierge
          </button>
          <a href="#" className="hover:text-copper transition-colors">Account</a>
          <a href="#" className="hover:text-copper transition-colors relative">
            Bag (0)
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
