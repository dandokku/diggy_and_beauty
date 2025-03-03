import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-bg shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-primary text-2xl font-bold tracking-widest uppercase"
        >
          <a href="/" className="text-primary">Diggy & Beauty</a>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white">
          {["Home", "Shop", "About", "Contact"].map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              className="uppercase cursor-pointer tracking-wide transition duration-300 hover:text-primary"
            >
              {link}
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden">
          {open ? (
            <FiX size={30} onClick={toggleMenu} className="text-white cursor-pointer" />
          ) : (
            <FiMenu size={30} onClick={toggleMenu} className="text-white cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-bg flex flex-col items-center text-white py-4"
        >
          {["Home", "Shop", "About", "Contact"].map((link, index) => (
            <li
              key={index}
              className="py-2 uppercase cursor-pointer tracking-wide hover:text-primary"
              onClick={toggleMenu}
            >
              {link}
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
