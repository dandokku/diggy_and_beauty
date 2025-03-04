import { motion } from "framer-motion";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  const cardAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="bg-lightbg min-h-screen pt-24 mt-16">
      <div className="container mx-auto p-6 sm:p-10">
        <h1 className="text-4xl font-bold text-center text-primary mb-10">
          Our Products
        </h1>
        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="break-inside-avoid"
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
