import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    title: "E-commerce Platform",
    category: "Web Application",
    image_description: "Screenshot of a modern e-commerce website homepage",
    description: "A full-featured e-commerce platform with advanced product management and secure checkout.",
    imageUrl: "https://images.unsplash.com/photo-1556740714-a8395b3bf301"
  },
  {
    title: "Mobile Fitness App",
    category: "Mobile Application",
    image_description: "Mobile app interface showing fitness tracking dashboard",
    description: "A cross-platform mobile app for tracking workouts and fitness goals.",
    imageUrl: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2"
  },
  {
    title: "Social Media Campaign",
    category: "Digital Marketing",
    image_description: "Graph showing increased engagement from a social media campaign",
    description: "Successful social media campaign that boosted brand awareness and engagement.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    title: "Tech Startup Logo",
    category: "Logo Making",
    image_description: "Modern and sleek logo design for a tech startup",
    description: "A modern and versatile logo designed for a new technology startup.",
    imageUrl: "https://images.unsplash.com/photo-1600508774634-0ae5aa0024b1"
  },
  {
    title: "Corporate Website Redesign",
    category: "Web Development",
    image_description: "Before and after comparison of a corporate website redesign",
    description: "Complete redesign of a corporate website focusing on UX and modern aesthetics.",
    imageUrl: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5"
  },
  {
    title: "Event Promotion Poster",
    category: "Poster Making",
    image_description: "Vibrant and eye-catching poster design for a music event",
    description: "An eye-catching poster designed to promote a local music festival.",
    imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Take a look at some of our recent projects that showcase our skills and creativity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden h-60">
                <img  
                  alt={item.image_description} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                 src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <span className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{item.description}</p>
                <Button variant="outline" size="sm">
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button size="lg">
            See More Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;