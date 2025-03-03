import { motion } from "framer-motion";

const AboutCard = ({ title, description }) => {
  return (
    <motion.div
      className="bg-white p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-2xl text-primary font-bold mb-4">{title}</h3>
      <p className="text-text leading-loose">{description}</p>
    </motion.div>
  );
};

export default AboutCard;
