import React from "react";

const Skeleton = ({ className }) => {
  return <div className={`shimmer rounded ${className}`}></div>;
};

export default Skeleton;
