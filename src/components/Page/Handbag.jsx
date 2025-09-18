import React from 'react';
import { Link } from 'react-router-dom';

function Handbag() {
  // Products array with 12 items for 4 columns x 3 rows
  const products = [
    {
      brand: 'befen',
      title: 'Genuine Leather Crossbody Bags for Women, Lightweight Medium Anti-Theft Shoulder Purse with Built in',
      rating: 200,
      price: '45.99',
      delivery: 'Mon, Sep 29',
      imageSrc: '/src/components/img/Handbag1.avif',
    },
    {
      brand: 'Crossbody Bag for Women',
      title: 'Multi Pocket PU Leather Shoulder Handbag Large Capacity Lightweight Purse',
      rating: 43,
      price: '29.99',
      typicalPrice: '32.99',
      delivery: 'Mon, Sep 29',
      imageSrc: '/src/components/img/Handbag2.avif',
    },
    {
      brand: 'befen',
      title: 'Small Genuine Leather Crossbody Purses for Women Trendy Travel Shoulder Handbags with Multiple Zipp',
      rating: 816,
      price: '29.99',
      delivery: 'Mon, Sep 29',
      imageSrc: '/src/components/img/Handbag3.jpg',
    },
    {
      brand: 'Gladdon',
      title: 'Small Crossbody Bags for Women Leather Shoulder Purses Vegan Womens Cross body Bag',
      rating: 177,
      price: '18.99',
      listPrice: '23.99',
      delivery: 'Mon, Sep 29',
      imageSrc: '/src/components/img/Handbag4.webp',
    },
    {
      brand: '2025 Hobo Handbags',
      title: 'Vegan Leather Shoulder Bags for Women, Clutch Y2K Purse Handbags Tote Bag',
      rating: 104,
      price: '25.99',
      delivery: 'Mon, Sep 29',
      imageSrc: '/src/components/img/Handbag5.webp',
    },
    {
      brand: 'LuxeTote',
      title: 'Elegant Tote Bag for Women, Spacious Leather Handbag with Zipper',
      rating: 320,
      price: '55.99',
      delivery: 'Mon, Sep 29',
      imageSrc: '/src/components/img/Handbag6.avif',
    },
    {
      brand: 'ChicPurse',
      title: 'Minimalist Crossbody Bag, Waterproof Nylon Shoulder Bag for Travel',
      rating: 95,
      price: '22.99',
      listPrice: '27.99',
      delivery: 'Mon, Sep 29',
      imageSrc: '/src/components/img/Handbag7.jpg',
    },
    {
      brand: 'befen',
      title: 'Classic Leather Satchel for Women, Multi-Compartment Shoulder Bag',
      rating: 450,
      price: '39.99',
      typicalPrice: '44.99',
      delivery: 'Mon, Sep 29',
      imageSrc: '/src/components/img/Handbag8.jpeg',
    },
    {
      brand: 'TrendyTote',
      title: 'Casual Canvas Tote Bag, Large Capacity Everyday Handbag',
      rating: 210,
      price: '19.99',
      delivery: 'Mon, Sep 29',
      imageSrc: '/src/components/img/Handbag9.jpg',
    },
    {
      brand: 'Gladdon',
      title: 'Vegan Leather Clutch Purse, Evening Bag with Detachable Strap',
      rating: 130,
      price: '24.99',
      listPrice: '29.99',
      delivery: 'Mon, Sep 29',
      imageSrc: '/src/components/img/Handbag10.webp',
    },
    {
      brand: 'befen',
      title: 'Stylish Crossbody Bag, Lightweight Leather Purse with Adjustable Strap',
      rating: 280,
      price: '34.99',
      delivery: 'Mon, Sep 29',
      imageSrc: '/src/components/img/Handbag11.jpg',
    },
    {
      brand: 'UrbanChic',
      title: 'Modern Shoulder Bag, PU Leather Handbag with Magnetic Closure',
      rating: 165,
      price: '27.99',
      typicalPrice: '31.99',
      delivery: 'Mon, Sep 29',
      imageSrc: '/src/components/img/Handbag12.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      {/* Header Section */}
      <header className="w-full bg-white shadow-md text-center py-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Handbag Selection
        </h1>
      </header>

      {/* Main Product Grid */}
      <main className="w-full max-w-screen-xl mx-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 12).map((product, index) => (
            <div
              key={index}
              className="bg-amber-50 rounded-lg shadow-md overflow-hidden flex flex-col items-start p-4 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-48 sm:h-56 lg:h-64 flex items-center justify-center bg-gray-50 rounded-lg mb-4">
                <img
                  src={product.imageSrc}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="w-full text-left">
                <p className="text-xs text-gray-500 font-semibold mb-1">Sponsored</p>
                <p className="font-semibold text-sm text-blue-700">{product.brand}</p>
                <h3 className="text-sm font-normal text-gray-800 line-clamp-3 leading-tight my-1">
                  {product.title}
                </h3>
                <div className="flex items-center text-xs text-gray-600 my-2">
                  <span className="text-yellow-400">★ ★ ★ ★ ☆</span>
                  <span className="ml-1 text-blue-500">{product.rating}</span>
                </div>
                <div className="my-2">
                  <span className="text-xl sm:text-2xl font-semibold text-gray-900">${product.price}</span>
                  {product.listPrice && (
                    <span className="text-sm text-gray-500 ml-2 line-through">
                      ${product.listPrice}
                    </span>
                  )}
                  {product.typicalPrice && (
                    <span className="text-sm text-gray-500 ml-2">
                      Typical price: ${product.typicalPrice}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-800 mt-1 font-medium">
                  Delivery <span className="font-bold">{product.delivery}</span>
                </p>
                <p className="text-xs text-gray-500">Ships to Cambodia</p>
              </div>
              <button className="mt-4 w-full bg-amber-200 text-gray-900 font-bold py-2 px-4 rounded-full hover:bg-yellow-500 transition-colors duration-200">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Handbag;