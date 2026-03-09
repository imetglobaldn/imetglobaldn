import Image from 'next/image';
import { useState, useEffect } from 'react';
import { getBlurDataURL } from '../utils/performance';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false
}) => {
  const [blurDataUrl, setBlurDataUrl] = useState<string>('');

  useEffect(() => {
    if (!priority) {
      getBlurDataURL(src).then(url => setBlurDataUrl(url));
    }
  }, [src, priority]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${className}`}
        loading={priority ? 'eager' : 'lazy'}
        placeholder={blurDataUrl ? 'blur' : 'empty'}
        blurDataURL={blurDataUrl}
        quality={90}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default OptimizedImage;
