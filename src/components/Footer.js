import React from 'react'
import logo from '../assets/Group 32.png';
import { handleScroll } from './Navbar';

function Footer() {
    return (
      <footer className="bg-[#070022] mt-0  pt-0 flex flex-col md:flex-row justify-evenly items-center text-gray-300 pb-10 border border-t-1 border-l-0 border-r-0 border-white">
      <div className="text-center md:text-left items-start pl-0 pt-8">
        <img src={logo} alt='logo' className='h-[100px]'/>
        <p className="text-sm">We help you explore your cosmic path</p>
      </div>
      
      <div className="text-left pt-8">
        <h3 className="text-lg font-semibold text-[#C4E15A]">Company</h3>
        <ul className="text-sm mt-2">
          <li><button className='hover:text-gray-400' onClick={() => handleScroll("home")}>Home</button></li>
          <li><button className='hover:text-gray-400' onClick={() => handleScroll("about")}>About us</button></li>
          <li><button className='hover:text-gray-400' onClick={() => handleScroll("services")}>Services</button></li>
        </ul>
      </div>
      
      <div className="text-left pt-8">
        <h3 className="text-lg font-semibold text-[#C4E15A]">Services</h3>
        <ul className="text-sm mt-2">
          <li>Natal Chart Readings</li>
          <li>Compatibility Readings</li>
          <li>Progression Readings</li>
          <li>Specialty Readings</li>
        </ul>
      </div>
    </footer>
    )
}

export default Footer
