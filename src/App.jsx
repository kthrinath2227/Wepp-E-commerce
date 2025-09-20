import React from "react";
import { motion } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import ProductListing from "@/components/ProductListing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { ChevronDown } from "lucide-react"; // 🔹 scroll down icon

const App = () => {
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <Navbar />
      <main>
        <Carousel />
        <ProductListing />
        <Contact />
      </main>
      <Footer />
      <Toaster />

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-20 right-10 sm:right-6 flex flex-col items-center space-y-4 z-50">

        <div className="flex justify-center mt-[-40px] mb-12">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center text-gray-400"
          >
            
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-2 bg-gray-400 rounded-full mt-2"
              />
            </div>
            <p className="text-sm mt-2">Scroll Down</p>

          </motion.div>
        </div>
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
