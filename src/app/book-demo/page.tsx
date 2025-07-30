'use client'

import { useState,Suspense } from 'react'
import DemoForm from '@/components/ui/demo-form'

const CardWithEffect = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
      style={{ willChange: 'transform' }}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: '300px',
            height: '300px',
            top: mousePosition.y - 150,
            left: mousePosition.x - 150,
            background: '#F26A1B',
            filter: 'blur(100px)',
            transform: 'translate(-0%, -0%)',
            opacity: 0.15,
            zIndex: 1,
            willChange: 'transform, top, left',
          }}
        />
      )}
      {children}
    </div>
  );
};

export default function BookDemo() {
  return (
    <div className="min-h-screen bg-[#231F20] py-[100px] px-4 md:px-6 lg:px-0  sm:px-0">
      {/* Background Circle */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="w-full" width="1323" height="752" viewBox="0 0 1323 752" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_2870_12773)">
            <circle cx="661.5" cy="90.5" r="147.5" fill="#FF9358"/>
          </g>
          <defs>
            <filter id="filter0_f_2870_12773" x="0" y="-571" width="1323" height="1323" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="257" result="effect1_foregroundBlur_2870_12773"/>
            </filter>
          </defs>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative">
        <div className="container mx-auto max-w-[1440px] py-[100px] px-0 md:px-[92px] sm:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            {/* Left Column */}
            <div className="flex flex-col gap-3 mb-8 lg:mb-0">
              {/* Badge */}
              <div className="flex w-fit items-center gap-[5px] px-2.5 py-0 bg-[#37322F] rounded-[999px] shadow-[inset_0px_1px_0px_0px_rgba(214,207,194,0.12),0px_3px_3px_0px_rgba(12,9,8,0.1),0px_1px_2px_0px_rgba(12,9,8,0.32)]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.3 12.234L4.93333 9.86732L5.9 8.90065L7.3 10.3007L10.1 7.50065L11.0667 8.46732L7.3 12.234ZM3.33333 14.6673C2.96667 14.6673 2.65278 14.5368 2.39167 14.2757C2.13056 14.0145 2 13.7007 2 13.334V4.00065C2 3.63398 2.13056 3.3201 2.39167 3.05898C2.65278 2.79787 2.96667 2.66732 3.33333 2.66732H4V1.33398H5.33333V2.66732H10.6667V1.33398H12V2.66732H12.6667C13.0333 2.66732 13.3472 2.79787 13.6083 3.05898C13.8694 3.3201 14 3.63398 14 4.00065V13.334C14 13.7007 13.8694 14.0145 13.6083 14.2757C13.3472 14.5368 13.0333 14.6673 12.6667 14.6673H3.33333ZM3.33333 13.334H12.6667V6.66732H3.33333V13.334ZM3.33333 5.33398H12.6667V4.00065H3.33333V5.33398Z" fill="white"/>
                </svg>
                <span className="text-white text-xs font-['Inter'] font-medium leading-6 tracking-[0.67px]">
                  Get a Demo
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-white text-4xl md:text-5xl lg:text-[70px] font-['Inter'] font-bold leading-[1.3]">
                Book a Demo.
              </h1>

              {/* Description */}
              <p className="text-white text-base md:text-lg font-['Inter'] leading-[1.7]">
                Fill the form below, mark your preferred date & time and we will get back to you with a demo invite!
                {/* Only add line break for larger screens */}
             
          
              </p>
            </div>

            {/* Right Column - Form */}
            <div>
              <CardWithEffect>
              <Suspense fallback={<div className="text-white">Loading form...</div>}>

                <DemoForm />
                </Suspense>

              </CardWithEffect>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}