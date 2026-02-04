import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiExternalLink } from 'react-icons/fi';

const Experience = () => {
  const [activeExp, setActiveExp] = useState(0);

  const experiences = [
     {
  company: 'KodeCompiler',
  position: 'Full Stack Software Developer Intern',
  period: 'Dec 2025 – Present',
  location: 'Remote / India',
  description:
    'Worked on a live, high-traffic coding platform, contributing to frontend workflows and backend integrations for core features and the Interview Pro B2B product.',
  achievements: [
    'Built and optimized frontend UI workflows for practice problems, contests, and interview setup using React',
    'Reduced redundant API requests by 30–40% by optimizing Redux state management and eliminating unnecessary re-fetches',
    'Improved UI data consistency by implementing centralized state management with Redux Toolkit',
    'Contributed to multiple production releases, reducing UI-related bug reports by approximately 25%'
  ],
  technologies: [
    'React',
    'Redux Toolkit',
    'JavaScript',
    'Node.js',
    'FastAPI',
    'Redis'
  ],
  website: 'https://www.kodecompiler.com/'
},
   {
  company: 'Compilers Technologies',
  position: 'Industrial Training Trainee',
  period: 'June 2023 – Aug 2023',
  location: 'Amravati, India',
  description:
    'Completed industrial training focused on Java-based web development, learning core backend concepts and applying them in a real-world project.',
  achievements: [
    'Learned and implemented Java backend fundamentals including JDBC and Servlets',
    'Developed a Blood Bank Donation website for Donation Camp to maintain donors data and collected blood till yet',
    'Designed backend logic for donor registration, request handling, and data persistence',
    'Gained hands-on experience with database connectivity and server-side processing'
  ],
  technologies: [
    'Java',
    'Swing',
    'JDBC',
    'Servlets',
    'HTML',
    'CSS',
    'MySQL'
  ],
 
}
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center mb-12">
            <FiBriefcase className="text-accent text-3xl mr-4" />
            <h2 className="text-4xl font-bold">
              <span className="text-accent">03.</span> Professional Experience
            </h2>
            <div className="ml-8 h-px flex-1 bg-gradient-to-r from-accent to-transparent"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Timeline Navigation */}
            <div className="lg:w-1/3">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-px bg-accent/30"></div>
                {experiences.map((exp, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveExp(index)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-center w-full text-left p-6 mb-4 rounded-xl transition-all duration-300 ${
                      activeExp === index
                        ? 'bg-accent/10 border-2 border-accent'
                        : 'bg-secondary/30 hover:bg-secondary/50'
                    }`}
                  >
                    <div className={`absolute left-8 w-4 h-4 rounded-full border-2 ${
                      activeExp === index ? 'bg-accent border-accent' : 'bg-primary border-accent/50'
                    }`}></div>
                    <div className="ml-12">
                      <div className="flex items-center mb-2">
                        <FiCalendar className="text-accent mr-2" />
                        <span className="text-sm text-accent">{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{exp.company}</h3>
                      <p className="text-text-secondary">{exp.position}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Experience Details */}
            <div className="lg:w-2/3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExp}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-secondary/30 rounded-2xl p-8 hover-card"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{experiences[activeExp].company}</h3>
                      <p className="text-xl text-accent mb-2">{experiences[activeExp].position}</p>
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center text-text-secondary">
                          <FiCalendar className="mr-2" />
                          {experiences[activeExp].period}
                        </div>
                        <div className="flex items-center text-text-secondary">
                          <FiMapPin className="mr-2" />
                          {experiences[activeExp].location}
                        </div>
                      </div>
                    </div>
                    {experiences[activeExp].website?<div className="mt-4 lg:mt-0">
                      <button className="px-6 py-2 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors duration-300 flex items-center"  onClick={() => window.open(experiences[activeExp].website, '_blank')}>
                        <FiExternalLink className="mr-2" />
                        Visit Website
                      </button>
                    </div>:<></>}
                    
                  </div>

                  <p className="text-text-secondary text-lg mb-8">
                    {experiences[activeExp].description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4">Key Achievements</h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {experiences[activeExp].achievements.map((achievement, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <span className="text-accent mr-3 mt-1">▸</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {experiences[activeExp].technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="px-4 py-2 bg-primary border border-accent/20 rounded-lg code-font hover:border-accent/50 transition-colors duration-300 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-3xl font-bold mb-8 text-center">Education</h3>
            <div className="grid md:grid-cols-2 gap-6">
  
  {/* B.Tech */}
  <div className="bg-secondary/30 p-6 rounded-xl hover-card">
    <div className="text-accent text-2xl mb-4">🎓</div>
    <h4 className="text-xl font-semibold mb-1">
      Bachelor of Computer Engineering
    </h4>
    <p className="text-text-secondary mb-3">
      Vishwakarma Institute of Technology, Pune
    </p>

    <div className="flex justify-between text-sm text-accent">
      <span>CGPA: 9.21</span>
      <span>2024 – 2027</span>
    </div>
  </div>

  {/* Diploma */}
  <div className="bg-secondary/30 p-6 rounded-xl hover-card">
    <div className="text-accent text-2xl mb-4">🎓</div>
    <h4 className="text-xl font-semibold mb-1">
      Diploma in Information Technology
    </h4>
    <p className="text-text-secondary mb-3">
      Government Polytechnic, Amravati
    </p>

    <div className="flex justify-between text-sm text-accent">
      <span>Percentage: 95.16%</span>
      <span>2021 – 2024</span>
    </div>
  </div>

</div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;