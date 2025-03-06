import { useParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
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
        className={`fixed top-[50%] rounded-md right-0 w-[300px] h-[50%] bg-white shadow-lg z-50 p-6 flex flex-col gap-8 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        {/* Sidebar Close Button */}
        <button
          onClick={toggleSidebar}
          className="self-end text-white text-xl font-bold"
        >
          ✖
        </button>

        <p className="text-[#212121] font-bold mb-4">Wherever you are, we'll be delighted to assist you</p>

        <a
          href={`https://wa.me/2348104618586?text=Hello, I'm interested in ${product.name}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsSidebarOpen(false)}
          className="bg-accent text-[#212121] py-3 px-6 rounded-lg text-lg text-center font-semibold hover:bg-primary transition duration-300"
        >
          WhatsApp
        </a>

        <a
          href={`mailto:jesulobadaniel1@gmail.com?subject=Enquiry about ${product.name}`}
          onClick={() => setIsSidebarOpen(false)}
          className="bg-primary text-[#212121] py-3 px-6 rounded-lg text-lg text-center font-semibold hover:bg-accent transition duration-300"
        >
          Email
        </a>
      </motion.div>

      {/* Overlay Background */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </motion.div>
  );
};

export default ProductDetails;
