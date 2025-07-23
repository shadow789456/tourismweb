import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Destinations from './components/Destinations';
import Culture from './components/Culture';
import Guides from './components/Guides';
import LiveUpdates from './components/LiveUpdates';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/updates" element={<LiveUpdates />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;