import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-10 bg-bg">
      <h1 className="text-3xl font-bold text-primary">LuxuryWigs</h1>
      <div className="cursor-pointer">
        <FaShoppingCart size={24} />
      </div>
    </nav>
  );
};

export default Navbar;
