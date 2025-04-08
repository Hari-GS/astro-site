import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
            <div className="bg-[#070022] text-white p-6 md:p-8 rounded-2xl shadow-xl w-80 md:w-96 text-center border border-gray-600">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>

                <div className="flex items-center justify-start gap-3 text-left mt-4">
                    <FaPhoneAlt className="text-yellow-400" />
                    <span className="text-base md:text-lg">+91 9884819291</span>
                </div>

                <div className="flex items-center justify-start gap-3 text-left mt-3">
                    <FaEnvelope className="text-yellow-400" />
                    <span className="text-base md:text-lg">astrodeivanaadi@gmail.com</span>
                </div>

                <button
                    onClick={onClose}
                    className="mt-6 bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default ContactPopup;
