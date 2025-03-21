import React from "react";

const Summary = () => {
    return (
        <section
            id="summary"
            className="py-16 bg-gray-900 text-white relative overflow-hidden"
        >
            {/* Neon Background Animation */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl animate-neon-move"
                ></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Profile Image */}
                <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                    <div className="relative">
                        <img
                            src="./Riza's_Image.jpg" // Replace with your actual image path
                            alt="Riza's Profile"
                            className="object-cover rounded-full border-4 border-gray-700 shadow-lg"
                            style={{ width: "292px", height: "292px" }} // Set width and height directly
                        />
                        {/* Glowing Border Animation */}
                        <div className="absolute inset-5 rounded-full bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-pink-500/50 blur-md opacity-50 animate-pulse"></div>
                    </div>
                </div>

                {/* Summary Text and Button */}
                <div className="w-full md:w-2/3 space-y-6">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-8 animate-glow-title">
                        About Me
                    </h2>
                    <p
                        className="text-gray-300 leading-relaxed opacity-0 animate-fade-in-up"
                        style={{ animationDelay: "0.2s" }}
                    >
                        As a motivated and skilled graduate, I have completed a BEng(Hons)
                        in Software Engineering and am currently awaiting my graduation
                        ceremony.
                    </p>
                    <p
                        className="text-gray-300 leading-relaxed opacity-0 animate-fade-in-up"
                        style={{ animationDelay: "0.4s" }}
                    >
                        With a solid foundation in software development and a passion for
                        innovation, I consistently strive to expand my knowledge and
                        expertise.
                    </p>
                    <p
                        className="text-gray-300 leading-relaxed opacity-0 animate-fade-in-up"
                        style={{ animationDelay: "0.6s" }}
                    >
                        My educational journey includes successfully completing an HND in
                        Software Engineering, which highlights my commitment to continuous
                        learning. I am eager to contribute my skills to cutting-edge
                        projects and make meaningful contributions within the dynamic
                        field of software development.
                    </p>

                    {/* Download CV Button (Centered on Desktop) */}
                    <div className="flex justify-center mt-8">
                        <a
                            href="./RIZA_UPDATED_CV_17.03.2025.pdf"
                            download
                            className="relative inline-flex items-center px-6 py-3 overflow-hidden text-white font-medium rounded-full group hover:scale-105 transition-all duration-300 transform"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600"></span>
                            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></span>
                            <span className="relative flex items-center z-10">
                                Download CV
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
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Summary;