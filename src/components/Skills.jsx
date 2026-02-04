import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiDatabase, FiCloud, FiTool, FiZap } from 'react-icons/fi';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const skillCategories = {
  frontend: {
    title: 'Frontend',
    icon: <FiCode />,
    primary: ['JavaScript','React.js', 'Angular.js', 'Tailwind CSS'],
    secondary: [ 'Redux Toolkit', 'Thymeleaf','EJS']
  },
  backend: {
    title: 'Backend',
    icon: <FiDatabase />,
    primary: ['Node.js', 'Express.js', 'REST APIs', 'Spring Boot'],
    secondary: ['FastAPI','JWT Authentication','Caching & Performance Optimization']
  },
  cloud: {
    title: 'Cloud & DevOps',
    icon: <FiCloud />,
    primary: ['Docker','AWS'],
    secondary: ['CI/CD Basics', 'Server Deployment']
  },
  tools: {
    title: 'Tools & Databases',
    icon: <FiTool />,
    primary: ['MongoDB', 'MySQL', 'Oracle', 'Github'],
    secondary: ['PostgreSQL','Redis', 'Postman', 'Linux', 'VS Code']
  }
};

  const active = skillCategories[activeCategory];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };



  const skillCardVariants = {
    initial: { 
      scale: 0.9,
      opacity: 0,
      rotateX: -10
    },
    animate: (index) => ({
      scale: 1,
      opacity: 1,
      rotateX: 0,
      transition: {
        delay: index * 0.05,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.05,
      rotateY: 10,
      boxShadow: "0 20px 40px rgba(100, 255, 218, 0.2)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  const secondarySkillVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (index) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: index * 0.03,
        type: "spring",
        stiffness: 200
      }
    }),
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, -5, 0],
      transition: { 
        rotate: { duration: 0.5, repeat: 0 },
        scale: { duration: 0.2 }
      }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-float"></div>
        
        {/* Binary code floating animation */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xs code-font text-accent/10"
            initial={{ y: -100, x: Math.random() * 100 }}
            animate={{ y: '100vh' }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            style={{ left: `${Math.random() * 100}%` }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatDelay: 3 
            }}
            className="mb-4"
          >
            <FiZap className="text-accent text-4xl" />
          </motion.div>
          
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="text-accent">02.</span> Skills & Technologies
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '200px' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full mb-6"
          />
          
          <p className="text-text-secondary text-lg text-center max-w-2xl">
            Technologies I use to build amazing digital experiences
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 justify-center mb-16"
        >
          {Object.entries(skillCategories).map(([key, cat], index) => (
            <motion.button
              key={key}
              variants={itemVariants}
              onClick={() => setActiveCategory(key)}
              
              whileHover="hover"
              whileTap="tap"
              initial="initial"
              animate={activeCategory === key ? {
                scale: 1.05,
                boxShadow: "0 15px 40px rgba(100, 255, 218, 0.4)",
                y: -5
              } : {}}
              className={`relative px-8 py-4 rounded-xl flex items-center gap-4 transition-all duration-300 overflow-hidden group
                ${
                  activeCategory === key
                    ? 'bg-accent text-primary'
                    : 'bg-secondary/40 text-text-secondary hover:bg-secondary'
                }`}
            >
              {/* Animated background for active tab */}
              {activeCategory === key && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent to-cyan-400"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ opacity: 0.3 }}
                />
              )}
              
              <span className="text-2xl relative z-10">{cat.icon}</span>
              <span className="font-semibold text-lg relative z-10">{cat.title}</span>
              
              {/* Hover indicator */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1 bg-accent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: activeCategory === key ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Animated category switch indicator */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.3 }}
            className="h-1 bg-gradient-to-r from-accent via-cyan-400 to-accent mb-12 mx-auto max-w-md rounded-full"
          />
        </AnimatePresence>

        {/* Skills Content */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5,
            type: "spring",
            stiffness: 100
          }}
          className="grid md:grid-cols-2 gap-12 mb-20"
        >
          {/* Primary Skills */}
          <div>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="p-2 bg-accent/10 rounded-full"
              >
                <FiCode className="text-accent" />
              </motion.div>
              <h3 className="text-2xl font-bold text-text-primary">
                Core Expertise
              </h3>
            </motion.div>
            
            <motion.div 
              className="grid sm:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="initial"
              animate="animate"
            >
              {active.primary.map((skill, index) => (
                <motion.div
                  key={skill}
                  custom={index}
                  variants={skillCardVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className={`relative bg-secondary/40 border rounded-xl p-5 transition-all duration-300 cursor-default
                    ${hoveredSkill === skill ? 'border-accent bg-accent/10' : 'border-accent/10'}`}
                >
                  {/* Glow effect on hover */}
                  {hoveredSkill === skill && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent rounded-xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  <div className="flex items-center justify-between relative z-10">
                    <span className="code-font text-lg font-medium text-text-primary">
                      {skill}
                    </span>
                    
                    {/* Animated icon */}
                    <motion.div
                      animate={{ 
                        rotate: hoveredSkill === skill ? 360 : 0,
                        scale: hoveredSkill === skill ? 1.2 : 1
                      }}
                      transition={{ duration: 0.5 }}
                      className="text-accent"
                    >
                      {getSkillIcon(skill)}
                    </motion.div>
                  </div>
                  
                  {/* Animated progress line (just decorative) */}
                  <motion.div 
                    className="h-1 bg-gradient-to-r from-accent to-transparent rounded-full mt-3"
                    initial={{ width: 0 }}
                    animate={{ width: hoveredSkill === skill ? '100%' : '70%' }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Secondary Skills */}
          <div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 mb-8"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="p-2 bg-accent/10 rounded-full"
              >
                <FiTool className="text-accent" />
              </motion.div>
              <h3 className="text-2xl font-bold text-text-primary">
                Additional Skills
              </h3>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-3"
              variants={containerVariants}
              initial="initial"
              animate="animate"
            >
              {active.secondary.map((skill, index) => (
                <motion.div
                  key={skill}
                  custom={index}
                  variants={secondarySkillVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className={`px-5 py-3 rounded-full border text-sm code-font transition-all duration-300 cursor-default
                    ${hoveredSkill === skill 
                      ? 'bg-accent text-primary border-accent' 
                      : 'bg-accent/10 text-accent border-accent/20'
                    }`}
                >
                  {skill}
                  
                  {/* Floating dot animation */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent"
                    animate={{ 
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.2 
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Note with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative max-w-3xl mx-auto p-8 rounded-2xl overflow-hidden group"
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ 
              backgroundSize: '200% 200%'
            }}
          />
          
          {/* Border animation */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: 'linear-gradient(90deg, #64ffda, #00ff88, #64ffda)',
              backgroundSize: '200% 100%'
            }}
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 0%']
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="absolute inset-[1px] bg-primary rounded-2xl"></div>
          </motion.div>
          
          <div className="relative z-10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -right-6 text-6xl opacity-10"
            >
              ⚡
            </motion.div>
            
            <p className="text-text-secondary text-lg text-center leading-relaxed">
              I focus on writing <span className="text-accent font-semibold">clean, scalable, production-ready code</span>, 
              following best practices, performance optimization, and maintainable architecture. 
              Every project is an opportunity to push boundaries and create exceptional user experiences.
            </p>
            
            <motion.div
              className="flex items-center justify-center gap-2 mt-6 text-accent"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <div className="w-2 h-2 rounded-full bg-accent"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating elements */}
        {isMounted && (
          <div className="absolute left-10 top-1/4 pointer-events-none">
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-2xl text-accent/30"
            >
              {"</>"}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

// Helper function for skill icons
const getSkillIcon = (skill) => {
  const icons = {
    'React.js': '⚛️',
    'Next.js': '▲',
    'JavaScript': 'JS',
    'TypeScript': 'TS',
    'Tailwind CSS': 'TW',
    'Redux Toolkit': '🔄',
    'Framer Motion': '🎬',
    'HTML': '🌐',
    'CSS': '🎨',
    'Node.js': '🟢',
    'Express.js': '🚂',
    'REST APIs': '🔗',
    'Python': '🐍',
    'FastAPI': '⚡',
    'Authentication': '🔐',
    'Microservices': '🧩',
    'GraphQL': '📊',
    'NestJS': '🪹',
    'Django': '🐍',
    'Docker': '🐳',
    'AWS': '☁️',
    'CI/CD': '🔄',
    'Kubernetes': '⚓',
    'Redis': '🔴',
    'Nginx': '⚡',
    'Server Deployment': '🚀',
    'Terraform': '🏗️',
    'Jenkins': '🤖',
    'Serverless': '⚡',
    'Git': '📝',
    'MongoDB': '🍃',
    'MySQL': '🐬',
    'PostgreSQL': '🐘',
    'Postman': '📮',
    'Linux': '🐧',
    'VS Code': '💻',
    'Jira': '🎯',
    'Docker Compose': '🐋',
    'Vue.js': 'V',
  };
  
  return icons[skill] || '💻';
};

export default Skills;