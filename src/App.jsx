import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Home from "./pages/Home";
import About from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import ProductDetails from "./pages/ProductDetails";
import ContactPage from "./pages/ContactPage";

import { CartProvider } from "./context/CartContext";
import { useState, useEffect } from "react";
import { animateScroll } from "react-scroll";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    animateScroll.scrollToTop({ duration: 1000, smooth: "easeInOutQuad" });
  }, []);

  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Navbar onCartClick={() => setShowCart(!showCart)} />
        {showCart && <Cart onClose={() => setShowCart(false)} />}
        <ScrollToTopButton />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
        
        <ToastContainer />
      </Router>
    </CartProvider>
  );
}

export default App;


