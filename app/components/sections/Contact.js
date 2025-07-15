import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full  py-20 text-white flex flex-col items-center justify-center px-6 text-center"
    >
      {/* Contact Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500  z-10 mb-6">
        Contact
      </h1>

      {/* Subheading */}
      <p className="text-sm text-gray-400 mb-4 animate-fadeIn align-items-start">
        Want to start a project?
      </p>

      {/* Main Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-500 to-violet-500 text-transparent bg-clip-text animate-fadeIn">
        Let’s have a chat
      </h2>

      {/* Email with Arrow */}
      <div className="mt-8 flex items-center gap-4 border-b border-white pb-2 animate-fadeIn">
        <a
          href="mailto:apkveeraa@gmail.com"
          className="text-lg sm:text-xl hover:text-purple-400 transition"
        >
          apkveeraa@gmail.com
        </a>
        <div className="w-9 h-9 flex items-center justify-center border border-white rounded-full transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Contact;
