'use client';

import { motion } from 'framer-motion';
import { Mail, GitBranch, Send, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { useState, FormEvent, ChangeEvent } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contacts() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Валидация имени
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) return 'Name is required';
    if (name.trim().length < 2) return 'Name must be at least 2 characters';
    if (!/^[a-zA-Z\s]+$/.test(name)) return 'Name can only contain letters';
    return undefined;
  };

  // Валидация email
  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email';
    return undefined;
  };

  // Валидация сообщения
  const validateMessage = (message: string): string | undefined => {
    if (!message.trim()) return 'Message is required';
    if (message.trim().length < 10) return 'Message must be at least 10 characters';
    if (message.trim().length > 500) return 'Message must be less than 500 characters';
    return undefined;
  };

  // Валидация всей формы
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      message: validateMessage(formData.message),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== undefined);
  };

  // Обработка изменения полей
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Валидация в реальном времени (после первого ввода)
    if (Object.keys(errors).length > 0) {
      if (name === 'name') setErrors(prev => ({ ...prev, name: validateName(value) }));
      if (name === 'email') setErrors(prev => ({ ...prev, email: validateEmail(value) }));
      if (name === 'message') setErrors(prev => ({ ...prev, message: validateMessage(value) }));
    }
  };

// Обработка отправки формы
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (error: any) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
          <p className="text-forest-200 text-lg text-center">
            Have a question or want to work together? I'd love to hear from you!
          </p>
        </motion.div>

        {/* Контент - две колонки */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Левая колонка - контактная информация */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
                className="group flex items-center gap-4 bg-forest-800/50 border border-forest-700/50 rounded-lg p-4 hover:bg-forest-700/50 hover:border-forest-500/50 transition-all duration-300"
                whileHover={{ x: 8 }}
              >
                <div className="w-12 h-12 bg-forest-600/30 rounded-lg flex items-center justify-center group-hover:bg-forest-500/30 group-hover:scale-110 transition-all duration-300">
                  <Mail size={24} className="text-forest-200 group-hover:text-forest-100 transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-forest-200 text-sm font-medium">Email</p>
                  <a href="mailto:alina@example.com" className="text-forest-100 hover:text-forest-400 transition-colors">
                    alina@example.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="group flex items-center gap-4 bg-forest-800/50 border border-forest-700/50 rounded-lg p-4 hover:bg-forest-700/50 hover:border-forest-500/50 transition-all duration-300"
                whileHover={{ x: 8 }}
              >
                <div className="w-12 h-12 bg-forest-600/30 rounded-lg flex items-center justify-center group-hover:bg-forest-500/30 group-hover:scale-110 transition-all duration-300">
                  <GitBranch size={24} className="text-forest-200 group-hover:text-forest-100 transition-colors duration-300" />
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
                className="group flex items-center gap-4 bg-forest-800/50 border border-forest-700/50 rounded-lg p-4 hover:bg-forest-700/50 hover:border-forest-500/50 transition-all duration-300"
                whileHover={{ x: 8 }}
              >
                <div className="w-12 h-12 bg-forest-600/30 rounded-lg flex items-center justify-center group-hover:bg-forest-500/30 group-hover:scale-110 transition-all duration-300">
                  <MapPin size={24} className="text-forest-200 group-hover:text-forest-100 transition-colors duration-300" />
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
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-forest-800/50 border border-forest-700/50 rounded-xl p-6 sm:p-8">
              {/* Имя */}
              <div>
                <label htmlFor="name" className="block text-forest-200 text-sm font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-forest-900/50 border rounded-lg text-forest-100 placeholder-forest-500 focus:outline-none focus:ring-1 transition-all duration-300 ${
                    errors.name 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                      : 'border-forest-700 focus:border-forest-400 focus:ring-forest-400'
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs mt-1 flex items-center gap-1"
                  >
                    <AlertCircle size={12} />
                    {errors.name}
                  </motion.p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-forest-200 text-sm font-medium mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-forest-900/50 border rounded-lg text-forest-100 placeholder-forest-500 focus:outline-none focus:ring-1 transition-all duration-300 ${
                    errors.email 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                      : 'border-forest-700 focus:border-forest-400 focus:ring-forest-400'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs mt-1 flex items-center gap-1"
                  >
                    <AlertCircle size={12} />
                    {errors.email}
                  </motion.p>
                )}
              </div>

              {/* Сообщение */}
              <div>
                <label htmlFor="message" className="block text-forest-200 text-sm font-medium mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-forest-900/50 border rounded-lg text-forest-100 placeholder-forest-500 focus:outline-none focus:ring-1 transition-all duration-300 resize-none ${
                    errors.message 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                      : 'border-forest-700 focus:border-forest-400 focus:ring-forest-400'
                  }`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs mt-1 flex items-center gap-1"
                  >
                    <AlertCircle size={12} />
                    {errors.message}
                  </motion.p>
                )}
                {/* Счётчик символов */}
                <p className="text-forest-500 text-xs mt-1 text-right">
                  {formData.message.length}/500
                </p>
              </div>

              {/* Кнопка отправки */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-forest-400 text-forest-900 font-semibold rounded-lg hover:bg-forest-200 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
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
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-900/50 border border-green-500 rounded-lg flex items-center gap-3"
                >
                  <CheckCircle size={20} className="text-green-400" />
                  <p className="text-green-100 font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </motion.div>
              )}

              {/* Сообщение об ошибке */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-900/50 border border-red-500 rounded-lg flex items-center gap-3"
                >
                  <AlertCircle size={20} className="text-red-400" />
                  <p className="text-red-100 font-medium">
                    Failed to send message. Please try again or email me directly.
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