import React from 'react';
// ✅ Corrected import: file renamed to remove spaces
import ContactImage from '../assets/Contact_image.png';

const Contact = ({ darkMode }) => {
  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
      style={{
        backgroundColor: darkMode ? '#111827' : '#f9fafb',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          data-aos="fade-up"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3"
            style={{ color: darkMode ? 'white' : '#1f2937' }}
          >
            Get In{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #f97316, #f59e0b)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Touch
            </span>
          </h2>

          <p
            className="text-base sm:text-lg md:text-xl"
            style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
          >
            Let's discuss your project
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
          {/* Image */}
          <div
            className="flex justify-center order-2 lg:order-1"
            data-aos="fade-right"
          >
            <img
              src={ContactImage}
              alt="Contact"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto object-contain"
            />
          </div>

          {/* Contact Cards (replacing form) */}
          <div
            className="rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg order-1 lg:order-2"
            data-aos="fade-left"
            style={{
              background: darkMode
                ? 'linear-gradient(to right, #1f2937, #111827)'
                : 'linear-gradient(to right, #ffffff, #f9fafb)',
              borderColor: darkMode ? '#374151' : '#e5e7eb',
            }}
          >
            <h3
              className="text-xl font-semibold mb-6"
              style={{ color: darkMode ? 'white' : '#1f2937' }}
            >
              Contact Details
            </h3>

            <div className="space-y-4">
              {/* Email */}
              <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=sswathiaug17@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="block p-4 rounded-lg transition-all hover:scale-[1.02]"
  style={{
    backgroundColor: darkMode ? '#374151' : '#faede3',
    color: darkMode ? 'white' : '#1f2937',
  }}
>
  📧 Email
</a>

             

              {/* Phone */}
              <a
                href="tel:+916374167146"
                className="block p-4 rounded-lg transition-all hover:scale-[1.02]"
                style={{
                  backgroundColor: darkMode ? '#374151' : '#faede3',
                  color: darkMode ? 'white' : '#1f2937',
                }}
              >
                📞 Call
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/916374167146"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-lg transition-all hover:scale-[1.02]"
                style={{
                  backgroundColor: darkMode ? '#065f46' : '#dcfce7',
                  color: darkMode ? 'white' : '#065f46',
                }}
              >
                💬 Chat on WhatsApp
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sswathi1783/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-lg transition-all hover:scale-[1.02]"
                style={{
                  backgroundColor: darkMode ? '#1e3a8a' : '#dbeafe',
                  color: darkMode ? 'white' : '#1e3a8a',
                }}
              >
                🔗 LinkedIn Profile
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Sswathi17"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-lg transition-all hover:scale-[1.02]"
                style={{
                  backgroundColor: darkMode ? '#000000' : '#e5e7eb',
                  color: darkMode ? 'white' : '#111827',
                }}
              >
                💻 GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
