import React from 'react';
import AboutImage from '../assets/About_image.png'; 


const About = ({ darkMode }) => {
  return (
    <section
  id="about"
  className={`min-h-fit overflow-hidden px-4 sm:px-6 py-10 sm:py-14 lg:py-20
  ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
>
<div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">

 {/* Image Section */}
<figure
  data-aos="fade-up"
  data-aos-delay="300"
  className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-1"
>
  <div className="relative w-75 h-75 lg:w-96 lg:h-96">
    <img
      src={AboutImage}
      alt="About Me"
      className="absolute inset-0 w-full h-full object-cover transition-all  duration-300 "
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
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              About Me
            </h1>
          </header>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
  I’m a{" "}
  <span className="font-semibold text-gray-900 dark:text-white">
    Full Stack Web Developer
  </span>{" "}
  with hands-on experience in{" "}
  <span className="font-semibold">
    React.js, Node.js, Express.js, and MongoDB
  </span>
  , along with modern frontend tools like{" "}
  <span className="font-semibold">
    Tailwind CSS, Bootstrap, and Figma
  </span>
  . I’ve developed{" "}
  <span className="font-semibold">6+ full-stack projects</span>, including{" "}
  <span className="font-semibold">
    AI-enabled blog applications, e-commerce websites, and grocery delivery apps
  </span>
  , with a strong focus on{" "}
  <span className="font-semibold">
    responsive design, performance optimization, and clean UI/UX
  </span>
  . I’ve also worked as a{" "}
  <span className="font-semibold">
    Web Developer and Digital Marketing Intern
  </span>
  , where I maintained websites, improved SEO, customized WordPress themes, and
  enhanced mobile responsiveness. I hold a{" "}
  <span className="font-semibold">
    Bachelor of Computer Science and Engineering
  </span>{" "}
  from{" "}
  <span className="font-semibold">
    Dhirajlal Gandhi College Of Technology (2021–2025)
  </span>{" "}
  with a{" "}
  <span className="font-semibold">CGPA of 8.6</span>. I enjoy collaborating with
  teams, solving complex problems, and continuously learning new technologies to
  create{" "}
  <span className="font-semibold">
    meaningful and impactful digital experiences
  </span>{" "}
  for users.
</p>


          {/* Stats Section */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            {/* Education */}
            <div className="text-center" data-aos="zoom-in" data-aos-delay="600">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                2
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Internships Completed
              </div>
            </div>

            {/* Years Experience */}
            <div className="text-center" data-aos="zoom-in" data-aos-delay="650">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                1+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Years Experience
              </div>
            </div>

            {/* Projects Completed */}
            <div className="text-center" data-aos="zoom-in" data-aos-delay="700">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                6+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
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
  );
};

export default About;
