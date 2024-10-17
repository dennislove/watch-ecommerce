import React, { useState, useEffect } from 'react';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import HoverCart from '../Model';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [cartItems, setCartItems] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    // Simulated auto-suggestions
    const dummySuggestions = [
      'Product A',
      'Product B',
      'Service X',
      'Category Y'
    ].filter((item) => item.toLowerCase().includes(term.toLowerCase()));
    setSuggestions(dummySuggestions);
  };

  const navigate = useNavigate();

  const toggleLogin = () => {
    if (isLoggedIn === true) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-indigo-600 p-4 shadow-lg ">
      <div
        className="container mx-auto w-full max-w-7xl relative"
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`flex  ${
            isMobile
              ? 'flex-col items-center'
              : 'flex-row items-center justify-between'
          }`}
        >
          <motion.a
            href="/"
            className="text-white text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="https://images.unsplash.com/photo-1613214149922-f1809c99b414?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Logo"
              className="h-10 w-auto inline-block mr-2"
            />
            MyBrand
          </motion.a>

          <div className={`relative ${isMobile ? 'mt-4 w-full' : 'w-1/3'}`}>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full py-2 px-4 rounded-full bg-white bg-opacity-20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Search"
            />
            <motion.button
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Perform search"
            >
              <FaSearch />
            </motion.button>
            {suggestions.length > 0 && (
              <ul className="absolute z-10 bg-white mt-1 w-full rounded-md shadow-lg">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={`flex items-center ${isMobile ? 'mt-4' : ''}`}>
            <motion.button
              className="text-white mr-4"
              onClick={toggleLogin}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isLoggedIn ? <FaUser /> : 'Sign In/Sign Up'}
            </motion.button>

            <motion.div
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                className="text-white"
                aria-label="View cart"
                to="/cart"
                onMouseEnter={() => setIsHovered(true)}
              >
                <FaShoppingCart />
              </Link>
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems}
                </span>
              )}
            </motion.div>
          </div>
        </div>
        {isHovered && <HoverCart />}
        {/* <HoverCart /> */}
      </div>
    </nav>
  );
};

export default Navbar;
