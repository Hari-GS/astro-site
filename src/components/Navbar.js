import React, { useState } from 'react';
import logo from '../assets/Group 32.png';

export const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};



function Navbar({ setIsPopupOpen }) {
    

    return (
        <>
        <div className="bg-[#070022] text-white px-8 py-0 flex items-center justify-between w-full top-0 z-50">
            {/* Logo */}
            <div>
                <img src={logo} alt="logo" className="h-[120px]" />
            </div>

            <div className="flex flex-row items-center pr-10">
                {/* Navigation buttons */}
                <div className="hidden md:flex items-center space-x-16">
                    <button onClick={() => handleScroll("home")} className="hover:text-gray-400">Home</button>
                    <button onClick={() => handleScroll("about")} className="hover:text-gray-400">About us</button>
                    <button onClick={() => handleScroll("services")} className="hover:text-gray-400">Services</button>
                    
                    {/* Corrected Button Alignment */}
                    <button
                        onClick={() => setIsPopupOpen(true)}
                        className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
                    >
                        Reservation
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Navbar;
