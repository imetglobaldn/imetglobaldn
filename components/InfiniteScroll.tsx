'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  '/scroll/1.webp',
  '/scroll/2.webp',
  '/scroll/3.webp',
  '/scroll/4.webp',
  '/scroll/5.webp',
  '/scroll/6.webp',
  '/scroll/7.webp',
  '/scroll/8.webp',
  '/scroll/1.webp',
  '/scroll/2.webp',
  '/scroll/3.webp',
  '/scroll/4.webp',
  '/scroll/5.webp',
  '/scroll/6.webp',
  '/scroll/7.webp',
  '/scroll/8.webp',
  '/scroll/1.webp',
  '/scroll/2.webp',
  '/scroll/3.webp',
  '/scroll/4.webp',
  '/scroll/5.webp',
  '/scroll/6.webp',
  '/scroll/7.webp',
  '/scroll/8.webp',
  // '/scroll/9.webp',
  // '/scroll/10.webp',
  // '/scroll/11.webp',
  // '/scroll/12.webp',
  // '/scroll/13.webp',
];

const InfiniteScroll: React.FC = () => {
  const scrollAnimation = {
    animate: {
      x: [0, -100 * images.length],
    },
    transition: {
      duration: 50,
      ease: 'linear',
      repeat: Infinity,
      yoyo: { duration: 0 },

    },
  };

  return (
    <div className="relative overflow-hidden bg-main">
      <motion.div
        className="flex gap-4"
        {...scrollAnimation}
        style={{ whiteSpace: 'wrap' }}
      >
        {images.concat(images).map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-72 h-auto rounded-lg overflow-hidden"
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
              loading='lazy'
              width={1200}
              height={100}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScroll;
