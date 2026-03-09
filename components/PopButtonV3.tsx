import React, { useState } from "react";
import ContactForm from "@/components/ContactForm";
import { AnimatePresence, motion } from "framer-motion";

const Popup = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
        >
          <div className="relative bg-[#f3f4f6] p-6 rounded-xl max-w-lg w-full">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 scale-150"
            >
              &times;
            </button>
            <ContactForm />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface PopButtonProps {
  children: React.ReactNode;
}

const PopButtonV3 = ({ children }: PopButtonProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupOpen = () => setIsPopupOpen(true);
  const handlePopupClose = () => setIsPopupOpen(false);

  return (
    <div>
      {/* Button to open the popup */}
      <button
        onClick={handlePopupOpen}
        className="  text-md flex text-center  hover:underline text-white rounded-lg font-semibold bg-red hover:bg-blue p-3"
      >
        {children}
      </button>

      {/* Popup Component */}
      <Popup isOpen={isPopupOpen} onClose={handlePopupClose} />
    </div>
  );
};

export default PopButtonV3;
