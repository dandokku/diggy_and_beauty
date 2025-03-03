import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiSearch, FiShoppingCart } from "react-icons/fi";
import SearchOverlay from "./SearchOverlay";
import { Link } from "react-router-dom";
import SubscriptionModal from "./SubscriptionModal";

const Navbar = ({ cart }) => {
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  window.addEventListener("scroll", () => {
    setScrolled(window.scrollY > 50);
  });
}, []);

  const toggleMenu = () => {
    setOpen(!open);
    document.body.style.overflow = open ? "auto" : "hidden"; // Scroll Lock
  };

  // Automatically close menu on screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && open) {
        setOpen(false);
        document.body.style.overflow = "auto"; // Unlock scroll
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  const [showModal, setShowModal] = useState(false);

useEffect(() => {
  const hasSubscribed = sessionStorage.getItem("diggy_subscribed");
  if (!hasSubscribed) {
    setShowModal(true);
  }
}, []);

const closeModal = () => {
  setShowModal(false);
  sessionStorage.setItem("diggy_subscribed", "true"); // Store Subscription
};

  return (
    <>
      <nav className="p-6 w-full fixed top-0 left-0 z-50 bg-[#1a1818] shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-primary text-2xl font-bold tracking-widest uppercase glitter-text"
          >
            <Link to="/" className="text-primary">
              Diggy & Beauty
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-white">
            {["Home", "Shop", "About", "Contact"].map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                className="uppercase cursor-pointer tracking-wide transition duration-300 hover:text-primary"
              >
                <Link to={link === "Home" ? "/" : `/${link.toLowerCase()}`}>
                  {link}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-6">
            {/* Search */}
            <motion.div
              whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
              className="cursor-pointer text-white hover:text-primary transition"
              onClick={() => setShowSearch(true)}
            >
              <FiSearch size={24} />
            </motion.div>

            {/* Cart */}
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

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              {open ? (
                <FiX
                  size={30}
                  onClick={toggleMenu}
                  className="text-white cursor-pointer"
                />
              ) : (
                <FiMenu
                  size={30}
                  onClick={toggleMenu}
                  className="text-white cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: open ? 0 : "100%", opacity: open ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        exit={{ opacity: 0, x: "100%" }}
        className={`fixed top-0 right-0 w-3/4 h-full backdrop-blur-xl bg-[#1a1818]/90 text-white z-40 flex flex-col items-center gap-10 pt-24 mt-10 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {["Home", "Shop", "About", "Contact"].map((link, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1 }}
            className="uppercase cursor-pointer tracking-wide text-lg hover:text-primary"
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

      <SubscriptionModal show={showModal} onClose={closeModal} />
    </>
  );
};

export default Navbar;
