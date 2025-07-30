'use client'
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { projects } from '@/data/projects';

const CarouselSlider = ({ autoplay = true, onSlideClick }) => {
  const [key, setKey] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    const handleFullScreenChange = () => {
      if (!document.fullscreenElement) {
        setTimeout(() => {
          if (swiperInstance) {
            swiperInstance.update();
          }
          setKey(prev => prev + 1);
        }, 100);
      }
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, [swiperInstance]);

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-[90vw] max-w-[1200px]">
        <Swiper
          key={key}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: -10,
            depth: 1000,
            modifier: -1,
            slideShadows: true,
            scale: 1
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true
          }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          autoplay={autoplay ? {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          } : false}
          className="py-12"
          breakpoints={{
            320: {
              slidesPerView: 1,
              effect: "slide"
            },
            768: {
              slidesPerView: "auto",
              effect: "coverflow"
            }
          }}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
        >
          {projects.map((project) => (
            <SwiperSlide 
              key={project.id}
              className="!w-[520px] !h-[380px] rounded-xl overflow-hidden cursor-pointer relative"
              onClick={() => onSlideClick(project.id)}
            >
              <div className="relative w-full h-full group">
                <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-900">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-90 transition-opacity">
                  <div className="absolute bottom-0 left-0 p-8">
                    <h2 className="text-2xl font-bold mb-2 text-white tracking-wide">
                      {project.title}
                    </h2>
                    <p className="text-gray-300 text-md max-w-2xl line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
          .swiper-container {
            transform-style: preserve-3d;
            backface-visibility: hidden;
            will-change: transform;
          }

          .swiper-slide {
            transition: all 0.3s ease;
            opacity: 0.4;
            transform: scale(0.85);
            z-index: 1;
          }
          
          .swiper-slide-active {
            opacity: 1;
            transform: scale(1);
            z-index: 2;
          }
          
          .swiper-slide-prev {
            z-index: 10;
            transform: translateX(35%) scale(0.85);
            opacity: 0.8;
          }
          
          .swiper-slide-next {
            z-index: 10;
            transform: translateX(-35%) scale(0.85);
            opacity: 0.8;
          }
          
          .swiper-pagination {
            position: relative;
            margin-top: 2rem;
          }
          
          .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background: rgba(255, 255, 255, 0.5);
            opacity: 1;
          }
          
          .swiper-pagination-bullet-active {
            background: rgba(255, 255, 255, 1);
          }

          .swiper-button-prev,
          .swiper-button-next {
            color: rgba(255, 255, 255, 0.8);
            width: 44px;
            height: 44px;
          }

          .swiper-button-prev:after,
          .swiper-button-next:after {
            font-size: 24px;
          }

          .swiper-coverflow {
            perspective: 1000px;
            transform-style: preserve-3d;
          }

          @media (max-width: 767px) {
            .swiper-slide {
              width: 100% !important;
              opacity: 1;
              transform: none !important;
            }

            .swiper-slide-active {
              transform: none !important;
            }

            .swiper-button-prev,
            .swiper-button-next {
              display: none;
            }

            .swiper-slide h2 {
              font-size: 1.5rem;
            }

            .swiper-slide p {
              font-size: 0.875rem;
            }

            .swiper-slide .p-8 {
              padding: 1rem;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default CarouselSlider;