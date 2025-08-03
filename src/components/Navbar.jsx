import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 max-w-[100vw] overflow-x-hidden">
        <div className="flex items-center justify-between h-16">

          {/* Brand */}
          <div className="flex items-center gap-2 overflow-hidden">
            <img
              className="w-10 h-7 md:w-10 md:h-9"
              src="https://res.cloudinary.com/dx3m8gmpa/image/upload/v1749735228/globe-bg_1_cq2ba9.png"
              alt="Logo"
            />
             <div className="h-6 w-0.5 bg-gray-400 sm:h-8 md:h-10" />
            <div className="flex flex-col text-left leading-tight overflow-hidden">
              <h1 className="text-sm sm:text-base md:text-xl font-bold text-blue-900">
                THEDEVS <span className="text-black">TECHNOLOGIES</span>
              </h1>
              <p className="text-[7px] sm:text-[8px] md:text-xs text-gray-500 uppercase tracking-wider whitespace-nowrap">
                Building Tech That Builds Your Business.
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav>
              <ul className="flex space-x-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-900 dark:text-gray-300 hover:text-primary dark:hover:text-white transition"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <a href="#contact">
              <Button className="px-4 py-2 text-sm h-9">ContactUs</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-3 pb-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full">ContactUs</Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
