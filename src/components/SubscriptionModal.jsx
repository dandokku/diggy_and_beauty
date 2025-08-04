import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative bg-gradient-to-br from-[#1a1818] to-[#2a2828] rounded-xl shadow-2xl w-full max-w-md overflow-hidden border border-gray-700/50"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-amber-400 transition-colors z-10"
              aria-label="Close modal"
            >
              <FiX size={24} />
            </motion.button>

            {/* Modal Content */}
            <div className="p-8 pt-12">
              <div className="mb-6 text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-amber-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </motion.div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Join Our Beauty Community
                </h2>
                <p className="text-gray-400">
                  Get exclusive offers, beauty tips, and new product alerts!
                </p>
              </div>

              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <Button
                  text="Subscribe Now"
                  onClick={onClose}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-3 px-6 rounded-lg font-medium shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                />
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubscriptionModal;