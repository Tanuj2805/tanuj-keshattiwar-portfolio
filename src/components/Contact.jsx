import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formData,
        'YOUR_PUBLIC_KEY'
      );
      
      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
const contactInfo = [
  {
    id: 'email',
    label: 'Email',
    value: 'tanujkeshattiwar@example.com',
    link: 'mailto:tanujkeshattiwar@example.com',
    icon: 'email'
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '+91 9405907998',
    link: 'tel:+919405907998',
    icon: 'phone'
  },
  {
    id: 'location',
    label: 'Location',
    value: 'Pune, Maharashtra, India',
    link: 'https://www.google.com/maps/search/?api=1&query=Pune+Maharashtra+India',
    icon: 'location'
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
            <FiMail className="text-accent text-3xl mr-4" />
            <h2 className="text-4xl font-bold">
              <span className="text-accent">05.</span> Get In Touch
            </h2>
            <div className="ml-8 h-px flex-1 bg-gradient-to-r from-accent to-transparent"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">
                Let's Build Something <span className="gradient-text">Amazing</span> Together
              </h3>
              <p className="text-text-secondary text-lg mb-8">
                I'm currently open to new opportunities, whether it's a full-time role,
                contract work, or collaboration on interesting projects. Feel free to
                reach out if you'd like to connect!
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center p-4 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-colors">
                      <span className="text-accent text-xl">
                        {info.label === 'Email' ? '✉️' : 
                         info.label === 'Phone' ? '📱' : '📍'}
                      </span>
                    </div>
                    <div>
                      <div className="text-text-secondary text-sm">{info.label}</div>
                      <div className="text-lg font-semibold">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Availability Status */}
              <div className="bg-gradient-to-r from-accent/10 to-transparent border border-accent/30 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse mr-3"></div>
                  <span className="font-semibold">Currently Available</span>
                </div>
                <p className="text-text-secondary text-sm">
                  I'm actively looking for new opportunities and would love to hear about your project.
                  Typically respond within 24 hours.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-secondary/30 rounded-2xl p-8 hover-card">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-primary border border-accent/20 rounded-lg focus:border-accent focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-primary border border-accent/20 rounded-lg focus:border-accent focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary border border-accent/20 rounded-lg focus:border-accent focus:outline-none transition-colors"
                    placeholder="Project discussion"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-primary border border-accent/20 rounded-lg focus:border-accent focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {/* Status Message */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-4 rounded-lg flex items-center ${
                      status.type === 'success' 
                        ? 'bg-green-500/10 text-green-400 border border-green-500/30' 
                        : 'bg-red-500/10 text-red-400 border border-red-500/30'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <FiCheckCircle className="mr-3" />
                    ) : (
                      <FiAlertCircle className="mr-3" />
                    )}
                    {status.message}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 flex items-center justify-center disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="mr-3" />
                      Send Message
                    </>
                  )}
                </motion.button>

                <p className="text-text-secondary text-sm text-center mt-6">
                  Or email me directly at{' '}
                  <a href="mailto: tanujkeshattiwar@gmail.com" className="text-accent hover:underline">
                    tanujkeshattiwar@gmail.com
                  </a>
                </p>
              </form>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <h3 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h3>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Whether you need a full-scale application, consultation, or just want to
              chat about technology, I'm here to help.
            </p>
           
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;