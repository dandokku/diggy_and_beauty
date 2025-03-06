import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiSearch, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import SearchOverlay from "./SearchOverlay";
import SubscriptionModal from "./SubscriptionModal";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart(); // Cart Context
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Scroll Event for Navbar Background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Subscription Modal Show Once
  useEffect(() => {
    const hasSubscribed = sessionStorage.getItem("diggy_subscribed");
    if (!hasSubscribed) {
      setShowModal(true);
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
    sessionStorage.setItem("diggy_subscribed", "true");
  };

  // Mobile Menu Toggle
  const toggleMenu = () => {
    setOpen(!open);
    document.body.style.overflow = open ? "auto" : "hidden"; // Lock Scroll
  };

  // Automatically Close Menu on Window Resize
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
        className={`fixed top-0 left-0 w-full z-50 p-6 shadow-md transition ${
          scrolled ? "bg-[#1a1818]/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-primary text-md md:text-2xl font-bold uppercase tracking-widest glitter-text"
          >
            <Link to="/">Diggy & Beauty</Link>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-white">
            {["Home", "Products", "About", "Contact"].map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer uppercase tracking-wide hover:text-primary transition"
              >
                <Link to={link === "Home" ? "/" : `/${link.toLowerCase()}`}>
                  {link}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-6">
            {/* Search Icon */}
           

            {/* Cart Icon */}
            <Link to="/cart">
              <motion.div
                whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                className="relative cursor-pointer text-white hover:text-primary transition"
              >
                <FiShoppingCart size={24} />
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 bg-primary text-bg text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </motion.div>
            </Link>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              {open ? (
                <FiX
                  size={30}
                  onClick={toggleMenu}
                  className="cursor-pointer text-white"
                />
              ) : (
                <FiMenu
                  size={30}
                  onClick={toggleMenu}
                  className="cursor-pointer text-white"
                />
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: open ? 0 : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`fixed top-0 right-0 w-3/4 h-full bg-[#1a1818]/90 backdrop-blur-lg text-white flex flex-col items-center gap-10 pt-16 z-40 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {["Home", "Products", "About", "Contact"].map((link, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1 }}
            className="text-lg uppercase tracking-wide hover:text-primary"
          >
            <Link
              to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
              onClick={toggleMenu}
            >
              {link}
            </Link>
          </motion.li>
        ))}
      </motion.div>

      {/* Search Overlay */}
      <SearchOverlay show={showSearch} onClose={() => setShowSearch(false)} />

      {/* Subscription Modal */}
      <SubscriptionModal show={showModal} onClose={closeModal} />
    </>
  );
};

export default Navbar;
