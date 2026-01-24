import React from 'react';
import CV from '../assets/Resume....pdf';
import { Download, Mail } from 'lucide-react';
import HeroImage from '../assets/Hero_image.png';
import TypingText from "../components/TypingText";



// Import or define social images
import githubIcon from '../assets/github image.png';
import linkedInIcon from '../assets/linkedin image.png';
import whatsappInIcon from '../assets/whatsapp-logo-.png';
import gmailInIcon from '../assets/gmail-image.png';

const Hero = ({ darkMode }) => {
  const socialIcons = [
  {
    icon: githubIcon,
    alt: "GitHub",
    link: "https://github.com/Sswathi17",
  },
  {
    icon: linkedInIcon,
    alt: "LinkedIn",
    link: "https://www.linkedin.com/in/sswathi1783/",
  },
  {
    icon: whatsappInIcon,
    alt: "WhatsApp",
    link: "https://wa.me/916374167146?text=Hi%20Swathi,%20I%20visited%20your%20portfolio",
  },
  {
    icon: gmailInIcon,
    alt: "Gmail",
    link: "mailto:sswathiaug17@gmail.com",
  },
];

  

  const darkTheme = {
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
    buttonSecondary: 'text-white border-2 border-orange-500 hover:bg-orange-600',
    decorativeCircle: 'bg-orange-500 opacity-10',
  };

  const lightTheme = {
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-700',
    buttonSecondary: 'text-white border-2 border-orange-500 hover:bg-orange-900 hover:text-white',
    decorativeCircle: 'bg-orange-400 opacity-20',
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className="relative overflow-hidden min-h-100svh lg:min-h-fit flex flex-col">
      <section
        id="home"
        data-aos="fade-up"
        data-aos-delay="250"
        className="body-font z-10 pt-24 sm:pt-24 lg:pt-20"
      >
        <div className="container mx-auto flex px-4 sm:px-8 lg:px-14 
py-8 sm:py-10 lg:py-14 
flex-col lg:flex-row 
items-center justify-between 
lg:mt-14 mt-0">


          <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0">

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform duration-300"
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${darkMode ? "" : "filter brightness-75"}`}
                  />
                </a>
              ))}
            </div>
            <h1
  className={`title-font text-3xl sm:text-4xl lg:text-5xl 
  mb-4 sm:mb-6 font-bold ${theme.textPrimary}`}
  data-aos="fade-up"
  data-aos-delay="500"
>
  Hi, I&apos;m Swathi <br />

  <span className={`block mt-2 text-xl sm:text-2xl lg:text-4xl ${theme.textSecondary}`}>
    I am{" "}
    <span className="text-orange-500">
      <TypingText
        texts={[
          "a Full Stack Developer",
          "a MERN Stack Developer",
          "a Frontend Developer",
          "a Software Developer"
        ]}
      />
    </span>
  </span>
</h1>

            {/* Buttons */}
            <div className="w-full pt-4 sm:pt-6">
              <div
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <a href={CV} download className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center text-white bg-orange-500 hover:bg-orange-600 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform">
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Download CV
                  </button>
                </a>

                <a href="#contact" className="w-full sm:w-auto">
                  <button
                    className={`w-full sm:w-auto inline-flex items-center justify-center ${theme.buttonSecondary} py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform`}
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className="lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0 flex justify-center"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="relative w-4/5 sm:w-3/4 lg:w-full">
              <div className="relative overflow-hidden">
                <img src={HeroImage} alt="Hero Image" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Hero;
