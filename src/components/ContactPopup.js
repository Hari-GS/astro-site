import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    message: "",
    file: null,
  });
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fileError, setFileError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
  
    if (name === "file") {
      const selectedFile = files[0];
      if (selectedFile && selectedFile.size > 10 * 1024 * 1024) {
        setFileError("File size should not exceed 10MB.");
        setFormData((prev) => ({ ...prev, file: null }));
      } else {
        setFileError("");
        setFormData((prev) => ({ ...prev, file: selectedFile }));
      }
    } else {
      if (name === "phone" || name === "countryCode") {
        const fullPhone = name === "phone"
          ? formData.countryCode + value
          : value + formData.phone;
  
        const phoneRegex = /^\+\d{1,4}\d{7,12}$/;
        if (!phoneRegex.test(fullPhone)) {
          setPhoneError("Enter a valid phone number (e.g., +919876543210)");
        } else {
          setPhoneError("");
        }
      }
  
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullPhoneNumber = formData.countryCode + formData.phone;
    const phoneRegex = /^\+\d{1,4}\d{7,12}$/;

    if (!formData.phone || !formData.countryCode || !phoneRegex.test(fullPhoneNumber)) {
      setPhoneError("Please enter a valid phone number with country code.");
      return;
    }

    if (formData.file && formData.file.size > 10 * 1024 * 1024) {
      setFileError("File size exceeds 10MB. Please upload a smaller file.");
      return;
    }

    setIsSending(true);
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", fullPhoneNumber);
    data.append("message", formData.message);
    if (formData.file) {
      data.append("file", formData.file);
    }

    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        body: data,
      });

      const result = await res.json();
      if (result.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "", file: null });
        setFileError("");
      } else {
        alert("Error sending email.");
      }
    } catch (err) {
      alert("Something went wrong.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-[#070022] text-white p-6 md:p-8 rounded-2xl shadow-xl w-80 md:w-96 text-center border border-gray-600">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>

        {success ? (
          <p className="text-green-400">Thank you! We'll contact you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-left">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              onChange={handleChange}
              className="bg-[#1a1a2e] text-white p-2 rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              onChange={handleChange}
              className="bg-[#1a1a2e] text-white p-2 rounded-md"
            />
            <div className="flex gap-2">
              <input
                type="text"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                maxLength={5}
                className="w-20 bg-[#1a1a2e] text-white p-2 rounded-md"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                onChange={handleChange}
                className="flex-1 bg-[#1a1a2e] text-white p-2 rounded-md"
              />
            </div>
            {phoneError && (
              <p className="text-red-400 text-sm -mt-2">{phoneError}</p>
            )}

            <textarea
              name="message"
              placeholder="Your Message"
              required
              onChange={handleChange}
              className="bg-[#1a1a2e] text-white p-2 rounded-md"
            />

            <label className="text-sm mt-1 text-yellow-300 font-medium">
              Upload Your Palm Image: <br />
              <span className="text-xs text-gray-300">
                📌 Right hand for men, Left hand for women. Max 10MB.
              </span>
            </label>
            <input
              type="file"
              name="file"
              accept="image/*"
              onChange={handleChange}
              className="text-white"
            />
            {fileError && (
              <p className="text-red-400 text-sm -mt-2">{fileError}</p>
            )}

            <button
              type="submit"
              disabled={isSending}
              className="mt-2 bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}

        <div className="flex items-center justify-start gap-3 mt-5">
          <FaPhoneAlt className="text-yellow-400" />
          <span className="text-base md:text-lg">+91 9884819291</span>
        </div>

        <div className="flex items-center justify-start gap-3 mt-3">
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
