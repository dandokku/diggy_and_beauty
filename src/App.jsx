import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import products from "./data/products.json";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="py-16 bg-bg">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
