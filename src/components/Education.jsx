import React from "react";

const Education = ({ darkMode }) => {
  return (
    <section
      id="education"
      className={`py-16 px-4 sm:px-6 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">
          Education
        </h2>

        {/* Timeline Container */}
        <div className="relative border-l-4 border-orange-400 pl-10 space-y-10">

          {/* College */}
          <div className="relative">
            <div className="absolute -left-14px top-2 w-5 h-5 bg-orange-500 rounded-full border-4 border-white dark:border-gray-900"></div>

            <div
              className={`p-6 rounded-xl shadow-lg transition duration-300 ${
                darkMode
                  ? "bg-gray-800 text-gray-300"
                  : "bg-white text-gray-700"
              }`}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-orange-500">
                Bachelor of Computer Science and Engineering
              </h3>

              <p className="font-medium mt-2">
                Dhirajlal Gandhi College of Technology
              </p>

              <p className="text-sm mt-1">
                2021 – 2025 | CGPA: 8.6 / 10
              </p>

              <p className="mt-3 text-sm sm:text-base">
                Focused on software development, data structures, database
                management systems, and full-stack web technologies.
              </p>
            </div>
          </div>

          {/* Higher Secondary */}
          <div className="relative">
            <div className="absolute -left-14px top-2 w-5 h-5 bg-orange-500 rounded-full border-4 border-white dark:border-gray-900"></div>

            <div
              className={`p-6 rounded-xl shadow-lg transition duration-300 ${
                darkMode
                  ? "bg-gray-800 text-gray-300"
                  : "bg-white text-gray-700"
              }`}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-orange-500">
                Higher Secondary Education
              </h3>

              <p className="font-medium mt-2">
                Kongu Matric Higher Secondary School
              </p>

              <p className="text-sm mt-1">
                2019 – 2021 | Percentage : 86%
              </p>

              <p className="mt-3 text-sm sm:text-base">
                Completed higher secondary education with focus on Mathematics
                and Biology.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;