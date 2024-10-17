import React, { useState, useEffect } from 'react';
import { FaTrash, FaHeart, FaShoppingCart, FaCheck } from 'react-icons/fa';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Premium Headphones',
      type: 'Black, Over-ear',
      price: 199.99,
      quantity: 1,
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      selected: false
    },
    {
      id: 2,
      name: 'Wireless Mouse',
      type: 'White, Ergonomic',
      price: 49.99,
      quantity: 2,
      image:
        'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80',
      selected: false
    },
    {
      id: 3,
      name: 'Smart Watch',
      type: 'Silver, 44mm',
      price: 299.99,
      quantity: 1,
      image:
        'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
      selected: false
    }
  ]);

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    if (cartItems.length === 0) {
      setError('Your cart is empty.');
    } else {
      setError('');
    }
  }, [cartItems]);

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: parseInt(newQuantity) || 0 }
          : item
      )
    );
  };

  const handleDelete = (id) => {
    setLoading(true);
    setTimeout(() => {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
      setLoading(false);
    }, 500);
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setCartItems((prevItems) =>
      prevItems.map((item) => ({ ...item, selected: !selectAll }))
    );
  };

  const handleSelectItem = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const handleDeleteSelected = () => {
    setLoading(true);
    setTimeout(() => {
      setCartItems((prevItems) => prevItems.filter((item) => !item.selected));
      setSelectAll(false);
      setLoading(false);
    }, 500);
  };

  const handleSaveToFavorites = () => {
    setLoading(true);
    setTimeout(() => {
      // Simulating saving to favorites
      console.log(
        'Saved to favorites:',
        cartItems.filter((item) => item.selected)
      );
      setLoading(false);
    }, 500);
  };

  const handlePurchase = () => {
    setLoading(true);
    setTimeout(() => {
      // Simulating purchase process
      console.log('Purchase completed:', cartItems);
      setCartItems([]);
      setLoading(false);
    }, 1000);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto container ">
      <div className="  bg-gray-200 rounded-lg shadow-md ">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">
            Your Cart
          </h1>
          {error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
              role="alert"
            >
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center hover:bg-gray-50 -mx-8 px-6 py-5 transition-colors duration-300 ease-in-out"
            >
              <div className="flex items-center h-5 mr-5">
                <input
                  type="checkbox"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  checked={item.selected}
                  onChange={() => handleSelectItem(item.id)}
                  aria-label={`Select ${item.name}`}
                />
              </div>
              <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="ml-4 flex-1 flex flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>{item.name}</h3>
                    <p className="ml-4">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <p className="mt-1 text-sm text-gray-500">{item.type}</p>
                <div className="flex-1 flex items-end justify-between text-sm">
                  <div className="flex items-center">
                    <label
                      htmlFor={`quantity-${item.id}`}
                      className="mr-2 text-gray-500"
                    >
                      Quantity
                    </label>
                    <input
                      type="number"
                      id={`quantity-${item.id}`}
                      className="w-16 pl-5 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                      min="1"
                    />
                  </div>
                  <div className="flex">
                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-300 ease-in-out"
                      onClick={() => handleDelete(item.id)}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded mr-2"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  aria-label="Select all items"
                />
                <span className="text-sm text-gray-600">Select All</span>
              </div>
              <button
                type="button"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-300 ease-in-out"
                onClick={handleDeleteSelected}
                disabled={!cartItems.some((item) => item.selected)}
              >
                Delete Selected
              </button>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300 ease-in-out"
                onClick={handleSaveToFavorites}
                disabled={!cartItems.some((item) => item.selected)}
              >
                <FaHeart className="mr-2" />
                Save to Favorites
              </button>
              <div className="text-xl font-semibold text-gray-900">
                Total: ${totalPrice.toFixed(2)}
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button
              type="button"
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300 ease-in-out"
              onClick={handlePurchase}
              disabled={cartItems.length === 0}
            >
              <FaShoppingCart className="mr-2" />
              Purchase
            </button>
          </div>
        </div>
      </div>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
