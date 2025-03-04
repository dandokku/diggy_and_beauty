import { useCart } from "../context/CartContext";
import { FiTrash } from "react-icons/fi";
import OrderButton from "../components/OrderButton";

const Cart = () => {
  const { cart, removeFromCart, totalPrice, clearCart } = useCart();

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
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div>
                      <h2 className="text-text text-lg font-bold">
                        {item.name}
                      </h2>
                      <p className="text-primary text-md">₦{item.price}</p>
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
                Total: ₦{totalPrice}
              </p>

              <OrderButton
                productName={cart.map((item) => item.name).join(", ")}
                price={totalPrice}
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
