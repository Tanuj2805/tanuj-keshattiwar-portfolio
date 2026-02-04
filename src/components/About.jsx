import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiTarget, FiAward, FiCode, FiLayers } from 'react-icons/fi';

const About = () => {
 const stats = [
  { value: '3+', label: 'Production Projects', icon: <FiLayers  /> },
  { value: '500+', label: 'DSA Problems Solved', icon: <FiCode /> },
  { value: '15+', label: 'Project Completed', icon: <FiTarget /> }
];


 const technologies = [
  'JavaScript',
  'React',
  'Redux Toolkit',
  'Node.js',
  'Express.js',
  'C++',
  'Python',
  'FastAPI',
  'Java',
  'Spring Boot',
  'MongoDB',
  'MySQL',
  'Oracle',
  'Postgres SQL',
  'Redis',
  'Machine Learning'
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
            <FiUser className="text-accent text-3xl mr-4" />
            <h2 className="text-4xl font-bold">
              <span className="text-accent">01.</span> About Me
            </h2>
            <div className="ml-8 h-px flex-1 bg-gradient-to-r from-accent to-transparent"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-secondary/50 rounded-xl p-8 hover-card">
                <h3 className="text-2xl font-bold mb-6 gradient-text">My Journey</h3>
                <p className="text-text-secondary mb-6">
                  I’m a Full Stack Software Developer with hands-on experience working on real-world web applications. My journey began during my diploma in Information Technology, where I started building small projects and strengthening my fundamentals in programming and web development. Over time, I progressed to working on live production systems, contributing to scalable frontend workflows and efficient backend integrations.

                </p>
                <p className="text-text-secondary mb-6">
                  I primarily work with modern JavaScript-based stacks, including React and Node.js, and have experience building full-stack applications using technologies like Express, MongoDB, and Spring Boot. Currently, I’m focused on improving my system design skills, exploring cloud-native development, and building reliable, performance-oriented applications that solve real problems.

                </p>
                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-4">Current Focus</h4>
                  <div className="flex items-center space-x-4">
                    <div className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm code-font">
                      Angular.js
                    </div>
                    <div className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm code-font">
                      AWS
                    </div>
                    <div className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm code-font">
                      Next.js
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-3 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-secondary/30 rounded-lg p-6 text-center hover-card"
                  >
                    <div className="text-accent text-2xl mb-2 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold mb-2 gradient-text">{stat.value}</div>
                    <div className="text-text-secondary text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-secondary/50 rounded-xl p-8 hover-card">
                <h4 className="text-xl font-semibold mb-6">Tech Stack</h4>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-2 bg-primary border border-accent/20 rounded-lg text-sm code-font hover:border-accent/50 transition-colors duration-300 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Coding Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-accent/10 to-transparent border-l-4 border-accent p-8 rounded-r-xl"
          >
            <h4 className="text-2xl font-bold mb-4">Coding Philosophy</h4>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h5 className="text-lg font-semibold text-accent">Clean Code</h5>
                <p className="text-text-secondary">
                  Writing maintainable, readable code that stands the test of time
                </p>
              </div>
              <div className="space-y-4">
                <h5 className="text-lg font-semibold text-accent">Performance</h5>
                <p className="text-text-secondary">
                  Optimizing for speed and efficiency at every layer
                </p>
              </div>
              <div className="space-y-4">
                <h5 className="text-lg font-semibold text-accent">Innovation</h5>
                <p className="text-text-secondary">
                  Embracing new technologies while respecting proven patterns
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;