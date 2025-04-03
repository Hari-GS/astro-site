import React from "react";
import logo from "../assets/Group 32.png";
import { handleScroll } from "./Navbar";

function Footer() {
  return (
    <footer className="bg-[#070022] w-full text-gray-300 border-t border-white py-8 px-4 md:px-12">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between max-w-screen-lg mx-auto gap-6">
        {/* Logo & Tagline */}
        <div className="text-center md:text-left">
          <img src={logo} alt="logo" className="h-[80px] md:h-[100px] mx-auto md:mx-0" />
          <p className="text-sm mt-2">We help you explore your cosmic path</p>
        </div>

        {/* Company Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-[#C4E15A]">Company</h3>
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
              <button className="hover:text-gray-400" onClick={() => handleScroll("services")}>
                Services
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
