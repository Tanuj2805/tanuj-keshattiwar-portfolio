import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiDownload } from 'react-icons/fi';
import me from '../asset/me.jpg'
const Hero = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/tanujkeshattiwar', label: 'GitHub' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com/in/tanujkeshattiwar', label: 'LinkedIn' },
    { icon: <FiTwitter />, url: 'https://twitter.com/tanujkeshattiwar', label: 'Twitter' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-accent/30 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-accent/20 animate-pulse"></div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                <span className="text-text-secondary">Hi, I'm</span>
                <br />
                <span className="gradient-text glitch-text" data-text="Tanuj Keshattiwar">
                  Tanuj Keshattiwar
                </span>
              </h1>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-1 bg-gradient-to-r from-accent to-transparent mb-6"
              />
              
              <h2 className="text-2xl lg:text-3xl mb-6 code-font">
                <span className="text-accent">&gt;</span> Full Stack Software Developer
                <span className="inline-block ml-2 w-2 h-8 bg-accent animate-cursor"></span>
              </h2>
              
          <p className="text-text-secondary text-lg mb-8 max-w-2xl text-justify leading-relaxed">
I am a Full Stack Software Developer who enjoys building scalable, user-centric web applications. I have experience working on live products, where I focused on improving performance, reducing unnecessary system overhead, and delivering clean UI workflows. I value strong engineering fundamentals, clear system design, and collaboration, and I’m motivated by creating software that has real-world impact rather than just working on demos.
</p>

              
              <div className="flex flex-wrap gap-4 mb-8">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-accent text-primary font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 flex items-center"
                >
                  Get In Touch
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300 flex items-center"
                >
                  <FiDownload className="mr-2" />
                  Download Resume
                </motion.a>
              </div>
              
              <div className="flex space-x-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.8 }}
                    whileHover={{ y: -5 }}
                    className="text-2xl text-text-secondary hover:text-accent transition-colors duration-300 relative group"
                    aria-label={link.label}
                  >
                    {link.icon}
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-secondary text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 mt-12 lg:mt-0 relative"
          >
            <div className="relative w-64 h-64 lg:w-96 lg:h-96 mx-auto">
              {/* Animated circles */}
              <div className="absolute inset-0 border-4 border-accent/20 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-8 border-4 border-accent/10 rounded-full animate-spin-slow reverse"></div>
              
              {/* Main profile container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-56 h-56 lg:w-80 lg:h-80">
                  {/* Binary background effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-full">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute text-xs code-font text-accent/10"
                        initial={{ y: -100, x: Math.random() * 100 }}
                        animate={{ y: '100vh' }}
                        transition={{
                          duration: Math.random() * 10 + 10,
                          repeat: Infinity,
                          delay: Math.random() * 5
                        }}
                        style={{ left: `${Math.random() * 100}%` }}
                      >
                        {Math.random() > 0.5 ? '1' : '0'}
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Profile image placeholder */}
                  <div className="absolute inset-4 bg-gradient-to-br from-accent/20 to-primary rounded-full flex items-center justify-center p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-primary">
                    <img
                    src={me}
                    alt="Tanuj Keshattiwar"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>
                </div>

                  
                  {/* Floating tech badges */}
                  <motion.div
                    className="absolute -top-4 left-1/4 px-3 py-1 bg-secondary border border-accent/30 rounded-full text-xs code-font"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    React.js
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-4 right-1/4 px-3 py-1 bg-secondary border border-accent/30 rounded-full text-xs code-font"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    Node.js
                  </motion.div>
                  <motion.div
                    className="absolute top-1/2 -left-4 px-3 py-1 bg-secondary border border-accent/30 rounded-full text-xs code-font"
                    animate={{ x: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    AWS
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;