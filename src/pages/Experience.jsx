import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Waiting...",
      company: "Waiting...",
      location: "Waiting...",
      duration: "Waiting...",
      description:
        "Waiting...",
    },
    {
        id: 2,
        role: "Waiting...",
        company: "Waiting...",
        location: "Waiting...",
        duration: "Waiting...",
        description:
          "Waiting...",
      },
      {
        id: 3,
        role: "Waiting...",
        company: "Waiting...",
        location: "Waiting...",
        duration: "Waiting...",
        description:
          "Waiting...",
      },
  ];

  return (
    <section
      id="experience"
      className="py-16 bg-gray-900 text-white relative overflow-hidden"
    >
      {/* Neon Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl animate-neon-move"
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title with Glowing Animation */}
        <h2
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-8 text-center animate-glow-title"
        >
          Experience
        </h2>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg relative overflow-hidden transition-all duration-300 hover:scale-105 group"
            >
              {/* Automatic Card Glow Effect */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-md opacity-50 animate-card-glow"
              ></div>

              {/* Interactive Hover Glow Effect */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>

              {/* Role */}
              <h3 className="text-xl font-semibold text-cyan-400 mb-2 text-glow">
                {exp.role}
              </h3>

              {/* Company and Location */}
              <p className="text-gray-300 text-sm mb-2 text-glow">
                {exp.company} • {exp.location}
              </p>

              {/* Duration */}
              <p className="text-gray-400 text-sm mb-4 text-glow">
                {exp.duration}
              </p>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed text-glow">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;