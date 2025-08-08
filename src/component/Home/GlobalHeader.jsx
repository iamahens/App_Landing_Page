import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import hooks from react-router-dom

const GlobalHeader = () => {
  const location = useLocation(); // Get current location
  const navigate = useNavigate(); // Get navigate function

  // Determine if we are on the home page
  const isHomePage = location.pathname === '/';

  return (
    <header className="w-full h-[130px] py-4 flex justify-center sticky top-0 z-20">
      {/* The inner div holds the main header styling: gradient, translucency, rounded, border */}
      <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center relative
                  bg-gradient-to-br from-blue-100 to-purple-100 bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-xl
                  border border-gray-200 transition-all duration-300 ease-in-out">
        {/* Back to Home Button - conditionally rendered */}
        {/* It will only show if not on the home page */}
        {!isHomePage ? (
          <button
            onClick={() => navigate('/')} // Navigate to home route
            className="px-3 py-2 text-gray-800 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center text-sm"
          >
            <i className="fas fa-arrow-left mr-2"></i> Back to Home
          </button>
        ) : (
          // Placeholder to maintain layout symmetry when button is hidden
          <div className="w-auto opacity-0 pointer-events-none">
            <button className="px-3 py-2 text-gray-700 font-medium rounded-lg text-sm">
              <i className="fas fa-arrow-left mr-2"></i> Back to Home
            </button>
          </div>
        )}

        {/* Logo (image) in the center */}
        <div className="flex items-center space-x-2 absolute left-1/2 transform -translate-x-1/2">
          <img
            src="/images/Hikups_logo.png" // Path to your logo image
            alt="HIKUPS Logo"
            className="h-10 object-contain"
          />
        </div>

        {/* Empty div for spacing, matching the button's width */}
        <div className="w-auto opacity-0 pointer-events-none">
          {/* This empty button mimics the space taken by the "Back to Home" button */}
          <button className="px-3 py-2 text-gray-700 font-medium rounded-lg text-sm">
            <i className="fas fa-arrow-left mr-2"></i> Home
          </button>
        </div>
      </div>
    </header>
  );
};

export default GlobalHeader;
