import { useEffect } from "react";
import { motion } from "framer-motion";

const SubscriptionModal = ({ show, onClose }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (show) {
        document.body.style.overflow = "hidden"; // Lock Scroll
      }
    }, 100);

    return () => {
      document.body.style.overflow = "auto"; // Unlock Scroll
      clearTimeout(timeout);
    };
  }, [show]);

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
    >
      <div className="bg-[#1a1818] p-8 rounded-lg w-11/12 md:w-1/3 text-center text-white shadow-lg">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Subscribe to Our Newsletter 📩
        </h2>
        <p className="text-white mb-6">
          Be the first to know about our latest products and offers!
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 rounded-md bg-lightbg text-bg mb-4 outline-none focus:ring-2 ring-primary"
        />
        <button
          onClick={onClose}
          className="bg-primary text-bg py-2 px-6 rounded-md hover:bg-[#b48f18] transition duration-300"
        >
          Subscribe
        </button>
      </div>
    </motion.div>
  );
};

export default SubscriptionModal;
