import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tool from './components/Tool';
import ContactPopup from './components/ContactPopup';
import MoreAbout from './components/MoreAbout';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Root Path - Home Page */}
        <Route
          path="/"
          element={
            <div>
              <Tool />
              <Navbar setIsPopupOpen={setIsPopupOpen} />
              <Home setIsPopupOpen={setIsPopupOpen} />
              <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
            </div>
          }
        />

        {/* More About Page */}
        <Route path="/more-about" element={
            <div>
                <Tool/>
                <Navbar setIsPopupOpen={setIsPopupOpen} />
                <MoreAbout/>
                <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
            </div>
            }/>
      </Routes>
    </Router>
  );
}

export default App;
