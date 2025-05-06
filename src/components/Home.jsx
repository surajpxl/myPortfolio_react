import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import wallpaper from '../assets/images/wallpaper.jpg'; // Replace with your local image or Pexels link
import animatedPNG from '../assets/images/bgg4.png'; // Path to your animated PNG

const Home = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typingRef.current, {
      strings: ['Web Developer', 'Web Designer', 'Freelancer'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy(); // Clean up on component unmount
    };
  }, []);

  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex items-center justify-between relative"
      style={{
        backgroundImage: `url(${wallpaper})`, // Your background image
      }}
    >
      <div className="w-full ml-[20px] sm:ml-10 md:ml-20 max-w-screen-xl pl-4 sm:px-8 md:px-16 flex flex-col items-start text-left text-white">

       <div className="text-3xl sm:text-4xl  md:text-5xl font-semibold mb-2">Hi,</div>
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
      </div>

      {/* Right side animated PNG */}
      <div className="hidden md:flex w-full md:w-1/2 justify-center items-center">
        
          <img
            src={animatedPNG} // Use your animated PNG here
            alt="Web Developer Animation"
            className="w-full max-w-xs md:max-w-sm opacity-90 hover:opacity-100 transition duration-500 mr-50"
          />
       
      </div>
    </section>
  );
};

export default Home;
