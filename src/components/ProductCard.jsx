import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// Function to Render Stars
const renderStars = (rating = 0) => {
  const fullStars = Math.floor(rating); // Full stars
  const halfStar = rating % 1 !== 0 ? 1 : 0; // Half star
  const emptyStars = Math.max(0, 5 - (fullStars + halfStar)); // Prevent Negative Numbers

  return (
    <div className="flex items-center gap-1 mt-2">
      {/* Full Stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <FaStar key={`full-${i}`} className="text-[#d7a31a] text-lg" />
      ))}

      {/* Half Star */}
      {halfStar === 1 && <FaStarHalfAlt className="text-[#d7a31a] text-lg" />}

      {/* Empty Stars */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <FaRegStar key={`empty-${i}`} className="text-[#d7a31a] text-lg" />
      ))}
    </div>
  );
};

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // Context Hook for Cart

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-transform duration-300 hover:scale-105">
      {/* Product Image */}
      <div className="relative w-full h-48 md:h-72">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center"
        />

        {/* Add to Cart Button Hover Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <button
            onClick={handleAddToCart}
            className="bg-[#d7a31a] text-white p-3 rounded-full flex items-center justify-center hover:bg-[#bd8cbf] transition"
          >
            <FiShoppingCart size={24} />
          </button>
        </motion.div>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h2 className="text-[#212121] text-lg font-bold">{product.name}</h2>
          {renderStars(product.rating)}
          <p className="text-[#d7a31a] text-lg mt-2">₦{product.price}</p>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
