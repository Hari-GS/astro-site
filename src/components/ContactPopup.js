import React from "react";

const ContactPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
                <h2 className="text-2xl font-semibold text-black">Contact Us</h2>
                <p className="mt-3 text-lg text-gray-700">📞 +91 98765 43210</p>

                <button
                    onClick={onClose}
                    className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default ContactPopup;
