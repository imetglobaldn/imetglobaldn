import React, { useState } from 'react';
import { InlineWidget } from 'react-calendly';

const CalendlyPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to toggle the popup */}
      <button
        onClick={togglePopup}
        className="mt-16 p-4 rounded-2xl md:text-2xl text-white text-md flex font-medium mx-auto hover:bg-blue bg-blue hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
      >
       Check - Online | In-Class | Hybrid
      </button>

      {/* Popup modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-full max-w-3xl  rounded-lg shadow-lg relative">
            {/* Close button */}
            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-blue hover:text-gray-700 text-5xl"
            >
              &times;
            </button>

            {/* Calendly widget */}
            <InlineWidget
              url="https://calendly.com/imetglobaldn/30min" 
              styles={{ minWidth: '100px', height: '570px' }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendlyPopup;

