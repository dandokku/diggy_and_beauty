import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import ContactPage from "./pages/ContactPage";


import { useState, useEffect } from "react";
import { animateScroll } from "react-scroll";

function App() {
  useEffect(() => {
    animateScroll.scrollToTop({ duration: 1000, smooth: "easeInOutQuad" });
  }, []);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleRemoveFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  return (
    <Router>
      {/* Navbar */}
      <Navbar
        cart={cart}
        cartCount={cart.length}
        onCartClick={() => setShowCart(!showCart)}
      />

      {/* Cart Sidebar */}
      {showCart && <Cart cart={cart} onRemove={handleRemoveFromCart} />}

      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
      <ScrollToTop />
    </Router>
  );
}

export default App;
