import { FiInstagram, FiTwitter, FiFacebook, FiMail } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-[#1a1818] text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section */}
        <div>
          <h3 className="text-primary text-xl font-bold uppercase mb-4">About Us</h3>
          <p className="text-sm leading-6">
            Diggy & Beauty is your one-stop store for premium beauty products and accessories.
            Join our community and redefine beauty.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-primary text-xl font-bold uppercase mb-4">Quick Links</h3>
          <ul className="space-y-3">
  {["Home", "Shop", "About", "Contact"].map((link, index) => (
    <li key={index} className="hover:text-primary cursor-pointer transition duration-300">
      <ScrollLink
        to={link.toLowerCase()}
        smooth={true}
        duration={800}
        offset={-100}
        spy={true}
      >
        {link}
      </ScrollLink>
    </li>
  ))}
</ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-primary text-xl font-bold uppercase mb-4">Contact Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <FiInstagram className="cursor-pointer hover:text-primary transition" size={24} />
            <FiTwitter className="cursor-pointer hover:text-primary transition" size={24} />
            <FiFacebook className="cursor-pointer hover:text-primary transition" size={24} />
            <FiMail className="cursor-pointer hover:text-primary transition" size={24} />
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-primary mt-8 pt-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Diggy & Beauty | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
