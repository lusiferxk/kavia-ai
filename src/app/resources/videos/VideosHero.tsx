//src/app/enterprise/EnterpriseHero.tsx

'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { VideoProvider } from '@/components/ui/Video/VideoContext';

import GradientBackground from './GradientBackground'
import VideoList from '@/components/ui/Video/VideoList';


import { videos } from '@/data/videos';




export function VideosHero() {
  const circlePositions = [302.91, 266.91, 233.56, 200.17, 166.83, 133.46, 100.09, 66.74, 33.35, 0]
  const [size, setSize] = useState('lg')


  useEffect(() => {
    // Handle scroll to video section when hash is present
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Add a small delay to ensure smooth scrolling
          setTimeout(() => {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'center'
            });
          }, 100);
        }
      }
    };

    // Initial check for hash
    handleHashScroll();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth
      let newSize
      if (width >= 1536) {
        newSize = '2xl'
      } else if (width >= 1280) {
        newSize = 'xl'
      } else if (width >= 1024) {
        newSize = 'lg'
      } else if (width >= 768) {
        newSize = 'md'
      } else {
        newSize = 'sm'
      }
      console.log('Screen Width:', width, 'Screen Size Changed to:', newSize)
      setSize(newSize)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <VideoProvider>  {/* Add the provider here */}

    <section className="bg-[#231F20] relative overflow-hidden">
      <GradientBackground/>
      {/* Top Orb Gradient */}
      {/* <div
        className="absolute top-0 left-0 w-full"
        style={{
          height: getOrbPositions(size).firstOrb.top,
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(242, 106, 27, 0.6) 0%, rgba(242, 106, 27, 0) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      /> */}

      {/* Badge Orb Gradient */}
      {/* <div
        className="absolute top-0 left-0 w-full"
        style={{
          width: getOrbPositions(size).badgeOrb.width,
          height: getOrbPositions(size).badgeOrb.height,
          left: `calc(50% - ${getOrbPositions(size).badgeOrb.width} / 2)`,
          top: getOrbPositions(size).badgeOrb.top,
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(242, 106, 27, 0.3) 0%, rgba(242, 106, 27, 0) 100%)',
          borderRadius: '50%',
          filter: 'blur(20px)',
          zIndex: 0,
        }}
      /> */}

      {/* Bottom Orb Gradient */}
      {/* <div
        className="absolute bottom-0 right-0"
        style={{
          width: getOrbPositions(size).secondOrb.right,
          height: getOrbPositions(size).secondOrb.bottom,
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(255, 147, 88, 0.4) 0%, rgba(255, 147, 88, 0) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      /> */}

      {/* Force hardware acceleration for better blur performance */}
      <div
        className="absolute bottom-0 right-0"
        style={{
          width: '1000px',
          height: '1000px',
          backgroundColor: 'rgba(242, 106, 27, 0.15)',
          borderRadius: '50%',
          filter: 'blur(150px)',
          transform: 'translate(40%, 60%) translateZ(0)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Background Pattern Container */}
      <div
        className="absolute hidden md:block"
        style={{
          width: 'clamp(400px, 50vw, 647.089px)',
          height: 'clamp(600px, 70vh, 950px)',
          left: 'calc(50% - min(947.089px, 90vw)/2)',
          top: '50px',
          transformOrigin: 'center',
          zIndex: 0,
        }}
      >
        {circlePositions.map((leftPosition, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              width: 'clamp(400px, 45vw, 647.09px)',
              height: 'clamp(400px, 45vw, 647.09px)',
              left: `${leftPosition}px`,
              top: '0px',
              transform: 'rotate(0deg)',
              transformOrigin: 'top left',
              borderRadius: '50%',
              border: '0.7px solid rgba(242,106,27,0.2)',
              mask: 'linear-gradient(to bottom, transparent, black 35%, black 65%, transparent)',
              WebkitMask:
                'linear-gradient(to bottom, transparent, black 35%, black 65%, transparent)',
              padding: '0.7px',
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative px-4 sm:px-6 md:px-8 lg:px-20 pt-16 sm:pt-20 md:pt-32 lg:pt-48 flex flex-col items-center gap-6 sm:gap-8 md:gap-12 lg:gap-20">
        {/* Hero Content */}
        <div className="flex flex-col items-center gap-3 relative z-10 w-full max-w-full md:max-w-2xl lg:max-w-4xl">
          {/* Badge */}
          <div className="h-6 sm:h-7 px-2.5 sm:px-3 bg-[#37322f] rounded-[999px] shadow-[0px_1px_0px_rgba(214,207,194,0.12)_inset] inline-flex items-center gap-[5px] sm:gap-2 mt-20 sm:mt-24 md:mt-0 relative z-50">
      <div className="w-[14px] sm:w-[17px] h-[14px] sm:h-4 relative flex-shrink-0">
        <Image 
          src="/assets/icons/animated_images.svg"
          alt="images icon"
          width={17}
          height={16}
          className="object-contain w-full h-full"
          priority
        />
      </div>
      <span className="text-white text-[10px] sm:text-xs font-medium font-['Inter'] leading-6 tracking-[0.672px] whitespace-nowrap">
        Videos
      </span>
    </div>
          {/* Main Title */}
          <div className="text-center mt-0.4 w-full lg:w-[930px] px-4 sm:px-0">
            <h1 className="text-center">
              {/* <span
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-bold font-['Inter'] leading-tight lg:leading-[91px] bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #F26A1B 0%, #FDF7F2 100%)',
                }}
              >
                Reimagining
              </span> */}
              <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-bold font-['Inter'] leading-tight lg:leading-[91px]">
                {' '}
                Videos
                {/* <br />
                Development for
                <br />
                Large-Scale Businesses */}
              </span>
            </h1>
          </div>

          {/* Description */}
          <div className="w-full px-4 sm:px-6 md:px-8 lg:w-[930px] lg:px-0 text-center mt-[0.5px]">
  
           
            <span className="text-white text-base sm:text-lg font-normal font-['Inter'] leading-[30.60px]">
              {' '}
              Learn more about <span className="text-white text-base sm:text-lg font-bold font-['Inter'] uppercase">
              KAVIA AI
            </span> and how it all works.        </span>
          </div>
        </div> 
        <div className="container mx-auto px-4 py-8">
     
      <div className="space-y-6">
      <VideoList videos={videos} />
      </div>
    </div>  
      </div>
    </section>
    </VideoProvider>

  )
}
