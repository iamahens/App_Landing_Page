import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; // Your global CSS
import Home from './Page/Home'; // Your Home page component
import ExplorePage from './Page/ExplorePage'; // Your Explore page component


function App() {
  return (
    <BrowserRouter>
      {/* GlobalHeader is rendered outside Routes so it appears on all pages */}
      

      <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={<Home />} />
        
        {/* New route for the explore page */}
        <Route path="/explore" element={<ExplorePage />} />

        {/* You can add more routes here if needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
