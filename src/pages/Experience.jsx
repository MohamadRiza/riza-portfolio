import React from "react";

// Example: import your logo
import NexasoftLogo from "/Nexasoft.jpg";
import MaxItSolutionsLogo from "/Max_IT.png";
import FreelanceLogo from "/freelancer.jpg";

const Experience = () => {
  const contributions = [
    {
      id: 1, //OK
      role: "Founder & Developer",
      company: "Nexasoft",
      location: "Hybrid",
      duration: "Jan 2025 - Present",
      logo: NexasoftLogo, // Add logo path here
      description:
        "At Nexasoft, I am the founder of our 4-member team. I primarily handle development and deployment, while also assigning tasks to team members using Jira. Additionally, I participate in project discovery, testing, and team meetings to discuss project details and strategies.",
    },
    {
      id: 2,
      role: "Full-Stack Developer",
      company: "MAX IT Solutions (PVT) LTD",
      location: "Hybrid",
      duration: "Oct 2024 - Jul 2025",
      logo: MaxItSolutionsLogo, // Add logo path here
      description:
        "As a Full-Stack Developer at MAX IT Solutions, I primarily developed web-based and desktop applications, handling both frontend and backend tasks to deliver complete, functional solutions.",
    },
    {
      id: 3,
      role: "Technical Support Engineer",
      company: "MAX IT Solutions (PVT) LTD",
      location: "Onsite",
      duration: "May 2024 - Oct 2024",
      logo: MaxItSolutionsLogo, // Add logo path here
      description:
        "As a Technical Support Engineer at MAX IT Solutions, I provided technical assistance to clients, troubleshooting hardware and software issues, ensuring smooth system operations, and maintaining high client satisfaction.",
    },
    {
      id: 4,
      role: "Software Engineer (Web & Desktop Applications)",
      company: "Freelance Online/Offline",
      location: "Part-Time",
      duration: "Mar 2024 - Present",
      logo: FreelanceLogo, // Add logo path here
      description:
        "As a Freelance Software Engineer, I develop and deliver web and desktop applications for clients, working both online through platforms like Upwork, Freelancer and offline directly with clients, with most projects handled offline.",
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

              {/* Company Logo */}
              {contribution.logo && (
                <div className="flex justify-center mb-4">
                  <img
                    src={contribution.logo}
                    alt={`${contribution.company} logo`}
                    className="rounded-lg h-40 w-52 object-cover shadow-md transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

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
