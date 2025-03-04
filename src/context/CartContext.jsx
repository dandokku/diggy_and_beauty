import { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";

// Create Cart Context
const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
  // Retrieve Cart from Local Storage on Initial Load
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("diggy_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Update Local Storage Whenever Cart Changes
  useEffect(() => {
    localStorage.setItem("diggy_cart", JSON.stringify(cart));
  }, [cart]);

  // Add to Cart Function
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );

      toast.success(`${product.name} added to cart ✅`, {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });

      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove from Cart by Index
  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
    toast.info("Item removed from cart 🚫", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Clear Cart
  const clearCart = () => {
    setCart([]);
  };

  // Total Price Calculation
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        clearCart,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook to Use Cart Context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
