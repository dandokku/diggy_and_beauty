import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// Function to Render Stars
const renderStars = (rating = 0) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0 ? 1 : 0;
  const emptyStars = Math.max(0, 5 - (fullStars + halfStar));

  return (
    <div className="flex items-center gap-1 mt-1">
      {Array.from({ length: fullStars }).map((_, i) => (
        <FaStar key={`full-${i}`} className="text-amber-400 text-sm" />
      ))}
      {halfStar === 1 && <FaStarHalfAlt className="text-amber-400 text-sm" />}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <FaRegStar key={`empty-${i}`} className="text-amber-400 text-sm" />
      ))}
      <span className="text-xs text-gray-500 ml-1">({rating.toFixed(1)})</span>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative group cursor-pointer overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100"
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Product Image */}
        <div className="relative w-full aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />

          {/* Quick Add to Cart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/20 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <FiShoppingCart size={18} />
              <span className="text-sm font-medium">Add to Cart</span>
            </motion.button>
          </motion.div>

          {/* Category Badge */}
          <span className="absolute top-3 left-3 bg-white/90 text-amber-600 text-xs font-bold px-2 py-1 rounded-full shadow-sm">
            {product.category}
          </span>
        </div>

        {/* Product Details */}
        <div className="p-4">
          <h2 className="text-gray-800 font-semibold text-lg line-clamp-1">
            {product.name}
          </h2>
          {renderStars(product.rating)}
          <div className="flex items-center justify-between mt-3">
            <p className="text-amber-600 font-bold text-lg">
              ₦{product.price.toLocaleString()}
            </p>
            {product.originalPrice && (
              <p className="text-gray-400 text-sm line-through">
                ₦{product.originalPrice.toLocaleString()}
              </p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;