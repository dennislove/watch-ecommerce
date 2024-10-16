import React, { useState, useRef, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const categories = [
  { id: 1, name: 'Technology', icon: '💻' },
  { id: 2, name: 'Fashion', icon: '👗' },
  { id: 3, name: 'Food', icon: '🍔' },
  { id: 4, name: 'Travel', icon: '✈️' },
  { id: 5, name: 'Sports', icon: '⚽' },
  { id: 6, name: 'Music', icon: '🎵' },
  { id: 7, name: 'Art', icon: '🎨' },
  { id: 8, name: 'Health', icon: '💪' },
  { id: 9, name: 'Education', icon: '📚' },
  { id: 10, name: 'Finance', icon: '💰' }
];

const CategorySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCategories, setVisibleCategories] = useState(6);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCategories(2);
      } else if (window.innerWidth < 768) {
        setVisibleCategories(3);
      } else if (window.innerWidth < 1024) {
        setVisibleCategories(4);
      } else if (window.innerWidth < 1280) {
        setVisibleCategories(5);
      } else {
        setVisibleCategories(6);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - visibleCategories : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === categories.length - visibleCategories ? 0 : prevIndex + 1
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  return (
    <div
      className="relative w-full max-w-7xl mx-auto mt-20 p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg"
      aria-label="Category Slider"
    >
      <div
        ref={sliderRef}
        className="overflow-hidden"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <motion.div
          className="flex transition-transform duration-300 ease-in-out"
          initial={false}
          animate={{ x: `-${currentIndex * (100 / visibleCategories)}%` }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              className={`flex-shrink-0 w-1/${visibleCategories} p-2`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                className="w-40 h-36 px-10 bg-white rounded-lg shadow-md flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label={`${category.name} category`}
              >
                <span className="text-3xl mb-2">{category.icon}</span>
                <span className="text-base font-semibold text-gray-800">
                  {category.name}
                </span>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        onClick={handlePrev}
        aria-label="Previous category"
      >
        <FaArrowLeft className="text-purple-500" />
      </button>

      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        onClick={handleNext}
        aria-label="Next category"
      >
        <FaArrowRight className="text-purple-500" />
      </button>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({
          length: Math.ceil(categories.length / visibleCategories)
        }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full focus:outline-none ${
              Math.floor(currentIndex / visibleCategories) === index
                ? 'bg-white'
                : 'bg-white bg-opacity-50'
            }`}
            onClick={() => setCurrentIndex(index * visibleCategories)}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySlider;
