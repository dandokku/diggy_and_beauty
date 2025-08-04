import { FiInstagram, FiTwitter, FiFacebook, FiMail } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

const Footer = () => {
  const navLinks = ["Products", "About", "Contact"];

  return (
    <footer className="bg-[#1a1818] text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* About Us Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-amber-500 text-xl font-bold uppercase tracking-wider mb-4">
              About Us
            </h3>
            <p className="text-sm leading-relaxed max-w-md mx-auto md:mx-0">
              Diggy & Beauty is your one-stop store for premium beauty products and accessories. 
              We're committed to providing high-quality products with exceptional customer service.
            </p>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-amber-500 text-xl font-bold uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <HashLink 
                    smooth 
                    to={`/${link.toLowerCase()}`}
                    className="block text-sm hover:text-amber-400 transition-colors duration-200 py-1"
                  >
                    {link}
                  </HashLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Us Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-amber-500 text-xl font-bold uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <div className="flex justify-center md:justify-start gap-6">
              {[
                { icon: <FiInstagram size={20} />, name: "Instagram" },
                { icon: <FiTwitter size={20} />, name: "Twitter" },
                { icon: <FiFacebook size={20} />, name: "Facebook" },
                { icon: <FiMail size={20} />, name: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  aria-label={social.name}
                  whileHover={{ y: -3, color: "#f59e0b" }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-sm pt-4 text-center md:text-left">
              Have questions?<br />
              Reach out to us anytime!
            </p>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-amber-500/30 mt-10 pt-6 text-center"
        >
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Diggy & Beauty | All Rights Reserved.
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Designed with passion for beauty and elegance.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;