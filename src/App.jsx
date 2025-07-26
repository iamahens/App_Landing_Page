
import './App.css'
import ExplorePage from './Page/ExplorePage';
import Home from './Page/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
 

  return (
      <BrowserRouter>
      <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={<Home />} />
        
        {/* New route for the explore page */}
        <Route path="/explore" element={<ExplorePage />} />

        {/* You can add more routes here if needed */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
