import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tool from './components/Tool';
import ContactPopup from "./components/ContactPopup";

function App() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div>
            <Tool/>
            <Navbar setIsPopupOpen={setIsPopupOpen}/>
            <Home setIsPopupOpen={setIsPopupOpen}/>
            <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        </div>
			
                
    );
}

export default App;
