import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const FaStar = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-11.4 1.7-20.5 10.2-24.3 21.6s-.9 24.3 6.6 32.7L166.3 340.3l-28.7 146.9c-2.7 14.1 2.7 28.5 13.5 37.9s26.8 9.9 36.6 2.7L288.1 423.6l123.4 69.4c9.8 7.2 22.6 7.6 32.4 1.4s16.3-20.4 13.5-34.5l-28.7-146.9L517.6 225.9c8.5-9.4 10.3-23.8 5.4-35.3s-16.1-20.9-28.8-22.6L381.1 150.3 316.9 18z" />
  </svg>
);

const FaRegStar = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
    <path d="M288 340.2L288 84.1c0-10.7-9-19.3-20.2-18.4s-19 9.3-19.8 20.2v256.1l-145.4-86.4c-9.8-7.2-22.6-7.6-32.4-1.4s-16.3 20.4-13.5 34.5l28.7 146.9c2.7 14.1-2.7 28.5-13.5 37.9s-26.8 9.9-36.6 2.7L288 423.6l123.4 69.4c9.8 7.2 22.6 7.6 32.4 1.4s16.3-20.4 13.5-34.5l-28.7-146.9L517.6 225.9c8.5-9.4 10.3-23.8 5.4-35.3s-16.1-20.9-28.8-22.6L381.1 150.3 316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-11.4 1.7-20.5 10.2-24.3 21.6s-.9 24.3 6.6 32.7L166.3 340.3l-28.7 146.9c-2.7 14.1 2.7 28.5 13.5 37.9s26.8 9.9 36.6 2.7L288.1 423.6l123.4 69.4c9.8 7.2 22.6 7.6 32.4 1.4s16.3-20.4 13.5-34.5l-28.7-146.9L517.6 225.9c8.5-9.4 10.3-23.8 5.4-35.3s-16.1-20.9-28.8-22.6L381.1 150.3 316.9 18z" />
  </svg>
);

const FaStarHalfAlt = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
    <path d="M288 0c-12.7 0-23.4 7-28.8 18L195 150.3 51.4 171.5c-11.4 1.7-20.5 10.2-24.3 21.6s-.9 24.3 6.6 32.7L166.3 340.3l-28.7 146.9c-2.7 14.1 2.7 28.5 13.5 37.9s26.8 9.9 36.6 2.7L288.1 423.6l123.4 69.4c9.8 7.2 22.6 7.6 32.4 1.4s16.3-20.4 13.5-34.5l-28.7-146.9L517.6 225.9c8.5-9.4 10.3-23.8 5.4-35.3s-16.1-20.9-28.8-22.6L381.1 150.3 316.9 18C311.6 7 300.4 0 288.1 0z" />
  </svg>
);

const FaMoon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
    <path d="M223.5 32C100 32 0 132.5 0 256S100 480 223.5 480c1.7 0 3.5 0 5.2-.1C401.7 464.6 480 361.3 480 232c0-1.2 0-2.4-.1-3.6c-1.1-133.7-111.9-242.4-245.5-246.3z" />
  </svg>
);

