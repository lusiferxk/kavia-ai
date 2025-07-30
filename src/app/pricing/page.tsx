

'use client'

import React, { useState } from 'react'
import { Check } from 'lucide-react'

export default function PricingPage() {
  const [selectedPremiumPrice, setSelectedPremiumPrice] = useState('$50')

  const circlePositions = [302.91, 266.91, 233.56, 200.17, 166.83, 133.46, 100.09, 66.74, 33.35, 0]

  const features = [
    { name: 'Create Web/Mobile Application', free: true, premium: true, enterprise: true },
    { name: 'Figma Design Import', free: true, premium: true, enterprise: true },
    { name: 'One Click Deployment', free: true, premium: true, enterprise: true },
    { name: 'External Integrations', free: true, premium: true, enterprise: true },
    { name: 'Query Public Codebase', free: true, premium: true, enterprise: true },
    { name: 'Private Projects', free: false, premium: true, enterprise: true },
    { name: 'Integrate with GitHub', free: false, premium: true, enterprise: true },
    { name: 'Plan and Build Scalable Projects', free: false, premium: true, enterprise: true },
    { name: 'Ingest & Modify Existing Codebase', free: false, premium: true, enterprise: true },
    { name: 'Multi-User Collaboration', free: false, premium: false, enterprise: true },
    { name: 'Organization GitHub Access', free: false, premium: false, enterprise: true },
    { name: 'Team Based Access Control', free: false, premium: false, enterprise: true },
    { name: 'Custom/Enterprise Support', free: false, premium: false, enterprise: true },
    { name: 'Custom LLM and Workflow Configurations', free: false, premium: false, enterprise: true },
    { name: 'Custom AWS Deployment', free: false, premium: false, enterprise: true },
  ]

  // Calculate credits based on selected price
  const getPremiumCredits = () => {
    switch(selectedPremiumPrice) {
      case '$20':
        return '250,000'
      case '$50':
        return '550,000'
      case '$100':
        return '1,250,000'
      default:
        return '550,000'
    }
  }

  return (
    <div className="w-full min-h-screen relative bg-[#231F20] overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="w-[1095px] h-[514px] left-[199px] top-[284px] absolute opacity-30 bg-[#F26A1B] rounded-full blur-[152px]" />
      <div className="w-[295px] h-[295px] left-[-150px] top-[1621px] absolute bg-[#FF9358] rounded-full blur-[257px]" />
      
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
      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-[92px] pt-32">
        {/* Header Section */}
        <div className="w-[930px] mx-auto flex flex-col items-center gap-3 mb-20">
          <h1 className="text-center text-white text-[70px] font-bold font-['Inter'] leading-[91px]">
            Pricing
          </h1>
          <p className="w-[590px] text-center text-white text-lg font-normal font-['Inter'] leading-[27px]">
            KAVIA AI pricing plans for teams of all sizes. Choose an affordable plan that&apos;s packed with the best features for you.
          </p>
        </div>

        {/* Pricing Table Container */}
        <div className="relative w-[1256px] mx-auto">
          {/* Recommended Badge */}
          <div className="absolute left-[628px] top-[-23px] z-20 w-[314px] h-6 px-1.5 bg-[#FFEFE4]/80 rounded-tl-xl rounded-tr-xl border border-[#F26A1B] backdrop-blur-[2px] flex justify-center items-center">
            <span className="text-[#E15E0D] text-xs font-medium font-['Inter'] uppercase leading-[18px] tracking-wide">
              RECOMMENDED
            </span>
          </div>

          {/* Table - Added rounded-2xl for rounded corners */}
          <div className="bg-[#231F20]/80 rounded-2xl border border-white/10 overflow-hidden">
            <div className="flex">
              {/* Features Column */}
              <div className="flex-1">
                {/* Features Header */}
                <div className="h-[285px] p-5 border-b border-white/20">
                  <div className="w-[221.50px]">
                    <h3 className="text-white text-lg font-medium font-['Inter'] leading-[25.20px]">
                      Features
                    </h3>
                    <p className="text-[#DEDCDD] text-[13px] font-normal font-['Inter'] leading-[18px] mt-1">
                      Best for Individual with Advanced Features
                    </p>
                  </div>
                </div>
                
                {/* Feature Rows */}
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`px-4 py-[17px] border-b border-white/20 h-14 flex items-center ${
                      index === features.length - 1 ? 'border-b-0' : ''
                    }`}
                  >
                    <span className="text-[#DEDCDD] text-sm font-normal font-['Inter'] leading-tight">
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Free Plan Column */}
              <div className="flex-1 border-l border-white/10">
                {/* Free Plan Header */}
                <div className="h-[285px] p-5 border-b border-white/20">
                  <div className="flex flex-col h-full">
                    <div>
                      <h3 className="text-white text-lg font-medium font-['Inter'] leading-[25.20px]">
                        Free
                      </h3>
                      <p className="text-[#DEDCDD] text-[13px] font-normal font-['Inter'] leading-[18px] mt-1">
                        Best for Individual with Advanced Features
                      </p>
                    </div>
                    <div className="pt-6">
                      <div className="text-white text-[27px] font-semibold font-['Inter'] leading-tight opacity-90">
                        50,000
                      </div>
                      <div className="text-white text-sm font-normal font-['Inter'] leading-tight mt-2 mb-6">
                        Credits / month
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div className="p-1.5 border border-white/70 rounded-[52px] flex justify-center items-center mb-4 w-full">
                        <div className="px-2 py-1 rounded-[25px] w-full text-center">
                          <span className="text-white/80 text-[15px] font-medium font-['Inter'] leading-[21px]">
                            $0
                          </span>
                        </div>
                      </div>
                      {/* Rounded button with proper padding */}
                      <button className="h-10 px-5 py-2.5 bg-[#F26A1B] rounded-[6px] flex justify-center items-center gap-2 w-full hover:bg-[#E05A0B] transition-colors mb-5">
                        <span className="text-white text-sm font-semibold font-['Inter'] leading-tight">
                          Get Started for Free
                        </span>
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none">
                          <path d="M1.5 1L5.5 5.5L1.5 10" stroke="#F4F3F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Free Plan Features */}
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`p-4 border-b border-white/20 h-14 flex justify-center items-center ${
                      index === features.length - 1 ? 'border-b-0' : ''
                    }`}
                  >
                    {feature.free ? (
                      <div className="w-5 h-5 bg-[#31C48D] rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-black" strokeWidth={3} />
                      </div>
                    ) : (
                      <span className="text-white text-sm font-normal font-['Inter'] leading-[21px]">-</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Premium Plan Column */}
         {/* Premium Plan Column */}
         <div className="flex-1 relative">
                {/* Gradient Border Wrapper */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#F26A1B] to-[#F26A1B]/20 p-[1px]">
                  <div className="h-full bg-[#231F20]/80">
                    {/* This inner div creates the border effect */}
                  </div>
                </div>
                
                {/* Premium Plan Content */}
                <div className="relative z-10">
                  {/* Premium Plan Header */}
                  <div className="h-[285px] p-5 border-b border-white/20">
                    <div className="flex flex-col h-full">
                      <div>
                        <h3 className="text-white text-lg font-medium font-['Inter'] leading-[25.20px]">
                          Premium
                        </h3>
                        <p className="text-[#DEDCDD] text-[13px] font-normal font-['Inter'] leading-[18px] mt-1">
                          Best for Individual with Advanced Features
                        </p>
                      </div>
                      <div className="pt-6">
                        <div className="text-white text-[27px] font-semibold font-['Inter'] leading-tight opacity-90">
                          {getPremiumCredits()}
                        </div>
                        <div className="text-white text-sm font-normal font-['Inter'] leading-tight mt-2 mb-6">
                          Credits / month
                        </div>
                      </div>
                      <div className="mt-auto">
                        <div className="p-1.5 border border-white/70 rounded-[52px] flex overflow-hidden mb-4">
                          <button
                            onClick={() => setSelectedPremiumPrice('$20')}
                            className={`flex-1 px-2 py-1 rounded-[25px] transition-all ${
                              selectedPremiumPrice === '$20' ? 'bg-white' : ''
                            }`}
                          >
                            <span className={`text-[15px] font-medium font-['Inter'] leading-[21px] ${
                              selectedPremiumPrice === '$20' ? 'text-[#231F20]' : 'text-white/80'
                            }`}>
                              $20
                            </span>
                          </button>
                          <button
                            onClick={() => setSelectedPremiumPrice('$50')}
                            className={`flex-1 px-2 py-1 rounded-[25px] transition-all ${
                              selectedPremiumPrice === '$50' ? 'bg-white' : ''
                            }`}
                          >
                            <span className={`text-[15px] font-medium font-['Inter'] leading-[21px] ${
                              selectedPremiumPrice === '$50' ? 'text-[#231F20]' : 'text-white/80'
                            }`}>
                              $50
                            </span>
                          </button>
                          <button
                            onClick={() => setSelectedPremiumPrice('$100')}
                            className={`flex-1 px-2 py-1 rounded-[25px] transition-all ${
                              selectedPremiumPrice === '$100' ? 'bg-white' : ''
                            }`}
                          >
                            <span className={`text-[15px] font-medium font-['Inter'] leading-[21px] ${
                              selectedPremiumPrice === '$100' ? 'text-[#231F20]' : 'text-white/80'
                            }`}>
                              $100
                            </span>
                          </button>
                        </div>
                        {/* Rounded button with proper padding */}
                        <button className="h-10 px-5 py-2.5 bg-[#F26A1B] rounded-[6px] flex justify-center items-center gap-2 w-full hover:bg-[#E05A0B] transition-colors mb-5">
                          <span className="text-white text-sm font-semibold font-['Inter'] leading-tight">
                            Upgrade to Premium
                          </span>
                          <svg width="7" height="11" viewBox="0 0 7 11" fill="none">
                            <path d="M1.5 1L5.5 5.5L1.5 10" stroke="#F4F3F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Premium Plan Features */}
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className={`p-4 border-b border-white/20 h-14 flex justify-center items-center ${
                        index === features.length - 1 ? 'border-b-0' : ''
                      }`}
                    >
                      {feature.premium ? (
                        <div className="w-5 h-5 bg-[#31C48D] rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-black" strokeWidth={3} />
                        </div>
                      ) : (
                        <span className="text-white text-sm font-normal font-['Inter'] leading-[21px]">-</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Enterprise Plan Column */}
              <div className="flex-1 border-l border-white/10">
                {/* Enterprise Plan Header */}
                <div className="h-[285px] p-5 border-b border-white/20">
                  <div className="flex flex-col h-full">
                    <div>
                      <h3 className="text-white text-lg font-medium font-['Inter'] leading-[25.20px]">
                        Contact for Enterprise
                      </h3>
                      <p className="text-[#DEDCDD] text-[13px] font-normal font-['Inter'] leading-[18px] mt-1">
                        Best for Individual with Advanced Features
                      </p>
                    </div>
                    <div className="mt-auto" style={{ marginTop: '113px' }}>
                      {/* Spacer div to align button with other columns - height matches price selector + margin */}
                      <div className="h-[56px]"></div>
                      {/* Rounded button with proper padding */}
                      <button className="h-10 px-5 py-2.5 bg-[#F26A1B] rounded-[6px] flex justify-center items-center gap-2 w-full hover:bg-[#E05A0B] transition-colors mb-5">
                        <span className="text-white text-sm font-semibold font-['Inter'] leading-tight">
                          Contact Us
                        </span>
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none">
                          <path d="M1.5 1L5.5 5.5L1.5 10" stroke="#F4F3F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Enterprise Plan Features */}
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`p-4 border-b border-white/20 h-14 flex justify-center items-center ${
                      index === features.length - 1 ? 'border-b-0' : ''
                    }`}
                  >
                    {feature.enterprise ? (
                      <div className="w-5 h-5 bg-[#31C48D] rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-black" strokeWidth={3} />
                      </div>
                    ) : (
                      <span className="text-white text-sm font-normal font-['Inter'] leading-[21px]">-</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="h-10 flex justify-center items-center gap-1 mt-8 mb-11">
          <span className="text-[#DEDCDD] text-base font-medium font-['Inter'] leading-normal tracking-tight">
            More questions? Let us help.{' '}
          </span>
          <button className="text-[#F26A1B] text-base font-medium font-['Inter'] underline leading-normal tracking-tight hover:text-[#E05A0B] transition-colors">
            Contact us.
          </button>
        </div>
      </div>
    </div>
  )
}