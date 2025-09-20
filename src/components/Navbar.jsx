import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Home, Mail, Menu, X, Store } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "#", label: "Store", icon: Store },
    { path: "#", label: "Contact", icon: Mail },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="glass-effect sticky top-0 z-50 border-b border-white/20"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <motion.div>
              <img
                src="https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758265475/Wepp-logo-removebg-preview_nti96y.png"
                alt="Logo"
                className="h-10 w-15"
              />
            </motion.div>
            <span className="text-lg sm:text-xl md:text-md font-bold bg-gradient-to-r from-[#8CC43D] to-[#0AA79B] bg-clip-text text-transparent">
              E-commerce
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.path} href={item.path}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all text-gray-300 hover:text-white hover:bg-white/10"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </motion.div>
                </a>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <a href="#cart">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="glass-effect border-white/20 hover:bg-white/20"
                >
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </motion.div>
            </a>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                onClick={toggleMenu}
                variant="outline"
                size="icon"
                className="glass-effect border-white/20 hover:bg-white/20"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden glass-effect border-t border-white/20"
          >
            <nav className="flex flex-col items-center space-y-4 p-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.path} variants={itemVariants}>
                    <a
                      href={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center space-x-2 text-lg text-white hover:text-blue-300"
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </a>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
