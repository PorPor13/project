import React, { useState, useEffect } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

// Star icons with correct Font Awesome SVG paths
const FaStar = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-11.4 1.7-20.5 10.2-24.3 21.6s-.9 24.3 6.6 32.7L166.3 340.3l-28.7 146.9c-2.7 14.1 2.7 28.5 13.5 37.9s26.8 9.9 36.6 2.7L288 423.6l123.4 69.4c9.8 7.2 22.6 7.6 32.4 1.4s16.3-20.4 13.5-34.5l-28.7-146.9L517.6 225.9c8.5-9.4 10.3-23.8 5.4-35.3s-16.1-20.9-28.8-22.6L381.1 150.3 316.9 18z"/>
  </svg>
);

const FaRegStar = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 508.7c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12-18.1 13.3L106 217.9 184.5 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.5 324.1c-1.3-7.7 1.2-15.5 6.8-21l78.5-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/>
  </svg>
);

const FaStarHalfAlt = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
    <path d="M288 0c-9.2 0-17.6 5.2-21.6 13.5L197.7 154.8 44.5 177.5c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5L142.2 328.4 116 484c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2V79L288 0zm0 79L340.5 187.2c3.5 7.1 10.2 12 18.1 13.3L469.8 217.9 391.3 303c-5.5 5.5-8.1 13.3-6.8 21L404.4 443.7l-105.2-56.2c-7.1-3.8-15.6-3.8-22.6 0l-105.2 56.2L191.5 324.1c1.3-7.7-1.2-15.5-6.8-21l-78.5-85.1L217.4 200.5c7.8-1.2 14.6-6.1 18.1-13.3L288 79z"/>
  </svg>
);

const FaMoon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
    <path d="M223.5 32C100 32 0 132.5 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5C239.7 32.2 231.8 32 223.5 32z"/>
  </svg>
);

const FaSun = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
    <path d="M256 159.1c-53 0-96 43-96 96s43 96 96 96s96-43 96-96s-43-96-96-96zm149.7 85.1l52.1-52.1c8.6-8.6 8.6-22.6 0-31.2s-22.6-8.6-31.2 0L374.5 213c-8.5-5.9-17.7-10.7-27.3-14.3l20.5-61.5c3.8-11.3-2.9-23.5-14.3-27.3s-23.5 2.9-27.3 14.3L305.5 185c-10-1.2-20.3-1.9-30.8-1.9h-37.5c-10.5 0-20.8 .7-30.8 1.9l-20.5-61.5c-3.8-11.3-15.9-18-27.3-14.3s-18 15.9-14.3 27.3l20.5 61.5c-9.6 3.6-18.8 8.4-27.3 14.3l-52.1-52.1c-8.6-8.6-22.6-8.6-31.2 0s-8.6 22.6 0 31.2l52.1 52.1c-5.9 8.5-10.7 17.7-14.3 27.3l-61.5-20.5c-11.3-3.8-23.5 2.9-27.3 14.3s2.9 23.5 14.3 27.3l61.5 20.5c-1.2 10-1.9 20.3-1.9 30.8v37.5c0 10.5 .7 20.8 1.9 30.8l-61.5 20.5c-11.3 3.8-18 15.9-14.3 27.3s15.9 18 27.3 14.3l61.5-20.5c3.6 9.6 8.4 18.8 14.3 27.3l-52.1 52.1c-8.6 8.6-8.6 22.6 0 31.2s22.6 8.6 31.2 0l52.1-52.1c8.5 5.9 17.7 10.7 27.3 14.3l-20.5 61.5c-3.8 11.3 2.9 23.5 14.3 27.3s23.5-2.9 27.3-14.3l20.5-61.5c10 1.2 20.3 1.9 30.8 1.9h37.5c10.5 0 20.8-.7 30.8-1.9l20.5 61.5c3.8 11.3 15.9 18 27.3 14.3s18-15.9 14.3-27.3l-20.5-61.5c9.6-3.6 18.8-8.4 27.3-14.3l52.1 52.1c8.6 8.6 22.6 8.6 31.2 0s8.6-22.6 0-31.2l-52.1-52.1c5.9-8.5 10.7-17.7 14.3-27.3l61.5 20.5c11.3 3.8 23.5-2.9 27.3-14.3s-2.9-23.5-14.3-27.3l-61.5-20.5c1.2-10 1.9-20.3 1.9-30.8v-37.5c0-10.5-.7-20.8-1.9-30.8l61.5-20.5c11.3-3.8 18-15.9 14.3-27.3s-15.9-18-27.3-14.3l-61.5 20.5c-3.6-9.6-8.4-18.8-14.3-27.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"/>
  </svg>
);

// Product data
const products = [
  {
    id: 1,
    name: "Sporty Sling Bag",
    category: "Men",
    price: 45,
    oldPrice: 55,
    rating: 4.5,
    image: "/src/components/img/Sporty Sling Bag.avif",
  },
  {
    id: 2,
    name: "Practical Messenger Bag",
    category: "Men",
    price: 60,
    oldPrice: null,
    rating: 4.8,
    image: "/src/components/img/Practical Messenger Bag.jpg",
  },
  {
    id: 3,
    name: "Convenient Tote Bag",
    category: "Men",
    price: 35,
    oldPrice: 40,
    rating: 4.2,
    image: "/src/components/img/Convenient Tote Bag.jpg",
  },
  {
    id: 4,
    name: "Boxy Crossbody Bag",
    category: "Men",
    price: 50,
    oldPrice: null,
    rating: 4.7,
    image: "/src/components/img/Boxy Crossbody Bag.webp",
  },
];

