'use client'
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Header } from '../../../components/layout/header';
import Footer from '../../../components/layout/footer';

const features = [
  {
    title: 'Integrate your Git',
    subtitle: 'Import and manage your existing codebase with complete version control.',
    bullets: [
      'Import existing projects',
      'Track code versions',
      'Manage repositories efficiently',
    ],
    image: '/assets/images/products/Inspect-sm.png',
    badge: 'Successfully Imported Repository',
    githubLogo: '/assets/icons/github.svg',
    right: true,
  },
  {
    title: 'Query your Code',
    subtitle: 'Get instant insights into your codebase within 2–3 seconds.',
    bullets: [
      'Quick code understanding',
      'Architectural visualization',
      'Documentation creation',
    ],
    image: '/assets/images/products/query-code.png',
    badge: '',
    githubLogo: '',
    right: false,
  },
  {
    title: 'Extract as Documents',
    subtitle: 'Generate comprehensive documentation from your existing codebase automatically.',
    bullets: [
      'Create technical documentation',
      'Enable knowledge transfer',
      'Support team learning',
    ],
    image: '/assets/images/products/extract-docs.png',
    badge: '',
    githubLogo: '',
    right: true,
  },
  {
    title: 'Advanced Analysis',
    subtitle: 'A deep query system for detailed code understanding and architecture extraction.',
    bullets: [
      'Generate visual architecture',
      'Create detailed documentation',
      'Extract system insights',
    ],
    image: '/assets/inspect/aa.png',
    badge: '',
    githubLogo: '',
    right: false,
  },
  {
    title: 'Modify Multiple Repositories',
    subtitle: 'Update your existing codebase through specific feature-based prompts.',
    bullets: [
      'Targeted code updates',
      'Feature modifications',
      'Codebase improvements',
    ],
    image: '/assets/inspect/mf1.png',
    badge: '',
    githubLogo: '',
    right: true,
  },
  {
    title: 'Live Preview your Changes',
    subtitle: 'Preview running applications across web, mobile, and backend platforms.',
    bullets: [
      'Test and update live code with prompts',
      'Preview changes as you modify',
      'Live edit like in Insomnia',
    ],
    image: '/assets/inspect/ll1.png',
    badge: '',
    githubLogo: '',
    right: false,
  },
];

interface FeatureCardProps {
  title: string;
  subtitle: string;
  bullets: string[];
  image: string;
  badge?: string;
  githubLogo?: string;
  right: boolean;
}

