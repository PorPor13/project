import React from 'react';
import { Link } from 'react-router-dom';  // Added: Fixes the Link error

function Eventbag() {
  const products = [
    {
      brand: 'SeaBreeze',
      title: 'Canvas Seaside Crossbody Bag, Lightweight Drawstring Purse',
      rating: 150,
      price: '39.99',
      delivery: 'Mon, Sep 29',
      imageSrc: '/src/components/img1/Event Bag1.webp',
    },
    {
      brand: 'CoastalChic',
      title: 'Nautical Tote Bag, Spacious Canvas Beach Bag with Rope Handles',
      rating: 230,
      price: '49.99',
      typicalPrice: '54.99',
      delivery: 'Mon, Sep 29',
      imageSrc: '/src/components/img1/Event Bag10.webp',
    },
    {
      brand: 'SeaBreeze',
      title: 'Waterproof Sailor Duffel Bag, Durable Travel Bag for Beach',
      rating: 320,
      price: '59.99',
      delivery: 'Mon, Sep 29',
      imageSrc: '/src/components/img1/Event Bag11.webp',
    },
    {
      brand: 'OceanVibes',
      title: 'Compact Canvas Clutch, Beach-Inspired Purse with Zipper',
      rating: 95,
      price: '24.99',
      listPrice: '29.99',
      delivery: 'Mon, Sep 29',
      imageSrc: '/src/components/img1/Event Bag12.webp',
    },
    {
      brand: 'NauticalNest',
      title: 'Rope-Trimmed Shoulder Bag, Canvas Tote for Coastal Adventures',
      rating: 180,
      price: '44.99',
      delivery: 'Mon, Sep 29',
      imageSrc: '/src/components/img1/Event Bag2.webp',
    },
    {
      brand: 'SeaBreeze',
      title: 'Large Beach Tote, Waterproof Lining with Drawstring Closure',
      rating: 410,
      price: '55.99',
      typicalPrice: '59.99',
      delivery: 'Mon, Sep 29',
      imageSrc: '/src/components/img1/Event Bag3.jpg',
    },
    {
      brand: 'CoastalChic',
      title: 'Sailor’s Crossbody Bag, Lightweight Canvas with Anchor Design',
      rating: 135,
      price: '34.99',
      delivery: 'Mon, Sep 29',
      imageSrc: '/src/components/img1/Event Bag4.webp',
    },
    {
      brand: 'OceanVibes',
      title: 'Mini Seaside Satchel, Durable Canvas with Secure Zipper',
      rating: 200,
      price: '29.99',
      listPrice: '34.99',
      delivery: 'Mon, Sep 29',
      imageSrc: '/src/components/img1/Event Bag5.webp',
    },
    {
      brand: 'NauticalNest',
      title: 'Beach Duffel Bag, Spacious Canvas with Rope Drawstring',
      rating: 265,
      price: '49.99',
      delivery: 'Mon, Sep 29',
      imageSrc: '/src/components/img1/Event Bag6.webp',
    },
    {
      brand: 'SeaBreeze',
      title: 'Coastal Clutch Purse, Canvas Evening Bag with Shell Accents',
      rating: 110,
      price: '27.99',
      delivery: 'Mon, Sep 29',
      imageSrc: '/src/components/img1/Event Bag7.jpg',
    },
    {
      brand: 'CoastalChic',
      title: 'Sailor’s Tote Bag, Large Canvas with Waterproof Interior',
      rating: 340,
      price: '52.99',
      typicalPrice: '57.99',
      delivery: 'Mon, Sep 29',
      imageSrc: '/src/components/img1/Event Bag8.webp',
    },
    {
      brand: 'OceanVibes',
      title: 'Nautical Shoulder Bag, Canvas Purse with Adjustable Strap',
      rating: 175,
      price: '37.99',
      listPrice: '42.99',
      delivery: 'Mon, Sep 29',
      imageSrc: '/src/components/img1/Event Bag9.webp',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      {/* Header Section */}
      <header className="w-full bg-white shadow-md text-center py-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Bag for Event
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

export default Eventbag;