
import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  Shield, 
  BarChart, 
  Users, 
  Globe, 
  Smartphone 
} from "lucide-react";

const features = [
  {
    icon: <Zap className="h-10 w-10 text-blue-500" />,
    title: "Lightning Fast",
    description: "Our platform is optimized for site performance and user experience, ensuring your customers have a seamless experience every time."
  },
  {
    icon: <Shield className="h-10 w-10 text-blue-500" />,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime guarantee to keep your business running smoothly."
  },
  {
    icon: <BarChart className="h-10 w-10 text-blue-500" />,
    title: "Get actionable web analytics and insights",
    description: "Gain valuable insights with our comprehensive analytics and reporting tools."
  },
  {
    icon: <Users className="h-10 w-10 text-blue-500" />,
    title: "Team Collaboration",
    description: "Seamlessly work together with your team members in real-time with our collaboration features."
  },
  {
    icon: <Globe className="h-10 w-10 text-blue-500" />,
    title: "Global Reach for Your Brand",
        description: "Connect with customers worldwide through our globally distributed infrastructure."
  },
  {
    icon: <Smartphone className="h-10 w-10 text-blue-500" />,
    title: "Mobile Optimized Experience",
    description: "Fully responsive design ensures a perfect experience on any device, anywhere."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Powerful <span className="gradient-text">Features</span> That Set Us Apart
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover the tools and capabilities designed to take your business to the next level
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Features;
