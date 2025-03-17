import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Group 32.png';

function Navbar() {
    return (
        <div className="bg-[#070022] text-white px-8 py-0 flex items-center justify-between">
            {/* Logo */}
            <div>
                <img src={logo} alt="logo" className="h-[120px]" />
            </div>

            <div className='flex flex-row items-center pr-10'>
                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-16">
                    <Link to="/" className="hover:text-gray-400">Home</Link>
                    <Link to="/about" className="hover:text-gray-400">About us</Link>
                    <Link to="/chapter-list" className="hover:text-gray-400">Chapter List</Link>
                    
                    {/* Corrected Button Alignment */}
                    <Link to="/reservation">
                        <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">
                            Reservation
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default Navbar;
