import React from "react";

const About = () => {
  return (
    <div className="bg-black text-white py-16" id="about">
      <div className="continer mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">About Us</h2>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Hello! I'm{" "}
            <span className="text-blue-400 font-semibold">Hardik</span>, a
            passionate
            <span className="text-green-400">
              {" "}
              Front-End Web Developer
            </span>{" "}
            with a strong foundation in
            <span className="text-yellow-400"> HTML</span>,{" "}
            <span className="text-yellow-400">CSS</span>,
            <span className="text-blue-400"> JavaScript</span>, and modern tools
            like
            <span className="text-pink-400"> React</span> and{" "}
            <span className="text-purple-400">Redux</span>.
          </p>

          <p className="text-gray-400 text-base leading-relaxed mb-6">
            I enjoy turning designs into fully functional, responsive websites.
            I write clean, optimized code and I’m always learning new
            technologies to grow as a developer.
          </p>

          <div className="space-y-4">
            <div className="flex items-center">
              <label htmlFor="htmlandcss" className="w-2/12">
                HTML & CSS
              </label>

              <div className="grow bg-gray-800 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                transform transition-transform duration-300 hover:scale-105 w-10/12"
                ></div>
              </div>
            </div>

            <div className="flex items-center">
              <label htmlFor="htmlandcss" className="w-2/12">
                React JS
              </label>

              <div className="grow bg-gray-800 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                transform transition-transform duration-300 hover:scale-105 w-9/12"
                ></div>
              </div>
            </div>

            <div className="flex items-center">
              <label htmlFor="htmlandcss" className="w-2/12">
                Tailwind CSS
              </label>

              <div className="grow bg-gray-800 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                transform transition-transform duration-300 hover:scale-105 w-11/12"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
