import { motion } from "framer-motion";
import AboutCard from "../components/AboutCard";

const AboutPage = () => {
  return (
    <section id="about" className="bg-lightbg mt-16 py-20 text-[#212121]">
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-center glitter-text mb-10 uppercase"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-center max-w-3xl mx-auto text-lg mb-12 text-whitetext"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Welcome to Diggy & Beauty where passion meets creativity. We are a beauty brand committed to providing top-quality beauty products and services that empower women to express themselves confidently.
        </motion.p>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          <AboutCard
            title="Our Mission"
            description="To enhance the beauty and confidence of every woman by providing premium beauty products and services."
          />
          <AboutCard
            title="Our Vision"
            description="To become a leading beauty brand that inspires women across the globe to embrace their natural beauty."
          />
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 text-center text-whitetext">
          <h3 className="text-3xl text-[#d7a31a] mb-8 uppercase font-bold">Why Choose Us?</h3>
          <p className="max-w-2xl mx-auto text-lg leading-loose">
            At Diggy & Beauty, we combine high-quality products, personalized services, and excellent customer care to give you an experience like no other.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
