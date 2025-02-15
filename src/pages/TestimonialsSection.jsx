import React, { useState } from 'react';
import rahulImage from '../assets/images/Test1.jpg';
import sarahImage from '../assets/images/Test2.jpg';
import michaelImage from '../assets/images/Test3.jpg';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Rahul Singh',
      role: 'Freelancer',
      image: rahulImage,
      text: 'Exceptional work! Delivered on time with great attention to detail. Highly recommend for any digital projects.'
    },
    {
      id: 2,
      name: 'Akhil Aryan',
      role: 'Designer',
      image: sarahImage,
      text: 'Amazing creativity and professionalism! The designs exceeded our expectations and perfectly captured our brand vision.'
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Developer',
      image: michaelImage,
      text: 'Highly skilled and efficient! Built a seamless, responsive website that improved our user experience significantly.'
    }
  ];

  const handleNext = () => {
    if (activeIndex < testimonials.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-16 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-indigo-500 text-sm uppercase tracking-wider mb-2">TESTIMONIALS</p>
          <h2 className="text-4xl font-bold mb-2">Let's Read User Reviews</h2>
          <p className="text-2xl text-gray-300">Your opinion is very important to us!</p>
        </div>

        <div className="relative flex gap-8 h-96">
          {testimonials.slice(activeIndex, activeIndex + 2).map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className={`absolute transition-all duration-500 w-full md:w-1/2 flex flex-col items-center
                ${idx === 0 ? 'left-0 opacity-100 z-20' : 'left-1/2 opacity-50 blur-sm z-10'}`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">{testimonial.name}</h3>
              <p className="text-gray-400 mb-4">{testimonial.role}</p>
              <p className="text-center text-gray-300 max-w-2xl">{testimonial.text}</p>
            </div>
          ))}
        </div>

        <div className="absolute bottom-8 right-8 flex items-center gap-4">
          {activeIndex > 0 && (
            <button
              onClick={handlePrev}
              className="text-gray-400 flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
              <svg className="w-4 h-4 transform rotate-180" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">PREVIOUS</span>
            </button>
          )}

          {activeIndex < testimonials.length - 1 && (
            <button
              onClick={handleNext}
              className="text-gray-400 flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
              <span className="text-sm">NEXT</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;