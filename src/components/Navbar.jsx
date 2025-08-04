import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import SearchOverlay from "./SearchOverlay";
import SubscriptionModal from "./SubscriptionModal";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Scroll Background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show Subscription Modal Just Once
  useEffect(() => {
    const hasSubscribed = sessionStorage.getItem("diggy_subscribed");
    if (!hasSubscribed) {
      const timer = setTimeout(() => setShowModal(true), 3000); // Show after slight delay
      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
    sessionStorage.setItem("diggy_subscribed", "true");
  };

  const toggleMenu = () => {
    setOpen(!open);
    document.body.style.overflow = open ? "auto" : "hidden";
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && open) {
        setOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          scrolled
            ? "bg-white/90 dark:bg-[#1a1818]/90 backdrop-blur-md shadow-sm py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-amber-600 dark:text-[#d7a31a] text-xl md:text-2xl font-bold uppercase tracking-wider"
            >
              <Link to="/" className="hover:opacity-80 transition-opacity">
                Diggy & Beauty
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6 lg:gap-8 items-center">
              {["Home", "Products", "About", "Contact"].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-gray-800 dark:text-white uppercase text-sm font-medium tracking-wide hover:text-amber-600 dark:hover:text-[#d7a31a] transition-colors px-2 py-1"
                  >
                    {link}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 dark:bg-[#d7a31a] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Icons */}
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Cart */}
              <Link to="/cart">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative cursor-pointer text-gray-800 dark:text-white hover:text-amber-600 dark:hover:text-[#d7a31a] transition-colors"
                >
                  <FiShoppingCart size={22} />
                  {cart.length > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2 bg-amber-600 dark:bg-[#d7a31a] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
                    >
                      {cart.length}
                    </motion.span>
                  )}
                </motion.div>
              </Link>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                {open ? (
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleMenu}
                    className="cursor-pointer text-gray-800 dark:text-white p-1"
                  >
                    <FiX size={26} />
                  </motion.div>
                ) : (
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleMenu}
                    className="cursor-pointer text-gray-800 dark:text-white p-1"
                  >
                    <FiMenu size={26} />
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: open ? 0 : "100%" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-white dark:bg-[#1a1818] shadow-2xl flex flex-col items-start gap-8 pt-32 px-8 z-40 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {["Home", "Products", "About", "Contact"].map((link, index) => (
          <motion.div
            key={index}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: open ? 0 : 20, opacity: open ? 1 : 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
            className="w-full border-b border-gray-100 dark:border-gray-700/50 pb-4"
          >
            <Link
              to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
              className="text-gray-800 dark:text-white text-xl font-medium uppercase tracking-wide hover:text-amber-600 dark:hover:text-[#d7a31a] transition-colors"
              onClick={() => {
                toggleMenu();
                document.body.style.overflow = "auto";
              }}
            >
              {link}
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Blur Overlay */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-30 backdrop-blur-sm"
          onClick={toggleMenu}
        />
      )}

      {/* Subscription Modal */}
      <SubscriptionModal show={showModal} onClose={closeModal} />
    </>
  );
};

export default Navbar;