// src/components/HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Neon Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl animate-neon-move"
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Welcome Message */}
        <h1
          className="text-3xl md:text-4xl font-bold text-gray-200 mb-4 opacity-0 animate-fade-in-up text-glow"
          style={{ animationDelay: "0.2s" }}
        >
          Welcome to My Portfolio
        </h1>

        {/* Name */}
        <h2
          className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-4 animate-glow-title"
        >
          Rawufdeen Mohamad Riza
        </h2>

        {/* Qualification */}
        <p
          className="text-2xl md:text-3xl text-gray-300 mb-6 opacity-0 animate-fade-in-up text-glow"
          style={{ animationDelay: "0.4s" }}
        >
          BEng(Hons) in Software Engineering
        </p>

        {/* University */}
        <p
          className="text-xl md:text-2xl text-gray-400 mb-8 opacity-0 animate-fade-in-up text-glow"
          style={{ animationDelay: "0.6s" }}
        >
          London Metropolitan University
        </p>

        {/* Roles */}
        <p
          className="text-lg md:text-xl text-gray-400 opacity-0 animate-fade-in-up text-glow"
          style={{ animationDelay: "0.8s" }}
        >
          Full-Stack Developer | Backend Developer | Frontend Developer | Quality Assurance
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          {/* View CV Button */}
          <a
            href="./RIZA_UPDATED_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 group"
          >
            <span>View CV</span>
            <svg
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>

          {/* Download CV Button */}
          <a
            href="./RIZA_UPDATED_CV.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 group"
          >
            <span>Download CV</span>
            <svg
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;