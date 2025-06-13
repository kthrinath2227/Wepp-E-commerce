
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "This platform has completely transformed how we operate. The intuitive interface and powerful features have helped us increase productivity by over 40%.",
    author: "Sarah",
    position: "LiveInsurence.com",
    rating: 5,
    image: "woman-ceo-professional-headshot"
  },
  {
    id: 2,
    content: "I've tried many similar services, but nothing compares to this. The customer support is exceptional, and the platform's reliability has been crucial for our business growth.",
    author: "Sridevi",
    position: "Marketing Director of Sridevi Enterprises",
    rating: 5,
    image: "asian-man-professional-business-portrait"
  },
  {
    id: 3,
    content: "The analytics features alone are worth the investment. We've gained valuable insights that have helped us make data-driven decisions and optimize our strategy.",
    author: "Murali Krishna",
    position: "Operations Manager, HomeShowCase",
    rating: 4,
    image: "woman-business-professional-smiling"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Don't just take our word for it - hear from some of our satisfied customers
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 md:p-12 shadow-xl glass-card"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-lg">
                  <img  alt={`Portrait of ${testimonials[currentIndex].author}`} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                </div>
                
                <div className="flex-1">
                  <div className="flex mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                    {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i + testimonials[currentIndex].rating} className="h-5 w-5 text-gray-300" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl italic mb-6 text-gray-700 dark:text-gray-200">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  
                  <div>
                    <p className="font-bold text-lg">{testimonials[currentIndex].author}</p>
                    <p className="text-gray-600 dark:text-gray-400">{testimonials[currentIndex].position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-blue-600"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
