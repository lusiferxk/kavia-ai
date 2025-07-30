'use client';

import { FC } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselNavigationProps {
  onNext: () => void;
  onPrev: () => void;
}

const CarouselNavigation: FC<CarouselNavigationProps> = ({ onNext, onPrev }) => {
  return (
    <>
      <button 
        onClick={onPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
      >
        <ChevronLeft className="w-4 h-4 text-white" />
      </button>
      <button 
        onClick={onNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
      >
        <ChevronRight className="w-4 h-4 text-white" />
      </button>
    </>
  );
};

export default CarouselNavigation;