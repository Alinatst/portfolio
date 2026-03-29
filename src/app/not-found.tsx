'use client';

import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-forest-900 to-forest-800 px-6">
      <div className="text-center max-w-2xl mx-auto">
        {/* Мем-изображение */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <img
                src="/images/404-meme.jpg"
                alt="404 Meme"
                className="w-64 h-64 mx-auto object-cover rounded-3xl drop-shadow-2xl"
                />
            {/* Анимированные элементы вокруг */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-forest-400/30 rounded-full blur-xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-forest-600/30 rounded-full blur-xl"
              animate={{
                scale: [1.5, 1, 1.5],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>

        {/* Заголовок 404 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-8xl sm:text-9xl font-serif font-bold text-forest-400 mb-4"
        >
          404
        </motion.h1>

        {/* Подзаголовок */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-2xl sm:text-3xl text-forest-200 font-medium mb-4"
        >
          Упс! Страница не найдена
        </motion.p>

        {/* Описание */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-forest-300 text-lg mb-8"
        >
          Похоже, вы заблудились в цифровом лесу... 
          <br />
          Но не волнуйтесь, даже лучший разработчик иногда создаёт 404! 
        </motion.p>

        {/* Кнопки навигации */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="group px-8 py-4 bg-forest-400 text-forest-900 font-semibold rounded-lg hover:bg-forest-200 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <Home size={20} />
            <span>Вернуться на главную</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="group px-8 py-4 border-2 border-forest-400 text-forest-400 font-semibold rounded-lg hover:bg-forest-400/10 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ArrowLeft size={20} />
            <span>Назад</span>
          </button>
        </motion.div>

        {/* Пасхалка */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-forest-500 text-sm mt-12"
        >
          
        </motion.p>
      </div>
    </div>
  );
}