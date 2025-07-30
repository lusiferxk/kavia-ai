import React from 'react';

const enterpriseFeatures = [
  {
    icon: "/assets/icons/security/settings_account_box.svg",
    title: 'Enterprise Security Review',
    description: 'AI-powered system with real-time scanning ensures complete IP protection and security compliance for all generated code',
  },
  {
    icon: "/assets/icons/security/security.svg",
    title: 'Zero-Trust Data Protection',
    description: "Dedicated VPC infrastructure with enterprise encryption, role-based access, and multi-factor authentication for complete data isolation",
  },
  {
    icon: "/assets/icons/security/vpn_lock.svg",
    title: 'Advanced Data Privacy',
    description: 'Zero retention policy with end-to-end encryption and advanced guardrails prevent unauthorized access and protect your intellectual property',
  }
];

const EnterpriseFeatures = () => {
  return (
    <div className="flex flex-col items-center mb-12 w-full">
      {/* Gradient Line with Circle */}
      {/* <div className="relative mb-6">
        <div className="w-[1.5px] h-[120px] bg-gradient-to-b from-transparent from-0% via-[rgba(255,255,255,0.65)] via-30% to-[rgba(255,255,255,0.65)]" />
        <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-white/60 border border-white/70" />
      </div> */}
{/* Title Section */}
<div className="container mx-auto px-4 lg:px-0 max-w-[851px] mb-12 lg:mb-24">
        <div className="w-full lg:w-[851px] flex flex-col justify-center items-center gap-4 mx-auto">
          <div className="w-full lg:w-[745px] text-center text-white text-3xl sm:text-4xl lg:text-5xl font-semibold font-['Inter'] leading-tight lg:leading-[62px] tracking-wide">
            Code & IP Protection
          </div>
          <div className="w-full lg:w-[851px] text-center text-[#dedcdd] text-base font-normal font-['Inter'] leading-normal">
            Your data & code IP is protected through state of the art guardrails
          </div>
        </div>
      </div>


      {/* Cards Container */}
      <div className="flex flex-col lg:flex-row w-full max-w-[1256px] lg:h-[285px] gap-6 px-4 lg:px-0">
        {enterpriseFeatures.map((feature, index) => (
          <div
            key={index}
            className="h-[285px] p-6 bg-white/5 border border-white/5 rounded-2xl shadow-[0px_10px_25px_0px_rgba(0,0,0,0.12)] backdrop-blur-[45px] flex-col justify-start items-start gap-[30px] flex overflow-hidden w-full lg:w-[calc(33.333%-16px)]"
          >
            <div className="self-stretch h-24 flex-col justify-start items-start gap-5 flex">
              <div className="w-12 h-12 relative">
                <img 
                  src={feature.icon} 
                  alt={feature.title} 
                  className="w-full h-full absolute left-0 top-0" 
                />
              </div>
              <div className="self-stretch text-white text-xl font-medium font-['Inter'] leading-7">
                {feature.title}
              </div>
            </div>
            <div className="self-stretch text-[#dedcdd] text-[15px] font-normal font-['Inter'] leading-snug">
              {feature.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnterpriseFeatures;