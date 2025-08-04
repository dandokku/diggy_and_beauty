import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiSend, FiLoader } from "react-icons/fi";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your service ID
        "YOUR_TEMPLATE_ID", // Replace with your template ID
        form,
        "YOUR_PUBLIC_KEY" // Replace with your public key
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully! We'll contact you soon.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          toast.error("Failed to send message. Please try again later.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full max-w-md space-y-6 bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <label className="block text-gray-300 text-sm font-medium mb-2">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
          placeholder="John Doe"
          required
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <label className="block text-gray-300 text-sm font-medium mb-2">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
          placeholder="john@example.com"
          required
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <label className="block text-gray-300 text-sm font-medium mb-2">
          Your Message
        </label>
        <textarea
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
          placeholder="How can we help you?"
          required
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          type="submit"
          disabled={loading}
          whileHover={!loading ? { scale: 1.02 } : {}}
          whileTap={!loading ? { scale: 0.98 } : {}}
          className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 ${
            loading
              ? "bg-amber-600/50 cursor-not-allowed"
              : "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 cursor-pointer"
          } text-white shadow-lg transition-all`}
        >
          {loading ? (
            <>
              <FiLoader className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <FiSend />
              Send Message
            </>
          )}
        </motion.button>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;