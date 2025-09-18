import React from 'react';

function About() {
  const images = [
    { src: "/public/img/About.jpg", alt: "Confidence, trust, civility" },
    { src: "/public/img/About1.jpg", alt: "Luxury Boy Bag Variant" },
  ];

  return (
    <div className="mx-auto min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-purple-50 flex flex-col items-center p-4 sm:p-8">
      
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-blue-900 mt-10 mb-12 tracking-tight drop-shadow-md">
        Luxury Style Bag Brands
      </h1>

      <div className="w-full max-w-7xl mx-auto mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div className="flex flex-col items-center">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full rounded-xl shadow-xl transform hover:scale-[1.02] transition-all duration-500 ease-in-out"
            />
            <p className="text-center text-lg font-medium text-gray-800 mt-2 dark:text-gray-300">{images[0].alt}</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 text-center tracking-tight drop-shadow-md dark:text-blue-300">
              Luxury Accessories <br />
              Shop the latest and greatest in designer accessories. Browse your favorite luxury brands, such as: BVLGARI, Cartier, Chanel, Dior, Rolex, Tiffany & Co. and much more — all authenticated by our team of experts.
            </h2>
          </div>
        </div>
        
      </div>
      <section className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-8 mx-4 sm:mx-8 lg:mx-20">
        <img
          src="/src/components/imgs/About1.jpg"
          alt="Fashion model wearing a black and white sweater and jeans"
          className="w-full lg:w-1/3 rounded-lg shadow-lg"
        />
        <div className="w-full lg:w-2/3">
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-12 gap-y-4 max-w-4xl mx-auto">
            {/* Feature 1 */}
            <div className="group flex items-center p-4 cursor-pointer hover:-translate-y-1 transition-transform duration-200 ease-in-out">
             
              <div className="flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 whitespace-nowrap group-hover:text-blue-600 dark:text-gray-200">
                  Newest Products
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm dark:text-gray-300">
                  Modern and new products
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group flex items-center p-4 cursor-pointer hover:-translate-y-1 transition-transform duration-200 ease-in-out">
              
              <div className="flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 whitespace-nowrap group-hover:text-blue-600 dark:text-gray-200">
                  Free Shipping
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm dark:text-gray-300">
                  All around the world
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group flex items-center p-4 cursor-pointer hover:-translate-y-1 transition-transform duration-200 ease-in-out">
              
              <div className="flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 whitespace-nowrap group-hover:text-blue-600 dark:text-gray-200">
                  100% Return Guarantee
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm dark:text-gray-300">
                  100% Money back guarantee
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group flex items-center p-4 cursor-pointer hover:-translate-y-1 transition-transform duration-200 ease-in-out">
              
              <div className="flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 whitespace-nowrap group-hover:text-blue-600 dark:text-gray-200">
                  Original Brands
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm dark:text-gray-300">
                  All brands are new original products
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="group flex items-center p-4 cursor-pointer hover:-translate-y-1 transition-transform duration-200 ease-in-out">
              
              <div className="flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 whitespace-nowrap group-hover:text-blue-600 dark:text-gray-200">
                  Live Support
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm dark:text-gray-300">
                  Phone and Email support
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="group flex items-center p-4 cursor-pointer hover:-translate-y-1 transition-transform duration-200 ease-in-out">
              
              <div className="flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 whitespace-nowrap group-hover:text-blue-600 dark:text-gray-200">
                  Warranty Replace
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm dark:text-gray-300">
                  100% Safe warranty replacement
                </p>
              </div>
            </div>
            
          </div>
          
        </div>
        
      </section>
    </div>
  );
}

export default About;