const FaSun = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
    <path d="M361.5 1.2c5 2.1 10.2 3.6 15.6 3.6h.1c11.9 0 23.3-3.6 32.5-10.4C431.1 1.7 448 0 464 0c26.5 0 48 21.5 48 48V80c0 14.1-9.3 26.6-22.9 31c-3.1 1-5.9 2.6-8.5 4.8c-15.5 13.1-34.4 21.3-54.7 24.3-5.2 0-10.4 0-15.6 0-3.1 0-6.2 0-9.3-.1c-4.2-.1-8.5-.2-12.7-.4c-3.2-.2-6.5-.4-9.7-.7c-5.1-.4-10.2-.7-15.3-1c-2.3-.1-4.6-.2-6.9-.3c-11-2.9-22-4.5-33-4.5h-10.6c-4.3 0-8.5.1-12.8.3c-1.3 0-2.6.1-3.9.2c-5.1.2-10.2.4-15.3.7c-3.2.3-6.5.5-9.7.7c-4.2.2-8.5.4-12.7.4c-3.1 0-6.2.1-9.3.1-5.2 0-10.4 0-15.6 0-20.3-3-39.2-11.2-54.7-24.3c-2.6-2.2-5.4-3.8-8.5-4.8C9.3 106.6 0 94.1 0 80V48C0 21.5 21.5 0 48 0c16 0 32.9 1.7 48.9 10.8c9.2 6.8 20.6 10.4 32.5 10.4H145c22.8 0 45-2.6 66.5-7.8c11.2-2.7 22.1-6.1 32.6-10.2c5.9-2.3 11.6-4.9 17.2-7.8c-2.7 1.5-5.5 2.9-8.3 4.3c-21.5 11.2-44.5 19.3-68.5 24.1c-14 2.8-28.1 4.2-42.3 4.2c-15.6 0-31-.4-46.3-1.3c-15.3-.9-30.7-2.7-46.1-5.3c-12.1-2.1-24.1-4.7-35.8-7.9c-2.9-.8-5.7-1.7-8.5-2.6c-6.1-1.9-12.1-3.9-18-6c-6.1-2.1-12.2-4.4-18.1-6.9c-14.8-6.1-29.2-12.9-43.2-20.3C184.8 190 288 340.2 288 448c0 28.5 19.1 52.3 46.8 59.5c1.1.2 2.3.4 3.4.6c2.4.4 4.8.6 7.2.6c19 0 36.3-8.8 47.9-23.7c3.6-4.8 6.5-10.3 8.7-16.1c-4.1-1.8-8.4-3.5-12.8-5.3c-4.4-1.8-8.8-3.6-13.3-5.3c-8.9-3.5-17.7-7.2-26.6-11c-15.4-6.6-30.8-14.2-45.9-22.9c-20.9-12.4-41.5-26.6-61.4-42.5c-15.6-12.2-30.8-25.5-45.5-39.7c-21.2-20.1-41.5-41.2-60.6-63.5c-18.7-22-36.2-45.2-52.6-69.6c-11-16.4-21-33.5-29.7-51.5c-4.5-9.3-8.6-18.8-12.2-28.4c-2.8-7.7-5.1-15.5-7-23.4c-1.8-7.9-3.1-15.9-4.1-23.9c-2.8-22.5-2.8-45.1 0-67.7c1-8 2.3-16 4.1-23.9c1.9-7.9 4.2-15.7 7-23.4c3.6-9.6 7.7-19.1 12.2-28.4c8.7-18 18.7-35.1 29.7-51.5c16.4-24.4 33.9-47.6 52.6-69.6c19.1-22.3 39.4-43.4 60.6-63.5c14.7-14.2 29.9-27.5 45.5-39.7c20-15.9 40.6-30.1 61.4-42.5c15.1-8.7 30.5-16.3 45.9-22.9c8.9-3.5 17.7-7.2 26.6-11c4.4-1.8 8.8-3.6 13.3-5.3c4.4-1.8 8.7-3.6 13.1-5.3c1.9-1.2 3.8-2.4 5.7-3.6z" />
  </svg>
);

// Product data for dynamic rendering (with free Unsplash high-res images)
const products = [
  {
    id: 1,
    name: "Handbag",
    category: "Women",
    price: 32,
    oldPrice: 45,
    rating: 4.5,
    image: "/src/components/img/Handbag.jpg",  // Stylish leather handbag
  },
  {
    id: 2,
    name: "School Bag",
    category: "Women",
    price: 35,
    oldPrice: null,
    rating: 4.5,
    image: "/src/components/img/School Bag.webp",  // Classic school backpack
  },
  {
    id: 3,
    name: "Bag to the Sea",
    category: "Women",
    price: 40,
    oldPrice: null,
    rating: 4.0,
    image: "/src/components/img/Bag to the Sea.webp",  // Straw beach tote on sand
  },
  {
    id: 4,
    name: "Work Bag",
    category: "Women",
    price: 55,
    oldPrice: null,
    rating: 5.0,
    image: "/src/components/img/Work Bag.webp",  // Professional leather briefcase
  },
  {
    id: 5,
    name: "Local Bag",
    category: "Women",
    price: 25,
    oldPrice: null,
    rating: 3.5,
    image: "/src/components/img/Local Bag.jpg",  // Reusable cloth shopping tote
  },
  {
    id: 6,
    name: "Event Bag",
    category: "Women",
    price: 75,
    oldPrice: 90,
    rating: 4.0,
    image: "/src/components/img/Event Bag.webp",  // Branded tote with accessories
  },
  {
    id: 7,
    name: "Hiking Bag",
    category: "Women",
    price: 85,
    oldPrice: null,
    rating: 5.0,
    image: "/src/components/img/Hiking Bag.jpg",  // Women's hiking backpack on trail
  },
];

