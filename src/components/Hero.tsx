'use client';

import { motion } from 'framer-motion';
import { ChevronDown, GitBranch, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-forest-900 to-forest-700 py-20"
      style={{
        backgroundImage: `url('images/hero-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Затемняющий оверлей */}
      <div className="absolute inset-0 bg-forest-900/60 backdrop-blur-[2px]" />
      
      {/* Анимированные круги на фоне */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-forest-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-forest-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Контент с увеличенными отступами */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Приветствие */}
        <motion.p
          className="text-forest-200 text-lg sm:text-xl md:text-2xl mb-10 font-medium tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          Hello, my name is
        </motion.p>

        {/* Имя */}
        <motion.h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold text-forest-100 mb-12 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: -10 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Alina
        </motion.h1>

        {/* Описание */}
        <motion.p
          className="text-forest-200 text-xl sm:text-2xl md:text-3xl mb-20 max-w-3xl mx-auto font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: -10 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Frontend Developer <span className="text-forest-400">|</span> Next.js • TypeScript • React
        </motion.p>

        {/* Кнопки */}
        <motion.div
          className="flex flex-col sm:flex-row gap-10 justify-center items-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="#projects"
            className="group relative px-12 py-5 bg-forest-400 text-forest-900 font-semibold rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-forest-400/50 hover:shadow-xl text-lg sm:text-xl min-w-[220px] text-center"
          >
            <span className="relative z-10">View My Work</span>
            {/* Градиент при наведении */}
            <span className="absolute inset-0 bg-gradient-to-r from-forest-400 via-forest-200 to-forest-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href="#contacts"
            className="group relative px-12 py-5 border-2 border-forest-400 text-forest-400 font-semibold rounded-lg overflow-hidden transition-all duration-300 text-lg sm:text-xl min-w-[220px] text-center hover:bg-forest-400/10"
          >
            <span className="relative z-10">Get In Touch</span>
            {/* Заполнение при наведении */}
            <span className="absolute inset-0 bg-forest-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </a>
        </motion.div>

        {/* Социальные ссылки */}
        <motion.div
          className="flex gap-12 justify-center items-center mb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="https://github.com/Alinatst"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-forest-200 hover:text-forest-100 transition-all duration-300 p-4 hover:bg-forest-700/50 rounded-full hover:rotate-12 hover:scale-110"
            aria-label="GitHub"
          >
            <GitBranch size={36} className="group-hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href="mailto:alina@example.com"
            className="group text-forest-200 hover:text-forest-100 transition-all duration-300 p-4 hover:bg-forest-700/50 rounded-full hover:-rotate-12 hover:scale-110"
            aria-label="Email"
          >
            <Mail size={36} className="group-hover:scale-110 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>

      {/* Стрелка вниз - кликабельная */}
      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        whileHover={{ y: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={48} className="text-forest-200 hover:text-forest-100 transition-colors" />
        </motion.div>
      </motion.a>
    </section>
  );
}