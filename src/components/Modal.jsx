import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

const Modal = ({ product, onClose, onAddToCart }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-[100]"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="bg-lightbg rounded-lg p-8 max-w-lg w-full text-white relative"
      >
        <FiX
          size={28}
          className="absolute top-4 right-4 cursor-pointer hover:text-primary transition"
          onClick={onClose}
        />
        <img src={product.image} alt={product.name} className="w-full rounded-lg mb-6" />
        <h2 className="text-3xl font-bold glitter-text">{product.name}</h2>
        <p className="mt-4 text-accent">
          This wig will give you **soft life + sweet girl era** energy 😍✨.  
          100% luxury, no wahala.
        </p>
        <p className="mt-2 text-primary text-xl">₦{product.price}</p>

        <motion.button
          onClick={onAddToCart}
          whileTap={{
            scale: 0.9,
            rotate: [-3, 3, -3, 3, 0],
            transition: { type: "spring", stiffness: 500, damping: 10 }
          }}
          className="mt-6 bg-primary text-bg px-6 py-3 rounded-lg uppercase font-bold tracking-wide cursor-pointer hover:bg-accent transition"
        >
          Add to Cart 💅🏽
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
