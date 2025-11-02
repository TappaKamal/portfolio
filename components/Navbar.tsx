"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "WORKS", href: "#projects" },
    { name: "ABOUT", href: "#about" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md" : "bg-transparent"
      }`}>
      <div className="container mx-auto px-6 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-2xl font-bold tracking-tight ${
              isScrolled ? "text-black" : "text-white"
            }`}>
            KAMALHSN
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                  isScrolled
                    ? "text-black/80 hover:text-black"
                    : "text-white/80 hover:text-white"
                }`}>
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu">
            <span
              className={`text-sm font-medium uppercase tracking-wider ${
                isScrolled ? "text-black" : "text-white"
              }`}>
              MENU
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-6 space-y-4 pb-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block text-sm font-medium uppercase tracking-wider transition-colors ${
                  isScrolled
                    ? "text-black/80 hover:text-black"
                    : "text-white/80 hover:text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
