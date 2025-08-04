import { useParams } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaTimes, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import products from "../data/products.json";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderStars = (rating = 0) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = Math.max(0, 5 - (fullStars + halfStar));

    return (
      <div className="flex items-center gap-1 my-2">
        {Array.from({ length: fullStars }).map((_, i) => (
          <FaStar key={`full-${i}`} className="text-amber-400" />
        ))}
        {halfStar === 1 && <FaStarHalfAlt className="text-amber-400" />}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-amber-400" />
        ))}
        <span className="text-gray-400 text-sm ml-2">({rating.toFixed(1)})</span>
      </div>
    );
  };

  return (
    <motion.div
      className="bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] min-h-screen pt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">
          {/* Product Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto max-h-[600px] object-cover rounded-xl shadow-lg border border-gray-700"
            />
            {product.isNew && (
              <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                NEW
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {product.name}
              </h1>
              {renderStars(product.rating)}
            </div>

            <div className="flex items-center gap-4">
              <p className="text-amber-400 text-2xl font-bold">
                ₦{product.price.toLocaleString()}
              </p>
              {product.originalPrice && (
                <p className="text-gray-400 text-lg line-through">
                  ₦{product.originalPrice.toLocaleString()}
                </p>
              )}
            </div>

            <div className="prose max-w-none text-gray-300">
              <p className="text-lg leading-relaxed">{product.description}</p>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={toggleSidebar}
                className="bg-amber-500 hover:bg-amber-600 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-lg transition-colors"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
              onClick={toggleSidebar}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-full max-w-md h-full bg-white shadow-xl z-50 p-6 sm:p-8"
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Contact Options
                </h2>
                <button
                  onClick={toggleSidebar}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <FaTimes size={24} />
                </button>
              </div>

              <p className="text-gray-600 mb-8">
                We're happy to assist you with your purchase of <strong>{product.name}</strong>. Choose your preferred contact method:
              </p>

              <div className="space-y-4">
                <motion.a
                  whileHover={{ y: -2 }}
                  href={`https://wa.me/2348104618586?text=Hello%20Diggy%20%26%20Beauty%20%F0%9F%92%84%2C%20I'm%20interested%20in%20${encodeURIComponent(product.name)}%20(%E2%82%A6${product.price.toLocaleString()})%2C%20is%20it%20available%3F`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#25D366] text-white py-4 px-6 rounded-lg font-semibold shadow-md hover:bg-[#128C7E] transition-colors"
                >
                  <FaWhatsapp size={24} />
                  <span>Chat on WhatsApp</span>
                </motion.a>

                <motion.a
                  whileHover={{ y: -2 }}
                  href={`mailto:jesulobadaniel1@gmail.com?subject=Enquiry%20about%20${encodeURIComponent(product.name)}&body=Hello%20Diggy%20%26%20Beauty%2C%0D%0A%0D%0AI'm%20interested%20in%20your%20${encodeURIComponent(product.name)}%20(%E2%82%A6${product.price.toLocaleString()})%20and%20would%20like%20more%20information.`}
                  className="flex items-center gap-4 bg-amber-500 text-white py-4 px-6 rounded-lg font-semibold shadow-md hover:bg-amber-600 transition-colors"
                >
                  <FaEnvelope size={24} />
                  <span>Send Email</span>
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProductDetails;