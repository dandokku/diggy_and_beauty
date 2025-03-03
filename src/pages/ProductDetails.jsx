import { useParams } from "react-router-dom";
import products from "../data/products.json";
import OrderButton from "../components/OrderButton";
import { motion } from "framer-motion";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  return (
    <motion.div
      className="bg-lightbg min-h-screen pt-24"
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
          <h1 className="text-4xl font-bold text-text">{product.name}</h1>
          <p className="text-primary text-xl">₦{product.price}</p>
          <p className="text-text leading-relaxed">{product.description}</p>

          {/* Order Buttons */}
          <OrderButton
            productName={product.name}
            price={product.price}
            phone="+2349012345678" // Replace with your WhatsApp number
            email="diggybeauty@gmail.com"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
