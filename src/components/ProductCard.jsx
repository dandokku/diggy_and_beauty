import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  return (
    <motion.div className="bg-white p-4 rounded-lg shadow-md" whileHover={{ scale: 1.05 }}>
      <img src={product.image} alt={product.name} className="w-full h-72 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p className="text-primary mt-2">${product.price}</p>
      <button className="mt-4">View Details</button>
    </motion.div>
  );
};

export default ProductCard;
