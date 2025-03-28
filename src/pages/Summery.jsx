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
                        As a passionate and driven 21-year-old software engineer , I have dedicated my academic journey to mastering the art of software development. My education began with a Level 3 Diploma in Information Technology , followed by an HND in Software Engineering , and culminated in a BEng(Hons) in Software Engineering —a path I chose because of my deep interest in technology and innovation. By skipping A/L and focusing on practical learning, I was able to complete my degree at a young age, showcasing my commitment to continuous growth and excellence.
                    </p>
                    <p
                        className="text-gray-300 leading-relaxed opacity-0 animate-fade-in-up"
                        style={{ animationDelay: "0.4s" }}
                    >
                        I specialize in Full-Stack Development , with expertise spanning Backend , Frontend , and Quality Assurance . My skill set includes technologies like React.js , Node.js , PHP , MongoDB , Python , and more, as well as tools like Postman , Selenium , and Docker . While I may not yet have formal industry experience, I have actively contributed to various academic and personal projects, such as developing an online food ordering system , a taxi booking platform , and a sales analysis CLI tool . These experiences have honed my problem-solving abilities and prepared me to tackle real-world challenges.
                    </p>
                    <p
                        className="text-gray-300 leading-relaxed opacity-0 animate-fade-in-up"
                        style={{ animationDelay: "0.6s" }}
                    >
                        I am eager to bring my technical expertise, creativity, and passion for innovation to cutting-edge projects. With a strong foundation in software engineering principles and a relentless drive to learn, I’m ready to make meaningful contributions to the dynamic world of software development.
                    </p>

                    
                </div>
            </div>
        </section>
    );
};

export default Summary;