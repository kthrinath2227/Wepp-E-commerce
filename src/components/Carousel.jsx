import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Fetch products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const formattedSlides = data.map((item) => ({
          id: item.id,
          src: `https://images.weserv.nl/?url=${encodeURIComponent(item.image)}`,
          title: item.title,
          description: item.description,
          link: `/products/${item.id}`,
        }));
        setSlides(formattedSlides);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, slides]);

  const nextSlide = () => {
    setIsImageLoaded(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setIsImageLoaded(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  if (slides.length === 0) {
    return (
      <div className="flex items-center justify-center h-[500px] bg-black text-white">
        Loading products...
      </div>
    );
  }

  const currentSlide = slides[currentIndex];

  return (
    <section className="mt-16 mb-16">
      {/* Section Heading */}
      <div className="text-center mb-8 px-4">
        <h1 className="text-4xl font-bold mb-3 gradient-text">
          Checkout Our Handpicked Best Items
        </h1>
        <p className="text-lg text-gray-300">
          Explore top-rated and trending products we carefully selected just for
          you. From electronics to fashion, find your favorites in one place.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full h-[500px] max-w-screen-xl mx-auto overflow-hidden rounded-lg shadow-lg bg-black">
        <div className="w-full h-full flex items-center justify-center relative">
          {!isImageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black text-white">
              Loading image...
            </div>
          )}

          <img
            src={currentSlide.src}
            alt={currentSlide.title}
            className={`w-full h-full object-contain transition-opacity duration-700 ease-in-out ${
              isImageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setIsImageLoaded(true)}
            onError={(e) => {
              e.target.src = "/fallback.jpg";
              setIsImageLoaded(true);
            }}
          />

          {/* Caption */}
          <div className="absolute bottom-10 left-10 bg-white/20 backdrop-blur-md border border-white/20 text-white p-4 rounded-xl max-w-md shadow-lg">
            <h2 className="text-lg font-bold drop-shadow-md">
              {currentSlide.title}
            </h2>
            <p className="text-sm mt-2 line-clamp-2">
              {currentSlide.description}
            </p>
          </div>
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-60 hover:bg-opacity-90 px-3 py-2 rounded-full z-10"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-60 hover:bg-opacity-90 px-3 py-2 rounded-full z-10"
        >
          ▶
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
