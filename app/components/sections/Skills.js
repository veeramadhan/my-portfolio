import React from "react";

const skills = [
  "HTML5",
  "CSS3",
  "Responsive Web Design",
  "JavaScript",
  "React.js",
  "Next.js",
  "Bootstrap",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "MongoDB",
  "RESTful APIs",
  "VS Code",
  "Chrome DevTools",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full py-20  text-white overflow-hidden"
    >
      <div className="text-center mb-14 px-4">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 ">
          My Skills
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Technologies & tools I specialize in
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6 md:px-20 lg:px-32">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#1a1a2e] rounded-2xl p-5 text-center shadow-md shadow-black/30 hover:shadow-lg hover:shadow-fuchsia-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="text-xl font-semibold text-white mb-2 bg-[#1a1a2e]">
              {skill}
            </div>
            <div className="w-12 h-1 mx-auto bg-gradient-to-r from-fuchsia-500 to-cyan-400  rounded-full"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
