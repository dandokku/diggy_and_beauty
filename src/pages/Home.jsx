import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";
import Instagram from "../components/Instagram";
import Contact from "../components/Contact";
// import products from "../data/products.json";
import { useState } from "react";

const Home = ({ cart, setCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // const handleOpenModal = (product) => {
  //   setSelectedProduct(product);
  //   document.body.style.overflow = "hidden";
  // };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "auto";
  };

  // const handleAddToCart = () => {
  //   setCart([...cart, selectedProduct]);
  //   handleCloseModal();
  //   alert(`✅ ${selectedProduct.name} added to cart!`);
  // };

  return (
    <>
      <Hero />

      {/* Product Section */}
      {/* <section className="py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onClick={() => handleOpenModal(product)}
            />
          ))}
        </div>
      </section> */}

      {/* {selectedProduct && (
        <Modal
          product={selectedProduct}
          onClose={handleCloseModal}
          onAddToCart={handleAddToCart}
        />
      )} */}

      
    </>
  );
};

export default Home;
