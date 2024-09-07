import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Icons for social media

const Footer = () => {
  return (
    <footer className="w-full bg-[#012e4a] text-white py-10">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Information */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">Seascapes Accommodations</h3>
          <p className="text-sm text-gray-300">
            Offering serene accommodations along the Overberg coast, perfect for
            those seeking relaxation and adventure in equal measure.
          </p>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:underline text-sm text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline text-sm text-gray-300">
                Our Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline text-sm text-gray-300">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/deals" className="hover:underline text-sm text-gray-300">
                Deals and Specials
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
          <form>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 mb-2 rounded bg-gray-800 text-white focus:outline-none"
            />
            <button className="w-full bg-primary text-white py-2 rounded hover:bg-primary-hover transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="container mx-auto mt-8 px-8 text-center text-sm text-gray-400">
        <p>&copy; 2024 Seascapes Accommodations. All rights reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;
