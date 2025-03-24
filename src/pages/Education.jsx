import React, { useState } from "react";

const Education = () => {
  const educations = [
    {
      id: 1,
      name: "BEng.(Hons) in Software Engineering",
      campus: "Esoft Metro Campus (London Metropolitan University)",
      location: "Kurunegala, Sri Lanka",
      year: "2025",
      image: "https://www.britishunited.net/wp-content/uploads/2021/11/london-metropolitan-university-image-800s.jpg", // Replace with your actual campus image URL
      website: "https://esoft.lk/esoft-courses/beng-hons-in-software-engineering-top-up-london-met-university-uk/", // Replace with the actual campus website
      description:
        "I completed the BEng (Hons) in Software Engineering top-up degree at Esoft Metro Campus, certified by London Metropolitan University. This program included two semesters, 12 assessments, and a final project with comprehensive documentation. The course covered key subjects such as Application Development, Advanced Software Engineering, Project Analysis and Practice, and Artificial Intelligence. Successfully completing this program further strengthened my expertise in software engineering and project management.",
    },
    {
      id: 2,
      name: "HND in Software Engineering",
      campus: "Esoft Metro Campus (Pearson)",
      location: "Kurunegala, Sri Lanka",
      year: "2024",
      image: "https://hrmi.lk/wp-content/uploads/2023/06/pearson-1.webp", // Replace with your actual campus image URL
      website: "https://esoft.lk/esoft-courses/pearson-btec-level-5-hnd-in-computing-software-engineering/",
      description:
        "I completed the Higher National Diploma (HND) in Software Engineering at Esoft Metro Campus, certified by Pearson UK. This two-year program included four semesters, 16 assessments, and a final project. Throughout the course, I gained valuable experience in programming, networking, database management, security, research, SDLC, and web design and development. Successfully completing this program boosted my confidence in building software and web applications, while also enhancing my ability to learn and adapt to new technologies.",
    },
    {
      id: 3,
      name: "Diploma in Information Technology",
      campus: "Esoft Metro Campus (Pearson)",
      location: "Kurunegala, Sri Lanka",
      year: "2022",
      image: "https://www.chieflearningofficer.com/wp-content/uploads/2024/07/AdobeStock_408904066_Editorial_Use_Only.jpeg", // Replace with your actual campus image URL
      website: "https://esoft.lk/esoft-courses/level-3-diploma-in-information-technology/",
      description:
        "I completed the Level 03 Diploma in Information Technology at Esoft Metro Campus, certified by Pearson College UK. This course covered programming (Python, C#), networking, hardware, graphics, and database management with SQL and MSSQL. For my final project, I developed a CRUD application using C# .NET WinForms, MSSQL, and Visual Studio, which greatly enhanced my programming skills and practical experience.",
    },
  ];

  const [selectedEducation, setSelectedEducation] = useState(null);

  return (
    <section
      id="education"
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
          Education
        </h2>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educations.map((edu) => (
            <div
              key={edu.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg relative overflow-hidden transition-all duration-300 hover:scale-105 group"
            >
              {/* Card Glow Effect */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>

              {/* Campus Image */}
              <img
                src={edu.image}
                alt={`${edu.campus} campus`}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              {/* Education Name */}
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                {edu.name}
              </h3>

              {/* Campus Details */}
              <p className="text-gray-300 text-sm mb-4">
                {edu.campus}, {edu.location} • {edu.year}
              </p>

              {/* Buttons */}
              <div className="flex justify-between items-center">
                {/* View Details Button */}
                <button
                  onClick={() => setSelectedEducation(edu)}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Details
                </button>

                {/* Redirect to Campus Website Button */}
                <a
                  href={edu.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-r from-cyan-600 to-purple-600 transition-all duration-300 transform hover:scale-110"
                  aria-label={`Visit ${edu.campus}`}
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></span>
                  <svg
                    className="w-5 h-5 text-cyan-500 group-hover:text-gray-900 transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V8a2 2 0 00-2-2h-4l-4-4z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Education Details */}
        {selectedEducation && (
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-90 flex justify-center items-center z-50"
            onClick={() => setSelectedEducation(null)} // Close modal on outside click
          >
            <div
              className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl w-full relative overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
                onClick={() => setSelectedEducation(null)}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">{selectedEducation.name}</h3>
              <p className="text-gray-300 mb-4">{selectedEducation.description}</p>
              <div className="mt-6">
                <a
                  href={selectedEducation.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Visit Campus Website
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V8a2 2 0 00-2-2h-4l-4-4z"
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

export default Education;