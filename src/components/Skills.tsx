'use client';

import { motion, AnimatePresence } from 'framer-motion';
import PixelLeafBar from '@/components/ui/PixelLeafBar';
import { useState } from 'react';

const skills = [
  { 
    name: 'Next.js', 
    percentage: 90,
    description: 'React-фреймворк для создания быстрых SEO-оптимизированных веб-приложений с серверным рендерингом и статической генерацией.'
  },
  { 
    name: 'React', 
    percentage: 95,
    description: 'JavaScript-библиотека для создания пользовательских интерфейсов. Позволяет строить компоненты и управлять состоянием приложения.'
  },
  { 
    name: 'TypeScript', 
    percentage: 85,
    description: 'Типизированный JavaScript. Добавляет статическую типизацию для обнаружения ошибок на этапе разработки и улучшения автодополнения.'
  },
  { 
    name: 'Tailwind CSS', 
    percentage: 90,
    description: 'Utility-first CSS-фреймворк для быстрой стилизации. Позволяет создавать дизайн прямо в HTML с помощью готовых классов.'
  },
  { 
    name: 'JavaScript', 
    percentage: 95,
    description: 'Основной язык веб-разработки. Используется для создания интерактивности на фронтенде и серверной логики на Node.js.'
  },
  { 
    name: 'HTML/CSS', 
    percentage: 95,
    description: 'Фундаментальные технологии веб-разработки. HTML структурирует контент, CSS отвечает за визуальное оформление.'
  },
  { 
    name: 'Git/GitHub', 
    percentage: 80,
    description: 'Система контроля версий (Git) и платформа для хостинга кода (GitHub). Essential для командной разработки и отслеживания изменений.'
  },
  { 
    name: 'Framer Motion', 
    percentage: 75,
    description: 'Библиотека анимаций для React. Позволяет создавать плавные и сложные анимации с простым декларативным API.'
  },
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<typeof skills[0] | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleCardClick = (skill: typeof skills[0], index: number) => {
    setSelectedSkill(skill);
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedSkill(null);
    setSelectedIndex(null);
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-24 bg-gradient-to-b from-forest-800 to-forest-900"
    >
      <div className="w-full px-6 sm:px-8 lg:px-10 max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: -15 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-forest-100 mb-4">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-forest-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Подзаголовок */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: -10 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-forest-200 text-lg text-center">
            Technologies and tools I work with on a daily basis
          </p>
        </motion.div>

        {/* Сетка навыков с описанием */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="relative">
              {/* Карточка навыка */}
              <motion.div
                className="group bg-forest-800/50 border border-forest-700/50 rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center hover:bg-forest-700/50 hover:border-forest-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-forest-900/30 hover:-translate-y-1 cursor-pointer min-h-[140px] sm:min-h-[160px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleCardClick(skill, index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <PixelLeafBar
                  percentage={skill.percentage}
                  label={skill.name}
                  delay={index * 0.1}
                />
                
                {/* Индикатор кликабельности - маленькая точка снизу */}
                <div className="mt-3 sm:mt-4 flex items-center gap-1.5 sm:gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-forest-500 text-xs">Click</span>
                  <span className="w-1.5 h-1.5 bg-forest-400 rounded-full animate-pulse" />
                </div>
              </motion.div>

              {/* Всплывающее окно (внутри той же ячейки сетки) */}
              <AnimatePresence>
                {selectedSkill && selectedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 right-0 mt-4 z-20"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="bg-forest-800 border border-forest-600 rounded-xl p-4 shadow-2xl shadow-forest-900/50">
                      {/* Заголовок */}
                      <h3 className="text-lg font-serif font-bold text-forest-100 mb-2">
                        {selectedSkill.name}
                      </h3>

                      {/* Описание */}
                      <p className="text-forest-200 text-sm leading-relaxed mb-3">
                        {selectedSkill.description}
                      </p>

                      {/* Прогресс бар */}
                      <div>
                        <div className="flex justify-between text-xs text-forest-300 mb-1">
                          <span>Proficiency</span>
                          <span>{selectedSkill.percentage}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-forest-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${selectedSkill.percentage}%` }}
                            transition={{ duration: 0.5 }}
                            className="h-full bg-gradient-to-r from-forest-400 to-forest-200 rounded-full"
                          />
                        </div>
                      </div>

                      {/* Стрелочка вверх к карточке */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-forest-800 border-t border-l border-forest-600 rotate-45" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 15 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-forest-200 text-lg text-center">
            I'm constantly learning and improving my skills. Always open to new 
            technologies and challenges that help me grow as a developer.
          </p>
        </motion.div>
      </div>

      {/* Затемнение фона для закрытия по клику */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-[1px] z-10"
          />
        )}
      </AnimatePresence>
    </section>
  );
}