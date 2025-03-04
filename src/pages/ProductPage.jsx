import { useState } from "react";
import { motion } from "framer-motion";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";
import { FiSearch } from "react-icons/fi";
import SearchOverlay from "../components/SearchOverlay";

const ProductPage = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

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
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-center text-primary glitter-text">
            Our Products
          </h1>

          {/* Search Button 🔍 */}
          <button
            onClick={() => setShowSearch(true)}
            className="bg-white p-3 rounded-full shadow-lg hover:bg-primary transition"
          >
            <FiSearch size={24} className="text-bg" />
          </button>
        </div>

        {/* Search Overlay */}
        <SearchOverlay
          show={showSearch}
          onClose={() => {
            setShowSearch(false);
            setQuery("");
          }}
          products={products}
          setQuery={setQuery}
        />

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
