import { FiPhone, FiMail, FiInstagram } from "react-icons/fi";
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";

const ContactPage = () => {
  return (
    <section id="contact" className="py-20 mt-16 bg-[#1a1818] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#d7a31a] mb-10 uppercase glitter-text">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl mb-6 text-accent">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <FiPhone className="text-[#d7a31a]" size={24} />
                <span>+234 801 234 5678</span>
              </li>
              <li className="flex items-center gap-4">
                <FiMail className="text-[#d7a31a]" size={24} />
                <span>info@diggyandbeauty.com</span>
              </li>
              <li className="flex items-center gap-4">
                <FiInstagram className="text-[#d7a31a]" size={24} />
                <span>@diggyandbeauty</span>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>

        {/* Map */}
        <div className="mt-16">
          {/* <Map /> */}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
