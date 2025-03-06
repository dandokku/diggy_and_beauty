import { useState } from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

const SearchOverlay = ({ show, onClose, products, setQuery }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    setQuery(e.target.value);
  };

  return (
    <>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#000000cc] backdrop-blur-md z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="bg-[#1a1818] p-8 rounded-lg shadow-xl w-[90%] md:w-[600px] text-center relative"
          >
            {/* Close Button */}
            <FiX
              className="text-white text-3xl cursor-pointer hover:text-[#d7a31a] absolute top-6 right-6"
              onClick={() => {
                setInput("");
                setQuery("");
                onClose();
              }}
            />

            <h2 className="text-3xl font-bold glitter-text text-[#d7a31a] mb-6">
              What are you looking for? 🔍
            </h2>

            {/* Search Input */}
            <motion.input
              type="text"
              placeholder="Type product name..."
              value={input}
              onChange={handleChange}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="p-4 text-lg bg-lightbg text-white outline-none rounded-lg shadow-lg w-full focus:ring-2 focus:ring-[#d7a31a]"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default SearchOverlay;
