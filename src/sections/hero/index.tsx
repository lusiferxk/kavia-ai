//src/sections/hero/index.tsx
'use client'

import { useEffect, useRef, useState } from 'react'

import { KeyBuilds} from '../KaviaBuilds/KeyBuilds'

import Link from 'next/link'


// Import BuildContent component and its styles
import BuildContent from '../../buildexportcomponent/components/BuildContent'
import '../../buildexportcomponent/styles/globals.css'

export function Hero() {
  const videoRef = useRef(null)
  const [size, setSize] = useState('lg')
  const [isMainVideoPlaying, setIsMainVideoPlaying] = useState(false)
  const thumbnailVideoRef = useRef(null)
  const mainVideoRef = useRef(null)

  // BuildContent state management
  const [selectedType, setSelectedType] = useState(0)
  const [selectedBuildOption, setBuildOption] = useState(0)
  const [activeFramework, setActiveFramework] = useState({ web: 0 })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [inputText, setInputText] = useState("")
  const [isStreaming, setIsStreaming] = useState(false)
  const [loadingText, setLoadingText] = useState("")
  const [isComplexProjectSubmitting, setIsComplexProjectSubmitting] = useState(false)

  // Mock functions for project creation
  const createProject = async (blueprintData) => {
    console.log('Creating project with blueprint:', blueprintData)
    // Implement your project creation logic here
    return { success: true, projectId: 'mock-project-id' }
  }

  const handleComplexProjectSubmit = async (projectData) => {
    setIsComplexProjectSubmitting(true)
    try {
      console.log('Complex project submission:', projectData)
      // Implement your complex project logic here
    } finally {
      setIsComplexProjectSubmitting(false)
    }
  }

  const handlePlayClick = () => {
    setIsMainVideoPlaying(true)
    if (mainVideoRef.current) {
      mainVideoRef.current.play().catch((error) => {
        console.log('Main video playback failed:', error)
      })
    }
  }

  const handleVideoEnd = () => {
    setIsMainVideoPlaying(false)
    // Restart the thumbnail video
    if (thumbnailVideoRef.current) {
      thumbnailVideoRef.current.play().catch((error) => {
        console.log('Thumbnail video restart failed:', error)
      })
    }
  }

  const getRightPosition = (screenSize) => {
    const positions = {
      '2xl': '58%',
      xl: '65%',
      lg: '45%',
    }
    console.log('Current Screen Size for Opacity Logo:', screenSize)
    console.log('Logo Right Position:', positions[screenSize] || '45%')
    return positions[screenSize] || '45%'
  }

  const getOrbPositions = (screenSize) => {
    const positions = {
      '2xl': {
        firstOrb: {
          left: '212px',
          top: '-105px',
        },
        secondOrb: {
          right: '170px',
          bottom: '-100px',
        },
      },
      xl: {
        firstOrb: {
          left: '123px',
          top: '-105px',
        },
        secondOrb: {
          right: '-50px',
          bottom: '-100px',
        },
      },
      lg: {
        firstOrb: {
          left: '212px',
          top: '-105px',
        },
        secondOrb: {
          right: '-50px',
          bottom: '-100px',
        },
      },
      md: {
        firstOrb: {
          left: '150px',
          top: '-80px',
        },
        secondOrb: {
          right: '-30px',
          bottom: '-80px',
        },
      },
      sm: {
        firstOrb: {
          left: '100px',
          top: '-60px',
        },
        secondOrb: {
          right: '-20px',
          bottom: '-60px',
        },
      },
    }

    return positions[screenSize] || positions.sm
  }

  const circlePositions = [302.91, 266.91, 233.56, 200.17, 166.83, 133.46, 100.09, 66.74, 33.35, 0]

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error)
      })
    }

    function handleResize() {
      const width = window.innerWidth
      let newSize
      if (width >= 1536) {
        newSize = '2xl'
      } else if (width >= 1280) {
        newSize = 'xl'
      } else if (width >= 1024) {
        newSize = 'lg'
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
      <div className="relative px-4 sm:px-6 md:px-8 lg:px-20 pt-16 sm:pt-20 md:pt-1 lg:pt-[12] flex flex-col items-center gap-6 sm:gap-8 md:gap-12 lg:gap-20">
        {/* Hero Content */}
           {/* BuildContent Component Integration */}
           <div className="relative z-10 w-full max-w-6xl">
          <BuildContent
            loggedInState={false} // Set to true if user is logged in
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            selectedBuildOption={selectedBuildOption}
            setBuildOption={setBuildOption}
            activeFramework={activeFramework}
            setActiveFramework={setActiveFramework}
            createProject={createProject}
            handleComplexProjectSubmit={handleComplexProjectSubmit}
            isComplexProjectSubmitting={isComplexProjectSubmitting}
            setIsModalOpen={setIsModalOpen}
            isStreaming={isStreaming}
            loadingText={loadingText}
            inputText={inputText}
            setInputText={setInputText}
          />
        </div>
            {/* Description */}
            <div className="w-full px-4 sm:px-6 md:px-8 lg:w-[930px] lg:px-0 text-center mt-[0.5px]">
            <span className="text-white text-base sm:text-lg font-bold font-['Inter'] uppercase">
              KAVIA
            </span>
            <span className="text-white text-base sm:text-lg font-bold font-['Inter']"> AI</span>
            <span className="text-white text-base sm:text-lg font-normal font-['Inter'] leading-[30.60px]">
              {' '}
              is revolutionizing software product development with an AI-powered Workflow Manager
              that accelerates every phase of the development lifecycle.
            </span>
          </div>
        <div className="flex flex-col items-center gap-3 relative z-10 w-full max-w-full md:max-w-2xl lg:max-w-4xl">
    

     

      

  
        </div>

     

        {/* Pattern Image */}
        <div
          className="absolute hidden lg:block"
          style={{
            width: 'clamp(250px, 30vw, 514.43px)',
            height: 'clamp(280px, 35vw, 580.81px)',
            right: getRightPosition(size),
            bottom: '-170px',
        
          }}
        >
          <img
            src="/logo-opacity.png"
            alt="Pattern"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'center',
            }}
          />
        </div>

        <div className="relative w-full flex justify-center">
          {/* Gradient Orbs */}
          <div
            style={{
              position: 'absolute',
              width: '295px',
              height: '295px',
              left: getOrbPositions(size).firstOrb.left,
              top: getOrbPositions(size).firstOrb.top,
              backgroundColor: 'rgba(255, 147, 88, 1)',
              borderRadius: '50%',
              filter: 'blur(200px)',
              transform: 'scale(1.2)',
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: '295px',
              height: '295px',
              right: getOrbPositions(size).secondOrb.right,
              bottom: getOrbPositions(size).secondOrb.bottom,
              backgroundColor: 'rgba(225, 94, 13, 1)',
              borderRadius: '50%',
              filter: 'blur(200px)',
              zIndex: 0,
            }}
          />
          <div className="w-[585px] h-[401px] right-[-170px] top-[-389px] absolute bg-[#ff9358]  opacity-30 rounded-full blur-[152px] " />

          {/* Video Container */}
{/* Video Section with Background Box */}
<div className="w-[1256px] mx-auto py-[65px] relative bg-gradient-to-b from-[#231f20] via-[#231f20]/10 to-transparent rounded-[32px] flex flex-col justify-start items-center gap-12 z-0">
          {/* Background Orbs */}
          {/* <div className="w-[585px] h-[401px] left-[-216px] top-[823px] absolute opacity-30 bg-[#f26a1b] rounded-full blur-[152px]" /> */}
          {/* <div className="w-[585px] h-[401px] right-[-216px] top-[-389px] absolute bg-[#ff9358]  opacity-30 rounded-full blur-[152px] " /> */}

          {/* Title */}
       {/* Main Title */}
       <div className="text-center mt-0.4 w-full lg:w-[930px] px-4 sm:px-0">
            <h1 className="text-center">
              <span
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-bold font-['Inter'] leading-tight lg:leading-[91px] bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #F26A1B 0%, #FDF7F2 100%)',
                }}
              >
                Reimagining
              </span>
              <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-bold font-['Inter'] leading-tight lg:leading-[91px]">
                {' '}
                Software
                <br />
                Product Development
              </span>
            </h1>
          </div>

          {/* Video Container */}
          <div className="w-[1059.56px] h-[596px] relative">
            <div
              className="relative w-full h-full rounded-[9px] overflow-hidden bg-[#231F20]"
              onClick={!isMainVideoPlaying ? handlePlayClick : undefined}
            >
              {!isMainVideoPlaying ? (
                <>
                  <video
                    ref={thumbnailVideoRef}
                    loop
                    muted
                    playsInline
                    autoPlay
                    className="absolute w-full h-full rounded-[9px]"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                      transform: 'scale(1.01)',
                    }}
                  >
                    <source src="/assets/videos/hero-kavia-video.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute bottom-4 right-4">
                    <div className="h-[43.70px] px-3 py-2.5 bg-white/90 rounded-[72.59px] flex-col justify-start items-start gap-2.5 inline-flex overflow-hidden cursor-pointer hover:bg-white transition-colors duration-200"
                      onClick={handlePlayClick}>
                      <div className="self-stretch justify-center items-center gap-2 inline-flex">
                        <div className="w-[24.27px] h-[23.70px] relative overflow-hidden flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 5.14v14.72a1 1 0 001.5.87l11-7.36a1 1 0 000-1.74l-11-7.36a1 1 0 00-1.5.87z" fill="#231f20"/>
                          </svg>
                        </div>
                        <div className="text-center text-[#231f20] text-[12.86px] font-medium font-['Inter'] leading-tight tracking-tight">Play Video</div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <video
                  ref={mainVideoRef}
                  controls
                  controlsList="nodownload noplaybackrate"
                  playsInline
                  autoPlay
                  onEnded={handleVideoEnd}  
                  className="absolute w-full h-full rounded-[9px]"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transform: 'scale(1.01)',
                  }}
                >
                  <source src="https://kavia-website-artifacts.s3.us-east-1.amazonaws.com/videos/kavia_ai.mp4" type="video/mp4" />
                </video>
              )}
              
              <style jsx global>{`
                video::-webkit-media-controls-enclosure {
                  background: transparent !important;
                }

                video::-webkit-media-controls-panel {
                  background: transparent !important;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }

                video:not(:fullscreen)::-webkit-media-controls-timeline,
                video::-webkit-media-controls-current-time-display,
                video::-webkit-media-controls-time-remaining-display,
                video::-webkit-media-controls-volume-slider,
                video::-webkit-media-controls-mute-button,
                video::-webkit-media-controls-download-button,
                video::-webkit-media-controls-overflow-button {
                  display: none !important;
                }

                video:not(:fullscreen)::-webkit-media-controls-play-button,
                video:not(:fullscreen)::-webkit-media-controls-fullscreen-button {
                  opacity: 1;
                  margin: 0 8px;
                  background-color: transparent !important;
                  border-radius: 50%;
                  filter: invert(45%) sepia(82%) saturate(2096%) hue-rotate(353deg) brightness(97%) contrast(93%);
                  transform: scale(1.2);
                  transition: transform 0.2s ease;
                  will-change: transform;
                }
                
                video:not(:fullscreen)::-webkit-media-controls-play-button:hover,
                video:not(:fullscreen)::-webkit-media-controls-fullscreen-button:hover {
                  transform: scale(1.3);
                }

                video:fullscreen::-webkit-media-controls-enclosure {
                  background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5)) !important;
                }

                video:fullscreen::-webkit-media-controls-panel {
                  padding: 10px 0 20px 0 !important;
                }

                video:fullscreen::-webkit-media-controls-timeline {
                  display: flex !important;
                  margin: 0 16px;
                  height: 3px;
                }
                
                video:fullscreen::-webkit-media-controls-play-button,
                video:fullscreen::-webkit-media-controls-fullscreen-button {
                  opacity: 1;
                  margin: 0 8px;
                  padding: 8px;
                  background-color: rgba(0, 0, 0, 0.7) !important;
                  border-radius: 50%;
                  filter: invert(1);
                  transform: scale(1.2);
                  transition: all 0.2s ease;
                }
                
                video:fullscreen::-webkit-media-controls-play-button:hover,
                video:fullscreen::-webkit-media-controls-fullscreen-button:hover {
                  background-color: rgba(0, 0, 0, 0.9) !important;
                  transform: scale(1.3);
                }
              `}</style>
            </div>
          </div>

          {/* View All Videos Button - Figma Design */}
          <Link href="/resources/videos">
  <div 
    className="inline-flex justify-center items-center gap-2 cursor-pointer transition-all duration-200 hover:opacity-80"
    style={{
      height: '40px',
      padding: '6px 20px',
      borderRadius: '8px',
      border: '1px solid rgba(233, 233, 233, 0.25)',
    }}
  >
    <span className="text-[#f4f3f3] text-sm font-semibold font-['Inter'] leading-tight">View All Videos</span>
    <div className="w-1.5 h-3 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
        <path d="M0.7665 11.2404L-0.00390625 10.47L4.466 6.00008L-0.00390625 1.53017L0.7665 0.759766L6.00681 6.00008L0.7665 11.2404Z" fill="#F4F3F3"/>
      </svg>
    </div>
  </div>
</Link>
        </div>
        </div>
      </div>

      <KeyBuilds />

 
    </section>
  )
}
