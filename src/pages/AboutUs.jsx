import React from 'react';
import team from '../assets/images/AboutUs.png';
import journey from '../assets/images/PeopleBench.png';
import About from '../components/About'

import Footer from '../components/Footer';  // Import the Footer component
import OurClients from '../components/HomePageComponents/OurClients'

const AboutUs = () => {
  return (
    <>
      <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        {/* About Us Section */}
        <div className="flex items-center justify-center px-4 py-8 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-16">About Us</h1>

            <div className="flex flex-col items-center mb-8 md:mb-16">
              <div className="relative w-full max-w-xs md:max-w-md h-48 md:h-64">
                <img
                  src={team}
                  alt="Team Illustration"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="text-white text-base md:text-lg leading-relaxed max-w-3xl mx-auto px-4">
              <p>
                At Pixela Media, we're more than a marketing agency—we're your strategic allies in a world
                driven by pixels, clicks, and connections. With 2+ years of expertise in delivering results-driven marketing
                services, we've mastered the art of blending creativity with data to turn brands into industry leaders. Born
                in Karnataka's tech-savvy heartland, our journey began with a simple mission: to make businesses
                unforgettable. Today, we empower startups and enterprises alike to thrive in the digital ecosystem.
              </p>
            </div>
          </div>
        </div>

        <About />
        <OurClients />

      </div>

      {/* Footer Component */}
      <Footer />
    </>
  );
};

export default AboutUs;