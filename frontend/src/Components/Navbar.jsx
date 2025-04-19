import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);

  const handleLinkClick = () => setMenuOpen(false); 

  return (
    <nav className="bg-black fixed text-white z-50 w-full px-8 md:px-16 lg:px-24 pt-2 shadow-md">
      <div className="container py-2 flex justify-between items-center">
         <a
          href="#home"
          className="text-2xl font-bold text-green-500 "
          onClick={handleLinkClick}
        >
          Hardik
        </a>

       
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-blue-400 text-xl font-bold">Home</a>
          <a href="#about" className="hover:text-blue-400 text-xl font-bold">About Us</a>
          <a href="#skills" className="hover:text-blue-400 text-xl font-bold">Skills</a>
          <a href="#projects" className="hover:text-blue-400 text-xl font-bold">Projects</a>
          <a href="#contact" className="hover:text-blue-400 text-xl font-bold">Contact Us</a>
        </div>

        
        <a href="#contact" className="hidden md:inline bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Contact Me
        </a>

        
        <div className="md:hidden text-3xl" onClick={handleToggle}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      
      {menuOpen && (
        <div className="md:hidden bg-black px-8 pb-4 flex flex-col space-y-4 text-center">
          <a onClick={handleLinkClick} href="#home" className="hover:text-blue-400 text-lg font-semibold">Home</a>
          <a onClick={handleLinkClick} href="#about" className="hover:text-blue-400 text-lg font-semibold">About Us</a>
          <a onClick={handleLinkClick} href="#skills" className="hover:text-blue-400 text-lg font-semibold">Skills</a>
          <a onClick={handleLinkClick} href="#projects" className="hover:text-blue-400 text-lg font-semibold">Projects</a>
          <a onClick={handleLinkClick} href="#contact" className="hover:text-blue-400 text-lg font-semibold">Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
