'use client';

import { motion } from 'framer-motion';
import { User, Code, Briefcase, Award } from 'lucide-react';

const experiences = [
  {
    icon: <Briefcase size={24} />,
    title: 'Experience',
    description: 'Frontend Development',
    details: '2+ years of experience building modern web applications',
  },
  {
    icon: <Code size={24} />,
    title: 'Stack',
    description: 'Main Technologies',
    details: 'Next.js, React, TypeScript, Tailwind CSS',
  },
  {
    icon: <Award size={24} />,
    title: 'Education',
    description: 'Computer Science',
    details: 'Bachelor degree in Software Engineering',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-24 bg-gradient-to-b from-forest-700 to-forest-800"
    >
      <div className="w-full px-6 sm:px-8 lg:px-10 max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-forest-100 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-forest-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Контент - две колонки */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Левая колонка - изображение/аватар */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Рамка вокруг аватара */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-forest-400/50 shadow-2xl">
              <img
                src="https://alinatst.github.io/portfolio/images/about-photo.jpg"
                alt="Alina - Frontend Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

          {/* Правая колонка - текст */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Приветственный текст */}
            <div className="space-y-6">
              <p className="text-forest-200 text-lg sm:text-xl leading-relaxed">
                Hi! I'm <span className="text-forest-100 font-semibold">Alina</span>, a passionate 
                Frontend Developer focused on creating beautiful, functional, and user-centered 
                digital experiences.
              </p>
              <p className="text-forest-200 text-lg sm:text-xl leading-relaxed">
                I specialize in building responsive web applications using modern technologies 
                like <span className="text-forest-400 font-medium">Next.js</span>, 
                <span className="text-forest-400 font-medium"> React</span>, and 
                <span className="text-forest-400 font-medium"> TypeScript</span>. 
                My goal is to write clean, efficient code while delivering exceptional user experiences.
              </p>
            </div>

            {/* Карточки с опытом */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {experiences.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="bg-forest-800/50 border border-forest-600/50 rounded-lg p-4 text-center hover:bg-forest-700/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-forest-400 flex justify-center mb-2">{item.icon}</div>
                  <h3 className="text-forest-100 font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-forest-200 text-xs">{item.description}</p>
                </motion.div>
              ))}
            </div>

                        {/* Кнопка - по центру с отступом */}
            <motion.div
              className="flex justify-center pt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 10 }}
              transition={{ duration: 0.4, delay: 1 }}
              viewport={{ once: true }}
            >
              <a
                href="#contacts"
                className="inline-block px-10 py-4 bg-forest-400 text-forest-900 font-semibold rounded-lg hover:bg-forest-200 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                Let's Work Together
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}