import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("summary");

    // Handle scrolling effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Update active section based on scroll position
            const sections = ["hero" ,"summary", "tech-stacks", "projects", "education", "experience", "skills"];
            const currentSection = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [,"Summary", "Tech Stacks", "Projects", "Education", "experience", "Skills"];

    return (
        <nav
            className={`cursor-default sticky top-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-gray-900/95 backdrop-blur-md shadow-lg py-2"
                    : "bg-gray-900 py-4"
            } relative overflow-hidden`}
        >
            {/* Moving Lights Effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent rounded-full blur-3xl animate-moving-light"
                ></div>
                <div
                    className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-l from-transparent via-purple-500/30 to-transparent rounded-full blur-3xl animate-moving-light-reverse"
                ></div>
            </div>

            <div className="container mx-auto px-4 flex justify-between items-center relative z-10">
                {/* Logo with glowing background */}
                <div className="relative group">
                    <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-cyan-400 transition-all duration-700 z-10 relative">
                        Riza's Portfolio
                    </h1>
                    {/* Glowing background animation */}
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg blur-xl opacity-30 group-hover:opacity-70 transition-opacity duration-500 ease-in-out animate-glow"
                    ></div>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => {
                        const itemId = item.toLowerCase().replace(" ", "-");
                        const isActive = activeSection === itemId;

                        return (
                            <a
                                key={item}
                                href={`#${itemId}`}
                                className={`relative group text-lg ${
                                    isActive ? "text-white font-medium" : "text-gray-300"
                                } hover:text-white transition duration-300`}
                            >
                                {item}
                                <span
                                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ${
                                        isActive ? "w-full" : "w-0 group-hover:w-full"
                                    }`}
                                ></span>
                            </a>
                        );
                    })}
                    <a
                        href="./RIZA_UPDATED_CV_17.03.2025.pdf"
                        download
                        className="relative inline-flex items-center px-6 py-2 overflow-hidden text-white font-medium rounded-full group"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600"></span>
                        <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></span>
                        <span className="relative flex items-center">
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

                {/* Mobile Hamburger Icon with animation */}
                <button
                    className="md:hidden relative w-10 h-10 focus:outline-none z-20 text-white"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <span
                            className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                                isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                            }`}
                        ></span>
                        <span
                            className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                                isOpen ? "opacity-0" : "opacity-100"
                            }`}
                        ></span>
                        <span
                            className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                                isOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                            }`}
                        ></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu with enhanced animation */}
            <div
                className={`fixed inset-0 z-10 bg-gray-900/95 backdrop-blur-md transition-all duration-500 ease-in-out ${
                    isOpen
                        ? "opacity-100 pointer-events-auto top-16"
                        : "opacity-0 pointer-events-none top-16"
                }`}
            >
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col space-y-6 items-center text-center">
                        {navItems.map((item, index) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(" ", "-")}`}
                                onClick={() => setIsOpen(false)}
                                className={`text-xl py-2 px-4 w-full text-gray-300 hover:text-white transition-all duration-300 transform hover:translate-x-2 ${
                                    activeSection === item.toLowerCase().replace(" ", "-")
                                        ? "text-white font-medium"
                                        : ""
                                }`}
                                style={{
                                    transitionDelay: `${index * 50}ms`,
                                    opacity: isOpen ? 1 : 0,
                                    transform: isOpen ? "translateY(0)" : "translateY(20px)",
                                }}
                            >
                                {item}
                            </a>
                        ))}
                        <a
                            href="./RIZA_UPDATED_CV_17.03.2025.pdf"
                            download
                            onClick={() => setIsOpen(false)}
                            className="mt-6 w-64 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                            style={{
                                transitionDelay: `${navItems.length * 50}ms`,
                                opacity: isOpen ? 1 : 0,
                                transform: isOpen ? "translateY(0)" : "translateY(20px)",
                            }}
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;