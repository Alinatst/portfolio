'use client';

import { motion } from 'framer-motion';
import PixelLeafBar from '@/components/ui/PixelLeafBar';

const skills = [
  { name: 'Next.js', percentage: 90 },
  { name: 'React', percentage: 95 },
  { name: 'TypeScript', percentage: 85 },
  { name: 'Tailwind CSS', percentage: 90 },
  { name: 'JavaScript', percentage: 95 },
  { name: 'HTML/CSS', percentage: 95 },
  { name: 'Git/GitHub', percentage: 80 },
  { name: 'Framer Motion', percentage: 75 },
];

export default function Skills() {
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
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-forest-100 mb-4">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-forest-400 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0}}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        >
        <p className="text-forest-200 text-lg">
            Technologies and tools I work with on a daily basis
        </p>
        </motion.div>

        {/* Сетка навыков */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-forest-800/50 border border-forest-700/50 rounded-xl p-6 flex flex-col items-center justify-center hover:bg-forest-700/50 hover:border-forest-600/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PixelLeafBar
                percentage={skill.percentage}
                label={skill.name}
                delay={index * 0.1}
              />
            </motion.div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 60 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        >
        <p className="text-forest-200 text-base sm:text-lg">
            I'm constantly learning and improving my skills. Always open to new 
            technologies and challenges that help me grow as a developer.
        </p>
        </motion.div>
      </div>
    </section>
  );
}