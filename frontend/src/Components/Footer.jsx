import React from 'react'
import { BsWhatsapp } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';

const Footer = () => {

    const [email, setEmail] = useState('');

    const handleSubscribe = async (e) => {
      e.preventDefault();
  
      if (!email || !email.includes('@')) {
        toast.error("Please enter a valid email!");
        return;
      }
  
      try {
        const res = await axios.post("http://localhost:5000/api/subscribe", {
          email,
        });
  
        toast.success(res.data.message);
        setEmail('');
      } catch (err) {
        console.error(err);
        toast.error("Subscription failed. Try again.");
      }
    };
  
  return (
    <footer className='bg-black text-white py-8'>

        <ToastContainer position='bottom-center'  autoClose={2000}
        hideProgressBar/>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>

            <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>

                <div className='flex-1 mb-4 md:mb-0'>
                    <h3 className='text-2xl font-bold mb-2 text-green-500'>Hardik Rathod</h3>
                    <p className='font-bold text-xl text-blue-500'>Front-End Developer</p>
                    <p className='text-gray-500'>Building modern, responsive websites using React, Redux, and Tailwind CSS.</p>
                    <p className='text-gray-500'>Always ready to learn and grow!</p>

                </div>
                <div className='flex-1 w-full'>

                    <form className='flex items-center justify-center' onSubmit={handleSubscribe}>
                        <input type='email'  value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' className='w-full p-2 rounded-l-lg bg-gray-800
                        border border-gray-600 focus:outline-none focus:border-green-400'/>
                        
                        <button type='submit' className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-r-lg'>Subscribe</button>
                    </form>
                </div>
            </div>

            <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center'>
                <p className='text-gray-400'>
                    &copy; {new Date().getFullYear()} Hardik Rathod. All rights reserved.
                </p>

                <div className='flex space-x-4 my-4 md:mt-0'>
                    <a href='https://wa.me/917990641760?text=Hello%20Hardik!' target='blank'  rel="noopener noreferrer" className='text-gray-400 hover:text-white '>
                    <BsWhatsapp />
                    </a>

                    <a href='https://github.com/vandik4034' target='blank'  rel="noopener noreferrer" className='text-gray-400 hover:text-white '>
                    <SiGithub />
                    </a>

                    <a href='https://www.instagram.com/hardik4034/' target='blank'  rel="noopener noreferrer" className='text-gray-400 hover:text-white '>    
                    <BsInstagram />
                    </a>

                    <a href='https://www.linkedin.com/in/hardik-rathod-44845b1ba/'  target='blank'  rel="noopener noreferrer" className='text-gray-400 hover:text-white '>
                    <BsLinkedin />
                    </a>
                </div>

                
            </div>
        </div>
    </footer>
  )
}

export default Footer
