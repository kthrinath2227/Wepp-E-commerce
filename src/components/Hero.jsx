import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden hero-pattern"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white/90 dark:from-gray-900/50 dark:to-gray-900/90 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
            variants={itemVariants}
          >
            <span className="gradient-text">Creative Digital Solutions</span> for Your Brand
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            We build stunning web & mobile applications, craft impactful digital marketing strategies, design memorable logos, and create eye-catching posters.
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-gray-700 dark:text-gray-400 font-semibold mb-8 max-w-3xl mx-auto italic"
            variants={itemVariants}
          >
            Building Tech That Builds Your Business.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            variants={itemVariants}
          >
            <Button size="lg" className="text-lg px-8 py-6">
              Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              View Portfolio
            </Button>
          </motion.div>
          
          <motion.div
            className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-left max-w-3xl mx-auto"
            variants={itemVariants}
          >
            {[
              "Web App Development", 
              "Digital Marketing", 
              "Mobile App Building", 
              "Logo Design", 
              "Web Development", 
              "Poster Making"
            ].map((service) => (
              <div key={service} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">{service}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div
          className="mt-16 max-w-5xl mx-auto"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <img  alt="Collage of digital services: web app interface, marketing chart, mobile app screen, logo design, website layout, poster design" className="w-full h-auto rounded-xl" src="https://images.unsplash.com/photo-1581943870582-f37dbd95fe06" />
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-16 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-16 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;