// Generates an array of star icons based on the rating number
const getStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="text-amber-500 fa-xs" />);
  }
  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-amber-500 fa-xs" />);
  }
  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-400 fa-xs" />);
  }
  return stars;
};

function Women() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Load dark mode from localStorage on mount
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newDarkMode = !prev;
      localStorage.setItem('darkMode', newDarkMode);
      if (newDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newDarkMode;
    });
  };

  return (
    <div className="women-layout bg-fuchsia-100 ">
      <h1 className="text-4xl text-center text-blue-700 mb-8 dark:text-blue-300 bg-fuchsia-100 max-w-screen-xl mx-auto">Women's Collection</h1>
      <main className="max-w-screen-xl mx-auto p-6 ">
        <Outlet /> {/* Child content renders here */}
      </main>
      <div className={`font-sans ${darkMode ? 'dark bg-gray-900' : 'bg-fuchsia-100'}`}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          body { font-family: 'Inter', sans-serif; }
          .dark-mode-toggle-button {
            position: fixed; top: 20px; right: 20px; z-index: 1000; cursor: pointer; padding: 10px;
            background-color: ${darkMode ? '#374151' : '#f3f4f6'}; color: ${darkMode ? '#d1d5db' : '#1f2937'};
            border-radius: 9999px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: all 0.3s ease;
          }
          .dark-mode-toggle-button:hover { transform: scale(1.1); }
          .product-card { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); transition: transform 0.3s ease, box-shadow 0.3s ease; }
          .product-card:hover { transform: translateY(-5px); box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1); }
          .add-to-cart-btn { transition: background-color 0.3s ease, color 0.3s ease; }
          body::-webkit-scrollbar { width: 8px; }
          body::-webkit-scrollbar-track { background: #f1f1f1; }
          body::-webkit-scrollbar-thumb { background: #888; border-radius: 4px; }
          body::-webkit-scrollbar-thumb:hover { background: #555; }
          .dark body::-webkit-scrollbar-track { background: #1f2937; }
          .dark body::-webkit-scrollbar-thumb { background: #4b5563; }
          .dark body::-webkit-scrollbar-thumb:hover { background: #6b7280; }
        `}</style>

        {/* Dark Mode Toggle Button */}
        <button onClick={toggleDarkMode} className="dark-mode-toggle-button">
          {darkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
        </button>

        {/* Main Section */}
        <main className="container max-w-screen-xl mx-auto px-4 md:px-8 py-12 lg:flex lg:gap-12">
          {/* Sidebar */}
          <aside className="lg:w-1/4 mb-10 lg:mb-0">
            <div className="bg-p border border-gray-200 rounded-2xl p-6 space-y-8 dark:bg-gray-800 dark:border-gray-700 shadow-lg">
              {/* Filter by Price */}
              <div>
                <h3 className="font-semibold text-xl mb-4 text-gray-900 dark:text-gray-200 border-l-4 border-blue-500 pl-4">Filter by Price</h3>
                <div className="mb-4">
                  <div className="relative h-2 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="absolute h-2 bg-blue-500 rounded-full" style={{ left: '10%', width: '80%' }}></div>
                    <div className="absolute w-5 h-5 bg-blue-500 rounded-full border-2 border-white shadow-lg -mt-1.5 -ml-1.5 dark:border-gray-800" style={{ left: '10%' }}></div>
                    <div className="absolute w-5 h-5 bg-blue-500 rounded-full border-2 border-white shadow-lg -mt-1.5 -ml-1.5 dark:border-gray-800" style={{ left: '90%' }}></div>
                  </div>
                  <div className="flex justify-between mt-3 text-sm text-gray-600 dark:text-gray-400">
                    <span>Price: $20 — $500</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200">
                  Filter
                </button>
              </div>

              {/* Average Rating */}
              <div>
                <h3 className="font-semibold text-xl mb-4 text-gray-900 dark:text-gray-200 border-l-4 border-blue-500 pl-4">Average Rating</h3>
                <div className="space-y-3">
                  {[5, 4, 3].map((rating, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex">{getStars(rating)}</div>
                      <span className="text-gray-500 text-sm dark:text-gray-400">({rating} stars)</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Products */}
              <div>
                <h3 className="font-semibold text-xl mb-4 text-gray-900 dark:text-gray-200 border-l-4 border-blue-500 pl-4">Other Products</h3>
                <div className="space-y-4">
                  {products.slice(0, 2).map((product) => (
                    <div key={product.id} className="flex items-center space-x-4">
                      <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-lg shadow-md" />
                      <div className="flex-1">
                        <h4 className="font-medium text-base mb-1 text-gray-900 dark:text-gray-200">{product.name}</h4>
                        <div className="flex mb-2 text-sm space-x-1">{getStars(product.rating)}</div>
                        <div className="flex items-center space-x-2 mt-1">
                          {product.oldPrice && <span className="text-gray-500 line-through text-xs dark:text-gray-400">${product.oldPrice}</span>}
                          <span className="font-semibold text-lg text-gray-900 dark:text-gray-200">${product.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Shop Section */}
          <section className="lg:w-3/4">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <h1 className="font-bold text-3xl mb-4 md:mb-0 text-gray-900 dark:text-gray-200">Women's Bags</h1>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <span className="text-gray-600 dark:text-gray-400">Showing all {products.length} results</span>
                <div className="relative">
                  <select className="px-5 py-2 text-gray-600 rounded-full ring-1 ring-gray-300 focus:ring-1 focus:ring-blue-500 focus:outline-none appearance-none bg-white cursor-pointer dark:bg-gray-700 dark:text-gray-300 dark:ring-gray-700">
                    <option value="default">Default</option>
                    <option value="price-low-high">Price: Low to High</option>
                    <option value="price-high-low">Price: High to Low</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Cards Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl overflow-hidden product-card dark:bg-gray-800 shadow-lg">
                  <div className="relative p-4 aspect-w-4 aspect-h-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full max-w-full max-h-64 object-cover rounded-xl"
                    />
                    <span className="absolute top-4 right-4 bg-blue-600 text-white font-bold text-lg px-4 py-2 rounded-full shadow-lg">
                      ${product.price}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200">{product.name}</h2>
                      <div className="flex text-sm space-x-1">{getStars(product.rating)}</div>
                    </div>
                    <p className="text-gray-500 text-sm dark:text-gray-400 mb-4">{product.category}</p>
                    <button className="w-full add-to-cart-btn bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200 dark:text-gray-900">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer>
          <section className="bg-white py-6 border-b border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-10 px-4">
              <a href="#" className="text-gray-700 dark:text-gray-200 text-base font-bold whitespace-nowrap px-4 py-2 hover:bg-blue-600 hover:text-white rounded-full transition-all duration-200 ease-in-out">Track Your Order</a>
              <a href="#" className="text-gray-700 dark:text-gray-200 text-base font-bold whitespace-nowrap px-4 py-2 hover:bg-blue-600 hover:text-white rounded-full transition-all duration-200 ease-in-out">About Us</a>
              <a href="#" className="text-gray-700 dark:text-gray-200 text-base font-bold whitespace-nowrap px-4 py-2 hover:bg-blue-600 hover:text-white rounded-full transition-all duration-200 ease-in-out">Contact Us</a>
            </div>
          </section>
          <section className="bg-white dark:bg-gray-900 py-6">
            <p className="max-w-screen-xl mx-auto text-center text-gray-500 text-base">Copyright © 2025 DecorSolutions. All Rights Reserved</p>
          </section>
        </footer>
      </div>
    </div>
  );
}

export default Women;