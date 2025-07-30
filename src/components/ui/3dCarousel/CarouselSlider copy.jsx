// const movies = [
//     {
//         id: 1,
//         title: "Mountain Adventure",
//         image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
//         category: "Nature"
//       },
//       {
//         id: 2,
//         title: "City Lights",
//         image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
//         category: "Urban"
//       },
//       {
//         id: 3,
//         title: "Ocean Sunset",
//         image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
//         category: "Nature"
//       },
//       {
//         id: 4,
//         title: "Desert Dunes",
//         image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
//         category: "Nature"
//       },
//       {
//         id: 5,
//         title: "Forest Mist",
//         image: "https://images.unsplash.com/photo-1511497584788-876760111969",
//         category: "Nature"
//       }
//   // Add more movies
// ];

'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "./CarouselSlider.css"
const movies = [
    {
        id: 1,
        title: "Mountain Adventure",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
        category: "Nature"
      },
      {
        id: 2,
        title: "City Lights",
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
        category: "Urban"
      },
      {
        id: 3,
        title: "Ocean Sunset",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        category: "Nature"
      },
      {
        id: 4,
        title: "Desert Dunes",
        image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
        category: "Nature"
      },
      {
        id: 5,
        title: "Forest Mist",
        image: "https://images.unsplash.com/photo-1511497584788-876760111969",
        category: "Nature"
      }
  // Add more movies
];

const CarouselSlider = () => {
  return (
    <div className="min-h-screen bg-[#1D242D] flex items-center justify-center">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={{ 
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-white/50',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-white'
        }}
        modules={[EffectCoverflow, Pagination]}
        className="w-[85vw] py-12"
      >
        {movies.map((movie) => (
          <SwiperSlide 
            key={movie.id}
            className="w-[600px] rounded-xl overflow-hidden transition-all duration-300"
          >
            <div className="relative aspect-[16/9]">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h2 className="text-3xl font-bold mb-2">{movie.title}</h2>
                  <p className="text-sm text-gray-300 max-w-md">
                    {movie.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselSlider;
