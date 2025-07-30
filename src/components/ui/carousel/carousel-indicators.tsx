'use client';

import { FC } from 'react';

interface CarouselIndicatorsProps {
  totalItems: number;
  currentIndex: number;
  onChange: (index: number) => void;
}

const CarouselIndicators: FC<CarouselIndicatorsProps> = ({
  totalItems,
  currentIndex,
  onChange,
}) => {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
      {Array.from({ length: totalItems }).map((_, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className={`w-4 h-4 rounded-md border-2 transition-all ${
            index === currentIndex
              ? 'bg-[#f26a1b]/40 border-[#f26a1b] w-16'
              : 'border-white/50'
          }`}
        />
      ))}
    </div>
  );
};

export default CarouselIndicators;