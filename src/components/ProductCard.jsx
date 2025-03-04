import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext"; // Import useCart hook

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // Access addToCart from context

  const handleAddToCart = () => {
    addToCart(product); // Add product to cart
  };

  return (
    <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-transform duration-300 hover:scale-105">
      {/* Product Image */}
      <div className="relative w-full h-72">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center"
        />
        {/* Cart Icon (Visible on Hover) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <button
            onClick={handleAddToCart}
            className="bg-primary text-white p-3 rounded-full flex items-center justify-center hover:bg-accent transition"
          >
            <FiShoppingCart size={24} />
          </button>
        </motion.div>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h2 className="text-text text-lg font-bold">{product.name}</h2>
        </Link>
        <p className="text-primary text-lg mt-2">₦{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
