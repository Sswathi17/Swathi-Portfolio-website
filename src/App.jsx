import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TypingText from "./components/TypingText";

// Main content wrapper for Home
const AppContent = () => {
  const [darkMode, setDarkMode] = useState(true);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 100 });
    document.documentElement.classList.add("dark");
  }, []);

  // Refresh AOS when darkMode changes
  useEffect(() => {
    AOS.refresh();
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      document.documentElement.classList.toggle("dark");
      return !prev;
    });
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-[#0d182e] to-gray-900 text-white"
          : "bg-gradient-to-br from-gray-50 via-blue-100 to-blue-50 text-gray-900"
      }`}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Education darkMode={darkMode} />
      <Certificates darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
      <TypingText darkMode={darkMode} />
    </div>
  );
};

// Router wrapper
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Only Home page */}
        <Route path="/" element={<AppContent />} />
      </Routes>
    </Router>
  );
};

export default App;