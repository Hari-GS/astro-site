import React from "react";
import logo from "../assets/Group 32.png";
import { handleScroll } from "./Navbar";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#070022] w-full text-gray-300 border-t border-white pt-8 pb-12 px-4 md:px-12">
      <div className="flex flex-col md:flex-row max-w-screen-lg mx-auto md:gap-8 gap-12">
        
        {/* Logo & Tagline */}
        <div className="flex-1 text-center md:text-left">
          <img src={logo} alt="logo" className="h-[80px] md:h-[100px] mx-auto md:mx-0" />
          <p className="text-sm mt-2">We help you explore your cosmic path</p>
        </div>

        {/* Contact Section */}
        <div className="flex-1 text-center md:pl-52 md:pt-4 md:text-left">
          <h3 className="text-lg font-semibold text-[#C4E15A]">Contact</h3>
          <ul className="text-sm mt-2 space-y-2">
            <li className="flex justify-center md:justify-start items-center gap-2">
              <FaPhoneAlt className="text-yellow-400" />
              <span>+91 9884819291</span>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <FaEnvelope className="text-yellow-400" />
              <span>astrodeivanaadi@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex-1 text-center md:text-right md:pt-4">
          <h3 className="text-lg font-semibold text-[#C4E15A]">Quick Links</h3>
          <ul className="text-sm mt-2 space-y-1">
            <li>
              <button className="hover:text-gray-400" onClick={() => handleScroll("home")}>
                Home
              </button>
            </li>
            <li>
              <button className="hover:text-gray-400" onClick={() => handleScroll("about")}>
                About Us
              </button>
            </li>
            <li>
              <Link to="/more-about" className="hover:text-gray-400">Learn More</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
