"use client";

import { useState, useEffect } from "react";
import { disclaimerData } from "../constants/index"; // Adjust path accordingly

const DisclaimerPopup = () => {
  const [isOpen, setIsOpen] = useState(false); // Initially closed

  useEffect(() => {
    // Set a timer to show the popup after 6 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 6000);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const handleAgree = () => {
    setIsOpen(false);
    console.log("Agreed");
  };

  const handleDisagree = () => {
    setIsOpen(false);
    console.log("Disagreed");
  };

  if (!isOpen) return null; // If popup is closed, don't render it

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-md max-w-2xl mx-auto p-6 md:p-8 lg:p-10 w-full ">
        <div className="mb-4 text-center">
          <h2 className="text-xl font-bold text-red-500">DISCLAIMER</h2>
        </div>
        <div className="text-sm text-gray-700 max-h-96 overflow-y-auto mb-6">
          {disclaimerData.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex justify-start gap-2">
          <button
            onClick={handleAgree}
            className="bg-red text-white px-4 py-2 rounded-md hover:bg-blue transition"
          >
            I Agree
          </button>
          <button
            onClick={handleDisagree}
            className="border-2 border-red text-red px-4 py-2 rounded-md hover:bg-blue hover:text-white hover:border-blue transition"
          >
            Disagree
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
