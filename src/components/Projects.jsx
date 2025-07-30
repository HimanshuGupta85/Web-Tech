/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// pages/Projects.js
import React from "react";

// const ProjectCard = ({ title, description, image }) => {
//   return (
//     <div className="project-card">
//       <div className="project-image">
//         <img src={image} alt={title} />
//       </div>
//       <div className="project-info">
//         <h3>{title}</h3>
//         <p>{description}</p>
//         <button className="view-project">View Project</button>
//       </div>
//     </div>
//   );
// };

const ProjectCard = ({ title, description, image }) => {
  return (
    <>
      
        <div className="container mx-auto px-4">
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <img
              src={image}
              alt="Project 1"
              className="w-full h-56 object-cover text-[#fff]"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-[#fff]">{title}</h3>
              <p className="text-gray-400 mb-4">{description}</p>
              <a
                href="#"
                className="text-teal-400 hover:text-teal-300 font-semibold"
              >
                View Details &rarr;
              </a>
            </div>
          </div>
        </div>
      
    </>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "3D Product Configurator",
      description:
        "Interactive 3D product customization tool built with React and Three.js",
      image: "https://picsum.photos/seed/project1/600/400.jpg",
    },
    {
      id: 2,
      title: "Virtual Gallery",
      description: "Immersive 3D art gallery experience with WebGL",
      image: "https://picsum.photos/seed/project2/600/400.jpg",
    },
    {
      id: 3,
      title: "Interactive Data Visualization",
      description: "3D data visualization dashboard using React and D3",
      image: "https://picsum.photos/seed/project3/600/400.jpg",
    },
    {
      id: 4,
      title: "Task Management App",
      description:
        " A collaborative task management tool with real-time updates using Firebase.",
      image: "https://placehold.co/600x400/1f2937/7dd3fc?text=Project+2256",
    },
  ];

  return (
    <div className="page projects-page">
      <div className="projects-container py-20 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#fff]">
          My Projects
        </h2>
        <div className=" grid grid-cols-3 gap-5 ">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
