import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-black to-blue-900/30 flex items-center justify-center text-center px-4 relative">
      <div className="max-w-8xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-transparent stroke-text mb-8 leading-tight">
          Your Vision, Our Obsession <br />
          Let's Make It Iconic
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Transforming visions into vibrant realities, one pixel at a time - crafting innovative digital experiences that elevate your brand.
        </p>
      </div>

      {/* WhatsApp Icon */}
      <a
        href="https://w.app/pixelamediahassan"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-400 text-white p-4 rounded-full shadow-lg hover:bg-green-500 transition-transform transform hover:scale-110 z-50 mr-10"
      >
        <FaWhatsapp className="text-3xl" />
      </a>

      {/* Add styling for outline effect */}
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 2px white; /* White outline */
          color: transparent; /* Transparent fill */
        }
      `}</style>
    </div>
  );
};

export default Hero;
