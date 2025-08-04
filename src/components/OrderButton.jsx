import { motion } from "framer-motion";
import { FiMail, FiMessageSquare } from "react-icons/fi";
import { toast } from "react-toastify";
import { FaWhatsapp } from "react-icons/fa";

const OrderButton = ({ productName, price, phone, email, className = "" }) => {
  const whatsappMessage = `Hello Diggy & Beauty 💄✨,\n\nI'm interested in purchasing:\n\n*${productName}*\nPrice: ₦${price.toLocaleString()}\n\nIs this item currently available?`;
  const emailSubject = `Order Inquiry: ${productName}`;
  const emailBody = `Hello Diggy & Beauty,\n\nI would like to inquire about purchasing:\n\nProduct: ${productName}\nPrice: ₦${price.toLocaleString()}\n\nPlease let me know about availability and payment options.\n\nBest regards,\n[Your Name]`;

  const handleOrder = (platform) => {
    toast.success(
      <div>
        <p className="font-medium">Order request sent!</p>
        <p className="text-sm opacity-80">Via {platform}</p>
      </div>,
      {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        className: "border-l-4 border-amber-400",
      }
    );
  };

  return (
    <motion.div 
      className={`flex flex-col sm:flex-row gap-3 ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.a
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        href={`https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-3 shadow-lg transition-colors"
        onClick={() => handleOrder("WhatsApp")}
      >
        <FaWhatsapp className="text-xl" />
        <span>WhatsApp Order</span>
      </motion.a>

      <motion.a
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        href={`mailto:${email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
        className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-3 shadow-lg transition-colors"
        onClick={() => handleOrder("Email")}
      >
        <FiMail className="text-xl" />
        <span>Email Inquiry</span>
      </motion.a>
    </motion.div>
  );
};

export default OrderButton;