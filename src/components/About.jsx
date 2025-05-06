import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import profileImg from "../assets/images/about.png";
import resume from "../assets/images/Suraj_Gupta_Resume.pdf.pdf";
import "../styles/shake.css";

const About = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typingRef.current, {
      strings: ["Web Developer", "Web Designer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="py-16 w-full lg:h-180 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4 mt-10">
        <h2 className="text-4xl font-bold text-center underline mb-12">
          About me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Profile Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <img
              src={profileImg}
              alt="Profile"
              className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-xl object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
            />

          </div>

          {/* Description */}
          <div className="w-full md:w-1/2 text-gray-700">
            <div className="text-2xl sm:text-3xl font-bold mb-4">
              I'm Suraj and I'm a{" "}
              <span ref={typingRef} className="text-red-600"></span>
            </div>

            <div className="text-base sm:text-lg mb-4 space-y-4">
              <p>
                Hey there! I'm Suraj Gupta, a web developer dedicated to crafting
                seamless online experiences. I thrive on turning ideas into reality
                through clean code and creative solutions.
              </p>
              <p>
                I specialize in designing dynamic and user-friendly websites,
                prioritizing performance and accessibility in every project. I'm
                passionate about collaboration, continuous learning, and staying
                up-to-date with the latest technologies.
              </p>
              <p>
                I'm also proficient in UI/UX design principles and implementation (Figma).
              </p>
            </div>

            <a
              href={resume}
              download
              onClick={() => alert("CV downloaded")}
              className="inline-block px-6 py-3 text-lg bg-gray-600 text-white border-2 border-red-800 rounded-lg hover:bg-transparent hover:text-red-800 transition duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
