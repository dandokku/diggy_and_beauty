import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Modal from "./components/Modal";
import products from "./data/products.json";
import Cart from "./components/Cart";
import Instagram from "./components/Instagram";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";

import { useState } from "react";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "auto";
  };

  const handleAddToCart = () => {
    setCart([...cart, selectedProduct]);
    handleCloseModal();
    alert(`✅ ${selectedProduct.name} added to cart!`);
  };

  const handleRemoveFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  return (
    <div>
          <Loader />
      <Navbar cartCount={cart.length} onCartClick={() => setShowCart(!showCart)} />
      <Hero />

      <section className="py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} onClick={() => handleOpenModal(product)} />
          ))}
        </div>
      </section>

      {selectedProduct && (
        <Modal product={selectedProduct} onClose={handleCloseModal} onAddToCart={handleAddToCart} />
      )}

      {showCart && <Cart cart={cart} onRemove={handleRemoveFromCart} />}
      <Instagram />
      <Contact />
      <Footer />

      <ScrollToTop />
    </div>
  );
}

export default App;