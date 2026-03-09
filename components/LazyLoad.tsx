import React, { useRef, useState, useEffect } from 'react';
import { useIntersectionObserver } from '../utils/performance';

interface LazyLoadProps {
  children: React.ReactNode;
  height?: string;
  threshold?: number;
}

const LazyLoad: React.FC<LazyLoadProps> = ({ 
  children, 
  height = 'auto',
  threshold = 0.1 
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(elementRef, { threshold });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isIntersecting) {
      setIsVisible(true);
    }
  }, [isIntersecting]);

  return (
    <div
      ref={elementRef}
      style={{
        minHeight: height,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
      }}
    >
      {isVisible && children}
    </div>
  );
};

export default LazyLoad;
