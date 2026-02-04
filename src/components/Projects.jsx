import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder, FiStar } from 'react-icons/fi';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: true
    },
    {
      title: 'Real-Time Chat App',
      description: 'Scalable chat application with WebSocket support, file sharing, and video calls.',
      image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w-800',
      tags: ['Socket.io', 'React', 'Express', 'WebRTC'],
      github: 'https://github.com',
      live: 'https://demo.com'
    },
    {
      title: 'AI Content Generator',
      description: 'AI-powered content creation platform with GPT integration and analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
      tags: ['Python', 'FastAPI', 'OpenAI', 'Next.js'],
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: true
    },
    {
      title: 'Health & Fitness Tracker',
      description: 'Mobile-first fitness tracking application with workout plans and progress analytics.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
      tags: ['React Native', 'Firebase', 'Chart.js', 'Redux'],
      github: 'https://github.com',
      live: 'https://demo.com'
    },
    {
      title: 'DevOps Dashboard',
      description: 'Centralized dashboard for monitoring and managing cloud infrastructure and deployments.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      tags: ['AWS', 'Docker', 'Kubernetes', 'Grafana'],
      github: 'https://github.com',
      live: 'https://demo.com'
    },
    {
      title: 'Blockchain Explorer',
      description: 'Real-time blockchain data visualization and transaction monitoring tool.',
      image: 'https://images.unsplash.com/photo-1621570171894-8c48d2d8f8b9?w=800',
      tags: ['Ethereum', 'Web3.js', 'Express', 'D3.js'],
      github: 'https://github.com',
      live: 'https://demo.com'
    }
  ];

  const filters = ['all', 'fullstack', 'frontend', 'backend', 'mobile'];

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
            <FiFolder className="text-accent text-3xl mr-4" />
            <h2 className="text-4xl font-bold">
              <span className="text-accent">04.</span> Featured Projects
            </h2>
            <div className="ml-8 h-px flex-1 bg-gradient-to-r from-accent to-transparent"></div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-accent text-primary'
                    : 'bg-secondary/50 text-text-secondary hover:bg-secondary'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <FiStar className="text-accent mr-3" />
              Highlighted Work
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.filter(p => p.featured).map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className="bg-secondary/30 rounded-2xl overflow-hidden hover-card">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60"></div>
                      <div className="absolute top-4 right-4 flex space-x-3">
                        <a 
                          href={project.github}
                          className="p-2 bg-primary/80 backdrop-blur-sm rounded-full hover:bg-accent hover:text-primary transition-colors duration-300"
                        >
                          <FiGithub />
                        </a>
                        <a 
                          href={project.live}
                          className="p-2 bg-primary/80 backdrop-blur-sm rounded-full hover:bg-accent hover:text-primary transition-colors duration-300"
                        >
                          <FiExternalLink />
                        </a>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
                      <p className="text-text-secondary mb-6">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-primary border border-accent/20 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* All Projects Grid */}
          <div>
            <h3 className="text-2xl font-bold mb-8">All Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-secondary/30 rounded-xl p-6 h-full hover-card">
                    <div className="flex justify-between items-start mb-6">
                      <div className="text-3xl text-accent">
                        <FiFolder />
                      </div>
                      <div className="flex space-x-3">
                        <a href={project.github} className="text-text-secondary hover:text-accent transition-colors">
                          <FiGithub />
                        </a>
                        <a href={project.live} className="text-text-secondary hover:text-accent transition-colors">
                          <FiExternalLink />
                        </a>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-text-secondary text-sm mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-primary border border-accent/10 rounded text-xs code-font">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-accent/10 to-transparent border-l-4 border-accent p-8 rounded-r-2xl"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">Open Source Contributions</h3>
                <p className="text-text-secondary">
                  Active contributor to various open-source projects. Check out my GitHub for more projects and contributions.
                </p>
              </div>
              <a
                href="https://github.com/tanuj2805"
                className="mt-6 lg:mt-0 px-8 py-3 bg-accent text-primary font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 flex items-center"
              >
                <FiGithub className="mr-3" />
                View GitHub Profile
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;