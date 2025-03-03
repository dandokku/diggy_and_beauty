import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartPage from './pages/CartPage';
import "../src/App.css"

const products = [
  { name: 'Luxury Wig 1', price: '250', image: '/assets/react.svg' },
  { name: 'Luxury Wig 2', price: '300', image: '/assets/react.svg' },
];

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
        {products.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
        <div className="bg-primary text-white bg-yellow-500 text-3xl p-10 text-center">
  Tailwind is Finally Working! 🎯🔥
</div>

      </div>
      <CartPage />
    </>
  );
}

export default App;
