import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   // Fetch API từ backend
  //   axios
  //     .get('http://localhost:5000/api/data')
  //     .then((response) => {
  //       setProducts(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('There was an error fetching the data!', error);
  //     });
  // }, []);

  const products = [
    {
      id: 1,
      name: 'Smartphone X',
      price: 799.99,
      location: 'New York',
      image:
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 2,
      name: 'Laptop Pro',
      price: 1299.99,
      location: 'San Francisco',
      image:
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'
    },
    {
      id: 3,
      name: 'Wireless Earbuds',
      price: 149.99,
      location: 'Chicago',
      image:
        'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1378&q=80'
    },
    {
      id: 4,
      name: 'Smart Watch',
      price: 299.99,
      location: 'Los Angeles',
      image:
        'https://images.unsplash.com/photo-1544117519-31a4b719223d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
    },
    {
      id: 5,
      name: 'Digital Camera',
      price: 599.99,
      location: 'Miami',
      image:
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1638&q=80'
    },
    {
      id: 6,
      name: 'Gaming Console',
      price: 499.99,
      location: 'Seattle',
      image:
        'https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ];

  const navigate = useNavigate();
  const handleClick = (id) => {
    // console.log(id);
    navigate(`/detail-product/${id}`);
  };
  return (
    <div className="container w-full max-w-7xl mx-auto  py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((product) => (
          <div
            onClick={() => handleClick(product.id)}
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-blue-500"
            tabIndex="0"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-cover"
              aria-label={`Image of ${product.name}`}
            />
            <div className="p-3">
              <h3
                className="text-sm font-semibold mb-1 truncate"
                aria-label={`Product name: ${product.name}`}
              >
                {product.name}
              </h3>
              <p
                className="text-xs text-gray-600 mb-1 flex items-center"
                aria-label={`Price: ${product.price}`}
              >
                <FaDollarSign className="mr-1" />
                {product.price.toFixed(2)}
              </p>
              <p
                className="text-xs text-gray-500 flex items-center truncate"
                aria-label={`Location: ${product.location}`}
              >
                <FaMapMarkerAlt className="mr-1" />
                {product.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
