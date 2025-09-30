// src/components/Skeleton.jsx
import React from "react";

const Skeleton = ({ className }) => {
  return (
    <div
      className={`animate-pulse bg-gray-700/70 rounded ${className}`}
    ></div>
  );
};

export default Skeleton;
