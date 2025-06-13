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
      className="relative pt-20 pb-5 md:pt-32 md:pb-5 overflow-hidden hero-pattern"
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
        </motion.div>
      </div>
      
     
    </section>
  );
};

export default Hero;