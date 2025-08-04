import { motion } from "framer-motion";
import { FaHeart, FaStar, FaUsers, FaRegSmile } from "react-icons/fa";
import { GiLipstick, GiSparkles } from "react-icons/gi";
import aboutImage from "../assets/images/Logo1.png";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const features = [
    {
      icon: <FaHeart className="text-4xl text-amber-400" />,
      title: "Quality & Care",
      description: "Premium quality products that enhance your natural beauty",
    },
    {
      icon: <FaUsers className="text-4xl text-amber-400" />,
      title: "Customer Satisfaction",
      description: "Your happiness is our ultimate goal",
    },
    {
      icon: <FaStar className="text-4xl text-amber-400" />,
      title: "Affordable Luxury",
      description: "High-end beauty at accessible prices",
    },
    {
      icon: <GiLipstick className="text-4xl text-amber-400" />,
      title: "Trendsetting",
      description: "Stay ahead with our curated collections",
    },
    {
      icon: <FaRegSmile className="text-4xl text-amber-400" />,
      title: "Confidence Boost",
      description: "Products designed to make you feel your best",
    },
    {
      icon: <GiSparkles className="text-4xl text-amber-400" />,
      title: "Unique Style",
      description: "Express yourself with our diverse range",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] min-h-screen pt-24">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <GiSparkles className="text-amber-400 text-4xl" />
        </motion.div>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-4"
        >
          About Diggy & Beauty
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Where beauty meets confidence and style transforms
        </motion.p>
      </motion.section>

      {/* About Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeIn} className="relative">
            <img
              src={aboutImage}
              alt="About Diggy & Beauty"
              className="rounded-2xl shadow-2xl w-full h-auto max-h-[500px] object-cover border-2 border-amber-400/20"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-amber-500 text-white px-6 py-3 rounded-lg shadow-lg"
            >
              Since 2023
            </motion.div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <span className="text-amber-400">Story</span>
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Founded with a passion for beauty and empowerment, Diggy &
                Beauty began as a small boutique with big dreams.
              </p>
              <p>
                We noticed a gap in the market for high-quality, affordable wigs
                and beauty products that cater to diverse needs and styles.
              </p>
              <p>
                Today, we've grown into a trusted name, serving thousands of
                satisfied customers who rely on us for their beauty
                transformations.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-amber-400">Us</span>?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We go beyond just selling products - we create beauty experiences
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-amber-400/30 transition-all"
              >
                <div className="mb-5">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Our <span className="text-amber-400">Mission</span>
            </h2>
            <div className="relative">
              <div className="absolute -top-6 -left-6 text-amber-400/10 text-8xl">
                "
              </div>
              <p className="text-xl text-gray-300 relative z-10">
                To revolutionize the beauty industry by providing exceptional
                products that empower individuals to express their unique style
                with confidence. We believe beauty should be accessible,
                inclusive, and transformative.
              </p>
              <div className="absolute -bottom-6 -right-6 text-amber-400/10 text-8xl">
                "
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6"
      >
        <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-400/20 rounded-2xl p-8 sm:p-12 text-center backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Your Beauty Transformation?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied customers who trust us for their beauty
            needs
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-amber-500/20 transition-all"
          >
            <Link to="/products" className="flex items-center gap-2">
              Explore Our Collections
            </Link>
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
