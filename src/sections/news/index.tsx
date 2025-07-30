// src/sections/news/index.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NewsCard from '../../components/ui/NewsCard/NewsCard';
import { ArrowUpRight } from 'lucide-react';
import { newsData } from '@/data/news';

const NewsSection: React.FC = () => {
  // Take only the first 3 news items for the landing page
  const landingPageNews = newsData.slice(0, 3);

  return (
    <section className="w-full py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Centered Header */}
        <div className="flex flex-col items-center gap-4 mb-12">
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

          {/* Section Title */}
          <h2 className="text-5xl font-bold text-white">News & Events</h2>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {landingPageNews.map((news) => (
            <div key={news.id}>  {/* Added a div with key here */}
              <NewsCard
                id={news.id}
                date={news.date}
                title={news.title}
                image={news.image}
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Link href="/news" className="text-[#f26a1b] hover:text-[#f58849] transition-colors duration-300 flex items-center gap-2">
            View All
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;