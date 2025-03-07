import { useEffect } from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi"; 
import Button from "./Button";

const SubscriptionModal = ({ show, onClose }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden"; 
    }
    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [show]);

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
    >
      {/* Modal Container */}
      <div className="relative bg-[#1a1818] p-8 rounded-lg w-11/12 md:w-1/3 text-center text-white shadow-lg">

        {/* Close Button */}
        <motion.div
          whileHover={{ rotate: 180, scale: 1.2 }}
          transition={{ duration: 0.3 }}
          className="absolute top-4 right-4 cursor-pointer text-white hover:text-[#d7a31a]"
          onClick={onClose}
        >
          <FiX size={24} />
        </motion.div>

        <h2 className="text-2xl font-bold text-[#d7a31a] mb-4 glitter-text">
          Subscribe to Our Newsletter 📩
        </h2>
        <p className="text-white mb-6">
          Stay updated with our latest products and special offers!
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 rounded-md bg-lightbg border border-white text-[#1a1a1a] mb-4 outline-none focus:ring-2 ring-[#d7a31a]"
        />
        <Button
          text="Subscribe"
          onClick={onClose}
          className="bg-[#d7a31a] text-[#1a1a1a] py-2 px-6 rounded-md hover:bg-[#b48f18] transition duration-300"
        />
      </div>
    </motion.div>
  );
};

export default SubscriptionModal;
