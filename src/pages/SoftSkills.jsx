import React from "react";

const SoftSkills = () => {
  const softSkills = [
    { name: "Communication", icon: "https://img.icons8.com/?size=100&id=nDMoUPjLMnbO&format=png&color=000000" },
    { name: "Presentation", icon: "https://img.icons8.com/?size=100&id=Cf7fvX39MjbZ&format=png&color=000000" },
    { name: "Quick Learner", icon: "https://img.icons8.com/?size=100&id=vo1XcGH8QAag&format=png&color=000000" },
    { name: "Adaptability", icon: "https://img.icons8.com/?size=100&id=4K81JDFItFRJ&format=png&color=000000" },
    { name: "Problem Solving", icon: "https://img.icons8.com/?size=100&id=rVSB3GaDDURu&format=png&color=000000" },
    { name: "Teamwork", icon: "https://img.icons8.com/?size=100&id=OAs4QZ2x4zyX&format=png&color=000000" },
    { name: "Time Management", icon: "https://img.icons8.com/?size=100&id=UH9yrL2xZBwV&format=png&color=000000" },
    { name: "Leadership", icon: "https://img.icons8.com/?size=100&id=114323&format=png&color=000000" },
  ];

  return (
    <section
      id="skills"
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
          Skills
        </h2>

        {/* Soft Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-lg relative overflow-hidden transition-all duration-300 hover:scale-105 group"
            >
              {/* Card Glow Effect */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-card-glow"
              ></div>

              {/* Skill Icon */}
              <img
                src={skill.icon}
                alt={`${skill.name} icon`}
                className="w-12 h-12 mx-auto mb-4 object-contain"
              />

              {/* Skill Name */}
              <p className="text-center text-gray-300 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;