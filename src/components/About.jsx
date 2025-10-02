import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import profileImg from "../assets/images/about.png";
import resume from "../assets/images/Suraj_Gupta_Resume.pdf.pdf";
import "../styles/shake.css"; // contains .shake class
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
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
    <BackgroundBeamsWithCollision>

    <section className="py-16 w-full lg:h-screen bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4 mt-10">
        {/* Animated Heading */}
        <motion.h2
          className="text-4xl font-bold text-center underline mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          About me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Profile Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -80, rotate: -5, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={profileImg}
              alt="Profile"
              className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-xl object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </motion.div>

          {/* Description */}
          <motion.div
            className="w-full md:w-1/2 text-gray-700"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
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
                I'm also proficient in UI/UX design principles and implementation
                (Figma).
              </p>
            </div>

            {/* Animated Button */}
            <motion.a
              href={resume}
              download
              onClick={() => alert("CV downloaded")}
              className="shake inline-block px-6 py-3 text-lg bg-gray-600 text-white border-2 border-red-800 rounded-lg hover:bg-transparent hover:text-red-800 transition duration-300"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{
                opacity: 1,
                scale: [1, 1.1, 1],
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                type: "tween", // ✅ supports keyframes
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
    </BackgroundBeamsWithCollision>
  );
};

export default About;
