import React from 'react';
import { FaGithub, FaHeart, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: darkMode
          ? "linear-gradient(to bottom, #000000, #111827)"
          : "linear-gradient(to bottom, #f3f4f6, #e5e7eb)",
        borderColor: darkMode ? "#374151" : "#d1d5db",
      }}
      className="border-t"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left Section */}
          <div className="text-center md:text-left">
            <h3
              className="text-2xl font-bold mb-2"
              style={{
                background: "linear-gradient(to right, #f97316, #f59e8b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Swathi
            </h3>

            <p
              className="text-sm"
              style={{
                color: darkMode ? "#9ca3af" : "#6b7280",
              }}
            >
              Full Stack Developer & Frontend Developer
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/Sswathi17"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center
              hover:scale-110 transition-all
              bg-[#374151] dark:bg-[#f3f4f6]
              text-white dark:text-[#374151]"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sswathi1783/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center
              hover:scale-110 transition-all
              bg-[#374151] dark:bg-[#f3f4f6]
              text-white dark:text-[#374151]"
            >
              <FaLinkedin />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/916374167146?text=Hi%20Swathi,%20I%20visited%20your%20portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center
              hover:scale-110 transition-all
              bg-[#065f46] dark:bg-[#dcfce7]
              text-white dark:text-[#065f46]"
            >
              <FaWhatsapp />
            </a>

            {/* Gmail */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sswathiaug17@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center
              hover:scale-110 transition-all
              bg-[#d14836] dark:bg-[#f3f4f6]
              text-white dark:text-[#d14836]"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-right">
            <p
              className="text-sm flex items-center justify-end gap-1"
              style={{
                color: darkMode ? "#9ca3af" : "#6b7280",
              }}
            >
              © {currentYear} Made with 
              <FaHeart className="text-red-500 animate-pulse mx-1" />
              <span className="font-semibold">Swathi</span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
