import { useCart } from "../context/CartContext";
import { FiTrash } from "react-icons/fi";
import OrderButton from "../components/OrderButton";

const Cart = () => {
  const { cart, removeFromCart, getTotalPrice, clearCart } = useCart();

  return (
    <div className="bg-lightbg min-h-screen pt-24">
      <div className="container mx-auto p-10">
        <h1 className="text-4xl font-bold glitter-text mb-10 text-center">
          Your Cart 🛒
        </h1>

        {cart.length === 0 ? (
          <p className="text-white text-lg text-center">
            Your cart is empty 😢
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-lg flex items-center justify-between shadow-lg"
                >
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h2 className="text-text text-lg font-bold">
                        {item.name}
                      </h2>
                      <p className="text-primary">₦{item.price}</p>
                      <p className="text-sm">Quantity: {item.quantity}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-bg hover:text-primary transition"
                  >
                    <FiTrash size={24} />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-primary text-2xl mb-6">
                Total: ₦{getTotalPrice()}
              </p>

              <OrderButton
                productName={cart.map((item) => item.name).join(", ")}
                price={getTotalPrice()}
                phone="+2348104618586"
                email="jesulobadaniel1@gmail.com"
              />

              <button
                onClick={clearCart}
                className="mt-6 bg-text text-white px-8 py-3 rounded-lg hover:bg-primary transition"
              >
                Clear Cart 🗑️
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
