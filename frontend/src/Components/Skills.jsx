import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
  FaGitAlt,
  
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiPostman,
  SiGooglechrome,
} from "react-icons/si";
import { RiFileExcel2Fill } from "react-icons/ri";

const skillCategories = [
  {
    title: "Core Skills / Languages",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" size={24} />, level: 90 },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" size={24} />, level: 85 },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" size={24} />, level: 80 },
    ],
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      { name: "React.js", icon: <FaReact className="text-blue-400" size={24} />, level: 80 },
      { name: "Redux", icon: <SiRedux className="text-purple-500" size={24} />, level: 75 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" size={24} />, level: 85 },
      { name: "Bootstrap", icon: <SiBootstrap className="text-indigo-400" size={24} />, level: 70 },
      {
        name: "Node.js",
        icon: <span className="text-green-400 font-bold text-xl">Node</span>,
        level: 50,
      },
      {
        name: "Express.js",
        icon: <span className="text-gray-300 font-bold text-xl">Express</span>,
        level: 50,
      },
      
      
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" size={24} />, level: 75 },
      { name: "GitHub", icon: <FaGithub className="text-white" size={24} />, level: 80 },
      { name: "Chrome DevTools", icon: <SiGooglechrome className="text-yellow-300" size={24} />, level: 80 },
      { name: "Postman", icon: <SiPostman className="text-orange-400" size={24} />, level: 65 },
      {
        name: "SQL",
        icon: <span className="text-blue-300 font-bold text-xl"></span>,
        level: 70,
      },
      { name: "Excel", icon: <RiFileExcel2Fill className="text-green-600" size={24} />, level: 50}
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-semibold mb-6 text-green-400 border-b border-gray-700 pb-2">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center gap-3">
                      {skill.icon}
                      <span className="text-lg">{skill.name}</span>
                      <span className="ml-auto text-sm text-gray-300">{skill.level}%</span>
                    </div>

                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full transition-all duration-700 ease-in-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
