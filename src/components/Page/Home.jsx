import React, { useState, useEffect } from 'react';

// Navigation Arrow Icons for Carousel
const FaChevronLeft = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor">
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
    </svg>
);

const FaChevronRight = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor">
        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
    </svg>
);

// Carousel Component
const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const autoSlide = setInterval(() => {
            nextSlide();
        }, 4000); // Auto-slide every 5 seconds

        return () => clearInterval(autoSlide); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="relative w-full overflow-hidden mb-8">
            {/* Carousel Items */}
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {items.map((image, index) => (
                    <div key={index} className="min-w-full">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full rounded-xl shadow-xl transform hover:scale-[1.02] transition-all duration-500 ease-in-out"
                        />
                        <p className="text-center text-lg font-medium text-gray-800 mt-4">
                            {image.alt}
                        </p>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-3 rounded-full hover:bg-blue-800 transition-colors duration-200"
                aria-label="Previous slide"
            >
                <FaChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-3 rounded-full hover:bg-blue-800 transition-colors duration-200"
                aria-label="Next slide"
            >
                <FaChevronRight className="w-6 h-6" />
            </button>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-100' : 'bg-cyan-100'
                            } transition-colors duration-200`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

function Home() {
    const images = [
        { src: "/src/components/imgs/baner2.png", alt: "Luxury Bag" },
        { src: "/src/components/imgs/baner.png", alt: "Luxury Bag Variant" },
        { src: "/src/components/imgs/baner3.png", alt: "Luxury Bag Variant" },
        { src: "/src/components/imgs/baner4.png", alt: "Luxury Bag Variant" },
        {
            src: "/src/components/imgs/baner1.png",
            alt: "Just in: shop the latest and greatest in designer accessories.",
        },
    ];
    const images1 = [
        { src: "/src/components/img/boybag.jpg", alt: "Luxury Boy Bag" },
        { src: "/src/components/img/boybag1.jpg", alt: "Luxury Boy Bag Variant" },
        { src: "/src/components/img/girlbag2.webp", alt: "Just in: shop the latest and greatest in designer accessories. Browse your favorite luxury brands, such as: BVLGARI, Cartier, Chanel, Dior, Rolex, Tiffany & Co. and much more - with each and every piece authenticated by our team of experts." },
    ];

    return (
        <div className="mx-auto min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-purple-50 flex flex-col items-center p-4 sm:p-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-amber-100 mt-10 mb-12 tracking-tight drop-shadow-md">
                Luxury Style Bag Brands
            </h1>
            <div className="w-full max-w-7xl mx-auto">
                {/* Carousel */}
                <Carousel items={images} />
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                    {images1.map((image, index) => (
                        <div key={index} className="break-inside-avoid">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full rounded-xl shadow-xl transform hover:scale-[1.02] transition-all duration-500 ease-in-out"
                            />
                            <p className="text-center text-lg font-medium text-gray-800 mt-2">{image.alt}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 space-y-4">
                    <p className="text-xl sm:text-2xl font-light text-gray-800 max-w-2xl mx-auto italic">
                        Spend time with confidence
                    </p>
                    <p className="text-lg sm:text-xl font-semibold text-blue-700 max-w-2xl mx-auto uppercase tracking-wider">
                        In the world of fashion, a stylish bag is your best companion
                    </p>
                </div>
                <h2 className="max-w-screen-xl mx-auto text-3xl sm:text-4xl font-bold text-center text-blue-900 mt-16 mb-8 tracking-tight drop-shadow-md">
                    New Arrivals
                </h2>
                <div className="max-w-screen-xl mx-auto">
                    <img src="/src/components/img/image.png" alt="New Arrival" className="w-full rounded-xl shadow-xl" />
                </div>
                <div className="max-w-screen-xl mx-auto mt-8">
                    <img
                        src="/src/components/img/Screenshot 2025-09-12 235712.png"
                        alt="New Arrival"
                        className="w-full rounded-xl shadow-xl"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;