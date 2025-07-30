import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { CheckCircleIcon } from 'lucide-react';
import Link from 'next/link';

const FeatureCarousel = ({ features }: { features: Feature[] }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 300;
      const targetScroll = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });

      setTimeout(checkScrollability, 300);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, [features]);

  return (
    <div className="flex self-stretch justify-start items-start flex-col gap-5">
      <div className="flex self-stretch justify-between items-center flex-row gap-5">
        <span className="text-[#DEDCDD] text-2xl font-['Inter'] leading-[1.3]">Features</span>
        <div className="hidden md:flex justify-center items-center flex-row gap-3 py-2.5 rounded-lg h-[40px]">
          <button 
            onClick={() => scroll('left')} 
            disabled={!canScrollLeft}
            className={`flex items-center justify-center ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_2902_13465" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_2902_13465)">
                <path d="M9.95087 17.6532L4.29688 11.9995L9.95087 6.3457L11.0046 7.4302L7.18537 11.2495H19.7009V12.7495H7.18537L11.0046 16.5687L9.95087 17.6532Z" 
                  fill={!canScrollLeft ? "#666666" : "#DEDCDD"}/>
              </g>
            </svg>
          </button>
          <button 
            onClick={() => scroll('right')} 
            disabled={!canScrollRight}
            className={`flex items-center justify-center ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_2902_13468" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" transform="matrix(-1 0 0 1 24 0)" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_2902_13468)">
                <path d="M14.0491 17.6532L19.7031 11.9995L14.0491 6.3457L12.9954 7.4302L16.8146 11.2495H4.29912V12.7495H16.8146L12.9954 16.5687L14.0491 17.6532Z" 
                  fill={!canScrollRight ? "#666666" : "#F26A1B"}/>
              </g>
            </svg>
          </button>
        </div>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="flex self-stretch justify-start items-center gap-5 overflow-x-auto hide-scrollbar scroll-smooth"
        onScroll={checkScrollability}
      >
        {features.map((feature, index) => (
          <div key={index} className="flex justify-start items-start flex-row gap-2.5 p-2.5 bg-[rgba(255,255,255,0.05)] border-solid border-[rgba(255,255,255,0.05)] border rounded-2xl w-[280px] md:w-[280px] flex-shrink-0">
            {feature.icon ? (
              <Image src={feature.icon} alt="" width={24} height={24} />
            ) : (
              <CheckCircleIcon className="text-[#F26A1B]" />
            )}
            <p className="flex-1 text-[#FFFFFF] text-[15px] font-['Inter'] font-medium leading-[1.4]">{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const UseCaseCard = ({ 
  icon, 
  title, 
  description, 
  isFirst = false,
  showPlayIcon = false 
}: {
  icon: string;
  title: string;
  description: string;
  isFirst?: boolean;
  showPlayIcon?: boolean;
}) => {
  return (
    <div className={`flex flex-1 justify-start items-stretch flex-col gap-5 p-[24px] ${
      isFirst ? 'border-solid border-[rgba(255,255,255,0.05)] border' : 'bg-[rgba(255,255,255,0.01)] border-solid border-[rgba(255,255,255,0.05)] border'
    } rounded-2xl group hover:bg-[rgba(255,255,255,0.02)] transition-all`}>
      <div className="flex self-stretch justify-start items-start flex-col gap-5">
        <Image 
          src={icon} 
          alt={title} 
          width={48} 
          height={48}
        />
        <span className="text-[#FFFFFF] text-xl font-['Inter'] font-medium leading-[1.4]">{title}</span>
      </div>
      <p className="self-stretch text-[#DEDCDD] text-[15px] font-['Inter'] leading-normal">
        {description}
      </p>
      
      {showPlayIcon && (
        <svg className="mt-auto" width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_2607_5863)">
            <mask id="mask0_2607_5863" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="6" y="0" width="25" height="24">
              <rect x="6.66602" width="24" height="24" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_2607_5863)">
              <path d="M16.166 16.5L23.166 12L16.166 7.5L16.166 16.5ZM18.666 22C17.2827 22 15.9827 21.7375 14.766 21.2125C13.5493 20.6875 12.491 19.975 11.591 19.075C10.691 18.175 9.97852 17.1167 9.45352 15.9C8.92852 14.6833 8.66602 13.3833 8.66602 12C8.66602 10.6167 8.92852 9.31667 9.45352 8.1C9.97852 6.88333 10.691 5.825 11.591 4.925C12.491 4.025 13.5493 3.3125 14.766 2.7875C15.9827 2.2625 17.2827 2 18.666 2C20.0493 2 21.3493 2.2625 22.566 2.7875C23.7827 3.3125 24.841 4.025 25.741 4.925C26.641 5.825 27.3535 6.88333 27.8785 8.1C28.4035 9.31667 28.666 10.6167 28.666 12C28.666 13.3833 28.4035 14.6833 27.8785 15.9C27.3535 17.1167 26.641 18.175 25.741 19.075C24.841 19.975 23.7827 20.6875 22.566 21.2125C21.3494 21.7375 20.0493 22 18.666 22Z" 
                fill="#DEDCDD"
                className="group-hover:fill-[#F26A1B] transition-colors"/>
            </g>
          </g>
          <defs>
            <filter id="filter0_d_2607_5863" x="0.666016" y="2" width="36" height="36" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="8"/>
              <feGaussianBlur stdDeviation="4"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2607_5863"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2607_5863" result="shape"/>
            </filter>
          </defs>
        </svg>
      )}
    </div>
  );
};

const ProductSection = ({ 
  id,
  stepNumber = "1", 
  stepTitle = "Inspect", 
  description, 
  features, 
  useCases,
  mediaUrl,
  mediaType = 'video',
  badgeColor,
  imageBgColor = '#FDF7F2', // Default background color
  mobileMediaUrl
}: ProductSectionProps) => {

    const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1280px] w-full"> 
    <div  id={id} className="flex self-stretch justify-start items-start flex-col gap-[48px] p-4 md:p-[56px] bg-[rgba(255,255,255,0.02)] rounded-3xl">
      {/* Header Section */}
      <div className="flex self-stretch justify-start items-center flex-col gap-6">
      <div className="flex justify-start items-center flex-row gap-2.5 py-[5px] pr-4 pl-2 rounded-[46px]"
  style={{ backgroundColor: badgeColor || '#F4682C' }}> 
          <div className="flex justify-center items-center flex-col gap-2.5 bg-[rgba(35,31,32,0.15)] rounded-[40px] w-[36px] h-[36px]">
            <p className="self-stretch text-[#FFFFFF] text-xl font-['Inter'] text-center font-medium leading-[1.4]">{stepNumber}</p>
          </div>
          <span className="text-[#FFFFFF] text-lg font-['Inter'] font-bold leading-[1.4] tracking-[0.18px]">{stepTitle}</span>
        </div>
        <p className="text-[#FFFFFF] text-lg md:text-2xl font-['Inter'] text-center leading-[1.7]">{description}</p>
      </div>

      {/* Features Section */}
      <FeatureCarousel features={features} />

    {/* Video/Image Section */}
    <div className="self-stretch rounded-2xl h-[300px] md:h-[556px]" style={{ backgroundColor: mediaType === 'image' ? imageBgColor : undefined }}>
            {mediaType === 'video' && mediaUrl && (
              <video 
                className="w-full h-full object-cover rounded-2xl"
                src={mediaUrl}
                autoPlay
                loop
                muted
                playsInline
              />
            )}
            {mediaType === 'image' && mediaUrl && (
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={isMobile && mobileMediaUrl ? mobileMediaUrl : mediaUrl}
                    alt="Feature visualization"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  priority
                />
              </div>
            )}
          </div>

      {/* Use Cases Section */}
      <div className="flex self-stretch justify-between items-center flex-row gap-5">
        <span className="text-[#DEDCDD] text-xl md:text-2xl font-['Inter'] leading-[1.3]">Use Cases</span>
        {/* <Link 
          href="/use-cases" 
          className="flex justify-center items-center flex-row gap-1 h-[40px] relative hover:opacity-80"
        >
          <span className="text-[#F26A1B] font-['Inter'] font-medium leading-normal tracking-[0.32px]">See All</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_2904_1023" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
              <rect width="18" height="18" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_2904_1023)">
              <path d="M4.8 13.5L3.75 12.45L10.95 5.25H4.5V3.75H13.5V12.75H12V6.3L4.8 13.5Z" fill="#F26A1B"/>
            </g>
          </svg>
        </Link> */}
      </div>

      <div className="flex self-stretch">
        <div className="flex flex-1 flex-col md:flex-row items-stretch gap-6 w-full">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

// Type definitions
interface Feature {
  title: string;
  icon?: string;
}

interface UseCase {
  icon: string;
  title: string;
  description: string;
}

interface ProductSectionProps {
  id?: string;
  stepNumber?: string;
  stepTitle: string;
  description: string;
  features: Feature[];
  useCases: UseCase[];
  mediaUrl?: string;
  mediaType?: 'video' | 'image';
  badgeColor?: string; 
  imageBgColor?: string; // New prop for image background
  mobileMediaUrl?:string;

}

export default ProductSection;