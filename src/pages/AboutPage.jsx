import { motion } from "framer-motion";
import { FaHeart, FaStar, FaUsers } from "react-icons/fa";
import aboutImage from "../assets/images/Logo1.png";

const AboutPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2, delayChildren: 0.4 },
    },
  };

  return (
    <div className="bg-lightbg min-h-screen pt-24 mt-16">
      {/* Hero Section */}
      <div className="text-center py-16 ">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-[#d7a31a] glitter-text"
        >
          About Us
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-lg text-white mt-4 max-w-2xl mx-auto"
        >
          Unveiling Beauty, One Product at a Time ✨
        </motion.p>
      </div>

      {/* About Section */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="container mx-auto p-6 sm:p-10 grid md:grid-cols-2 gap-10 items-center mb-7 pb"
      >
        <motion.img
          src={aboutImage}
          alt="About Us"
          variants={fadeIn}
          className="rounded-lg shadow-lg w-full h-[60vh] object-cover"
        />

        <motion.div variants={fadeIn}>
          <h2 className="text-3xl font-bold text-[#d7a31a] glitter-text mb-4">
            Who We Are
          </h2>
          <p className="text-white leading-loose">
            At Diggy & Beauty, we believe that every woman deserves to feel
            confident and beautiful. Our passion is to deliver high-quality
            wigs, accessories, and beauty products that empower you to express
            your unique style.
          </p>
        </motion.div>
      </motion.div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-[#11182]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#d7a31a] glitter-text mb-10 mt-10">
            Why Choose Us?
          </h2>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-10"
          >
            <motion.div
              variants={fadeIn}
              className="p-8 bg-lightbg rounded-lg shadow-lg hover:scale-105 transition"
            >
              <FaHeart className="text-5xl text-[#d7a31a] mx-auto mb-4" />
              <h3 className="text-xl text-[#d7a31a] font-semibold">
                Quality & Care
              </h3>
              <p className="text-white mt-4">
                We prioritize premium quality products that enhance your beauty.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="p-8 bg-lightbg rounded-lg shadow-lg hover:scale-105 transition"
            >
              <FaUsers className="text-5xl text-[#d7a31a] mx-auto mb-4" />
              <h3 className="text-xl text-[#d7a31a] font-semibold">
                Customer Satisfaction
              </h3>
              <p className="text-white mt-4">
                Your happiness is our top priority. We ensure 100% satisfaction.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="p-8 bg-lightbg rounded-lg shadow-lg hover:scale-105 transition"
            >
              <FaStar className="text-5xl text-[#d7a31a] mx-auto mb-4" />
              <h3 className="text-xl text-[#d7a31a] font-semibold">
                Affordable Luxury
              </h3>
              <p className="text-white mt-4">
                Luxury products at prices that won't break the bank.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="text-center py-16">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-3xl font-bold text-[#d7a31a] glitter-text mb-6"
        >
          Our Mission
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="text-white max-w-3xl mx-auto leading-loose"
        >
          To empower women with confidence by providing top-quality wigs, beauty
          accessories, and exceptional customer service.
        </motion.p>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-20 bg-[#82d47c] text-center rounded-xl shadow-lg mx-6 md:mx-20"
      >
        <h2 className="text-4xl font-bold text-[#111827] glitter-text">
          Join Our Beauty Journey 💫
        </h2>
        <p className="text-[#291115] mt-4">
          Discover products that transform your beauty experience.
        </p>
        <button className="bg-[#d7a31a] text-white px-6 py-3 rounded-full mt-6 shadow-lg hover:bg-[#111827] transition">
          Shop Now
        </button>
      </motion.div>
    </div>
  );
};

export default AboutPage;
