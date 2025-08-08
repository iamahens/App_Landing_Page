// src/components/ProjectCard.js
import React from 'react';

const ProjectCard = ({ image, title, description }) => {
  return (
    
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
      {/* Card Image */}
      {/* Increased height from h-48 sm:h-56 to h-64 sm:h-72 */}
      <div className="w-full h-84 sm:h-100 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/cccccc/000000?text=Image+Error'; }}
        />
      </div>
      {/* Card Content */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;