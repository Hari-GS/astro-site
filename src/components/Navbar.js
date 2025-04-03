import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/Group 32.png';

export const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};

function Navbar({ setIsPopupOpen }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Navbar */}
            <div className="bg-[#070022] text-white px-8 py-4 flex items-center justify-between w-full top-0 z-50">
                {/* Logo */}
                <div>
                    <img src={logo} alt="logo" className="md:h-[100px] h-[80px]" />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <button onClick={() => handleScroll("home")} className="hover:text-gray-400">Home</button>
                    <button onClick={() => handleScroll("about")} className="hover:text-gray-400">About us</button>
                    <button onClick={() => handleScroll("services")} className="hover:text-gray-400">Services</button>
                    <button
                        onClick={() => setIsPopupOpen(true)}
                        className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
                    >
                        Reservation
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
                    <FaBars size={28} />
                </button>
            </div>

            {/* Mobile Sidebar Menu */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="bg-[#070022] w-[100%] max-w-[320px] h-full shadow-lg flex flex-col p-6">
                    {/* Close Button */}
                    <button className="self-end mb-6 text-white" onClick={() => setIsOpen(false)}>
                        <FaTimes size={28} />
                    </button>

                    {/* Navigation Links */}
                    <nav className="flex flex-col space-y-6 text-white text-lg">
                        <button onClick={() => { handleScroll("home"); setIsOpen(false); }} className="hover:text-gray-400">Home</button>
                        <button onClick={() => { handleScroll("about"); setIsOpen(false); }} className="hover:text-gray-400">About us</button>
                        <button onClick={() => { handleScroll("services"); setIsOpen(false); }} className="hover:text-gray-400">Services</button>
                        <button
                            onClick={() => { setIsPopupOpen(true); setIsOpen(false); }}
                            className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
                        >
                            Reservation
                        </button>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Navbar;
