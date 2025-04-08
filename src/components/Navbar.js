import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/Group 32.png';
import { Link, useLocation } from 'react-router-dom';

export const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};

function Navbar({ setIsPopupOpen }) {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isMoreAboutPage = location.pathname === "/more-about";


    return (
        <>
            {/* Navbar */}
            <div className="bg-[#070022] text-white md:px-8 px-4 py-4 flex items-center justify-between w-full top-0 z-50">
                {/* Logo */}
                <div>
                    <img src={logo} alt="logo" className="md:h-[100px] h-[90px]" />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {!isMoreAboutPage ? (
                        <>
                            <button onClick={() => handleScroll("home")} className="hover:text-gray-400">Home</button>
                            <button onClick={() => handleScroll("about")} className="hover:text-gray-400">About us</button>
                            <Link to="/more-about" className="hover:text-gray-400">Learn More</Link>
                            <button
                                onClick={() => setIsPopupOpen(true)}
                                className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
                            >
                                Reservation
                            </button>
                        </>
                    ) : (
                        <>
                        <Link to="/" className="hover:text-gray-400 border border-white px-4 py-2 rounded-md">
                            Back
                        </Link>
                        <button
                                onClick={() => setIsPopupOpen(true)}
                                className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
                            >
                                Reservation
                            </button>
                        </>
                    )}
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
                        {!isMoreAboutPage ? (
                            <>
                                <button onClick={() => { handleScroll("home"); setIsOpen(false); }} className="hover:text-gray-400">Home</button>
                                <button onClick={() => { handleScroll("about"); setIsOpen(false); }} className="hover:text-gray-400">About us</button>
                                <button><Link to="/more-about" onClick={() => setIsOpen(false)} className="hover:text-gray-400">Learn More</Link></button>
                                <button
                                    onClick={() => { setIsPopupOpen(true); setIsOpen(false); }}
                                    className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
                                >
                                    Reservation
                                </button>
                            </>
                        ) : (
                            <>
                            <Link
                                to="/"
                                className="hover:text-gray-400 border border-white px-4 py-2 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                Back
                            </Link>
                            <button
                                    onClick={() => { setIsPopupOpen(true); setIsOpen(false); }}
                                    className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
                                >
                                    Reservation
                            </button>
                            </>
                        )}
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Navbar;
