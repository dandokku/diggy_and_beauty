import { useState } from 'react';
import SubscriptionModal from './SubscriptionModal';

const Hero = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="relative h-screen bg-[url('/assets/hero.jpg')] bg-cover bg-center">
      {showModal && <SubscriptionModal setShowModal={setShowModal} />}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold mb-4 animate-fade">Luxury Wigs & Accessories</h1>
        <p className="text-lg max-w-md text-center animate-slideUp">
          Discover premium quality wigs tailored to your unique beauty.
        </p>
        <button className="mt-6 animate-pulse">Shop Now</button>
      </div>
    </div>
  );
};

export default Hero;
