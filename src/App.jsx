import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

import { FiTerminal, FiCpu, FiCode } from 'react-icons/fi';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative bg-primary text-text-primary min-h-screen overflow-hidden">
      <ParticleBackground />
      {/* Simplified Background - Remove heavy blur effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Reduced blur and opacity */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-accent/5 rounded-full mix-blend-screen blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent/3 rounded-full mix-blend-screen blur-xl"></div>
        
        {/* Simplify grid pattern for mobile */}
        {!isMobile && (
          <div className="absolute inset-0 opacity-[0.02]" 
               style={{
                 backgroundImage: `linear-gradient(#64ffda 1px, transparent 1px)`,
                 backgroundSize: '80px 80px'
               }}>
          </div>
        )}
      </div>

      {/* Reduce floating icons count and complexity */}
      {!isMobile && (
        <>
          <motion.div 
            className="fixed top-1/4 left-5 text-accent/40 text-xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <FiTerminal />
          </motion.div>
          <motion.div 
            className="fixed top-1/3 right-10 text-accent/30 text-2xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <FiCpu />
          </motion.div>
        </>
      )}

      {/* Remove terminal window completely for mobile */}
      {!isMobile && (
        <div className="fixed bottom-4 left-4 w-80 bg-secondary/80 backdrop-blur-sm rounded-lg border border-accent/20 shadow-lg z-40 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-secondary border-b border-accent/20">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs text-text-secondary">terminal</span>
          </div>
          <div className="p-4 font-mono text-sm">
            <div className="text-green-400">
              <span className="text-accent">visitor@portfolio:~$</span> portfolio --start
            </div>
            <div className="text-text-secondary text-xs mt-1">
              Welcome to Tanuj's Portfolio
            </div>
          </div>
        </div>
      )}

      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <section id="home">
            <Hero />
          </section>
          
          <section id="about">
            <About />
          </section>
          
          <section id="skills">
            <Skills />
          </section>
          
          <section id="experience">
            <Experience />
          </section>
          
          <section id="projects">
            <Projects />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;