import React from 'react';
import project1 from '../assets/project 1.jpg';
import project2 from '../assets/project 2.jpg';
import project3 from '../assets/project 3.jpg';
import project4 from '../assets/project 4.jpg';
import project5 from '../assets/project 5.jpg';
import project6 from '../assets/project 6.jpg';
import project7 from '../assets/project 7.jpg';
import project8 from '../assets/project 8.jpg';
import project9 from '../assets/project 9.jpg';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = ({ darkMode }) => {
  const projects = [
    { 
      id: 1, 
      title: 'Animated Website', 
      desc: `A visually engaging website built with smooth animations and interactive UI elements.
Focused on modern layouts, transitions, and enhancing user experience using pure HTML, CSS, and JavaScript.`, 
      image: project1, 
      tags: ['HTML', 'CSS', 'JS'],
      live: 'https://animated-modern-website-six.vercel.app/',
      github:"https://github.com/Sswathi17/Animated-Modern-Website"
    },
    { 
      id: 2, 
      title: 'Coffee Website', 
      desc: `A responsive coffee shop website showcasing products, menu, and brand identity.
Built with clean UI, smooth sections, and user-friendly design using HTML, CSS, and JavaScript.`, 
      image: project2, 
      tags: ['HTML', 'CSS', 'JS'],
      live: 'https://coffee-website-nu-flame.vercel.app/',
      github:"https://github.com/Sswathi17/Coffee-website"
    },
    { 
      id: 3, 
      title: 'Weather App', 
      desc: `A real-time weather application that displays current temperature and conditions based on user location.
Uses API integration with JavaScript to fetch and show dynamic weather data in a clean UI.`, 
      image: project3, 
      tags: ['HTML', 'CSS', 'JS'],
      live: 'https://weather-app-in-js.vercel.app/',
      github:"https://github.com/Sswathi17/Weather-App-in-JS"
    },
    { 
      id: 4, 
      title: 'Donuts Website', 
      desc: `A fun and colorful website for a donut shop, highlighting products and promotions.
Built with responsive layouts and Bootstrap for a smooth, mobile-friendly experience.`, 
      image: project4, 
      tags: ['HTML', 'CSS', 'Bootstrap'],
      live: 'https://bootstrap-landing-page-sooty.vercel.app/',
      github:"https://github.com/Sswathi17/Bootstrap-Landing-Page"
    },
    { 
      id: 5, 
      title: 'Landing Page', 
      desc: `A sleek and modern landing page designed to capture user attention and drive conversions.
Styled with Tailwind CSS for a responsive, visually appealing, and fast-loading design.`, 
      image: project5, 
      tags: ['HTML', 'CSS', 'Tailwind CSS'],
      live: 'https://tailwind-css-website-pi.vercel.app/',
      github:"https://github.com/Sswathi17/Tailwind-CSS-website"
    },
    { 
      id: 6, 
      title: 'ToDo App List', 
      desc: `A simple and interactive ToDo list app to add, edit, and delete tasks efficiently.
Built with React to manage state dynamically and provide a smooth user experience.`, 
      image: project6, 
      tags: ['React'],
      live: '#'
    },
    { 
      id: 7, 
      title: 'MERN Auth', 
      desc: `A full-stack authentication system with secure login, registration, and user management.
Built using React for the frontend, Node.js for the backend, and MongoDB for data storage.`, 
      image: project7, 
      tags: ['React', 'Node.js', 'MongoDB'],
      live: '#'
    },
    { 
      id: 8, 
      title: 'Grocery App', 
      desc: `A full-stack grocery shopping app allowing users to browse, add, and manage products in their cart.
Built with React, Node.js, and MongoDB for a seamless and dynamic shopping experience.`, 
      image: project8, 
      tags: ['React', 'Node.js', 'MongoDB'],
      live: '#'
    },
    { 
      id: 9, 
      title: 'AI Blog App', 
      desc: `An AI-powered blogging platform where users can create, read, and interact with content.
Built with React, Node.js, and MongoDB, integrating smart features for content suggestions and management.`, 
      image: project9, 
      tags: ['React', 'Node.js', 'MongoDB'],
      live: '#'
    },
  ];

  // ✅ Return is inside the component function
  return (
    <section
      id="projects"
      className="relative py-24"
      style={{ backgroundColor: darkMode ? '#111827' : '#f9fafb' }}
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: darkMode ? 'white' : '#142937' }}
          >
            My{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #f97316, #f59e0b)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Projects
            </span>
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: darkMode ? '#d1d5db' : '#667280' }}>
            A showcase of my recent work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group rounded-xl border hover:border-orange-500/50 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{
                background: darkMode
                  ? 'linear-gradient(to right, #1f2937, #111827)'
                  : 'linear-gradient(to right, #ffffff, #f3f4f6)',
                borderColor: darkMode ? '#374151' : '#e5e7eb',
              }}
            >
              {/* Image */}
              <div className="h-36 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2" style={{ color: darkMode ? 'white' : '#1f2937' }}>
                  {project.title}
                </h3>
                <p className="text-sm mb-3" style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}>
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs rounded-full"
                      style={{
                        backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                        color: darkMode ? '#d1d5db' : '#4b5563',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  {/* Live Demo Button */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90 transition-colors"
                    style={{
                      backgroundColor: "#f97316",
                      color: "white",
                    }}
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Live Demo</span>
                  </a>

                  <a
  href={project.github}   // ← now links to the project's GitHub
  target="_blank"
  rel="noopener noreferrer"
  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90 transition-colors"
  style={{
    backgroundColor: darkMode ? '#374151' : '#f3f4f6',
    color: darkMode ? 'white' : '#374151',
  }}
  data-aos="zoom-in"
  data-aos-delay="300"
>
  <FaGithub className="text-sm" />
  <span>Code</span>
</a>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <a
            href="https://github.com/Sswathi17"
            className="inline-flex items-center font-semibold gap-2 px-7 py-4 text-white text-sm rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all"
            style={{ background: 'linear-gradient(to right, #f97316, #f59e0b)' }}
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <FaGithub />
            <span>View All Projects</span>
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
