import { FiTrash2 } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";

const Cart = ({ cart, onRemove }) => {
  const [boyfriendMoney, setBoyfriendMoney] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const sendOrder = () => {
    let message = `Hello Diggy & Beauty 💅🏽✨, I want to order:\n\n`;
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - ₦${item.price.toLocaleString()}\n`;
    });
    message += `\nTotal: ₦${total.toLocaleString()}\n`;

    if (boyfriendMoney) {
      message += `\nP.S. It's not my money, please deliver fast fast 🚗💨`;
    }

    const whatsappLink = `https://wa.me/2348104618586?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="bg-lightbg p-8 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold glitter-text text-white mb-6 text-center">
        Your Cart 💅🏽
      </h2>

      {cart.length === 0 ? (
        <p className="text-accent text-center">
          No items yet... Soft Life is still loading 😌✨
        </p>
      ) : (
        <>
          {cart.map((item, index) => (
            <motion.div
              key={index}
              className="flex justify-between items-center mb-4 border-b border-accent pb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="text-white">{item.name}</p>
              <span className="text-primary">₦{item.price.toLocaleString()}</span>
              <FiTrash2
                className="cursor-pointer hover:text-red-500 transition duration-300"
                onClick={() => onRemove(index)}
              />
            </motion.div>
          ))}

          <div className="mt-6">
            <motion.label
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <input
                type="checkbox"
                className="cursor-pointer accent-primary"
                onChange={() => setBoyfriendMoney(!boyfriendMoney)}
              />
              <span className="text-accent">
                I'm Buying with My Boyfriend's Money 💸💅🏽
              </span>
            </motion.label>
          </div>

          <div className="mt-6">
            <p className="text-xl font-bold text-primary">
              Total: ₦{total.toLocaleString()}
            </p>
            <motion.button
              onClick={sendOrder}
              whileTap={{
                scale: 0.9,
                rotate: [0, -5, 5, -5, 0],
                transition: { type: "spring", stiffness: 500, damping: 10 }
              }}
              className="mt-4 bg-primary text-bg px-6 py-3 rounded-lg uppercase font-bold tracking-wide cursor-pointer hover:bg-accent transition"
            >
              Checkout on WhatsApp
            </motion.button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
