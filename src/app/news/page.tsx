// src/app/news/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NewsCard from '@/components/ui/NewsCard/NewsCard';
import { newsData } from '@/data/news';

export default function NewsPage() {
  return (
    <main className="relative w-full bg-[#231F20] overflow-hidden">
      {/* Background SVG with Glow Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <div className="w-[1323px] h-[752px]">
            <svg className="w-full h-full" viewBox="0 0 1323 752" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_f_2878_14155)">
                <circle cx="661.5" cy="90.5" r="147.5" fill="#FF9358"/>
              </g>
              <defs>
                <filter id="filter0_f_2878_14155" x="0" y="-571" width="1323" height="1323" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="257" result="effect1_foregroundBlur_2878_14155"/>
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-28">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-12">
               {/* Badge */}
      <div className="h-6 px-2.5 bg-[#37322f] rounded-[999px] shadow-[0px_1px_0px_rgba(214,207,194,0.12)_inset] inline-flex items-center gap-[5px]">
            <div className="w-[17px] h-4 relative">
              <Image 
                src="/assets/icons/rocket-white.svg"
                alt="rocket icon"
                width={17}
                height={16}
                className="object-contain"
              />
            </div>
            <span className="text-white text-xs font-medium font-['Inter'] leading-6 tracking-[0.672px]">
              Stay Updated
            </span>
          </div>


            {/* Title */}
            <div className="container mx-auto max-w-[745px] px-2.5">
              <h2 className="text-center text-[48px] font-semibold font-['Inter'] leading-[62px] tracking-[0.96px] text-white">
                News & Events
              </h2>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl pb-24">
              {newsData.map((news) => (
                <Link href={`/news/${news.id}`} key={news.id}>
                  <NewsCard
                    date={news.date}
                    title={news.title}
                    image={news.image}
                    id={news.id}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}