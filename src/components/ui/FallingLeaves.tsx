'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Leaf {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
}

export default function FallingLeaves() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  const [screenHeight, setScreenHeight] = useState(1080);

  useEffect(() => {
    setScreenHeight(window.innerHeight);
    
    const width = window.innerWidth;
    const newLeaves: Leaf[] = [];
    
    // 15 листьев ТОЛЬКО СЛЕВА (0% - 30% экрана)
    for (let i = 0; i < 15; i++) {
      newLeaves.push({
        id: i,
        x: Math.random() * (width * 0.30),
        delay: Math.random() * 15,
        duration: 20 + Math.random() * 15,
        size: 20 + Math.random() * 20,
        rotation: Math.random() * 360,
      });
    }
    
    setLeaves(newLeaves);
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{ position: 'fixed' }}
    >
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute text-forest-400/30"
          style={{
            left: leaf.x,
            top: -60,
          }}
          initial={{ y: -60, rotate: leaf.rotation, opacity: 0 }}
          animate={{
            y: screenHeight + 200,
            rotate: leaf.rotation + 720,
            opacity: [0, 0.5, 0.5, 0],
            x: [leaf.x, leaf.x + 30, leaf.x + 10, leaf.x],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg
            width={leaf.size}
            height={leaf.size}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}