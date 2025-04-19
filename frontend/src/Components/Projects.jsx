import React from 'react'


const projects = [
    {
        id:1,
        name:"E-Commerce Website",
        technologies:"React, Redux, Tailwind CSS, Express, SQL",
        description:"An E-Commerce website where users can Search product, add them to the cart The website is built using React for the frontend, Express for the backend and SQL for the database.",
        github: "https://github.com/vandik4034/React-redux-ecommerce"
    },

    {
        id:2,
        name:"TextUtils",
        technologies:"React, Redux, Tailwind CSS ",
        description:"A text utility application that provides various text manipulation features such as word count, character count, and text conversion. Built using React and Tailwind CSS.",
        github: "https://github.com/vandik4034/react-textUtils-project"
    },

    {
        id:3,
        name:"TODO Form",
        technologies:"React, Redux, Tailwind CSS",
        description:"A simple TODO application that allows users to add, edit, and delete tasks. Built using React and Tailwind CSS.",
        github: "https://github.com/vandik4034/React-project"
    },
]

const Projects = () => {
  return (
    <div className='bg-black text-white py-20' id='projects'>

        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center text-blue-400 mb-12'> My Projects</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>


                {projects.map((project) => (

                    <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 hover:scale-105'>
                        <h3 className='text-2xl text-green-400 font-bold mb-2'>{project.name}</h3>
                        <p className='text-blue-400 mb-4'>{project.technologies}</p>
                        <p className='text-gray-400 mb-4'>{project.description}</p>
                        <a href={project.github} className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full' target='_blank' rel='noopener noreferrer'>Github</a>
                    </div>
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default Projects
