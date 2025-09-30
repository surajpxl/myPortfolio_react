// 

import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import wallpaper from "../assets/images/wallpaper.jpg";
import animatedPNG from "../assets/images/bgg4.png";
import Skeleton from "./Skeleton";

const Home = () => {
  const typingRef = useRef(null);
  const [loading, setLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const typed = new Typed(typingRef.current, {
        strings: ["Web Developer", "Web Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
      });
      return () => typed.destroy();
    }
  }, [loading]);

  return (
    <section
      id="home"
      className="h-[95vh] bg-cover bg-center flex items-center justify-between relative"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      {/* LEFT SIDE */}
      <div className="w-full ml-[20px] sm:ml-10 md:ml-20 max-w-screen-xl pl-4 sm:px-8 md:px-16 flex flex-col items-start text-left text-white">
        {loading ? (
          <>
            <Skeleton className="w-24 h-8 mb-3" />
            <Skeleton className="w-48 h-10 mb-3" />
            <Skeleton className="w-60 h-10 mb-4" />
            <Skeleton className="w-32 h-12 mb-6 rounded-lg" />
            <div className="flex gap-4 mt-8">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="w-10 h-10 rounded-full" />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2">
              Hi,
            </div>
            <div className="text-5xl sm:text-6xl md:text-6xl py-3 font-bold my-2">
              I'm <span className="text-white">Suraj</span>
            </div>
            <div className="text-3xl sm:text-4xl md:text-4xl font-semibold mt-2 mb-4">
              A <span ref={typingRef} className="text-red-600"></span>
            </div>
            <a
              href="https://wa.me/9119614132"
              className="mt-4 inline-block px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 text-lg sm:text-xl md:text-2xl bg-gray-600 text-white border-2 border-red-800 rounded-lg hover:bg-transparent hover:text-red-800 transition duration-300"
            >
              Contact
            </a>

            {/* Social Media */}
            <div className="flex space-x-6 mt-16">
              <a
                href="https://www.instagram.com/codexsuraj/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-red-600 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/codexsuraj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-blue-400 transition duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/suraj-gupta-profilepxl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-blue-700 transition duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.in/surajpxl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-gray-800 transition duration-300"
              >
                <FaGithub />
              </a>
            </div>
          </>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:flex w-full md:w-1/2 justify-center items-center">
        {loading ? (
          <Skeleton className="w-80 h-80 rounded-full" />
        ) : (
          <img
            src={animatedPNG}
            alt="Web Developer Animation"
            className="w-full max-w-xs md:max-w-sm opacity-90 hover:opacity-100 transition duration-500 mr-50"
          />
        )}
      </div>
    </section>
  );
};

export default Home;
