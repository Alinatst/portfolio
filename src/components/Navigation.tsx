'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contacts', href: '#contacts' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-forest-900/95 backdrop-blur-sm border-b border-forest-700">
      <div className="w-full px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20 max-w-7xl mx-auto">
          {/* Логотип */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="text-forest-100 font-serif text-2xl font-bold hover:text-forest-200 transition-colors"
            >
              Alina.dev
            </a>
          </div>

          {/* Десктопное меню - центрированное через position */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-forest-200 hover:text-forest-100 px-8 py-2 text-sm font-medium transition-all duration-200 hover:bg-forest-700/50 rounded-md"
                >
                  {item.name}
                  {index < navItems.length - 1 && (
                    <span className="ml-8 text-forest-600">|</span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Мобильное меню - кнопка */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-forest-200 hover:text-forest-100 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="md:hidden bg-forest-800 border-b border-forest-700">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-forest-200 hover:text-forest-100 hover:bg-forest-700 block px-4 py-3 rounded-md text-base font-medium transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}