import React from 'react';

const HoverCart = () => {
  const product = [
    {
      name: 'Premium Wireless Headphones',
      price: '$199.99',
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      name: 'Premium Wireless Headphones clasclanxkzcocs',
      price: '$199.99',
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ];

  return (
    <div className=" absolute -right-5 mt-1 w-[30%] bg-white rounded-lg shadow-xl border border-gray-200 ">
      <div className=" bg-white w-5 h-5 rotate-45 absolute right-4 -top-2"></div>
      <div className="p-4">
        {product.map((item, index) => (
          <div
            className="flex items-center justify-between space-x-4 mt-4"
            key={index}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-md object-cover"
            />

            <h3 className="font-semibold text-gray-800 truncate ">
              {item.name}
            </h3>
            <p className="text-gray-800">{item.price}</p>
          </div>
        ))}

        <button
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          onClick={() => console.log('View Cart clicked')}
        >
          View Cart
        </button>
      </div>
    </div>
  );
};

export default HoverCart;
