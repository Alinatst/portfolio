'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Sparkles, Folder, Mail, Sun, Moon } from 'lucide-react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { useTheme } from '@/context/ThemeContext';

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Sparkles },
  { name: 'Projects', href: '#projects', icon: Folder },
  { name: 'Contacts', href: '#contacts', icon: Mail },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Блокируем скролл фона при открытом меню
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-forest-900/95 backdrop-blur-md shadow-lg shadow-forest-900/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Логотип + Theme Toggle */}
          <div className="flex items-center gap-3 lg:gap-4">
            <a 
              href="#home" 
              className="text-forest-100 font-serif text-xl sm:text-2xl font-bold hover:text-forest-200 transition-colors"
            >
              Alina.dev
            </a>
            {/* Theme Toggle - всегда виден, но адаптируется */}
            <div className="scale-75 sm:scale-100">
              <ThemeToggle />
            </div>
          </div>

          {/* Десктопное меню - центрированное через position */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative text-forest-200 hover:text-forest-100 px-6 lg:px-8 py-2 text-sm font-medium transition-all duration-300"
                >
                  {item.name}
                  {/* Подчёркивание при наведении */}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-forest-400 group-hover:w-full transition-all duration-300" />
                  {/* Фоновая подсветка */}
                  <span className="absolute inset-0 bg-forest-700/30 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </a>
              ))}
            </div>
          </div>

          {/* Кнопка мобильного меню */}
          <div className="md:hidden flex items-center gap-4">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-forest-200 hover:text-forest-100 transition-colors p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={28} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={28} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Мобильное меню - улучшенное */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Затемнение фона - закрывает меню при клике */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
            />

            {/* Выпадающее меню - НЕ закрывается при клике на себя */}
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden fixed top-20 left-0 right-0 bg-forest-800/95 backdrop-blur-md border-b border-forest-700/50 z-50 max-h-[calc(100vh-5rem)] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-6 py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsOpen(false);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-center gap-4 text-forest-200 hover:text-forest-100 hover:bg-forest-700/50 px-4 py-4 rounded-lg text-base font-medium transition-all duration-300"
                  >
                    {/* Иконка */}
                    <item.icon 
                      size={22} 
                      className="group-hover:scale-110 group-hover:text-forest-400 transition-all duration-300" 
                    />
                    {/* Название */}
                    <span>{item.name}</span>
                    {/* Стрелочка справа */}
                    <svg 
                      className="ml-auto w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                ))}

                {/* Разделитель */}
                <div className="border-t border-forest-700/50 my-4" />

                {/* Theme Toggle для мобильных */}
                <div className="flex items-center justify-between px-4 py-4">
                  <div className="flex items-center gap-3 text-forest-200">
                    {theme === 'dark' ? (
                      <Moon size={22} className="text-forest-400" />
                    ) : (
                      <Sun size={22} className="text-forest-400" />
                    )}
                    <span className="text-base font-medium">Theme</span>
                  </div>
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}