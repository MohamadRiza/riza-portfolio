import React, { useState } from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Grifindo Toys Payroll system (Desktop Application)",
      image: "./grifindo_payroll.png", // OK
      description:
        "The Grifindo Toys Payroll System is a Windows application developed for my coursework to streamline payroll management. It features CRUD functionalities, automatic salary calculation, and efficient management of employee data, salaries, and attendance records. The system was designed using supporting diagrams like Use Case and ERD for better documentation.",
      technologies: ["C#" ,".NET", "Microsoft SQL Server", "Visual Studio", "Git/GitHub", "SQL"],
      github: "https://github.com/MohamadRiza/Grifindo-Payroll-System", // Replace with your actual GitHub link
    },
    {
      id: 2,
      name: "ABC Car Traders Cars Traders Systen (Desktop Application)",
      image: "./ABC_Car.png", // Replace with your actual image URL
      description:
        "Developed a comprehensive car trading system using C#.NET and Microsoft SQL Server to manage car and parts sales, customer orders, and reporting.",
      technologies: ["C#.NET", "Microsoft SQL Server"],
      github: "https://github.com/MohamadRiza/ABCCarTraders", // Replace with your actual GitHub link
    },
    
    {
      id: 3,
      name: "FoodieHub (Online Food Ordering System)",
      image: "FoodieHub.png", // Replace with your actual image URL
      description:
        "",
      technologies: ["C#.NET", "Microsoft SQL Server"],
      github: "https://github.com/MohamadRiza/ABCCarTraders", // Replace with your actual GitHub link
    },
    {
      id: 4,
      name: "City Taxi (Taxi booking Web Application)",
      image: "./City_Taxi.png", // Replace with your actual image URL
      description:
        "",
      technologies: ["C#.NET", "Microsoft SQL Server"],
      github: "https://github.com/MohamadRiza/ABCCarTraders", // Replace with your actual GitHub link
    },
    {
      id: 5,
      name: "To-Do (Web Application)",
      image: "./To-Do-App.png", // Replace with your actual image URL
      description:
        "",
      technologies: ["C#.NET", "Microsoft SQL Server"],
      github: "https://github.com/MohamadRiza/ABCCarTraders", // Replace with your actual GitHub link
    },
    {
      id: 6,
      name: "E-Book (Online Book Ordering System)",
      image: "./E-Book.png", // Replace with your actual image URL
      description:
        "",
      technologies: ["C#.NET", "Microsoft SQL Server"],
      github: "https://github.com/MohamadRiza/ABCCarTraders", // Replace with your actual GitHub link
    },
    {
      id: 7,
      name: "Calculator App (For Android)",
      image: "https://via.placeholder.com/300x200", // Replace with your actual image URL
      description:
        "",
      technologies: ["C#.NET", "Microsoft SQL Server"],
      github: "https://github.com/MohamadRiza/ABCCarTraders", // Replace with your actual GitHub link
    },
    {
      id: 8,
      name: "Malcom Photograpy (Web Application)",
      image: "./Malcom_Photography.png", // OK
      description:
        "The Malcom Photography Website is a web application developed for my coursework to showcase photography services and facilitate customer engagement. It allows users to register/login, view sample photographs, ask questions, and book photographers for events. An admin page enables managing the website, uploading photos, and handling user interactions. (THIS PROJECT ISN'T AVAILABLE ON GITHUB)",
      technologies: ["MySQL", "HTML5", "CSS", "PHP", "JavaScript", "VS Code", "Bootstrap", "Figma (Software)"],
      github: "", // Replace with your actual GitHub link
    },
    {
      id: 9,
      name: "chatbot (CLI)",
      image: "./Chatbot_CLI.png", // Replace with your actual image URL
      description:
        "",
      technologies: ["C#.NET", "Microsoft SQL Server"],
      github: "https://github.com/MohamadRiza/ABCCarTraders", // Replace with your actual GitHub link
    },
    {
      id: 10,
      name: "Bus Ticket Reservation System (CLI)",
      image: "Bus_Ticket_Reservation_System_CLI.png", // Replace with your actual image URL
      description:
        "",
      technologies: ["C#.NET", "Microsoft SQL Server"],
      github: "https://github.com/MohamadRiza/ABCCarTraders", // Replace with your actual GitHub link
    },
    {
      id: 11,
      name: "Sampath Food city Sales analysis System (CLI)",
      image: "https://via.placeholder.com/300x200", // Replace with your actual image URL
      description:
        "",
      technologies: ["C#.NET", "Microsoft SQL Server"],
      github: "https://github.com/MohamadRiza/ABCCarTraders", // Replace with your actual GitHub link
    },
    {
      id: 12,
      name: "E-Video Cloud (UI,UX Design)",
      image: "./E-Video.png", // Replace with your actual image URL
      description:
        "",
      technologies: ["C#.NET", "Microsoft SQL Server"],
      github: "https://github.com/MohamadRiza/ABCCarTraders", // Replace with your actual GitHub link
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
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
          Projects
        </h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg relative overflow-hidden transition-all duration-300 hover:scale-105 group"
            >
              {/* Card Glow Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-card-glow"
              ></div>

              {/* Project Image */}
              <img
                src={project.image}
                alt={`${project.name} thumbnail`}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              {/* Project Name */}
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                {project.name}
              </h3>

              {/* Buttons */}
              <div className="flex justify-between items-center">
                {/* GitHub Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-r from-cyan-600 to-purple-600 transition-all duration-300 transform hover:scale-110"
                  aria-label={`GitHub Repository for ${project.name}`}
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></span>
                  <svg
                    className="w-5 h-5 text-white group-hover:text-gray-900 transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                {/* Details Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Project Details */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-90 flex justify-center items-center z-50"
            onClick={() => setSelectedProject(null)} // Close modal on outside click
          >
            <div
              className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl w-full relative overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
                onClick={() => setSelectedProject(null)}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">{selectedProject.name}</h3>
              <p className="text-gray-300 mb-4">{selectedProject.description}</p>
              <h4 className="text-lg font-medium text-cyan-400 mb-2">Technologies Used:</h4>
              <ul className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, index) => (
                  <li
                    key={index}
                    className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  View on GitHub
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;