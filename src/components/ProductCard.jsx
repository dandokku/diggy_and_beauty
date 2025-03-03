import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition">
        <img src={product.image} alt={product.name} className="w-full h-96 object-center" />
        <div className="p-6">
          <h2 className="text-text text-lg font-bold">{product.name}</h2>
          <p className="text-primary text-lg mt-2">₦{product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
