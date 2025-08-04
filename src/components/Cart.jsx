import { motion, AnimatePresence } from "framer-motion";
import { FiTrash2, FiShoppingBag } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import OrderButton from "../components/OrderButton";

const Cart = () => {
  const { cart, removeFromCart, getTotalPrice, clearCart } = useCart();

  return (
    <div className="bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-12"
        >
          Your Shopping Bag
          <span className="text-amber-400 ml-3">🛍️</span>
        </motion.h1>

        <AnimatePresence>
          {cart.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-16"
            >
              <FiShoppingBag className="text-gray-500 text-5xl mb-4" />
              <p className="text-gray-400 text-xl mb-6">Your cart feels lonely</p>
              <motion.a
                href="/products"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-medium shadow-lg transition-colors"
              >
                Browse Products
              </motion.a>
            </motion.div>
          ) : (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                  <AnimatePresence>
                    {cart.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 flex items-center justify-between border border-gray-700/50 shadow-sm"
                      >
                        <div className="flex gap-4 items-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded-lg border border-gray-700"
                          />
                          <div>
                            <h2 className="text-white font-medium">
                              {item.name}
                            </h2>
                            <p className="text-amber-400 font-semibold mt-1">
                              ₦{item.price.toLocaleString()}
                            </p>
                            <p className="text-gray-400 text-sm mt-1">
                              Quantity: {item.quantity}
                            </p>
                          </div>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.1, color: "#f59e0b" }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-amber-500 transition-colors p-2"
                          aria-label="Remove item"
                        >
                          <FiTrash2 size={20} />
                        </motion.button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 h-fit sticky top-28">
                  <h2 className="text-xl font-bold text-white mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-4">
                    <div className="flex justify-between text-gray-300">
                      <span>Subtotal</span>
                      <span>₦{getTotalPrice().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Shipping</span>
                      <span className="text-amber-400">Free</span>
                    </div>
                    <div className="border-t border-gray-700 my-4"></div>
                    <div className="flex justify-between text-white font-bold text-lg">
                      <span>Total</span>
                      <span className="text-amber-400">
                        ₦{getTotalPrice().toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <OrderButton
                      productName={cart.map((item) => item.name).join(", ")}
                      price={getTotalPrice()}
                      phone="+2348104618586"
                      email="jesulobadaniel1@gmail.com"
                      className="w-full"
                    />

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={clearCart}
                      className="w-full bg-transparent text-gray-400 hover:text-amber-500 border border-gray-700 hover:border-amber-500 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      <FiTrash2 size={18} />
                      Clear Cart
                    </motion.button>
                  </div>
                </div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Cart;