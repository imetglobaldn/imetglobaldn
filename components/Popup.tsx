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
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <div className="relative bg-[#f3f4f6]  p-6 rounded-xl max-w-lg w-full ">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 scale-150"
            >
              &times;
            </button>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const CourseLinks = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupOpen = () => setIsPopupOpen(true);
  const handlePopupClose = () => setIsPopupOpen(false);

  return (
  
      <div className="flex flex-col justify-center items-center lg:flex-row gap-6 lg:w-[1200px] md:w-[1200px] md:ml-[-220px] lg:ml-0">
        <button
          onClick={handlePopupOpen}
          className="bg-[#E5A632] md:w-1/4 p-6 md:p-4 rounded-2xl shadow-none hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] text-center"
        >
          Short-term Courses
        </button >
        <Popup isOpen={isPopupOpen} onClose={handlePopupClose} />

        <button
          onClick={handlePopupOpen}
          className="flex-1  md:w-1/4 bg-blue p-6 md:p-4 rounded-2xl shadow-none hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] text-center"
        >
          Executive Up-Skilling
        </button>
        <button
          onClick={handlePopupOpen}
          className="flex-1  md:w-1/4 bg-[#CC6B49] p-6 md:p-4 rounded-2xl shadow-none hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] text-center"
        >
          Formal Qualification
        </button>
        <button
          onClick={handlePopupOpen}
          className="flex-1  md:w-1/4 bg-red p-6 md:p-4 rounded-2xl shadow-none hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] text-center"
        >
          Entrepreneurship
        </button>
        </div>

  );
};

export default CourseLinks;
