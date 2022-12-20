import React from "react";

const Loader = () => {
  return (
    <div className="flex gap-2 justify-center items-center absolute inset-0 h-screen w-screen overflow-hidden bg-gray-900 bg-opacity-40 z-50">
      <div
        className="w-4 h-4 bg-amber-300 rounded-full animate-bounce"
        style={{
          animationDelay: ".1s",
        }}
      ></div>
      <div
        className="w-4 h-4 bg-amber-300 rounded-full animate-bounce"
        style={{
          animationDelay: ".2s",
        }}
      ></div>
      <div
        className="w-4 h-4 bg-amber-300 rounded-full animate-bounce"
        style={{
          animationDelay: ".3s",
        }}
      ></div>
    </div>
  );
};

export default Loader;
