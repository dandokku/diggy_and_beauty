import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 300 ? setVisible(true) : setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          whileHover={{ 
            scale: 1.1,
            backgroundColor: "inherit",
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <div className="relative">
            <motion.div
              className="w-14 h-14 bg-amber-600 rounded-full shadow-lg flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FaArrowUp className="text-white text-xl" />
            </motion.div>
            <motion.div
              className="absolute inset-0 border-2 border-amber-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;