//src/app/enterprise/EnterpriseHero.tsx

'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import SecurityFeatures from '@/sections/security/security-features'
import { FeatureSection , securityFeatureData} from '@/sections/security/feature-section';
import GradientBackground from './GradientBackground'

export function SecurityHero() {
  const circlePositions = [302.91, 266.91, 233.56, 200.17, 166.83, 133.46, 100.09, 66.74, 33.35, 0]
  const [size, setSize] = useState('lg')

  const getOrbPositions = (screenSize) => {
    const positions = {
      '2xl': {
        firstOrb: {
          left: '0',
          top: '-200px',
        },
        secondOrb: {
          right: '0',
          bottom: '-200px',
        },
        badgeOrb: {
          left: '50%',
          top: '-60px',
          width: '100px',
          height: '100px',
        },
      },
      xl: {
        firstOrb: {
          left: '0',
          top: '-200px',
        },
        secondOrb: {
          right: '-100px',
          bottom: '-200px',
        },
        badgeOrb: {
          left: '50%',
          top: '-50px',
          width: '90px',
          height: '90px',
        },
      },
      lg: {
        firstOrb: {
          left: '0',
          top: '-200px',
        },
        secondOrb: {
          right: '-100px',
          bottom: '-200px',
        },
        badgeOrb: {
          left: '50%',
          top: '-40px',
          width: '80px',
          height: '80px',
        },
      },
      md: {
        firstOrb: {
          left: '0',
          top: '-150px',
        },
        secondOrb: {
          right: '-50px',
          bottom: '-150px',
        },
        badgeOrb: {
          left: '50%',
          top: '-35px',
          width: '70px',
          height: '70px',
        },
      },
      sm: {
        firstOrb: {
          left: '0',
          top: '-100px',
        },
        secondOrb: {
          right: '-50px',
          bottom: '-100px',
        },
        badgeOrb: {
          left: '50%',
          top: '-30px',
          width: '60px',
          height: '60px',
        },
      },
    }

    return positions[screenSize] || positions.sm
  }

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
          <div className="px-2.5 py-0 bg-[#37322f] rounded-[999px] shadow-[0px_1px_0px_rgba(214,207,194,0.12)_inset] flex items-center justify-center relative z-50 sm:z-10 mt-14 sm:mt-0">
          <span className="text-white text-xs font-medium font-['Inter'] leading-6 tracking-[0.672px]">
            Security
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
                Security
                {/* <br />
                Development for
                <br />
                Large-Scale Businesses */}
              </span>
            </h1>
          </div>

          {/* Description */}
          <div className="w-full px-4 sm:px-6 md:px-8 lg:w-[930px] lg:px-0 text-center mt-[0.5px]">
            <span>At  </span>
            <span className="text-white text-base sm:text-lg font-bold font-['Inter'] uppercase">
              KAVIA AI
            </span>
            <span className="text-white text-base sm:text-lg font-normal font-['Inter'] leading-[30.60px]">
              {' '}
              security and privacy are our top priorities. SourceLink, our SCM service, leverages AWS cloud infrastructure to ensure the safety of your code and data throughout the entire SDLC process across multiple git providers.
            </span>
          </div>
        </div> 
        <SecurityFeatures/>
        <div className="flex flex-col gap-20">
        {/* <FeatureSection {...securityFeatureData.codeProtection} /> */}
          <FeatureSection {...securityFeatureData.cloudInfra} />
          <FeatureSection {...securityFeatureData.compliance} />
          <FeatureSection {...securityFeatureData.scmIntegration} />
          <FeatureSection {...securityFeatureData.dataProtection} />
          <FeatureSection {...securityFeatureData.accessControl} isLastSection />
        </div>
      </div>
    </section>
  )
}
