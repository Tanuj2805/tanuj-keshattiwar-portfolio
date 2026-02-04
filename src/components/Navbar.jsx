import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiCode } from 'react-icons/fi';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary/90 backdrop-blur-sm border-b border-accent/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <FiCode className="text-accent text-2xl" />
            <span className="text-xl font-bold code-font">
              <span className="text-accent">&lt;</span>
              Tanuj
              <span className="text-accent">/&gt;</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="relative px-4 py-2 group"
              >
                <span className={`code-font transition-colors duration-300 ${
                  activeSection === item.id ? 'text-accent' : 'text-text-secondary'
                } group-hover:text-accent`}>
                  {item.id === 'home' ? '~/home' : 
                   item.id === 'about' ? './about' :
                   item.id === 'skills' ? '>/skills' :
                   item.id === 'experience' ? '$experience' :
                   item.id === 'projects' ? 'npm run projects' :
                   'contact()'}
                </span>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  />
                )}
                <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/30 transition-all duration-300 rounded-lg" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-accent"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 py-4 border-t border-accent/10"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-4 py-3 hover:bg-secondary/50 rounded-lg transition-colors duration-300"
              >
                <span className={`code-font ${
                  activeSection === item.id ? 'text-accent' : 'text-text-secondary'
                }`}>
                  {item.label}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;