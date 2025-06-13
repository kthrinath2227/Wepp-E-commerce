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
    </div>
  );
};

export default App;  