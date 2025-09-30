// import React, { useState, useEffect } from 'react';
// import { HashLink as Link } from 'react-router-hash-link';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('');

//   // Scroll background change
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Track active section
//   useEffect(() => {
//     const sections = document.querySelectorAll('section');

//     const handleScroll = () => {
//       let current = '';
//       sections.forEach((section) => {
//         const top = window.scrollY;
//         const offset = section.offsetTop - 100;
//         const height = section.offsetHeight;
//         if (top >= offset && top < offset + height) {
//           current = section.getAttribute('id');
//         }
//       });
//       setActiveSection(current);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinkClasses = (id) =>
//     `hover:text-red-400 ${
//       activeSection === id ? 'text-red-400 underline underline-offset-4' : 'text-white'
//     }`;

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
//         isScrolled ? 'bg-gray-600 shadow-md' : 'bg-transparent'
//       }`}
//     >
//       <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-white text-3xl font-bold">
//           <Link to="/#home" className="flex items-center space-x-1">
//             <span className="pl-2 pr-2">
//               codex
//               <span className={`pl-1 pr-1 ${isScrolled ? 'text-orange-300' : 'text-red-600'}`}>
//                 suraj
//               </span>
//             </span>
//           </Link>
//         </div>

//         {/* Hamburger Icon */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="text-white text-3xl focus:outline-none"
//           >
//             <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
//           </button>
//         </div>

//         {/* Desktop Nav */}
//         <ul className="hidden md:flex space-x-10 text-lg font-semibold">
//           <li>
//             <Link smooth to="/#home" className={navLinkClasses('home')}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link smooth to="/#about" className={navLinkClasses('about')}>
//               About
//             </Link>
//           </li>
//           <li>
//             <Link smooth to="/#skills" className={navLinkClasses('skills')}>
//               Skills
//             </Link>
//           </li>

//           <li>
//             <Link smooth to="/#projects" className={navLinkClasses('projects')}>
//               Projects
//             </Link>
//           </li>
//           <li>
//             <Link smooth to="/#services" className={navLinkClasses('services')}>
//               Services
//             </Link>
//             </li>
//           <li>
//             <Link smooth to="/#contact" className={navLinkClasses('contact')}>
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="fixed top-0 left-0 h-full w-full bg-gray-900 bg-opacity-95 px-6 pt-20 pb-6 flex flex-col space-y-6 text-lg font-semibold z-40 md:hidden">
//           {/* Close Icon */}
//           <button
//             onClick={() => setIsMenuOpen(false)}
//             className="text-white text-3xl absolute top-6 right-6"
//           >
//             <i className="fas fa-times"></i> {/* Close Icon */}
//           </button>

//           <Link
//             to="/#home"
//             smooth
//             className={navLinkClasses('home')}
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Home
//           </Link>
//           <Link
//             to="/#about"
//             smooth
//             className={navLinkClasses('about')}
//             onClick={() => setIsMenuOpen(false)}
//           >
//             About
//           </Link>

//           <Link
//             to="/#skills"
//             smooth
//             className={navLinkClasses('skills')}
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Skills
//           </Link>
//           <Link
//             to="/#projects"
//             smooth
//             className={navLinkClasses('projects')}
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Projects
//           </Link>
//           {/* Dropdown Toggle */}
//           <button
//             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//             className="text-white hover:text-red-300 text-left focus:outline-none"
//           >
//             Services <span className="float-right">{isDropdownOpen ? '▲' : '▼'}</span>
//           </button>

//           {/* Dropdown Content */}
//           <div
//             className={`pl-4 transition-all duration-300 ease-in-out overflow-hidden ${
//               isDropdownOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
//             }`}
//           >
//             <Link
//               to="/#services"
//               smooth
//               className="block py-2 text-white hover:text-red-300"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Website Designing
//             </Link>
//             <Link
//               to="/#maint"
//               smooth
//               className="block py-2 text-white hover:text-red-300"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Website Maintenance
//             </Link>
//             <Link
//               to="/#free"
//               smooth
//               className="block py-2 text-white hover:text-red-300"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Freelance
//             </Link>
//           </div>

//           <Link
//             to="/#contact"
//             smooth
//             className={navLinkClasses('contact')}
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Contact
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [loading, setLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll background change
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 100;
        const height = section.offsetHeight;
        if (top >= offset && top < offset + height) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClasses = (id) =>
    `hover:text-red-400 transition duration-300 ${
      activeSection === id
        ? "text-red-400 underline underline-offset-4"
        : "text-white"
    }`;

  if (loading) {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-700 shadow-md">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="h-6 w-24 shimmer rounded"></div>
          <div className="hidden md:flex space-x-10">
            <div className="h-5 w-16 shimmer rounded"></div>
            <div className="h-5 w-16 shimmer rounded"></div>
            <div className="h-5 w-16 shimmer rounded"></div>
            <div className="h-5 w-16 shimmer rounded"></div>
          </div>
          <div className="md:hidden h-6 w-6 shimmer rounded"></div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        activeSection === "about" ||
        activeSection === "projects" ||
        activeSection === "contact"
          ? "bg-[#1E1E1E]/90 shadow-md" // Dark bg on white About
          : isScrolled
          ? "bg-gradient-to-r from-[#8497FE] shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-3xl font-bold">
          <Link to="/#home" className="flex items-center space-x-1">
            <span className="pl-2 pr-2">
              codex
              <span
                className={`pl-1 pr-1 transition-colors duration-300 ${
                  activeSection === "about" ? "text-orange-300" : "text-red-600"
                }`}
              >
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
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 text-lg font-semibold">
          {["home", "about", "skills", "projects", "services", "contact"].map(
            (id) => (
              <li key={id}>
                <Link smooth to={`/#${id}`} className={navLinkClasses(id)}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 h-full w-full bg-gray-900 bg-opacity-95 px-6 pt-20 pb-6 flex flex-col space-y-6 text-lg font-semibold z-40 md:hidden">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-3xl absolute top-6 right-6"
          >
            <i className="fas fa-times"></i>
          </button>

          {["home", "about", "skills", "projects"].map((id) => (
            <Link
              key={id}
              to={`/#${id}`}
              smooth
              className={navLinkClasses(id)}
              onClick={() => setIsMenuOpen(false)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          ))}

          {/* Dropdown */}
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-white hover:text-red-300 text-left focus:outline-none"
          >
            Services{" "}
            <span className="float-right">{isDropdownOpen ? "▲" : "▼"}</span>
          </button>

          <div
            className={`pl-4 transition-all duration-300 ease-in-out overflow-hidden ${
              isDropdownOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <Link
              to="/#services"
              smooth
              className="block py-2 text-white hover:text-red-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Website Designing
            </Link>
            <Link
              to="/#maint"
              smooth
              className="block py-2 text-white hover:text-red-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Website Maintenance
            </Link>
            <Link
              to="/#free"
              smooth
              className="block py-2 text-white hover:text-red-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Freelance
            </Link>
          </div>

          <Link
            to="/#contact"
            smooth
            className={navLinkClasses("contact")}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
