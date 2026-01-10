import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import  {motion} from 'framer-motion'
import profileImg from "../assets/images/aboutImg2.jpg";
import resume from "../assets/images/Suraj_Gupta_Resume.pdf.pdf";
import "../styles/shake.css"; // contains .shake class
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
const About = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typingRef.current, {
      strings: ["Full-Stack Developer"],
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
                className=" h-72 sm:w-80 sm:h-90 md:w-96 md:h-110 rounded-xl object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
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
                {" "}🧑‍💻
                <span ref={typingRef} className="text-red-600"></span>
              </div>

              <div className="text-base sm:text-lg mb-4 space-y-4">
                <p>
                  Hi, I’m Suraj Gupta, a MERN Stack Developer focused on
                  building real-world web applications. I work with React.js,
                  JavaScript, Node.js, MongoDB, and Tailwind CSS to create fast,
                  responsive, and user-friendly interfaces. <br /> <br /> I’ve built a
                  full-stack LMS featuring authentication, role-based access
                  (Admin & Student), and Razorpay subscription payments, giving
                  me hands-on experience with REST APIs, JWT authentication, and
                  SaaS-style architecture. I’m currently seeking internship or
                  junior developer roles where I can learn, contribute, and grow
                  as a developer...
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
