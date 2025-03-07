import { useState, useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import products from "../data/products.json";
import { motion } from "framer-motion";

const SearchBar = ({ query, setQuery }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-full md:w-[300px]" ref={dropdownRef}>
      <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onFocus={() => setShowDropdown(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowDropdown(true);
          }}
          className="w-full px-4 py-3 text-bg outline-none"
        />
        <button className="p-3">
          <FiSearch size={20} className="text-bg" />
        </button>
      </div>

      {showDropdown && query.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-2 z-50"
        >
          {filtered.length > 0 ? (
            filtered.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-3 p-3 hover:bg-primary hover:text-white cursor-pointer transition rounded-lg"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 object-cover rounded-lg shadow-sm"
                />
                <span className="text-bg font-medium">
                  {highlightText(product.name, query)}
                </span>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-gray-500">
              🚫 No Results Found
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

const highlightText = (text, query) => {
  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, `<span class='text-primary font-bold'>$1</span>`);
};

export default SearchBar;
