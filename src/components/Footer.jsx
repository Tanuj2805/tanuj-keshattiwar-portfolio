import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiCoffee, FiCode } from 'react-icons/fi';

const Footer = () => {


  return (
    <footer className="relative border-t border-accent/10">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <div className="flex items-center space-x-2">
              <FiCode className="text-accent text-2xl" />
              <span className="text-xl font-bold code-font">
                <span className="text-accent">&lt;</span>
                TanujKeshattiwar
                <span className="text-accent">/&gt;</span>
              </span>
            </div>
            <p className="text-text-secondary text-sm mt-2">
              Full Stack Software Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex space-x-6 mb-6 md:mb-0"
          >
            <a href="#home" className="text-text-secondary hover:text-accent transition-colors">
              Home
            </a>
            <a href="#about" className="text-text-secondary hover:text-accent transition-colors">
              About
            </a>
            <a href="#projects" className="text-text-secondary hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-text-secondary hover:text-accent transition-colors">
              Contact
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex space-x-4"
          >
            {['LinkedIn'].map((platform) => (
              <a
                key={platform}
                href="https://www.linkedin.com/in/tanuj-keshattiwar"
                className="w-10 h-10 rounded-full border border-accent/20 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/50 transition-all duration-300"
                aria-label={platform}
              >
                {platform === 'LinkedIn' ? 'in' : 
                 platform === 'GitHub' ? 'gh' : 
                 'tw'}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-accent/10 text-center"
        >
          <div className="flex items-center justify-center space-x-2 text-text-secondary text-sm">
            <span>Made with</span>
            <FiHeart className="text-red-500 animate-pulse" />
            <span>and</span>
            <FiCoffee className="text-yellow-500" />
            <span>by Tanuj Keshattiwar</span>
          </div>
          
          
        
        </motion.div>
      </div>

      {/* Binary code floating at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden opacity-10">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
  key={i}
  className="absolute code-font text-sm animate-floatBinary"
  style={{
    left: `${Math.random() * 100}%`,
    bottom: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${Math.random() * 10 + 10}s`
  }}
>

            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;