'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contacts', label: 'Contacts' },
];

export default function SectionDots() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-3">
        {sections.map((section) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Scroll to ${section.label}`}
          >
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-forest-400 scale-125'
                  : 'bg-forest-600/50 hover:bg-forest-500'
              }`}
            />
            {/* Tooltip */}
            <span className="absolute right-6 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-forest-800 text-forest-200 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {section.label}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}