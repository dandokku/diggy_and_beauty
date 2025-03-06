import { motion } from "framer-motion";
import Button from "./Button";
import { Link } from "react-router-dom";
import { text } from "framer-motion/client";

const Hero = () => {
  return (
    <section className="h-screen w-full bg-[#1a1a1a] text-white flex flex-col items-center justify-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-bold leading-snug tracking-wider glitter-text"
      >
        Discover Timeless <span className="text-[#d7a31a]">Beauty</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-4 text-lg md:text-xl text-[#bd8cbf] max-w-lg"
      >
        Elevate your style with premium wigs & beauty accessories.
      </motion.p>

      <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.5, duration: 1 }}
  className="mt-8"
>
  <Link to="/products">
    <Button text="Shop Now" />
  </Link>
</motion.div>

    </section>
  );
};

export default Hero;
