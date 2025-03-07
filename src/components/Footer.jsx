import { FiInstagram, FiTwitter, FiFacebook, FiMail } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const navLinks = ["Products", "About", "Contact"];

  return (
    <footer className="bg-[#1a1818] text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left justify-between">
        <div>
          <h3 className="text-[#d7a31a] text-xl font-bold uppercase mb-4">About Us</h3>
          <p>
            Diggy & Beauty is your one-stop store for premium beauty products and accessories.
          </p>
        </div>

        <div>
          <h3 className="text-[#d7a31a] text-xl font-bold uppercase mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {navLinks.map((link, index) => (
              <li key={index} className="hover:text-[#d7a31a] cursor-pointer">
                <HashLink smooth to={`/${link.toLowerCase()}`}>
                  {link}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[#d7a31a] text-xl font-bold uppercase mb-4 text-center">Contact Us</h3>
          <div className="flex justify-center gap-4">
            <FiInstagram size={24} />
            <FiTwitter size={24} />
            <FiFacebook size={24} />
            <FiMail size={24} />
          </div>
        </div>
      </div>
      <div className="border-t border-[#d7a31a] mt-8 pt-6 text-center">
        &copy; {new Date().getFullYear()} Diggy & Beauty | All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
