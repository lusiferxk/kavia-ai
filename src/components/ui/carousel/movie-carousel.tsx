'use client';

import { FC, useState, useEffect } from 'react';
import { MovieCarouselProps } from '@/types/carousel';
import CarouselIndicators from './carousel-indicators';
import CarouselNavigation from './carousel-navigation';

const MovieCarousel: FC<MovieCarouselProps> = ({
  items = [],
  autoPlay = true,
  interval = 5000,
  showIndicators = true,
  showNavigation = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (autoPlay) {
      timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }, interval);
    }
    return () => clearInterval(timer);
  }, [autoPlay, interval, items.length]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="relative w-full h-full bg-[#303030]">
      <div className="relative h-full">
        {/* Movie Grid */}
        <div className="flex gap-4 p-4">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`flex-none transition-all duration-300 w-24 ${
                index === currentIndex ? 'scale-105' : 'scale-95 opacity-70'
              }`}
            >
              <div className="relative aspect-[2/3] rounded overflow-hidden">
                <img 
                  src={item.image || "/api/placeholder/98x148"} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-2">
                <h3 className="text-[#eaeaea] text-xs font-medium font-['Space Grotesk']">
                  {item.title} {item.year ? `(${item.year})` : ''}
                </h3>
                <p className="text-[#7f7f7f] text-xs font-normal font-['Space Grotesk']">
                  {item.mood}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        {showNavigation && (
          <CarouselNavigation onNext={next} onPrev={prev} />
        )}

        {/* Indicators */}
        {showIndicators && (
          <CarouselIndicators
            totalItems={items.length}
            currentIndex={currentIndex}
            onChange={setCurrentIndex}
          />
        )}
      </div>
    </div>
  );
};

export default MovieCarousel;