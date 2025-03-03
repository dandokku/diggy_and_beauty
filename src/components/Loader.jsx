import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-bg flex items-center justify-center text-white text-3xl glitter-text"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 3, delay: 2 }}
    >
      Please Wait... Soft Life is Loading 😌✨
    </motion.div>
  );
};

export default Loader;
