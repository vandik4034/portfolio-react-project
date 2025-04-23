import React from "react";
import { FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';

import axios from "axios";

const handleSubmit = async (e) => {
  e.preventDefault();

  const name = e.target[0].value;
  const email = e.target[1].value;
  const message = e.target[2].value;

  try {
    const res = await axios.post("http://localhost:5000/api/contact", {
      name,
      email,
      message,
    });

    
    toast.success(res.data.message); 
  } catch (err) {
    console.error(err);
    toast.error("Something went wrong!");
    
  }
};
 
const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="contact">
       <ToastContainer position="bottom-center" />
      <div className=" container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          Contact Us
        </h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-4xl text-bold text-green-400">Let`s Talk</h3>
            <p className="text-gray-400 text-lg mt-4">
              I am always open to discussing new projects, creative ideas,{" "}
              <br />
              or opportunities to be part of your vision. Feel free to reach
              out!
            </p>

            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-green-400 mr-2"></FaEnvelope>

              <a href="mailto:hardikrathod8153@gmail.com">
                hardikrathod8153@gmail.com
              </a>
            </div>

            <div className="mb-4 ">
              <FaPhone className="inline-block text-green-400 mr-2"></FaPhone>

              <a href="tel:+917990641760">+91 7990641760</a>
            </div>

            <div className="mb-4 ">
              <FaMapMarkerAlt className="inline-block text-green-400 mr-2"></FaMapMarkerAlt>

              <a
                href="https://www.google.com/maps/place/GANGOTRI+CIRCLE/@23.0459699,72.6672331,832m/data=!3m2!1e3!4b1!4m6!3m5!1s0x395e871941eecbb1:0xbba38616a27ca268!8m2!3d23.0459699!4d72.6698134!16s%2Fg%2F11c0qwj1t5?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gangotri Circle, Nikol, Ahmedabad
              </a>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-4">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-4">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter your Email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-4">
                  Message
                </label>
                <textarea
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  rows={5}
                  placeholder="Enter your message"
                />
              </div>

              <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full">
                {" "}
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
