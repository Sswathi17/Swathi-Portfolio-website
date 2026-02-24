import React, { useRef } from 'react';
import AboutImage from '../assets/About_image.png';


const About = ({ darkMode }) => {
  // Ref for Certificates section
  const certificatesRef = useRef(null);

  // Scroll to Certificates
  const scrollToCertificates = () => {
    certificatesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Scroll to Projects section
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <section
        id="about"
        className={`min-h-fit overflow-hidden px-4 sm:px-6 py-10 sm:py-14 lg:py-20 ${
          darkMode ? 'bg-gray-900' : 'bg-gray-50'
        } transition-colors duration-500`}
      >
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          
          {/* Image Section */}
          <figure
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex justify-center lg:justify-start relative order-2 lg:order-1"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <img
                src={AboutImage}
                alt="About Me"
                className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg transition-all duration-300"
              />
            </div>
          </figure>

          {/* Text Section */}
          <article
            data-aos="fade-left"
            data-aos-delay="300"
            className="text-center lg:text-left relative order-1 lg:order-2"
          >
            <header>
              <h1
                className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 ${
                  darkMode ? 'text-orange-400' : 'text-orange-500'
                }`}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                About Me
              </h1>
            </header>

            <p className={`text-base sm:text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I am a passionate and dedicated{' '}
              <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Full Stack Web Developer
              </span>{' '}
              specializing in building modern, scalable, and responsive web applications using the{' '}
              <span className="font-semibold">MERN stack (MongoDB, Express.js, React.js, Node.js)</span>. 
              My strong foundation in frontend and backend development allows me to build complete end-to-end solutions.  
              I am constantly learning new technologies, improving my problem-solving skills, and aiming to contribute meaningfully to innovative development teams.
            </p>

            {/* Stats Section */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-6 lg:gap-8 my-6 sm:my-8">
              
              {/* Internships Completed */}
              <div 
                className="text-center cursor-pointer"
                data-aos="zoom-in" 
                data-aos-delay="600"
                onClick={scrollToCertificates}
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">2</div>
                <div className={`text-xs sm:text-sm lg:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Internships Completed
                </div>
              </div>

              {/* Years Experience */}
              <div
                className="text-center cursor-pointer"
                data-aos="zoom-in" 
                data-aos-delay="650"
                onClick={scrollToCertificates}
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">1+</div>
                <div className={`text-xs sm:text-sm lg:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Years Experience
                </div>
              </div>

              {/* Projects Completed */}
              <div
                className="text-center cursor-pointer"
                data-aos="zoom-in" 
                data-aos-delay="700"
                onClick={scrollToProjects}
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">6+</div>
                <div className={`text-xs sm:text-sm lg:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Projects Completed
                </div>
              </div>
            </div>

            {/* Learn More Button */}
            <a href="#skills">
              <button
                className={`w-full sm:w-auto border-2 border-orange-500 inline-flex items-center justify-center py-2 px-4 sm:px-6 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform ${
                  darkMode ? 'text-white bg-orange-500/10' : 'text-gray-800 bg-white/90'
                }`}
                data-aos="fade-up"
                data-aos-delay="800"
              >
                Learn More
              </button>
            </a>

          </article>
        </div>
      </section>

     
    </>
  );
};

export default About;