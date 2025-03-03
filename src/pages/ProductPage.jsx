import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  return (
    <div className="bg-lightbg min-h-screen pt-24 mt-16">
      <div className="container mx-auto p-10">
        <h1 className="text-4xl font-bold text-center text-primary mb-10">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
