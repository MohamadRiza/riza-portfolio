import React from "react";

const Experience = () => {
  const contributions = [
    {
      id: 1,
      role: "Founder & Developer",
      company: "Nexasoft",
      location: "Hybrid",
      duration: "Jan 2025 - Present",
      description:
        "My role: When we find our next project, I first arrange for all four of us to meet in person (including me). Even though our team is small, our dreams are big. During these meetings, we discuss the project in detail — what needs to be done and how we should approach it. As the founder, I divide the work among my friends. I usually handle most of the development and deployment myself, while assigning tasks to others based on their skills and what they can do best.",
    }
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
          Expirience
        </h2>

        {/* Fresh Graduate Tagline */}
        <p className="text-gray-400 text-center mb-8">
          As a fresh graduate, I’m eager to apply my skills and knowledge to real-world challenges.
        </p>

        {/* Contribution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contributions.map((contribution) => (
            <div
              key={contribution.id}
              className="relative p-6 rounded-2xl shadow-lg bg-gradient-to-b from-gray-800 via-gray-900 to-black overflow-hidden transition-all duration-300 hover:scale-105 group"
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
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-2 text-glow">
                {contribution.role}
              </h3>

              {/* Company and Location */}
              <p className="text-gray-300 text-sm mb-2 text-glow">
                {contribution.company} • {contribution.location}
              </p>

              {/* Duration */}
              <p className="text-gray-400 text-sm mb-4 text-glow">
                {contribution.duration}
              </p>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed text-glow">
                {contribution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;