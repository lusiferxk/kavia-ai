

'use client'

import { useState } from 'react'
import ContactForm from '@/components/ui/contact-form'

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
              <img 
                  src="/assets/icons/phone_in_talk.svg" 
                  alt="Phone Icon" 
                  className="w-4 h-4"
                />
                <span className="text-white text-xs font-['Inter'] font-medium leading-6 tracking-[0.67px]">
                Contact Us
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-white text-4xl md:text-5xl lg:text-[70px] font-['Inter'] font-bold leading-[1.3]">
              Let's Talk.
              </h1>

               {/* Description */}
               <div className="max-w-[422px] w-full text-white text-base md:text-lg font-normal font-['Inter'] leading-[1.7] md:leading-[30.60px] sm:pr-4 lg:pr-0">
                We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <CardWithEffect>
                <ContactForm />
              </CardWithEffect>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}