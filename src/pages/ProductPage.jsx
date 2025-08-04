import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";
import { FiSearch, FiX } from "react-icons/fi";

const ProductPage = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef(null);

  // Close Search on Outside Click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close on ESC Key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setShowSearch(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const cardAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.08,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  // Filter Products
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  const wigs = filteredProducts.filter((product) => product.category === "Wig");
  const accessories = filteredProducts.filter(
    (product) => product.category !== "Wig"
  );

  return (
    <div className="bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] min-h-screen pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header + Search Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-6 relative">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-amber-400 tracking-wide"
          >
            Our Premium Collection
          </motion.h1>

          {/* Search Feature */}
          <div ref={searchRef} className="flex items-center gap-3 w-full sm:w-auto">
            {/* Desktop Search Input */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: showSearch ? "250px" : "0px",
                opacity: showSearch ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden bg-white/90 rounded-full shadow-lg hidden sm:block relative"
            >
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-5 py-2.5 text-gray-800 outline-none bg-transparent"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus={showSearch}
              />
              {showSearch && (
                <button 
                  onClick={() => setShowSearch(false)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-amber-600"
                >
                  <FiX size={18} />
                </button>
              )}
            </motion.div>

            {/* Search Icon Button (Desktop + Mobile) */}
            {!showSearch && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSearch(true)}
                className="bg-amber-500 hover:bg-amber-600 p-3 rounded-full shadow-lg transition-all"
              >
                <FiSearch size={20} className="text-white" />
              </motion.button>
            )}

            {/* Mobile Search Input */}
            {showSearch && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full sm:hidden relative"
              >
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-5 py-3 rounded-full bg-white/90 text-gray-800 outline-none shadow-lg pr-10"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                />
                <button 
                  onClick={() => setShowSearch(false)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-amber-600"
                >
                  <FiX size={18} />
                </button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Wigs Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-8 text-center">
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Wigs Collection
            </span>
          </h2>
          {wigs.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {wigs.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={cardAnimation}
                  initial="hidden"
                  whileInView="visible"
                  custom={index}
                  viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">
                No matching wigs found. Try a different search.
              </p>
            </motion.div>
          )}
        </motion.section>

        {/* Accessories Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-8 text-center">
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Beauty Accessories
            </span>
          </h2>
          {accessories.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {accessories.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={cardAnimation}
                  initial="hidden"
                  whileInView="visible"
                  custom={index}
                  viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">
                No matching accessories found. Try a different search.
              </p>
            </motion.div>
          )}
        </motion.section>
      </div>
    </div>
  );
};

export default ProductPage;