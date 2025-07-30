'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const movies = [
  {
    id: 1,
    title: "Mountain Adventure",
    description: "Experience the thrill of mountain climbing and breathtaking views.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    category: "Nature"
  },
  {
    id: 2,
    title: "City Lights",
    description: "Discover the vibrant nightlife and stunning architecture of urban landscapes.",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
    category: "Urban"
  },
  {
    id: 3,
    title: "Ocean Sunset",
    description: "Witness the magical moment where the sun meets the sea.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    category: "Nature"
  },
  {
    id: 4,
    title: "Desert Dunes",
    description: "Explore the endless waves of sand in the heart of the desert.",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
    category: "Nature"
  },
  {
    id: 5,
    title: "Forest Mist",
    description: "Get lost in the mysterious atmosphere of a misty forest morning.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969",
    category: "Nature"
  }
];

const CarouselSlider = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-[85vw]">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          coverflowEffect={{
            rotate: 35,
            stretch: 0,
            depth: 150,
            modifier: 1.5,
            slideShadows: false,
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true
          }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="py-12"
        >
          {movies.map((movie) => (
            <SwiperSlide 
              key={movie.id}
              className="w-[520px] rounded-xl overflow-hidden transition-all duration-500"
            >
              <div className="relative aspect-[16/9] group cursor-pointer">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90">
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h2 className="text-3xl font-bold mb-3 text-white tracking-wide">
                      {movie.title}
                    </h2>
                    <p className="text-gray-300 text-sm max-w-md line-clamp-2">
                      {movie.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
          .swiper-slide {
            transition: all 0.3s ease;
            opacity: 0.4;
            transform: scale(0.85) translateY(-30px);
          }
          
          .swiper-slide-active {
            opacity: 1;
            transform: scale(1.2) translateY(0);
            z-index: 2;
          }
          
          .swiper-slide-prev,
          .swiper-slide-next {
            opacity: 0.7;
            z-index: 1;
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
        `}</style>
      </div>
    </div>
  );
};

export default CarouselSlider;





// basee2 

'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const movies = [
  {
    id: 1,
    title: "Mountain Adventure",
    description: "Experience the thrill of mountain climbing and breathtaking views.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    category: "Nature"
  },
  {
    id: 2,
    title: "City Lights",
    description: "Discover the vibrant nightlife and stunning architecture of urban landscapes.",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
    category: "Urban"
  },
  {
    id: 3,
    title: "Ocean Sunset",
    description: "Witness the magical moment where the sun meets the sea.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    category: "Nature"
  },
  {
    id: 4,
    title: "Desert Dunes",
    description: "Explore the endless waves of sand in the heart of the desert.",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
    category: "Nature"
  },
  {
    id: 5,
    title: "Forest Mist",
    description: "Get lost in the mysterious atmosphere of a misty forest morning.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969",
    category: "Nature"
  }
];

const CarouselSlider = ({ autoplay = false }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative w-[85vw]">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          loop={true}
          coverflowEffect={{
            rotate: 35,
            stretch: 0,
            depth: 150,
            modifier: 1.5,
            slideShadows: false,
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
        >
          {movies.map((movie) => (
            <SwiperSlide 
              key={movie.id}
              className="w-[900px]
            //   h-[400px]
               rounded-xl overflow-hidden transition-all duration-500"
            >
              <div className="relative  group cursor-pointer">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90">
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h2 className="text-4xl font-bold mb-3 text-white tracking-wide">
                      {movie.title}
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl line-clamp-2">
                      {movie.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
          .swiper-slide {
            transition: all 0.3s ease;
            opacity: 0.4;
            transform: scale(0.85) translateY(-30px);
          }
          
          .swiper-slide-active {
            opacity: 1;
            transform: scale(1.2) translateY(0);
            z-index: 2;
          }
          
          .swiper-slide-prev,
          .swiper-slide-next {
            opacity: 0.7;
            z-index: 1;
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
        `}</style>
      </div>
    </div>
  );
};

export default CarouselSlider;