import React from "react";
import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  AppWindow,
  Globe2,
  PenTool,
  ServerCog,
  LayoutDashboard,
} from "lucide-react";

const services = [
  {
    icon: <MonitorSmartphone className="h-10 w-10 text-blue-500" />,
    title: "Custom Web Application",
    description: "Scalable and high-performance web applications tailored to your business goals, built using modern frameworks and best coding practices."
  },
  {
    icon: <AppWindow className="h-10 w-10 text-blue-500" />,
    title: "Mobile Application Development",
    description: "Intuitive and engaging mobile apps for iOS and Android, crafted to enhance user experience, boost retention, and drive business growth."
  },
  {
    icon: <Globe2 className="h-10 w-10 text-blue-500" />,
    title: "360° Digital Marketing",
    description: "End-to-end digital marketing solutions including SEO, SEM, social media, and content marketing — built to elevate your brand’s online visibility and lead generation."
  },
  {
    icon: <PenTool className="h-10 w-10 text-blue-500" />,
    title: "Brand Identity Design",
    description: "Impactful branding that captures your brand essence — from memorable logos to cohesive visual identities that connect with your audience."
  },
  {
    icon: <ServerCog className="h-10 w-10 text-blue-500" />,
    title: "Full Stack Web Development",
    description: "Complete web development solutions — from frontend UI/UX to secure backend systems, optimized for performance, scalability, and conversion."
  },
  {
    icon: <LayoutDashboard className="h-10 w-10 text-blue-500" />,
    title: "Creative Collateral Design",
    description: "Visually striking posters, banners, and promotional designs crafted to captivate attention across events, campaigns, and online platforms."
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