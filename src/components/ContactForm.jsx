import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
    toast.success("Message Sent Successfully!");
toast.error("Failed to Send Message!");

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
          alert("Message Sent Successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          alert("Something went wrong, please try again.");
        }
      );
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 bg-[#111827] p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div>
        <label className="block text-accent uppercase mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 rounded bg-[#1a1818] text-white outline-none focus:ring-2 focus:ring-primary"
          placeholder="Your Name"
          required
        />
      </div>

      <div>
        <label className="block text-accent uppercase mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 rounded bg-[#1a1818] text-white outline-none focus:ring-2 focus:ring-primary"
          placeholder="Your Email"
          required
        />
      </div>

      <div>
        <label className="block text-accent uppercase mb-2">Message</label>
        <textarea
          name="message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 rounded bg-[#1a1818] text-white outline-none focus:ring-2 focus:ring-primary"
          placeholder="Your Message"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-primary w-full py-3 uppercase text-bg hover:bg-[#d7a31a]/80 transition"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </motion.form>
  );
};

export default ContactForm;
