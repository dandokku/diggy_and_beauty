import { FiMail, FiMessageCircle } from "react-icons/fi";
import { toast } from "react-toastify";

const OrderButton = ({ productName, price, phone, email }) => {
  const whatsappMessage = `Hello Diggy & Beauty 💄✨, I'm interested in buying *${productName}* for ₦${price}. Is it still available?`;
  const emailSubject = `Order Inquiry for ${productName}`;

  const handleOrder = (platform) => {
    toast.success(`Order sent via ${platform} ✅`, {
      position: "top-right",
      autoClose: 3000,
      theme: "dark",
    });
  };

  return (
    <div className="flex gap-4">
      <a
        href={`https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-accent transition"
        onClick={() => handleOrder("WhatsApp")}
      >
        <FiMessageCircle /> Order via WhatsApp
      </a>

      <a
        href={`mailto:${email}?subject=${emailSubject}`}
        className="bg-white text-bg px-6 py-3 rounded-md flex items-center gap-2 hover:bg-primary transition"
        onClick={() => handleOrder("Email")}
      >
        <FiMail /> Order via Email
      </a>
    </div>
  );
};

export default OrderButton;