// Generates star icons based on rating
const getStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="text-amber-500 w-4 h-4" />);
  }
  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-amber-500 w-4 h-4" />);
  }
  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-400 w-4 h-4" />);
  }
  return stars;
};

function Men() {
  const [darkMode, setDarkMode] = useState(false);
  const [priceRange, setPriceRange] = useState([20, 500]);

  useEffect(() => {
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

  const handlePriceFilter = () => {
    console.log(`Filtering products between $${priceRange[0]} and $${priceRange[1]}`);
  };

  return (
    <div className={`font-sans ${darkMode ? 'dark bg-gradient-to-r from-orange-200 via-pink-200 to-purple-200' : 'bg-fuchsia-100'} min-h-screen`}>
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

      <main className="max-w-screen-xl mx-auto p-6">
        <h1 className="text-5xl text-center text-blue-700 mb-8 font-bold">Men's Collection</h1>
        <Outlet />

        <button
          onClick={toggleDarkMode}
          className="dark-mode-toggle-button"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
        </button>

        <section className="container mx-auto px-4 md:px-8 py-12 lg:flex lg:gap-12">
          <aside className="lg:w-1/4 mb-10 lg:mb-0">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-8 dark:bg-gray-800 dark:border-gray-700 shadow-lg">
              <div>
                <h3 className="font-semibold text-xl mb-4 text-gray-900 dark:text-gray-200 border-l-4 border-blue-500 pl-4">Filter by Price</h3>
                <div className="mb-4">
                  <div className="relative h-2 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div
                      className="absolute h-2 bg-blue-500 rounded-full"
                      style={{ left: `${(priceRange[0] / 500) * 100}%`, width: `${((priceRange[1] - priceRange[0]) / 500) * 100}%` }}
                    ></div>
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                      className="absolute w-full h-2 opacity-0 cursor-pointer"
                      aria-label="Minimum price"
                    />
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                      className="absolute w-full h-2 opacity-0 cursor-pointer"
                      aria-label="Maximum price"
                    />
                  </div>
                  <div className="flex justify-between mt-3 text-sm text-gray-600 dark:text-gray-400">
                    <span>Price: ${priceRange[0]} — ${priceRange[1]}</span>
                  </div>
                </div>
                <button
                  onClick={handlePriceFilter}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200"
                >
                  Filter
                </button>
              </div>

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

          <section className="lg:w-3/4">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <h2 className="font-bold text-3xl mb-4 md:mb-0 text-gray-900 dark:text-gray-200">Men's Bags</h2>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <span className="text-gray-600 dark:text-gray-400">Showing all {products.length} results</span>
                <div className="relative">
                  <select
                    className="px-5 py-2 text-gray-600 rounded-full ring-1 ring-gray-300 focus:ring-1 focus:ring-blue-500 focus:outline-none appearance-none bg-white cursor-pointer dark:bg-gray-700 dark:text-gray-300 dark:ring-gray-700"
                  >
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl overflow-hidden product-card dark:bg-gray-800 shadow-lg">
                  <div className="relative p-4">
                    <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-xl" />
                    <span className="absolute top-4 right-4 bg-blue-600 text-white font-bold text-lg px-4 py-2 rounded-full shadow-lg">
                      ${product.price}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">{product.name}</h3>
                      <div className="flex text-sm space-x-1">{getStars(product.rating)}</div>
                    </div>
                    <p className="text-gray-500 text-sm dark:text-gray-400 mb-4">{product.category}</p>
                    <button
                      className="w-full add-to-cart-btn bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200 dark:text-gray-900"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </main>

      <footer>
        <section className="bg-white py-6 border-b border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-10 px-4">
            <NavLink
              to="/track-order"
              className="text-gray-700 dark:text-gray-200 text-base font-bold whitespace-nowrap px-4 py-2 hover:bg-blue-600 hover:text-white rounded-full transition-all duration-200 ease-in-out"
              activeClassName="bg-blue-600 text-white"
            >
              Track Your Order
            </NavLink>
            <NavLink
              to="/about"
              className="text-gray-700 dark:text-gray-200 text-base font-bold whitespace-nowrap px-4 py-2 hover:bg-blue-600 hover:text-white rounded-full transition-all duration-200 ease-in-out"
              activeClassName="bg-blue-600 text-white"
            >
              About Us
            </NavLink>
            <NavLink
              to="/login"
              className="text-gray-700 dark:text-gray-200 text-base font-bold whitespace-nowrap px-4 py-2 hover:bg-blue-600 hover:text-white rounded-full transition-all duration-200 ease-in-out"
              activeClassName="bg-blue-600 text-white"
            >
              Contact Us
            </NavLink>
          </div>
        </section>
        <section className="bg-white dark:bg-gray-900 py-6">
          <p className="max-w-screen-xl mx-auto text-center text-gray-500 text-base">Copyright © 2025 Luxury Style Bag Brands. All Rights Reserved</p>
        </section>
      </footer>
    </div>
  );
}

export default Men;