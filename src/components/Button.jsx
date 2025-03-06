import { motion } from "framer-motion";

const Button = ({ text }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-3 bg-[#d7a31a] text-white rounded-full tracking-wider uppercase shadow-lg transition duration-300 hover:bg-[#bd8cbf] cursor-pointer"
    >
      {text}
    </motion.button>
  );
};

export default Button;
