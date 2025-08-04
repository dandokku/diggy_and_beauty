import { motion } from "framer-motion";
import { FiPhone, FiMail, FiInstagram, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";

const ContactPage = () => {
  const contactItems = [
    {
      icon: <FiPhone className="text-amber-400" size={24} />,
      text: "+234 810 461 8586",
      link: "tel:+2348104618586"
    },
    {
      icon: <FaWhatsapp className="text-amber-400" size={24} />,
      text: "Chat on WhatsApp",
      link: "https://wa.me/2348104618586"
    },
    {
      icon: <FiMail className="text-amber-400" size={24} />,
      text: "jesulobadaniel1@gmail.com",
      link: "mailto:jesulobadaniel1@gmail.com"
    },
    {
      icon: <FiInstagram className="text-amber-400" size={24} />,
      text: "@diggyandbeauty",
      link: "https://instagram.com/diggyandbeauty"
    },
    {
      icon: <FiMapPin className="text-amber-400" size={24} />,
      text: "Lagos, Nigeria",
      link: "https://maps.google.com/?q=Lagos,Nigeria"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions or want to place an order? Reach out to us through any of these channels.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Contact Information
            </h3>
            
            <ul className="space-y-5">
              {contactItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-5"
                >
                  <span className="mt-1">{item.icon}</span>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    {item.text}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10">
              <h4 className="text-xl font-semibold text-white mb-4">
                Business Hours
              </h4>
              <p className="text-gray-400">Monday - Friday: 9am - 6pm</p>
              <p className="text-gray-400">Saturday: 10am - 4pm</p>
              <p className="text-gray-400">Sunday: Closed</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 rounded-xl overflow-hidden shadow-xl border border-gray-800"
        >
          <Map />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;