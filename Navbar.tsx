import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-coffee-900/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className={`p-2 rounded-full border-2 transition-colors ${isScrolled ? 'border-gold-400 text-gold-400' : 'border-white text-white'}`}>
            <Coffee size={24} />
          </div>
          <span className={`font-serif text-2xl font-bold tracking-wide transition-colors ${isScrolled ? 'text-white' : 'text-white'}`}>
            Cafe J’adore
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wider hover:text-gold-400 transition-colors ${
                isScrolled ? 'text-coffee-100' : 'text-white'
              }`}
            >
              {link.name.toUpperCase()}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 bg-gold-400 text-coffee-900 font-bold text-sm tracking-wide rounded hover:bg-gold-500 transition-colors"
          >
            BOOK TABLE
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-gold-400 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-coffee-900 border-t border-coffee-800 shadow-xl transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-coffee-100 hover:text-gold-400 font-medium text-lg text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-6 py-3 bg-gold-400 text-coffee-900 font-bold text-center rounded hover:bg-gold-500 transition-colors"
          >
            BOOK A TABLE
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;