function FeatureSection({ feature }: { feature: FeatureCardProps }) {
  const isRight = feature.right;
  
  return (
    <div className="w-full max-w-[1256px] h-auto lg:h-[612px] mx-auto relative bg-gradient-to-br from-[#191616] to-[#231f20] rounded-xl overflow-hidden outline outline-1 outline-offset-[-1px] outline-white/5  transition-all duration-300 group">
          {/* <div className="w-full max-w-[1256px] h-auto lg:h-[612px] mx-auto relative bg-gradient-to-br from-[#191616] to-[#231f20] rounded-xl overflow-hidden outline outline-1 outline-offset-[-1px] outline-white/5 hover:outline-[#e15e0d] transition-all duration-300 group"> */}

      {/* Title */}
      <div className="w-full lg:w-[416px] absolute lg:left-[48px] lg:top-[48px] left-8 top-8 inline-flex flex-col justify-start items-start gap-8 px-4 lg:px-0">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <h3 className="self-stretch text-white text-2xl lg:text-[34px] font-medium font-['Inter'] leading-normal lg:leading-[40.80px]">
            {feature.title}
          </h3>
        </div>
      </div>

      {/* Subtitle - always on the right side on desktop */}
      <div className="w-full lg:w-[416px] absolute lg:left-[792px] lg:top-[48px] left-8 top-24 lg:top-[48px] text-[#dedcdd] text-base font-normal font-['Inter'] leading-snug px-4 lg:px-0">
        {feature.subtitle}
      </div>

      {/* Bullets - positioned based on alignment */}
      <div className={`w-full lg:w-[402px] absolute lg:top-[418px] top-[160px] inline-flex flex-col justify-start items-start px-8 lg:px-0 ${isRight ? 'lg:left-[48px]' : 'lg:left-[792px]'}`}>
        {feature.bullets.map((bullet: string, idx: number) => (
          <div 
            key={bullet} 
            className={`self-stretch py-4 ${idx < feature.bullets.length - 1 ? 'border-b border-white/10' : ''} inline-flex justify-start items-center gap-2.5`}
          >
            <div className="size-4 relative overflow-hidden">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath={`url(#clip_${idx}_${feature.title.replace(/\s+/g, '_')})`}>
                  <path d="M4.67188 8.33366L6.67187 10.3337L11.3385 5.66699" stroke="#4997B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.99479 14.6663C11.6767 14.6663 14.6615 11.6815 14.6615 7.99967C14.6615 4.31777 11.6767 1.33301 7.99479 1.33301C4.31289 1.33301 1.32812 4.31777 1.32812 7.99967C1.32812 11.6815 4.31289 14.6663 7.99479 14.6663Z" stroke="#4997B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                  <clipPath id={`clip_${idx}_${feature.title.replace(/\s+/g, '_')}`}>
                    <rect width="16" height="16" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="text-white text-base font-medium font-['Inter'] leading-snug">{bullet}</div>
          </div>
        ))}
      </div>

      {/* Additional Orange Glow for hover effect - positioned based on alignment */}
      <div 
        className={`w-[593px] h-[588px] absolute top-[396px] opacity-0 group-hover:opacity-20 bg-[#f26a1b] rounded-full blur-[152px] transition-opacity duration-300 ${
          isRight ? 'left-[800px]' : 'left-[-170px]'
        }`} 
      />

      {/* Image Container - positioned based on alignment */}
      <div 
        className={`w-full lg:w-[686px] h-[386px] relative lg:absolute lg:top-[178px] mt-[320px] lg:mt-0 bg-[#231f20] rounded-[8px] outline outline-1 outline-offset-[-1px] outline-white/10 transition-all duration-300 overflow-hidden ${
          // className={`w-full lg:w-[686px] h-[386px] relative lg:absolute lg:top-[178px] mt-[320px] lg:mt-0 bg-[#231f20] rounded-lg outline outline-1 outline-offset-[-1px] outline-white/10 group-hover:outline-[#e15e0d] transition-all duration-300 overflow-hidden ${

          isRight ? 'lg:left-[522px]' : 'lg:left-[48px]'
        }`}
      >
        {/* Orange Glow */}
        <div className="w-[593px] h-[588px] left-[46px] top-[-11px] absolute opacity-60 group-hover:opacity-20 bg-[#f26a1b] rounded-full blur-[152px] transition-opacity duration-300" />
        
        {/* Circular Pattern - Positioned to overflow right edge */}
        <div className="absolute -right-[150px] top-[100px]">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <div
              key={i}
              className="size-[279px] absolute rounded-full border-[0.66px] border-[#40281a]"
              style={{
                left: `${-i * 9.29}px`,
                top: `${i * 10.98}px`
              }}
            />
          ))}
        </div>

        {/* Main Image/Content Area */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* For Query your Code - Special Layout */}
          {feature.title === 'Query your Code' ? (
            <>
              {/* Main Repository Window */}
              <div className="absolute left-[25px] top-[43px] w-[466px] h-[362px] bg-white rounded-xl shadow-lg overflow-hidden z-10">
                <img 
                  src="/assets/inspect/qc.png" 
                  alt="Repository Interface" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Overlapping Code Editor Window */}
              <div className="absolute right-[25px] top-[-8px] w-[272px] h-[353px] bg-[#1e1e1e] rounded-xl shadow-[0px_-4px_4px_0px_rgba(0,0,0,0.15)] outline outline-[3px] outline-[#ffefe4] overflow-hidden z-20">
                <img 
                  src="/assets/inspect/qc2.png" 
                  alt="Code Editor" 
                  className="w-full h-full object-cover"
                />
                
                {/* Small Modal Popup */}
                <div className="absolute bottom-0 left-0 right-0 h-[68px] bg-white rounded-lg shadow-[0px_-7.98px_4.71px_0px_rgba(0,0,0,0.15)] outline outline-[0.67px] outline-offset-[-0.67px] outline-[#dedcdd] overflow-hidden">
                  <div className="p-3 flex flex-col gap-1">
                    <p className="text-[#1a1a1a] text-xs font-medium">What's the solution for black screen display?</p>
                    <p className="text-[#6a6a6a] text-[10px]">Find root cause and give a fix</p>
                  </div>
                </div>
              </div>
            </>
          ) : feature.title === 'Extract as Documents' ? (
            /* Extract as Documents - Special Layout */
            <div className="relative w-full h-full flex items-center justify-start pl-8">
              {/* Main panel with three overlapping images */}
              <img 
                src="/assets/inspect/dc.png" 
                alt="Document List" 
                className="relative z-10 h-[90%] w-auto object-contain"
              />
              <img 
                src="/assets/inspect/dc1.png" 
                alt="Attached Files" 
                className="absolute left-[55%] top-[10%] z-20 h-[40%] w-auto object-contain"
              />
              <img 
                src="/assets/inspect/dc2.png" 
                alt="Subscription Plan" 
                className="absolute left-[60%] top-[45%] z-30 h-[45%] w-auto object-contain"
              />
            </div>
          ) : feature.title === 'Advanced Analysis' ? (
            /* Advanced Analysis - Special Layout */
            <>
              {/* Main Document Window */}
              <div className="w-[342px] h-96 left-[44px] top-[14px] absolute bg-white rounded-xl overflow-hidden">
                <img 
                  src="/assets/inspect/aa.png" 
                  alt="Advanced Analysis Document" 
                  className="w-[332.68px] h-[398px] left-[5px] top-[6px] absolute"
                />
              </div>
              
              {/* Overlapping Analysis Window */}
              <div className="w-[342px] h-[255px] left-[300px] top-[74px] absolute  rounded-xl  overflow-hidden">
                <img 
                  src="/assets/inspect/aa-1.png" 
                  alt="Analysis Results" 
                  className="w-[346px] h-[247px] left-0 top-[8px] absolute"
                />
              </div>
            </>
          )  : feature.title === 'Modify Multiple Repositories' ? (
            /* Modify Multiple Repositories - Special Layout */
            <>
              {/* Main Repository Window */}
              <div className="w-[579px] h-[334px] left-[25px] top-[26px] absolute bg-white rounded-xl overflow-hidden">
                <img 
                  src="/assets/inspect/mf1.png" 
                  alt="Multiple Repositories Interface" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Overlapping Selection Window */}
              <div className="w-[342px] h-[229px] left-[318px] top-[175px] absolute bg-white rounded-xl shadow-[0px_3px_7px_0px_rgba(0,0,0,0.15)] outline outline-[3px] outline-[#ffefe4] overflow-hidden">
                <img 
                  src="/assets/inspect/mf2.png" 
                  alt="Repository Selection" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </>
          )  : feature.title === 'Live Preview your Changes' ? (
            /* Live Preview - Special Layout */
            <>
              {/* Main Preview Window */}
              <div className="w-[466px] h-[362px] left-[25px] top-[43px] absolute bg-white rounded-xl outline outline-4 overflow-hidden">
                <img 
                  src="/assets/inspect/ll1.png" 
                  alt="Live Preview Interface" 
                  className="w-full h-full object-cover object-left-top"
                />
              </div>
              
              {/* Overlapping Code Editor Window */}
              <div className="w-[272px] h-[353px] left-[389px] top-[-8px] absolute bg-white rounded-xl shadow-[0px_-4px_4px_0px_rgba(0,0,0,0.15)] outline outline-[3px] outline-[#ffefe4] overflow-hidden">
                <img 
                  src="/assets/inspect/ll2.png" 
                  alt="Code Editor" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </>
          ) :  (
            /* Default Layout for other features */
            <>
              <div className="relative z-10 w-[280px] lg:w-[333px] h-[300px] lg:h-[355px] bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* GitHub Logo */}
              {feature.githubLogo && (
                <div className="absolute left-[20px] lg:left-[73px] bottom-[20px] lg:bottom-[40px] w-[120px] lg:w-[156px] h-[60px] lg:h-[81px] bg-white rounded-xl shadow-[0px_3px_7px_0px_rgba(0,0,0,0.15)] outline outline-1 outline-offset-[-1px] outline-[#dedcdd] overflow-hidden flex items-center justify-center z-20">
                  <img src={feature.githubLogo} alt="GitHub" className="h-6 lg:h-8" />
                </div>
              )}

              {/* Success Badge */}
              {feature.badge && (
                <div className="absolute top-[21px] right-[10px] lg:right-[26px] h-10 px-3 lg:px-4 bg-white rounded-[13px] shadow-[0px_3px_7px_0px_rgba(0,0,0,0.15)] outline outline-1 outline-offset-[-1px] outline-[#dedcdd] overflow-hidden flex items-center gap-2 z-20">
                  <div className="size-5 bg-[#0e9f6e] rounded-full flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 6L5 8L9 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-black text-xs lg:text-sm font-medium font-['Inter'] leading-[16.80px]">{feature.badge}</span>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      {/* Add padding for mobile */}
      <div className="h-[420px] lg:hidden"></div>
    </div>
  );
}

export default function InspectFeaturePage() {
  const [isMainVideoPlaying, setIsMainVideoPlaying] = useState(false);
  const thumbnailVideoRef = useRef<HTMLVideoElement>(null);
  const mainVideoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    setIsMainVideoPlaying(true);
    if (mainVideoRef.current) {
      mainVideoRef.current.play().catch((error) => {
        console.log('Main video playback failed:', error);
      });
    }
  };

  const handleVideoEnd = () => {
    setIsMainVideoPlaying(false);
    if (thumbnailVideoRef.current) {
      thumbnailVideoRef.current.play().catch((error) => {
        console.log('Thumbnail video restart failed:', error);
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#231F20] text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full pt-32 pb-24 flex flex-col items-center justify-center bg-[#231F20] relative overflow-hidden">

        {/* Video Section with Background Box */}
        <div className="w-[1256px] mx-auto pt-20 pb-[65px] relative bg-gradient-to-b from-[#231f20] to-[#231f20]/0 rounded-[32px] flex flex-col justify-start items-center gap-12 overflow-hidden">
          {/* Orange Glow */}
          <div className="w-[593px] h-[588px] left-[-24px] top-[374px] absolute opacity-60 bg-[#f26a1b] rounded-full blur-[152px]" />
          {/* Blue Glow */}
          <div className="w-[1095px] h-[514px] left-[436px] top-[791.04px] absolute origin-top-left rotate-[-29.55deg] opacity-50 bg-[#85a5ee] rounded-full blur-[152px]" />
          
          {/* Title Section */}
          <div className="text-center mt-0.4 w-full lg:w-[930px] px-4 sm:px-0 relative z-10">
            {/* INSPECT Badge with Icon */}
            <div className="flex justify-center mb-4">
              <div className="inline-flex justify-center items-center gap-[7px]">
                <img src="/assets/icons/inspect-icon.svg" alt="Inspect" className="w-5 h-5" />
                <span className="text-[#f4682c] text-sm font-bold font-['Inter'] uppercase leading-[21px] tracking-wide">Inspect</span>
              </div>
            </div>
            
            {/* Title and Subtitle */}
            <div className="flex flex-col justify-start items-center gap-3">
              <h1 className="text-center text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold font-['Inter'] leading-tight lg:leading-[61.60px]">
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #F26A1B 0%, #FDF7F2 100%)',
                  }}
                >
                  Comprehensive
                </span>
                <span className="text-white">
                  {' '}
                  Code Intelligence
                  <br />
                  for Developers
                </span>
              </h1>
              <div className="w-full lg:w-[930px] text-center text-white text-base md:text-lg font-normal font-['Inter'] leading-relaxed md:leading-[30.60px]">
                Unified AI powered tools across Entire Software Product Development Lifecycle.
              </div>
            </div>
          </div>

          {/* Video Container */}
          <div className="w-[1059.56px] h-[596px] relative z-10">
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
                    <source src="https://kavia-website-artifacts.s3.us-east-1.amazonaws.com/videos/INSPECT.mp4 " type="video/mp4" />
                  </video>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="px-3 py-2.5 bg-white/90 rounded-[72.59px] flex-col justify-start items-start gap-2.5 inline-flex overflow-hidden cursor-pointer hover:bg-white transition-colors duration-200 shadow-[0px_4px_14px_0px_rgba(0,0,0,0.10)]"
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
            </div>
          </div>

     
        </div>
      </section>

      {/* AI-Powered Codebase Intelligence Section */}
      <section className="w-full bg-[#231F20] py-20">
        <div className="w-full flex justify-center mb-16">
          <div className="w-[516px] inline-flex flex-col justify-start items-start gap-3">
            <h2 className="w-[502px] text-center text-white text-[44px] font-semibold font-['Inter'] leading-[57.20px]">
              AI-Powered Codebase Intelligence
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          {features.map((feature) => (
            <FeatureSection key={feature.title} feature={feature} />
          ))}
        </div>
      </section>

    {/* Explore More Section */}
    <section className="w-full py-16">
        <div className="max-w-[1300px] mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-white">Explore More</h3>
          <div className="flex gap-6">
            {/* Plan Card */}
            <div className="flex-1 max-w-[616px] bg-[#231f20] rounded-[8px] outline outline-1 outline-offset-[-1px] outline-white/5 overflow-hidden group hover:outline-white/10 transition-all duration-300">
              <div className="p-8 flex flex-col justify-start items-start gap-8">
                <div className="inline-flex justify-start items-center gap-[7px]">
                  <img src="/assets/icons/plan.svg" alt="Plan" className="size-5" />
                  <span className="text-[#4997b3] text-[15px] font-bold font-['Inter'] uppercase leading-snug tracking-wide">Plan</span>
                </div>
                <div className="flex flex-col justify-start items-start gap-4">
                  <div className="text-white text-[38px] font-normal font-['Inter'] leading-[45.60px]">
                    AI-Powered Codebase Intelligence
                  </div>
                  <div className="text-[#dedcdd] text-base font-normal font-['Inter'] leading-snug">
                    Identify performance bottlenecks and receive AI-powered improvement suggestions
                  </div>
                </div>
                <div data-property-1="Default" className="size-[30px] relative rounded-[5px] overflow-hidden">
                  <div className="size-[30px] px-[12.50px] py-[2.50px] left-0 top-0 absolute bg-white/5 rounded-[30px] inline-flex justify-center items-center gap-[6.25px] hover:bg-white/10 transition-all duration-200 cursor-pointer">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="white" fillOpacity="0.6"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Build Card */}
            <div className="flex-1 max-w-[616px] bg-[#231f20] rounded-[8px] outline outline-1 outline-offset-[-1px] outline-white/5 overflow-hidden group hover:outline-white/10 transition-all duration-300">
              <div className="p-8 flex flex-col justify-start items-start gap-8">
                <div className="inline-flex justify-start items-center gap-[7px]">
                  <img src="/assets/icons/build.svg" alt="Build" className="size-5" />
                  <span className="text-[#f4b25a] text-[15px] font-bold font-['Inter'] uppercase leading-snug tracking-wide">Build</span>
                </div>
                <div className="flex flex-col justify-start items-start gap-4">
                  <div className="text-white text-[38px] font-normal font-['Inter'] leading-[45.60px]">
                    AI-Powered Codebase Intelligence
                  </div>
                  <div className="text-[#dedcdd] text-base font-normal font-['Inter'] leading-snug">
                    Identify performance bottlenecks and receive AI-powered improvement suggestions
                  </div>
                </div>
                <div data-property-1="Default" className="size-[30px] relative rounded-[5px] overflow-hidden">
                  <div className="size-[30px] px-[12.50px] py-[2.50px] left-0 top-0 absolute bg-white/5 rounded-[30px] inline-flex justify-center items-center gap-[6.25px] hover:bg-white/10 transition-all duration-200 cursor-pointer">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="white" fillOpacity="0.6"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Video Controls Styles */}
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

      <Footer />
    </div>
  );
}