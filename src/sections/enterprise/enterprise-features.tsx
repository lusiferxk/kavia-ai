import React from 'react';

const enterpriseFeatures = [
  {
    icon: '/assets/icons/sync_lock.svg',
    title: 'End-to-End Encryption',
    description: 'Secure your data with state-of-the-art encryption at rest and in-transit.',
    // background: 'bg-gradient-to-b from-[#f26a1b] to-[#231f20] border border-[#c9c6c6] rounded-2xl',
    background: 'bg-white/5 border border-[#c9c6c6] rounded-2xl',
  },
  {
    icon: '/assets/icons/manage_accounts.svg',
    title: 'Role-Based Access Control',
    description: 'Granular permissions ensure team members access only what they need.',
    background: 'bg-white/5 border border-[#c9c6c6] rounded-2xl',
  },
  {
    icon: '/assets/icons/cloud_sync.svg',
    title: 'Data Residency Options',
    description: 'Choose where your data is stored to comply with regional regulations.',
    background: 'bg-white/5 border border-[#c9c6c6] rounded-2xl',
  },
  {
    icon: '/assets/icons/login.svg',
    title: 'Single Sign-on (SSO) Integration',
    description: 'Your existing identity provider for streamlined user management and enhanced security',
    background: 'bg-white/5 border border-[#c9c6c6] rounded-2xl',
  },
];

const EnterpriseFeatures = () => {
  return (
    <div className="flex flex-col items-center mb-12 pt-[100px]">
      {/* Gradient Line with Circle */}
      {/* <div className="relative mb-6">
        <div className="w-[1.5px] h-[120px] bg-gradient-to-b from-transparent from-0% via-[rgba(255,255,255,0.65)] via-30% to-[rgba(255,255,255,0.65)]" />
        <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-white/60 border border-white/70" />
      </div> */}

      {/* Enterprise-Grade Security and Compliance */}
      <div className="container mx-auto max-w-[851px] mb-24 ">
        <h2 className="text-center text-[48px] font-semibold font-['Inter'] leading-[62px] tracking-[0.96px] text-white">
          Enterprise-Grade Security and
          <br />
          Compliance
        </h2>
      </div>
    
      {/* Features Container - Desktop exact same, Mobile responsive */}
      <div className="hidden lg:inline-flex w-[1256px] h-[285px] justify-start items-start gap-6">
        {enterpriseFeatures.map((feature, index) => (
          <div
            key={index}
            className={`w-[296px] h-[285px] p-6 ${feature.background} shadow-[0px_10px_25px_0px_rgba(0,0,0,0.12)] backdrop-blur-[45px] flex-col justify-start items-start gap-[30px] inline-flex overflow-hidden border border-white/5`}
          >
            <div className="self-stretch h-[124px] flex-col justify-start items-start gap-5 flex">
              <div className="w-12 h-12 relative">
                <img src={feature.icon} alt={feature.title} className="w-full h-full" />
              </div>
              <div className="self-stretch h-auto text-white text-xl font-medium font-['Inter'] leading-7">
                {feature.title}
              </div>
            </div>
            <div className="self-stretch text-[#dedcdd] text-[15px] font-normal font-['Inter'] leading-snug">
              {feature.description}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="lg:hidden flex flex-col px-4 gap-6 w-full max-w-md mx-auto">
        {enterpriseFeatures.map((feature, index) => (
          <div
            key={index}
            className={`p-6 ${feature.background} shadow-[0px_10px_25px_0px_rgba(0,0,0,0.12)] backdrop-blur-[45px] flex-col justify-start items-start gap-[30px] flex overflow-hidden border border-white/5`}
          >
            <div className="self-stretch flex-col justify-start items-start gap-5 flex">
              <div className="w-12 h-12 relative">
                <img src={feature.icon} alt={feature.title} className="w-full h-full" />
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