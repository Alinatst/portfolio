'use client';

import { motion } from 'framer-motion';
import { User, Code, Briefcase, GraduationCap } from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/portfolio';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-24 bg-gradient-to-b from-forest-900 to-forest-800"
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
                  src={`${basePath}/images/about-photo.jpg`}
                  alt="Alina - Frontend Developer"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>

          {/* Правая колонка - текст */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <p className="text-forest-200 text-lg leading-relaxed">
                Hi! I'm <span className="text-forest-100 font-semibold">Alina</span>, a passionate Frontend Developer focused on creating beautiful, functional, and user-centered digital experiences.
              </p>
              <p className="text-forest-200 text-lg leading-relaxed">
                I specialize in building responsive web applications using modern technologies like <span className="text-forest-400">Next.js</span>, <span className="text-forest-400">React</span>, and <span className="text-forest-400">TypeScript</span>. My goal is to write clean, efficient code while delivering exceptional user experiences.
              </p>
            </div>

            {/* Карточки с информацией */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <motion.div
                className="bg-forest-800/50 border border-forest-700/50 rounded-lg p-4 text-center hover:bg-forest-700/50 hover:border-forest-500/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <Briefcase size={32} className="text-forest-400 mx-auto mb-2" />
                <h3 className="text-forest-100 font-semibold mb-1">Experience</h3>
                <p className="text-forest-300 text-sm">Frontend Development</p>
              </motion.div>

              <motion.div
                className="bg-forest-800/50 border border-forest-700/50 rounded-lg p-4 text-center hover:bg-forest-700/50 hover:border-forest-500/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <Code size={32} className="text-forest-400 mx-auto mb-2" />
                <h3 className="text-forest-100 font-semibold mb-1">Stack</h3>
                <p className="text-forest-300 text-sm">Main Technologies</p>
              </motion.div>

              <motion.div
                className="bg-forest-800/50 border border-forest-700/50 rounded-lg p-4 text-center hover:bg-forest-700/50 hover:border-forest-500/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <GraduationCap size={32} className="text-forest-400 mx-auto mb-2" />
                <h3 className="text-forest-100 font-semibold mb-1">Education</h3>
                <p className="text-forest-300 text-sm">Computer Science</p>
              </motion.div>
            </div>

            {/* Кнопка CTA */}
            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <a
                href="#contacts"
                className="inline-block px-8 py-3 bg-forest-400 text-forest-900 font-semibold rounded-lg hover:bg-forest-200 transition-all duration-300 shadow-lg hover:shadow-xl"
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