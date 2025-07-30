// 'use client';

// import { FC, useState } from 'react';

// interface ImageCarouselProps {
//   images: {
//     id: number;
//     url: string;
//     title: string;
//     description: string;
//   }[];
// }

// const ImageCarousel: FC<ImageCarouselProps> = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   return (
//     <div className="w-[784px] h-[664px] relative">
//       {/* Title and Description */}
//       <div className="w-[558px] h-[170px] left-[113px] top-[494px] absolute flex-col justify-start items-center gap-5 inline-flex">
//         <div className="self-stretch text-center text-white text-2xl font-semibold font-['Inter'] leading-[33.60px]">
//           {images[currentIndex].title}
//         </div>
//         <div className="self-stretch h-12 flex-col justify-center items-center gap-1 flex">
//           <div className="w-[466px] text-center text-[#dedcdd] text-base font-normal font-['Inter'] leading-normal">
//             {images[currentIndex].description}
//           </div>
//         </div>
        
//         {/* Indicators */}
//         <div className="self-stretch h-12 px-2.5 pt-8 flex-col justify-center items-center gap-2.5 flex">
//           <div className="self-stretch justify-center items-center gap-4 inline-flex">
//             {images.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`transition-all duration-300 ${
//                   index === currentIndex
//                     ? "w-[60px] h-4 bg-[#f26a1b]/40 rounded-[7px] border-2 border-[#f26a1b]"
//                     : "w-4 h-4 rounded-[7px] border-2 border-white/50"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Image Container */}
//       <div className="w-[784px] h-[444px] left-0 top-0 absolute bg-gradient-to-br from-[#f26a1b] to-[#231f20] rounded-2xl shadow-[0px_3px_3px_0px_rgba(0,0,0,0.12)] border-2 border-white/20 backdrop-blur-[45px] flex-col justify-center items-center inline-flex overflow-hidden">
//         <div className="w-[786px] h-[530.55px] left-[-1px] top-[-0px] absolute bg-[#303030] overflow-hidden">
//           <img 
//             src={images[currentIndex].url} 
//             alt={images[currentIndex].title}
//             className="w-full h-full object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// // Example usage
// const ExampleCarousel = () => {
//   const images = [
//     {
//       id: 1,
//       url: "/assets/images/MovieExplorer.png",
//       title: "Movie Explorer - Movielist",
//       description: "Have a Movie List API - based on your current mood - recommend the movies"
//     },
//     {
//       id: 2,
//       url: "/assets/images/MovieExplorer.png",
//       title: "Task Management Dashboard",
//       description: "Organize and track your tasks with an intuitive interface"
//     },
//     {
//       id: 3,
//       url: "/assets/images/MovieExplorer.png",
//       title: "Analytics Platform",
//       description: "Visualize and analyze your data with powerful tools"
//     }
//   ];

//   return <ImageCarousel images={images} />;
// };

// export default ExampleCarousel;

'use client';

import { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import type { CarouselProps } from '@/types/carousel';

const Carousel = ({ 
  slides = [], 
  autoPlay = true, 
  interval = 5000 
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, slides.length]);

  return (
    <div className="w-[784px] h-[664px] relative">
      {/* Content container */}
      <div className="w-[558px] h-[170px] left-[113px] top-[494px] absolute flex-col justify-start items-center gap-5 inline-flex">
        <div className="self-stretch text-center text-white text-2xl font-semibold font-['Inter'] leading-[33.60px]">
          {slides[currentIndex]?.title}
        </div>
        <div className="self-stretch h-12 flex-col justify-center items-center gap-1 flex">
          <div className="w-[466px] text-center text-[#dedcdd] text-base font-normal font-['Inter'] leading-normal">
            {slides[currentIndex]?.description}
          </div>
        </div>
        
        {/* Indicators */}
        <div className="self-stretch h-12 px-2.5 pt-8 flex-col justify-center items-center gap-2.5 flex">
          <div className="self-stretch justify-center items-center gap-4 inline-flex">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? "w-[60px] h-4 bg-[#f26a1b]/40 rounded-[7px] border-2 border-[#f26a1b]"
                    : "w-4 h-4 rounded-[7px] border-2 border-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Image Container */}
      {/* <div className="w-[784px] h-[444px] left-0 top-0 absolute bg-gradient-to-br from-[#f26a1b] to-[#231f20] rounded-2xl shadow-[0px_3px_3px_0px_rgba(0,0,0,0.12)] border-2 border-white/20 backdrop-blur-[45px] flex-col justify-center items-center inline-flex overflow-hidden"> */}
      <div className="w-[784px] h-[444px] left-0 top-0 absolute bg-gradient-to-br  rounded-2xl shadow-[0px_3px_3px_0px_rgba(0,0,0,0.12)] border-2 border-white/20 backdrop-blur-[45px] flex-col justify-center items-center inline-flex overflow-hidden">

        <div className="w-[786px] h-[530.55px] left-[-1px] top-[-0px] absolute bg-[#303030] overflow-hidden">
          <img 
            src={slides[currentIndex]?.url} 
            alt={slides[currentIndex]?.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Play Button */}
        <div className="absolute bottom-6 right-6 bottom-6">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <Play size={14} className="text-[#303030] ml-0.5" />
          </div>
        </div>

        {/* Close Button */}
        {/* <div className="w-6 h-6 absolute right-6 bottom-6">
          <div className="w-6 h-6 bg-[#d9d9d9]" />
        </div> */}
      </div>
    </div>
  );
};

export default Carousel;