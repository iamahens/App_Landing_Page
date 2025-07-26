// src/components/ExploreMoreSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import FloatingElements from './FloatingElements';

const ExploreMoreSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-100 to-purple-100 text-center relative overflow-hidden">
      
      {/* Floating Elements as a transparent background layer */}
      <div className="absolute inset-0 z-0">
        <FloatingElements />
      </div>

      {/* Content remains on top */}
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl
          font-extrabold leading-tight mb-6
          text-gray-800 /* Changed text to dark gray for visibility */
        ">
          Ready to See More?
        </h2>
        <p className="
          text-lg sm:text-xl leading-relaxed mb-10 opacity-90
          text-gray-700 /* Changed text to dark gray for visibility */
        ">
          Dive deeper into our extensive portfolio of mobile app projects. Discover innovative solutions tailored for various industries and see how we can bring your vision to life.
        </p>
        
        <Link 
          to="/explore" 
          className="
            inline-flex items-center justify-center px-8 py-4 
            bg-pink-600 text-white font-bold rounded-full shadow-lg 
            hover:bg-pink-700 transition duration-300 ease-in-out 
            transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-75
          "
        >
          Explore All Projects
          <svg className="ml-3 -mr-1 h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default ExploreMoreSection;