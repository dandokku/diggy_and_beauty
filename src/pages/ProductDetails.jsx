import { useParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaTimes } from "react-icons/fa";
import products from "../data/products.json";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <motion.div
      className="bg-lightbg min-h-screen pt-24 mt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[500px] object-cover rounded-lg shadow-lg"
        />

        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold glitter-text">{product.name}</h1>
          <p className="text-white text-xl">₦{product.price}</p>
          <p className="text-white leading-relaxed">{product.description}</p>

          {/* Contact Us Button */}
          <button
            onClick={toggleSidebar}
            className="bg-primary cursor-pointer text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-md hover:bg-accent transition duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isSidebarOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-[10%] right-0 w-[300px] h-[100vh] bg-white shadow-lg z-50 p-8 rounded-l-xl ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        {/* Sidebar Close Button */}
        <button
          onClick={toggleSidebar}
          className="self-end cursor-pointer text-[#212121] text-2xl font-bold t "
        >
          <FaTimes />
        </button>

        <h2 className="text-2xl font-bold text-[#212121] mb-6">
          How would you like to reach us?
        </h2>
        <p className="text-[#555555] mb-8">
          Wherever you are, we'll be delighted to assist you.
        </p>

        <div className="flex flex-col gap-6">
          <a
            href={`https://wa.me/2348104618586?text=Hello, I'm interested in ${product.name}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsSidebarOpen(false)}
            className="flex items-center gap-3 bg-accent text-[#212121] py-3 px-6 rounded-lg text-lg font-semibold hover:bg-primary transition duration-300"
          >
            <FaWhatsapp className="text-2xl" />
            WhatsApp
          </a>

          <a
            href={`mailto:jesulobadaniel1@gmail.com?subject=Enquiry about ${product.name}`}
            onClick={() => setIsSidebarOpen(false)}
            className="flex items-center gap-3 bg-primary text-[#212121] py-3 px-6 rounded-lg text-lg font-semibold hover:bg-accent transition duration-300"
          >
            <FaEnvelope className="text-2xl" />
            Email
          </a>
        </div>
      </motion.div>

      {/* Overlay Background */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={toggleSidebar}
        ></div>
      )}
    </motion.div>
  );
};

export default ProductDetails;
