import { motion } from "framer-motion";

const ProductCard = ({ image, name, price }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotateY: 10,
        rotateX: 10,
        boxShadow: "0px 20px 40px rgba(215, 163, 26, 0.4)",
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-lightbg rounded-lg overflow-hidden p-6 cursor-pointer shadow-lg relative"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover rounded-lg"
      />
      <div className="mt-4">
        <h3 className="text-xl font-semibold glitter-text">{name}</h3>
        <p className="text-primary mt-2">₦{price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
