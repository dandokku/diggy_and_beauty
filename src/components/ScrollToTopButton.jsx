import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

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
    <motion.div
      className={`fixed bottom-10 right-10 z-50 ${
        visible ? "block" : "hidden"
      }`}
      whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
      initial={{ opacity: 0, scale: 0 }}
      animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onClick={scrollToTop}
    >
      <button className="bg-[#1a1a1a] text-[#d7a31a] p-4 rounded-full shadow-lg cursor-pointer hover:bg-[#bd8cbf] transition-all">
        <FaArrowUp className="text-2xl animate-pulse" />
      </button>
    </motion.div>
  );
};

export default ScrollToTop;
