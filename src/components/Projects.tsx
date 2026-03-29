'use client';

import { motion } from 'framer-motion';
import { Folder, ExternalLink, GitBranch } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern online store with cart functionality, payment integration, and admin dashboard. Built with Next.js and Stripe.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/Alinatst',
    gradient: 'from-forest-600 to-forest-400',
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/projects/project1.jpg`,
  },
  {
    title: 'Task Management App',
    description: 'Productivity application with drag-and-drop functionality, real-time updates, and team collaboration features.',
    technologies: ['React', 'Firebase', 'TypeScript', 'Framer Motion'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/Alinatst',
    gradient: 'from-forest-700 to-forest-500',
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/projects/project2.jpg`,
  },
  {
    title: 'Weather Dashboard',
    description: 'Interactive weather application with location-based forecasts, interactive maps, and severe weather alerts.',
    technologies: ['Next.js', 'API Integration', 'CSS Modules', 'JavaScript'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/Alinatst',
    gradient: 'from-forest-800 to-forest-600',
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/projects/project3.jpg`,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-24 bg-gradient-to-b from-forest-900 to-forest-800"
    >
      <div className="w-full px-6 sm:px-8 lg:px-10 max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: -20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-forest-100 mb-4">
            My Projects
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
          <p className="text-forest-200 text-lg">
            A selection of my recent work and personal projects
          </p>
        </motion.div>

        {/* Сетка проектов - 3 колонки на десктопе */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group bg-forest-800/50 border border-forest-700/50 rounded-xl overflow-hidden hover:bg-forest-700/50 hover:border-forest-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-forest-900/50 hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Карточка проекта */}
              <div className="p-6 flex flex-col h-full">
                {/* Изображение проекта */}
                <div className="mb-4 rounded-lg overflow-hidden border border-forest-700/50 group-hover:border-forest-500/50 transition-colors duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Иконка папки с градиентом */}
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <Folder size={28} className="text-forest-100" />
                </div>

                {/* Название проекта */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-forest-100 mb-3 group-hover:text-forest-200 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Описание */}
                <p className="text-forest-200 text-sm sm:text-base leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Теги технологий */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-forest-700/50 text-forest-200 text-xs font-medium rounded-full border border-forest-600/30 group-hover:bg-forest-600/50 group-hover:border-forest-500/50 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Ссылки на демо и GitHub */}
                <div className="flex gap-4 pt-4 border-t border-forest-700/50 group-hover:border-forest-600/50 transition-colors duration-300">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-forest-200 hover:text-forest-100 transition-colors text-sm font-medium group/link"
                  >
                    <ExternalLink size={16} className="group-hover/link:scale-110 transition-transform duration-300" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-forest-200 hover:text-forest-100 transition-colors text-sm font-medium group/link"
                  >
                    <GitBranch size={16} className="group-hover/link:scale-110 transition-transform duration-300" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}