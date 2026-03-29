'use client';

import { motion } from 'framer-motion';
import { Folder, ExternalLink, GitBranch } from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/portfolio';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern online store with cart functionality, payment integration, and admin dashboard. Built with Next.js and Stripe.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/Alinatst',
    gradient: 'from-forest-600 to-forest-400',
    image: `${basePath}/images/projects/project1.jpg`,
  },
  {
    title: 'Task Management App',
    description: 'Productivity application with drag-and-drop functionality, real-time updates, and team collaboration features.',
    technologies: ['React', 'Firebase', 'TypeScript', 'Framer Motion'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/Alinatst',
    gradient: 'from-forest-700 to-forest-500',
    image: `${basePath}/images/projects/project2.jpg`,
  },
  {
    title: 'Weather Dashboard',
    description: 'Interactive weather application with location-based forecasts, interactive maps, and severe weather alerts.',
    technologies: ['Next.js', 'API Integration', 'CSS Modules', 'JavaScript'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/Alinatst',
    gradient: 'from-forest-800 to-forest-600',
    image: `${basePath}/images/projects/project3.jpg`,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-24 bg-gradient-to-b from-forest-800 to-forest-900"
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
            Projects
          </h2>
          <div className="w-24 h-1 bg-forest-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Сетка проектов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative bg-forest-800/50 border border-forest-700/50 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-forest-900/50 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Изображение проекта */}
              <div className="relative overflow-hidden h-48">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`} />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Контент карточки */}
              <div className="p-6">
                {/* Заголовок проекта */}
                <h3 className="text-xl font-bold text-forest-100 mb-3 group-hover:text-forest-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Описание */}
                <p className="text-forest-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Технологии */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-forest-700/50 text-forest-200 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Кнопки действий */}
                <div className="flex gap-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-forest-400 text-forest-900 rounded-lg hover:bg-forest-200 transition-all duration-300 font-medium text-sm"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-forest-400 text-forest-400 rounded-lg hover:bg-forest-400/10 transition-all duration-300 font-medium text-sm"
                  >
                    <GitBranch size={16} />
                    <span>Code</span>
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