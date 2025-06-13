import React from "react";

const TechStacks = () => {
  const techStacks = [
    {
      category: "Web Development",
      items: [
        { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind CSS", icon: "https://www.svgrepo.com/show/374118/tailwind.svg" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Wordpress", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzAxIzs2yRTPxONA1yBwMZdhkNwlqmIpxFug&s" },
        { name: "Next JS", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdl8u81goWJcMdQlW9PbbFW6GQy1x07JPdJeoVrQtfyEtEKbvECeB1t5PPVMzpc4Pl9tE&usqp=CAU" }, // Placeholder for MVC
      ],
    },
    {
      category: "Programming Languages",
      items: [
        { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        { name: "Java (Beginner)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      ],
    },
    {
      category: "Database Management",
      items: [
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MS-SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
        { name: "NO-SQL (MongoDB)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      ],
    },
    {
      category: "Testing/Quality",
      items: [
        { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
        { name: "Thunder Client", icon: "https://image.pngaaa.com/443/6730443-middle.png" }, // Custom icon
        { name: "Selenium", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Selenium_Logo.png/1200px-Selenium_Logo.png" },
        { name: "JMeter", icon: "https://www.simplilearn.com/ice9/free_resources_article_thumb/JMeter_Logo.png" }, // Custom icon
      ],
    },
    {
      category: "APIs & Tools",
      items: [
        { name: "RESTful API", icon: "https://img.favpng.com/12/14/21/logo-application-programming-interface-computer-programming-application-software-png-favpng-GLG35f9UpqmCUDS0w0zj4y9vE.jpg" }, // Placeholder
        { name: "Firebase (Beginner)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "GCP (Beginner)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
        {name: "Supabase (Beginner)", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLt5RQx6V1W6XXJcczgwNbzbdGyfHNCYtSCQ&s" }, // Placeholder
      ],
    },
    {
      category: "IDE",
      items: [
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Visual Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" },
        { name: "IntelliJ IDEA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
        { name: "PyCharm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" },
        { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
      ],
    },
    {
      category: "Version Control & Others",
      items: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      ],
    },
    {
      category: "Programming Paradigms",
      items: [{ name: "Object-Oriented Programming (OOP)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }], // Placeholder
    },
    {
      category: "Operating Systems",
      items: [
        { name: "Kali Linux", icon: "https://cdn.freelogovectors.net/wp-content/uploads/2021/12/kali-logo-freelogovectors.net_.png" },
        { name: "Black Arch Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "Ubuntu", icon: "https://static.vecteezy.com/system/resources/previews/054/650/832/non_2x/ubuntu-logo-rounded-ubuntu-logo-free-png.png" },
        { name: "macOS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" },
        { name: "Windows", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
      ],
    },
  ];

  return (
    <section
      id="tech-stacks"
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
          Tech Stacks
        </h2>

        {/* Tech Stacks Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStacks.map((stack, index) => (
            <div
              key={index}
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

              {/* Category Title */}
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-4 text-glow">
                {stack.category}
              </h3>

              {/* Tech Items */}
              <ul className="flex flex-wrap gap-4">
                {stack.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 relative"
                  >
                    {/* Logo */}
                    <div className="relative">
                      <img
                        src={item.icon}
                        alt={`${item.name} logo`}
                        className="w-8 h-8 rounded-full transition-transform duration-300 transform hover:scale-110"
                      />
                      {/* Logo Glow Effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-pink-500/50 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    {/* Tech Name */}
                    <span className="text-sm text-glow">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStacks;