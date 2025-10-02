"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

export const TracingBeam = ({ children }) => {
  // Track global window scroll
  const { scrollYProgress } = useScroll();

  // Page height for SVG
  const [svgHeight, setSvgHeight] = useState(window.innerHeight);
  useEffect(() => {
    const updateHeight = () => setSvgHeight(document.body.scrollHeight);
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Motion values for gradient
  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, svgHeight]), {
    stiffness: 500,
    damping: 90,
  });
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [svgHeight * 0.2, svgHeight]), {
    stiffness: 500,
    damping: 90,
  });

  return (
    <div className="relative">
      {/* Beam SVG behind content */}
      <svg
        className="fixed left-10 top-0 h-full w-2 -z-10"
        viewBox={`0 0 20 ${svgHeight}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" x1="0" x2="0" y1={y1.get()} y2={y2.get()}>
            <stop stopColor="#18CCFC" stopOpacity="0" />
            <stop offset="0.2" stopColor="#18CCFC" stopOpacity="0.8" />
            <stop offset="0.5" stopColor="#6344F5" stopOpacity="0.8" />
            <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d={`M10 0 V ${svgHeight}`}
          stroke="url(#gradient)"
          strokeWidth={4}
          fill="none"
        />
      </svg>

      {/* All content */}
      {children}
    </div>
  );
};
