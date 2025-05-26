import React from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  Smartphone, 
  Megaphone, 
  Palette, 
  Layers, 
  Image as ImageIcon
} from "lucide-react";

const services = [
  {
    icon: <Code className="h-10 w-10 text-blue-500" />,
    title: "Web Application Building",
    description: "Custom web applications tailored to your business needs, built with modern technologies for scalability and performance."
  },
  {
    icon: <Smartphone className="h-10 w-10 text-blue-500" />,
    title: "Mobile Application Building",
    description: "Engaging and intuitive mobile apps for iOS and Android, designed to enhance user experience and drive growth."
  },
  {
    icon: <Megaphone className="h-10 w-10 text-blue-500" />,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies including SEO, SEM, social media, and content marketing to boost your online presence."
  },
  {
    icon: <Palette className="h-10 w-10 text-blue-500" />,
    title: "Logo Making",
    description: "Memorable and impactful logo designs that capture your brand's essence and resonate with your target audience."
  },
  {
    icon: <Layers className="h-10 w-10 text-blue-500" />,
    title: "Web Development",
    description: "Responsive and user-friendly websites, from simple landing pages to complex e-commerce platforms."
  },
  {
    icon: <ImageIcon className="h-10 w-10 text-blue-500" />,
    title: "Poster Making",
    description: "Creative and eye-catching poster designs for your marketing campaigns, events, or promotional needs."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Creative <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We offer a wide range of digital solutions to help your business succeed and stand out.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;