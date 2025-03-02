import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartPage from './pages/CartPage';

const products = [
  { name: 'Luxury Wig 1', price: '250', image: '/assets/wig1.jpg' },
  { name: 'Luxury Wig 2', price: '300', image: '/assets/wig2.jpg' },
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
      </div>
      <CartPage />
    </>
  );
}

export default App;
