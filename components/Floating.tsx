"use client";
import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt} from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";

const Floating: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Functions to open respective services
  const handleWhatsappClick = () => {
    window.open("https://wa.me/9810409943", "_blank"); // Replace with actual WhatsApp number link
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:contact@imetglobal.com"; // Replace with your email
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+91 9810409943"; // Replace with your phone number
  };

  return (
    <div className="fixed justify-center  bottom-36 right-4 z-30 flex flex-col  space-y-2">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-orange text-white border-2 border-white p-4 rounded-full shadow-lg hover:bg-gray-700 transition"
      >
        <IoShareSocialSharp
          className={`text-2xl transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Contact Buttons */}
      {isOpen && (
        <div className="flex flex-col items-center space-y-2 mt-2">
          <button
            onClick={handleWhatsappClick}
            className="bg-green-500 border-2 border-white text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
          >
            <FaWhatsapp className="text-2xl" />
          </button>

          <button
            onClick={handleEmailClick}
            className="bg-[#981D26] border-2 border-white text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
          >
            <FaEnvelope className="text-2xl" />
          </button>

          <button
            onClick={handlePhoneClick}
            className="bg-yellow-500 border-2 border-white text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 transition"
          >
            <FaPhoneAlt className="text-2xl" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Floating;
