import React from "react";

const About= () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      {/* Main Container */}
      <div className="max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden md:flex">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            className="w-full h-64 object-cover md:h-full"
            src="https://strawberrykit.com/wp-content/uploads/2021/07/About-me-page-photographer-canva-template.jpg"
            alt="Photographer"
          />
        </div>

        {/* Content Section */}
        <div className="p-8 md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
          <p className="text-gray-600 mb-6">
            Hi, I'm a passionate photographer with a love for capturing the
            beauty of the world around us. Whether it's landscapes, portraits, or
            events, I strive to tell a story through my lens.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;