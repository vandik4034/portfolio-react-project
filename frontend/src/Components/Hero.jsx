import React from "react";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center pt-40 py-16" id="home">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm <span className="text-blue-400">Hardik</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
        A passionate <span className="text-green-400">Front-End Developer</span>{" "}
        who loves building modern, responsive websites using
        <span className="text-yellow-400"> React</span>,{" "}
        <span className="text-purple-400">Redux</span>, and{" "}
        <span className="text-pink-400">Tailwind CSS</span>.
      </p>

      <p className="mt-4 text-gray-400">
        I enjoy creating beautiful and functional user interfaces that solve
        real-world problems. Always ready to learn and grow!
      </p>
      <div className="
        mt-8 flex flex-col md:flex-row justify-center items-center space-x-4">
        <a href="#contact" className="
        bg-gradient-to-r from-green-400 to-blue-500 text-black text-bold hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Contact With Me</a>
        <button className="bg-gradient-to-r from-pink-400 to-yellow-500 text-black text-bold hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Resume</button>
      </div>
    </div>
  );
};

export default Hero;
