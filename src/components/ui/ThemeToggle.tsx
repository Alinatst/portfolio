'use client';

import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-7 bg-forest-700 rounded-full p-1 flex items-center transition-colors duration-300 hover:bg-forest-600"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {/* Кружок переключателя */}
      <motion.div
        className="w-5 h-5 bg-forest-100 rounded-full flex items-center justify-center shadow-md"
        animate={{ x: theme === 'dark' ? 0 : 28 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {/* Иконка внутри кружка */}
        {theme === 'dark' ? (
          <Moon size={12} className="text-forest-700" />
        ) : (
          <Sun size={12} className="text-forest-700" />
        )}
      </motion.div>
    </motion.button>
  );
}