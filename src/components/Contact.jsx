import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="py-16 bg-[#1a1a1a] text-center">
      <h2 className="text-4xl text-[#d7a31a] glitter-text mb-8">
        Talk to Diggy 💅🏽✨
      </h2>
      <form className="max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 mb-4 rounded-lg text-black"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 rounded-lg text-black"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 mb-4 rounded-lg text-black"
          rows="5"
        ></textarea>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="bg-[#d7a31a] text-[#1a1a1a] px-6 py-3 rounded-lg uppercase font-bold cursor-pointer hover:bg-[#bd8cbf] cursor-pointer transition"
        >
          Send Message
        </motion.button>
      </form>
    </div>
  );
};

export default Contact;
