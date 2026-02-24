// Certificates.jsx
import React, { useState, useEffect } from "react";
import qspidersCertificate from '../assets/qspiders_certificate.jpeg';
import techVedhuCertificate from '../assets/tech_vedhu_certificate.jpeg';
import startnetCertificate from '../assets/startnet_certificate.jpeg';
import sixSigmaCertificate from '../assets/six_sigma_certificate.jpeg';

const Certificates = ({ darkMode }) => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    { name: "MERN Stack Development Course", image: qspidersCertificate },
    { name: "UI/UX Design Course", image: techVedhuCertificate },
    { name: "Web Developer Internship", image: startnetCertificate },
    { name: "FrontEnd Developer Internship", image: sixSigmaCertificate },
  ];

  // Disable right-click on certificate images
  const handleContextMenu = (e) => e.preventDefault();

  // Open modal & push history
  const openModal = (cert) => {
    setSelectedCert(cert);
    window.history.pushState({ modalOpen: true }, ""); // push new state for back button
  };

  // Close modal & scroll to Hero/home
  const closeModal = () => {
    setSelectedCert(null);
    const home = document.getElementById("hero");
    if (home) home.scrollIntoView({ behavior: "smooth", block: "start" });
    if (window.history.state?.modalOpen) {
      window.history.back(); // go back in history
    }
  };

  // Handle browser back button
  useEffect(() => {
    const handlePopState = (e) => {
      if (selectedCert) setSelectedCert(null); // close modal on back
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [selectedCert]);

  return (
    <section className={`py-16 px-4 sm:px-6 ${darkMode ? "bg-gray-900" : "bg-gray-50"} transition-colors duration-500`}>
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className={`text-4xl font-bold mb-12 ${darkMode ? "text-orange-400" : "text-orange-500"}`}>
          Certifications
        </h2>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {certificates.map((cert, index) => (
            <div
              key={index}
              onClick={() => openModal(cert)}
              className={`cursor-pointer p-6 rounded-xl shadow-lg hover:scale-105 transition transform duration-300 w-full sm:w-auto text-center
                          ${darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"}`}
            >
              <h3 className="font-semibold text-lg">{cert.name}</h3>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCert && (
          <div
            className={`fixed inset-0 ${darkMode ? "bg-black bg-opacity-80" : "bg-white bg-opacity-90"} flex justify-center items-center z-50 px-4`}
            onClick={closeModal}
            
    onContextMenu={(e) => e.preventDefault()} // click outside closes
          >
            <div
              className="relative max-w-[95vw] max-h-[95vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()} // click inside doesn't close
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-500 transition"
              >
                &times;
              </button>

              {/* Certificate Image */}
<img
  src={selectedCert.image}
  alt={selectedCert.name}
  className="max-w-full max-h-[85vh] rounded-lg shadow-lg select-none hover:scale-105 transition transform duration-300"
  onContextMenu={(e) => e.preventDefault()} // <- disables right click
  draggable="false"
/>
              {/* Certificate Name */}
              <p className="mt-4 text-lg font-semibold text-center text-gray-100">
                {selectedCert.name}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;