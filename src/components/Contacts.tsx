'use client';

import { motion } from 'framer-motion';
import { Mail, GitBranch, Send, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки (для реальной формы используйте EmailJS или Formspree)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    
    // Сброс сообщения через 5 секунд
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contacts"
      className="min-h-screen flex items-center justify-center py-24 bg-gradient-to-b from-forest-800 to-forest-900"
    >
      <div className="w-full px-6 sm:px-8 lg:px-10 max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-forest-100 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-forest-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Подзаголовок */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-forest-200 text-lg">
            Have a question or want to work together? I'd love to hear from you!
          </p>
        </motion.div>

        {/* Контент - две колонки */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Левая колонка - контактная информация */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-forest-100">
                Contact Information
              </h3>
              <p className="text-forest-200 text-base sm:text-lg leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or 
                opportunities to be part of your visions. Feel free to reach out!
              </p>
            </div>

            {/* Контактные карточки */}
            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-4 bg-forest-800/50 border border-forest-700/50 rounded-lg p-4 hover:bg-forest-700/50 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-16 h-12 bg-forest-600/30 rounded-lg flex items-center justify-center">
                  <Mail size={24} className="text-forest-200" />
                </div>
                <div>
                  <p className="text-forest-200 text-sm font-medium">Email</p>
                  <a href="mailto:alina@example.com" className="text-forest-100 hover:text-forest-400 transition-colors">
                    alina@example.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 bg-forest-800/50 border border-forest-700/50 rounded-lg p-4 hover:bg-forest-700/50 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-16 h-12 bg-forest-600/30 rounded-lg flex items-center justify-center">
                  <GitBranch size={24} className="text-forest-200" />
                </div>
                <div>
                  <p className="text-forest-200 text-sm font-medium">GitHub</p>
                  <a 
                    href="https://github.com/Alinatst" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-forest-100 hover:text-forest-400 transition-colors"
                  >
                    github.com/Alinatst
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 bg-forest-800/50 border border-forest-700/50 rounded-lg p-4 hover:bg-forest-700/50 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-16 h-12 bg-forest-600/30 rounded-lg flex items-center justify-center">
                  <MapPin size={24} className="text-forest-200" />
                </div>
                <div>
                  <p className="text-forest-200 text-sm font-medium">Location</p>
                  <p className="text-forest-100">Remote / Worldwide</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Правая колонка - форма обратной связи */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-forest-800/50 border border-forest-700/50 rounded-xl p-6 sm:p-8">
              {/* Имя */}
              <div>
                <label htmlFor="name" className="block text-forest-200 text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-forest-900/50 border border-forest-700 rounded-lg text-forest-100 placeholder-forest-500 focus:outline-none focus:border-forest-400 focus:ring-1 focus:ring-forest-400 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-forest-200 text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-forest-900/50 border border-forest-700 rounded-lg text-forest-100 placeholder-forest-500 focus:outline-none focus:border-forest-400 focus:ring-1 focus:ring-forest-400 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              {/* Сообщение */}
              <div>
                <label htmlFor="message" className="block text-forest-200 text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-forest-900/50 border border-forest-700 rounded-lg text-forest-100 placeholder-forest-500 focus:outline-none focus:border-forest-400 focus:ring-1 focus:ring-forest-400 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Кнопка отправки */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-forest-400 text-forest-900 font-semibold rounded-lg hover:bg-forest-200 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-forest-900 border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Сообщение об успешной отправке */}
              {submitted && (
                <motion.div
                  className="p-4 bg-forest-700/50 border border-forest-500 rounded-lg text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-forest-100 font-medium">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}