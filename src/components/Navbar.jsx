import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Scroll background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const handleScroll = () => {
      let current = '';
      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 100;
        const height = section.offsetHeight;
        if (top >= offset && top < offset + height) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClasses = (id) =>
    `hover:text-red-400 ${
      activeSection === id ? 'text-red-400 underline underline-offset-4' : 'text-white'
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-gray-600 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-3xl font-bold">
          <Link to="/" className="flex items-center space-x-1">
            <span className="pl-2 pr-2">
              codex
              <span className={`pl-1 pr-1 ${isScrolled ? 'text-white' : 'text-red-600'}`}>
                suraj
              </span>
            </span>
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 text-lg font-semibold">
          <li><Link smooth to="/#home" className={navLinkClasses('home')}>Home</Link></li>
          <li><Link smooth to="/#about" className={navLinkClasses('about')}>About</Link></li>
          <li><Link smooth to="/#services" className={navLinkClasses('services')}>Services</Link></li>
          <li><Link smooth to="/#skills" className={navLinkClasses('skills')}>Skills</Link></li>
          <li><Link smooth to="/#projects" className={navLinkClasses('projects')}>Projects</Link></li>
          <li><Link smooth to="/#contact" className={navLinkClasses('contact')}>Contact</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 px-6 pt-4 pb-6 space-y-6 text-lg font-semibold z-40 md:hidden">
          <Link to="/#home" smooth className={navLinkClasses('home')} onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/#about" smooth className={navLinkClasses('about')} onClick={() => setIsMenuOpen(false)}>About</Link>

          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="block text-white hover:text-red-300 w-full text-left focus:outline-none"
          >
            Services <span className="float-right">{isDropdownOpen ? '▲' : '▼'}</span>
          </button>

          <div className={`pl-4 mt-2 space-y-2 overflow-hidden transition-all duration-500 ease-in-out ${
            isDropdownOpen ? 'max-h-40' : 'max-h-0'
          }`}>
            <Link to="/#services" smooth className={navLinkClasses('services')} onClick={() => setIsMenuOpen(false)}>Website Designing</Link>
            <Link to="/#services" smooth className={navLinkClasses('services')} onClick={() => setIsMenuOpen(false)}>Website Maintenance</Link>
            <Link to="/#services" smooth className={navLinkClasses('services')} onClick={() => setIsMenuOpen(false)}>SEO Optimization</Link>
          </div>

          <Link to="/#skills" smooth className={navLinkClasses('skills')} onClick={() => setIsMenuOpen(false)}>Skills</Link>
          <Link to="/#projects" smooth className={navLinkClasses('projects')} onClick={() => setIsMenuOpen(false)}>Projects</Link>
          <Link to="/#contact" smooth className={navLinkClasses('contact')} onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
