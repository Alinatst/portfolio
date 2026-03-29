'use client';

import { motion } from 'framer-motion';

interface PixelLeafBarProps {
  percentage: number; // 0-100
  label: string;
  delay?: number;
}

export default function PixelLeafBar({ percentage, label, delay = 0 }: PixelLeafBarProps) {
  // На мобильных показываем только 5 слотов (каждый = 20%)
  // На десктопе - 10 слотов (каждый = 10%)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const totalSlots = isMobile ? 5 : 10;
  const slotPercentage = isMobile ? 20 : 10;
  
  const fullSlots = Math.min(Math.floor(percentage / slotPercentage), totalSlots);
  const remainder = percentage % slotPercentage;
  const hasPartialSlot = remainder >= (isMobile ? 10 : 5) && fullSlots < totalSlots;

  return (
    <div className="flex flex-col items-center w-full">
      {/* Прогресс-бар из пиксельных листиков */}
      <div className="flex justify-center gap-1 sm:gap-1.5 mb-2 sm:mb-4">
        {Array.from({ length: totalSlots }).map((_, index) => {
          let isFilled = false;
          let isPartial = false;

          if (index < fullSlots) {
            isFilled = true;
          } else if (index === fullSlots && hasPartialSlot) {
            isPartial = true;
          }

          return (
            <motion.div
              key={index}
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: delay + index * 0.05,
                type: "spring"
              }}
              viewport={{ once: true }}
            >
              {/* Пиксельный листик SVG - адаптивный размер */}
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                className={`
                  sm:w-5 sm:h-5
                  ${isFilled ? 'text-forest-400' : isPartial ? 'text-forest-600' : 'text-forest-800'}
                  transition-colors duration-300
                `}
                fill="currentColor"
              >
                {/* Пиксельный листик (16x16) */}
                <path d="M8 0 C8 0 6 2 6 4 C6 4 4 4 3 5 C2 6 2 8 3 9 C4 10 6 10 6 10 C6 10 6 12 8 14 C10 12 10 10 10 10 C10 10 12 10 13 9 C14 8 14 6 13 5 C12 4 10 4 10 4 C10 2 8 0 8 0 Z" />
              </svg>

              {/* Tooltip при наведении */}
              {isFilled && (
                <motion.div
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-forest-900 text-forest-100 text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10 hidden sm:block"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {percentage}%
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Label навыка - центрированный */}
      <span className="text-forest-200 text-xs sm:text-sm font-medium text-center">{label}</span>
    </div>
  );
}