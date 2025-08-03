import React from "react";
import { motion } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import { FaInstagram, FaWhatsapp } from "react-icons/fa"; // <--- Add this line

const App = () => {
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <CallToAction />
        <Portfolio />
        <Testimonials />
        {/* <Pricing /> */}
        <Contact />
      </main>
      <Footer />
      <Toaster />

      {/* Floating Social Icons */}
      <div className="fixed bottom-20 right-6 flex flex-col items-center space-y-4 z-50">
  <a
    href="https://instagram.com/thedevstechnologies
"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram className="text-pink-500 text-4xl hover:scale-110 transition-transform duration-200 float-animate" />
  </a>
  <a
    href="https://wa.me/919381187905"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaWhatsapp className="text-green-500 text-4xl hover:scale-110 transition-transform duration-200 float-animate" />
  </a>
</div>
    </div>
  );
};

export default App;
