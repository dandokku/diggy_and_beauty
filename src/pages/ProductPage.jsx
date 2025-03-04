import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  return (
    <div className="bg-lightbg min-h-screen pt-24 mt-16">
      <div className="container mx-auto p-10">
        <h1 className="text-4xl font-bold text-center text-primary mb-10 glitter-text">
          Our Products
        </h1>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {products.map((product) => (
            <div key={product.id} className="break-inside-avoid">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
