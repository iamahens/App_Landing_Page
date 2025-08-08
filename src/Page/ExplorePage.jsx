// src/pages/ExplorePage.js
import React from 'react';
import ProjectCardGrid from '../component/Explore/ProjectCardGrid'; 
import GlobalHeader from '../component/Home/GlobalHeader';
import Footer from '../component/Home/Footer';

const ExplorePage = () => {
  return (<>
    <div className="min-h-screen bg-gray-50 py-16">
      <GlobalHeader/>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-12">
          Our Full Project Portfolio
        </h1>
        <ProjectCardGrid />
      </div>
     
    </div>
    <Footer/>
    </>
  );
};

export default ExplorePage;