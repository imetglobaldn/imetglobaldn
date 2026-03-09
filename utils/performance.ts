import { useEffect, useState } from 'react';

// Intersection Observer Hook for lazy loading
export const useIntersectionObserver = (
  elementRef: React.RefObject<Element>,
  options = { threshold: 0.1 }
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef, options]);

  return isVisible;
};

// Debounce function for performance optimization
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for performance optimization
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Preload critical resources
export const preloadResources = (resources: string[]) => {
  resources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = resource.endsWith('.js') ? 'script' : 'style';
    link.href = resource;
    document.head.appendChild(link);
  });
};

// Defer non-critical CSS
export const deferNonCriticalCSS = (stylesheets: string[]) => {
  stylesheets.forEach(stylesheet => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = stylesheet;
    link.media = 'print';
    link.onload = () => {
      link.media = 'all';
    };
    document.head.appendChild(link);
  });
};

// Image lazy loading with blur placeholder
export const getBlurDataURL = async (src: string): Promise<string> => {
  if (!src) return '';
  
  try {
    const response = await fetch(src);
    const buffer = await response.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');
    return `data:image/jpeg;base64,${base64}`;
  } catch {
    return '';
  }
};

// Optimize event listeners
export const optimizeEventListeners = () => {
  const passiveSupported = () => {
    let passive = false;
    try {
      const options = Object.defineProperty({}, 'passive', {
        get: function() {
          passive = true;
          return true;
        }
      });
      window.addEventListener('test', null as any, options);
      window.removeEventListener('test', null as any, options);
    } catch (err) {}
    return passive;
  };

  return {
    passive: passiveSupported(),
    addPassiveListener: (element: Element, event: string, callback: EventListener) => {
      element.addEventListener(event, callback, { passive: true });
    }
  };
};
