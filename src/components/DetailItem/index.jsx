import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';

const ProductDetailPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch API từ backend
    axios
      .get('http://localhost:5000/api/data')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  const [mainImage, setMainImage] = useState(
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  );
  const [quantity, setQuantity] = useState(1);

  const productImages = [
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  ];

  const handleQuantityChange = (action) => {
    if (action === 'increase') {
      setQuantity((prev) => prev + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="container w-max max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl">
            <img
              src={mainImage}
              alt="Main product image"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => handleImageClick(image)}
                className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <img
                  src={image}
                  alt={`Product variation ${index + 1}`}
                  className="h-full w-full object-cover object-center"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">Luxury Watch</h1>
          <p className="text-2xl font-semibold text-indigo-600">$999.99</p>

          <div>
            <label
              htmlFor="color"
              className="block text-sm font-medium text-gray-700"
            >
              Color
            </label>
            <select
              id="color"
              name="color"
              className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option>Silver</option>
              <option>Gold</option>
              <option>Rose Gold</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="size"
              className="block text-sm font-medium text-gray-700"
            >
              Size
            </label>
            <select
              id="size"
              name="size"
              className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option>38mm</option>
              <option>42mm</option>
              <option>46mm</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700"
            >
              Quantity
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <button
                onClick={() => handleQuantityChange('decrease')}
                className="rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                <FaMinus />
              </button>
              <input
                type="number"
                name="quantity"
                id="quantity"
                className="block w-full min-w-0 flex-1 rounded-none border-gray-300 px-3 py-2 text-center focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={quantity}
                readOnly
              />
              <button
                onClick={() => handleQuantityChange('increase')}
                className="rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                <FaPlus />
              </button>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              className="flex-1 flex justify-around items-center rounded-md border border-transparent bg-indigo-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
            >
              Add to Cart
              <FaShoppingCart />
            </button>
            <button
              type="button"
              className="flex-1 rounded-md border border-transparent bg-green-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200"
            >
              Buy Now
            </button>
          </div>

          <div className="mt-6 border-t border-gray-200 pt-6">
            <h3 className="text-lg font-medium text-gray-900">
              Product Description
            </h3>
            <div className="mt-4 prose prose-sm text-gray-500">
              <p>
                This luxurious watch combines elegance with functionality.
                Featuring a sleek design and precision movement, it's perfect
                for both formal occasions and everyday wear. The watch face is
                protected by scratch-resistant sapphire crystal, ensuring
                long-lasting clarity and durability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
