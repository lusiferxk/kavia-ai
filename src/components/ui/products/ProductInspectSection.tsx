import React from 'react';
import Image from 'next/image';

const GradientCheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
      <rect width="24" height="24" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0)">
      <path d="M17.2376 9.49165L10.5396 16.1897L6.73512 12.375L7.61541 11.4887L10.5219 14.3952L10.5396 14.4129L10.5573 14.3952L16.341 8.60506L17.2376 9.49165ZM11.9978 21.4731C10.694 21.4731 9.46676 21.2244 8.31601 20.7271C7.16481 20.2296 6.16005 19.5519 5.30152 18.6939C4.44316 17.8357 3.76508 16.8313 3.26729 15.6806C2.76987 14.5304 2.52109 13.3035 2.52109 11.9998C2.52109 10.6891 2.76979 9.45735 3.26705 8.30445C3.7645 7.1511 4.44223 6.14812 5.30022 5.29528C6.15842 4.4424 7.16279 3.76705 8.31352 3.26924C9.46376 2.77182 10.6906 2.52305 11.9943 2.52305C13.3051 2.52305 14.5368 2.77174 15.6897 3.269C16.8431 3.76647 17.8461 4.44147 18.6989 5.29398C19.5518 6.14649 20.2271 7.14907 20.7249 8.30196C21.2223 9.45436 21.4711 10.6857 21.4711 11.9963C21.4711 13.3002 21.2224 14.5274 20.7252 15.6781C20.2277 16.8294 19.5527 17.8342 18.7001 18.6927C17.8476 19.551 16.845 20.2291 15.6922 20.7269C14.5398 21.2243 13.3084 21.4731 11.9978 21.4731Z" fill="url(#paint0_linear)" stroke="url(#paint1_linear)" strokeWidth="0.05"/>
    </g>
    <defs>
      <linearGradient id="paint0_linear" x1="11.9961" y1="2.49805" x2="11.9961" y2="21.4981" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F26A1B"/>
        <stop offset="1" stopColor="#F7B690"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="11.9961" y1="2.49805" x2="11.9961" y2="21.4981" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F26A1B"/>
        <stop offset="1" stopColor="#F7B690"/>
      </linearGradient>
    </defs>
  </svg>
);

const NavigationArrow = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.5">
      <mask id="mask0" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
        <rect width="20" height="20" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0)">
        <path d="M11.4531 9.9993L7.51562 6.0618L8.00125 5.57617L12.4244 9.9993L8.00125 14.4224L7.51562 13.9368L11.4531 9.9993Z" fill="white"/>
      </g>
    </g>
  </svg>
);

const ProductInspectSection = () => {
  const features = [
    "Knowledge Graph-based code querying interface",
    "Automated architecture and Feature extraction",
    "Deep code analysis with fix recommendations",
    "Custom documentation generation",
    "Multi-repository analysis support"
  ];

  const useCases = [
    {
      icon: "/assets/icons/system-migration.svg",
      title: "System Migration",
      description: "Extract complete architecture documentation from legacy systems for modernization initiatives"
    },
    {
      icon: "/assets/icons/developer-onboarding.svg",
      title: "Developer Onboarding",
      description: "Generate comprehensive codebase documentation and feature relationships"
    },
    {
      icon: "/assets/icons/code-optimization.svg",
      title: "Code Optimization",
      description: "Identify performance bottlenecks and receive AI-powered improvement suggestions"
    }
  ];

  return (
    <div className="flex self-stretch justify-start items-start flex-col gap-12 p-14 bg-white/[0.02] rounded-3xl">
      {/* Header Section */}
      <div className="flex self-stretch justify-start items-center flex-col gap-6">
        <div className="flex justify-start items-center flex-row gap-2.5 py-[5px] pr-4 pl-2 bg-[#F4682C] rounded-[46px]">
          <div className="flex justify-center items-center flex-col gap-2.5 bg-[rgba(35,31,32,0.15)] rounded-[40px] w-[36px] h-[36px]">
            <p className="self-stretch text-white text-xl font-['Inter'] text-center font-medium leading-[1.4]">1</p>
          </div>
          <span className="text-white text-lg font-['Inter'] font-bold leading-[1.4] tracking-[0.18px]">Inspect</span>
        </div>
        <p className="text-white text-2xl font-['Inter'] text-center leading-[1.7]">
          Transform complex codebases into actionable insights with our AI-Powered 
          In-depth analysis that processes 10,000+ files across repositories to deliver 
          comprehensive understanding of any software ecosystem.
        </p>
      </div>

      {/* Features Section */}
      <div className="flex self-stretch justify-start items-start flex-col gap-5">
        <div className="flex self-stretch justify-between items-center flex-row gap-5">
          <span className="text-[#DEDCDD] text-2xl font-['Inter'] leading-[1.3]">Features</span>
          <div className="flex justify-center items-center flex-row gap-3 py-2.5 rounded-lg h-10">
            <NavigationArrow />
            <NavigationArrow />
          </div>
        </div>
        <div className="flex self-stretch justify-start items-center flex-row gap-5 flex-wrap">
          {features.map((feature, index) => (
            <div key={index} className="flex justify-start items-start flex-row gap-2.5 p-2.5 bg-white/[0.05] border border-white/[0.05] rounded-2xl w-[280px]">
              <GradientCheckIcon />
              <p className="flex-1 text-white text-[15px] font-['Inter'] font-medium leading-[1.4]">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Video/Image Section */}
      <div className="self-stretch bg-[#FDF7F2] rounded-2xl h-[556px]" />

      {/* Use Cases Section */}
      <div className="flex self-stretch justify-start items-start flex-col gap-5">
        <div className="flex self-stretch justify-between items-center flex-row gap-5">
          <span className="text-[#DEDCDD] text-2xl font-['Inter'] leading-[1.3]">Use Cases</span>
          <div className="flex justify-center items-center flex-row gap-1 h-10 relative">
            <span className="text-[#F26A1B] font-['Inter'] font-medium leading-normal tracking-[0.32px]">See All</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4.8 13.5L3.75 12.45L10.95 5.25H4.5V3.75H13.5V12.75H12V6.3L4.8 13.5Z" fill="#F26A1B"/>
            </svg>
          </div>
        </div>
        <div className="flex self-stretch justify-start items-start flex-row gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="flex flex-1 justify-start items-start flex-col gap-[30px] p-6 bg-white/[0.01] border border-white/[0.05] rounded-2xl hover:bg-white/[0.05] transition-all duration-300">
              <div className="flex self-stretch justify-start items-start flex-col gap-5">
                <Image 
                  src={useCase.icon} 
                  alt={useCase.title}
                  width={48}
                  height={48}
                />
                <p className="self-stretch text-white text-xl font-['Inter'] font-medium leading-[1.4]">{useCase.title}</p>
              </div>
              <p className="self-stretch text-[#DEDCDD] text-[15px] font-['Inter'] leading-normal">
                {useCase.description}
              </p>
              <div className="p-2 bg-[#F26A1B] rounded-full shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15.5 16.5L22.5 12L15.5 7.5L15.5 16.5Z" fill="white"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInspectSection;