import { useCart } from "../context/CartContext";
import { FiTrash2 } from "react-icons/fi";

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="flex justify-between items-center mb-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded"
      />
      <div>
        <h3 className="text-[#212121]">{item.name}</h3>
        <p className="text-[#d7a31a]">₦{item.price}</p>
      </div>
      <FiTrash2
        size={20}
        className="cursor-pointer text-red-600"
        onClick={() => removeFromCart(item.id)}
      />
    </div>
  );
};

export default CartItem;
