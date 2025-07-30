'use client';

import { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { CarouselProps } from '@/types/carousel';

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 3000 : -3000,
    opacity: 0,
    rotateZ: direction > 0 ? 10 : -10,
  }),
  center: {
    x: 925,
    opacity: 1,
    rotateZ: 0,
    top: 0,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 3000 : -3000,
    opacity: 0,
    rotateZ: direction < 0 ? 10 : -10,
  }),
  prev: {
    x: 0,
    opacity: 0.5,
    rotateZ: -10,
    top: 144.14,
  },
  next: {
    x: 1861.50,
    opacity: 0.5,
    rotateZ: 10,
    top: 8.30,
  }
};

const Carousel = ({ 
  slides = [], 
  autoPlay = true, 
  interval = 5000 
}: CarouselProps) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!autoPlay || isDragging) return;

    const timer = setInterval(() => {
      paginate(1);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, isDragging]);

  const paginate = (newDirection: number) => {
    setPage(([prevPage]) => [
      (prevPage + newDirection + slides.length) % slides.length,
      newDirection
    ]);
  };

  const dragEndHandler = (event: any, info: any) => {
    setIsDragging(false);
    const swipe = info.offset.x;
    
    if (Math.abs(swipe) > 100) {
      if (swipe > 0) {
        paginate(-1);
      } else {
        paginate(1);
      }
    }
  };

  const getSlideContent = (index: number, position: 'prev' | 'current' | 'next') => {
    const slide = slides[index];
    
    if (position === 'current') {
      return (
        <div className="w-[784px] h-[664px] relative">
          {/* Content Section */}
          <div className="w-[558px] h-[170px] left-[113px] top-[494px] absolute flex-col justify-start items-center gap-5 inline-flex">
            <div className="self-stretch text-center text-white text-2xl font-semibold font-['Inter'] leading-[33.60px]">
              {slide?.title}
            </div>
            <div className="self-stretch h-12 flex-col justify-center items-center gap-1 flex">
              <div className="w-[466px] text-center text-[#dedcdd] text-base font-normal font-['Inter'] leading-normal">
                {slide?.description}
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-[784px] h-[444px] left-0 top-0 absolute bg-gradient-to-br from-[#f26a1b] to-[#231f20] rounded-2xl shadow-[0px_3px_3px_0px_rgba(0,0,0,0.12)] border-2 border-white/20 backdrop-blur-[45px] flex-col justify-center items-center inline-flex overflow-hidden">
            <div className="w-[786px] h-[530.55px] left-[-1px] top-[-0px] absolute bg-[#303030] overflow-hidden">
              <img 
                src={slide?.url} 
                alt={slide?.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-6 h-6 absolute right-6 bottom-6">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <Play size={14} className="text-[#303030] ml-0.5" />
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="w-[784px] h-[444px] bg-gradient-to-br from-[#f26a1b] to-[#231f20] rounded-2xl shadow-[0px_3px_3px_0px_rgba(0,0,0,0.12)] border-2 border-white/20 backdrop-blur-[45px] flex-col justify-center items-center inline-flex overflow-hidden">
        <div className="w-[784px] h-[563.58px] bg-[#303030] overflow-hidden">
          <img 
            src={slide?.url} 
            alt={slide?.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  };

  const prevIndex = (page - 1 + slides.length) % slides.length;
  const nextIndex = (page + 1) % slides.length;

  return (
    <div className="absolute left-1/2 -translate-x-1/2">
      <div className="w-[2633.59px] h-[664px] relative">
        <div className="absolute inset-0">
          <AnimatePresence initial={false} custom={direction}>
            {/* Previous Slide */}
            <motion.div
              key={`prev-${prevIndex}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="prev"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute origin-top-left"
            >
              {getSlideContent(prevIndex, 'prev')}
            </motion.div>

            {/* Current Slide */}
            <motion.div
              key={`current-${page}`}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.3}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={dragEndHandler}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute cursor-grab active:cursor-grabbing"
            >
              {getSlideContent(page, 'current')}
            </motion.div>

            {/* Next Slide */}
            <motion.div
              key={`next-${nextIndex}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="next"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute origin-top-left"
            >
              {getSlideContent(nextIndex, 'next')}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-0 left-[925px] w-[784px] flex justify-center items-center">
          <div className="flex gap-4 pb-8">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  const newDirection = index > page ? 1 : -1;
                  setPage([index, newDirection]);
                }}
                className={`transition-all duration-300 cursor-pointer ${
                  index === page
                    ? "w-[60px] h-4 bg-[#f26a1b]/40 rounded-[7px] border-2 border-[#f26a1b]"
                    : "w-4 h-4 rounded-[7px] border-2 border-white/50"
                }`}
                whileTap={{ scale: 0.95 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;