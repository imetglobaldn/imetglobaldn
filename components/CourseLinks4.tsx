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

const CourseLinks4 = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupOpen = () => setIsPopupOpen(true);
  const handlePopupClose = () => setIsPopupOpen(false);

  return (
    <div>
      {/* Button to open the popup */}
      <button
        onClick={handlePopupOpen}
        className="mt-6 p-4 md:text-xl text-md flex font-medium bg-red hover:bg-blue hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] text-white rounded-lg"
      >
        Apply for Pradurbhav Scholarships
      </button>

      {/* Popup Component */}
      <Popup isOpen={isPopupOpen} onClose={handlePopupClose} />
    </div>
  );
};

export default CourseLinks4;
