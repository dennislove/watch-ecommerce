import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValidEmail(validateEmail(inputEmail));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail) {
      console.log('Subscribed with email:', email);
      setEmail('');
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                  aria-label="New Arrivals"
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                  aria-label="Best Sellers"
                >
                  Best Sellers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                  aria-label="Sale Items"
                >
                  Sale Items
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                  aria-label="Gift Cards"
                >
                  Gift Cards
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                  aria-label="Clearance"
                >
                  Clearance
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                  aria-label="About Us"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                  aria-label="Careers"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                  aria-label="Press"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                  aria-label="Affiliates"
                >
                  Affiliates
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                  aria-label="Sustainability"
                >
                  Sustainability
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                  aria-label="Contact Us"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                  aria-label="FAQs"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                  aria-label="Shipping"
                >
                  Shipping
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                  aria-label="Returns"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                  aria-label="Size Guide"
                >
                  Size Guide
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    className={`w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 ${
                      isValidEmail
                        ? 'focus:ring-blue-500'
                        : 'focus:ring-red-500'
                    }`}
                    placeholder="Enter your email"
                    aria-label="Email address"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <IoMdMail
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                {!isValidEmail && (
                  <p className="mt-2 text-sm text-red-500">
                    Please enter a valid email address.
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img
                src="images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                alt="Company Logo"
                className="h-8 w-auto"
              />
              <p className="text-sm">
                &copy; 2024 Your Company. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <ul className="flex flex-wrap justify-center space-x-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                  aria-label="Privacy Policy"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                  aria-label="Terms of Service"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                  aria-label="Cookie Policy"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
