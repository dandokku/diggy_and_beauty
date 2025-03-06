import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";
import { FiSearch } from "react-icons/fi";

const ProductPage = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef(null);

  // Close Search when clicking outside
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

  const cardAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  // Filtering Products Based on Query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  const wigs = filteredProducts.filter((product) => product.category === "Wig");
  const accessories = filteredProducts.filter(
    (product) => product.category !== "Wig"
  );

  return (
    <div className="bg-lightbg min-h-screen pt-24 mt-16">
      <div className="container mx-auto p-6 sm:p-10">
        <div className="flex justify-between items-center mb-10 relative">
          <h1 className="text-4xl font-bold text-center text-primary glitter-text">
            Our Products
          </h1>

          {/* Search Feature 🔍 */}
          <div className="flex items-center gap-3" ref={searchRef}>
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: showSearch ? "200px" : "0px",
                opacity: showSearch ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden bg-white rounded-full shadow-lg hidden md:block"
            >
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 text-bg outline-none"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </motion.div>

            {/* Search Button */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="bg-white p-3 rounded-full shadow-lg hover:bg-primary transition"
            >
              <FiSearch size={24} className="text-bg" />
            </button>
          </div>

          {/* Mobile Search Input */}
          {showSearch && (
            <div className="w-full block md:hidden mt-6">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-3 rounded-lg bg-white text-bg outline-none shadow-lg"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          )}
        </div>

        {/* Wigs Section 🦱 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary glitter-text mb-6 text-center">
            Wigs Collection
          </h2>
          <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
            {wigs.length > 0 ? (
              wigs.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="break-inside-avoid"
                  variants={cardAnimation}
                  initial="hidden"
                  whileInView="visible"
                  custom={index}
                  viewport={{ once: true }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))
            ) : (
              <p className="text-center text-white text-lg">
                No Wigs Found 😢
              </p>
            )}
          </div>
        </div>

        {/* Accessories Section 💄 */}
        <div>
          <h2 className="text-3xl font-bold text-primary glitter-text mb-6 text-center">
            Accessories & Others
          </h2>
          <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
            {accessories.length > 0 ? (
              accessories.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="break-inside-avoid"
                  variants={cardAnimation}
                  initial="hidden"
                  whileInView="visible"
                  custom={index}
                  viewport={{ once: true }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))
            ) : (
              <p className="text-center text-white text-lg">
                No Accessories Found 😢
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
