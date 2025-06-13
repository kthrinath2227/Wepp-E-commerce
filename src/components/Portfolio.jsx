import React from "react";
import { motion } from "framer-motion";


const portfolioItems = [
  {
    title: "E‑commerce Platform for B2C Sales",
    category: "Web Application",
    image_description: "Screenshot of a modern e‑commerce website homepage",
    description:
      "Feature‑rich online store with secure checkout, inventory dashboards, and mobile‑optimized design — built to grow your sales.",
    imageUrl:
      "https://res.cloudinary.com/dx3m8gmpa/image/upload/v1749807738/ecommers_mzdvp8.png",
  },
  {
    title: "Mobile Fitness Tracking App",
    category: "Mobile Application",
    image_description: "Mobile app interface showing fitness tracking dashboard",
    description:
      "Cross‑platform fitness app with intuitive dashboards and goal tracking to boost user engagement.",
    imageUrl:
      "https://res.cloudinary.com/dx3m8gmpa/image/upload/v1749807738/Blue_Modern_Money_Managing_Mobile_App_Promotion_Facebook_Ad_qldxo3.png",
  },
  {
    title: "Social Media Campaign & Engagement",
    category: "Digital Marketing",
    image_description: "Graph showing increased engagement from a social media campaign",
    description:
      "Strategic social media campaign that amplified brand reach by 45% and increased follower interaction.",
    imageUrl:
      "https://res.cloudinary.com/dx3m8gmpa/image/upload/v1749807739/Red_White_and_Black_Shoes_Products_Sale_Instagram_Post_palsms.png",
  },
  {
    title: "Tech Startup Logo & Brand Identity",
    category: "Logo Making",
    image_description: "Modern and sleek logo design for a tech startup",
    description:
      "Sleek, versatile logo and brand visuals crafted to establish authority for your tech startup.",
    imageUrl:
      "https://res.cloudinary.com/dx3m8gmpa/image/upload/v1749807738/Purple_Modern_Start-Up_Logo_ku7njg.png",
  },
  {
    title: "Corporate Website Redesign (UX/UI)",
    category: "Web Development",
    image_description: "Before and after comparison of a corporate website redesign",
    description:
      "Modern UX/UI overhaul that improved conversion flow, site speed, and brand perception.",
    imageUrl:
      "https://res.cloudinary.com/dx3m8gmpa/image/upload/v1749807739/Grey_Black_Simple_Structured_Lines_Creative_Designer_Portfolio_Landing_Page_Wireframe_Website_UI_Prototype_x1tet3.png",
  },
  {
    title: "Event Promotion Poster Design",
    category: "Poster Making",
    image_description: "Vibrant and eye‑catching poster design for a music event",
    description:
      "Bold poster design crafted to drive attendance and promote your event with lasting impact.",
    imageUrl:
      "https://res.cloudinary.com/dx3m8gmpa/image/upload/v1749807738/Green_Cream_Modern_Minimalist_Digital_Marketing_Event_Promotion_Instagram_Post_j96eqv.png",
  },
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
            Explore real-world projects built with precision, performance, and creativity.
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
                  src={item.imageUrl}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <span className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {item.description}
                </p>
                
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-10 rounded-2xl shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to experience these features?
            </h3>
            <p className="text-white/90 text-lg mb-6">
              Join thousands of satisfied customers who transformed their businesses with our platform.
            </p>
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-lg transition-colors">
              Start Your Free Trial
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
