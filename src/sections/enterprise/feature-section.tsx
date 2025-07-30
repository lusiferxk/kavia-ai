import React, { useState, useEffect } from 'react';
import Image from "next/image";

interface Feature {
  icon: string | React.ReactNode;
  title: string;
  description: string;
}

interface FeatureSectionProps {
  title: string;
  description: string;
  features: Feature[];
  isLastSection?: boolean;
}

// Define orb positions for different screen sizes
const getOrbPositions = (screenSize: string) => {
  const positions = {
    '2xl': {
      firstOrb: {
        width: '450px',
        height: '450px',
        left: '0',
        top: '580px',
        transform: 'translate(-30%, -50%) translateZ(0)',
      },
      secondOrb: {
        width: '400px',
        height: '400px',
        right: '0',
        top: '1160px',
        transform: 'translate(20%, -50%) translateZ(0)',
      },
      thirdOrb: {
        width: '450px',
        height: '450px',
        left: '0',
        bottom: '-100px',
        transform: 'translate(-20%, 0) translateZ(0)',
      },
    },
    xl: {
      firstOrb: {
        width: '400px',
        height: '400px',
        left: '0',
        top: '520px',
        transform: 'translate(-25%, -50%) translateZ(0)',
      },
      secondOrb: {
        width: '350px',
        height: '350px',
        right: '0',
        top: '1040px',
        transform: 'translate(15%, -50%) translateZ(0)',
      },
      thirdOrb: {
        width: '400px',
        height: '400px',
        left: '0',
        bottom: '-80px',
        transform: 'translate(-15%, 0) translateZ(0)',
      },
    },
    lg: {
      firstOrb: {
        width: '350px',
        height: '350px',
        left: '0',
        top: '480px',
        transform: 'translate(-20%, -50%) translateZ(0)',
      },
      secondOrb: {
        width: '300px',
        height: '300px',
        right: '0',
        top: '960px',
        transform: 'translate(10%, -50%) translateZ(0)',
      },
      thirdOrb: {
        width: '350px',
        height: '350px',
        left: '0',
        bottom: '-60px',
        transform: 'translate(-10%, 0) translateZ(0)',
      },
    },
    md: {
      firstOrb: {
        width: '300px',
        height: '300px',
        left: '0',
        top: '440px',
        transform: 'translate(-15%, -50%) translateZ(0)',
      },
      secondOrb: {
        width: '250px',
        height: '250px',
        right: '0',
        top: '880px',
        transform: 'translate(5%, -50%) translateZ(0)',
      },
      thirdOrb: {
        width: '300px',
        height: '300px',
        left: '0',
        bottom: '-40px',
        transform: 'translate(-5%, 0) translateZ(0)',
      },
    },
    sm: {
      firstOrb: {
        width: '250px',
        height: '250px',
        left: '0',
        top: '400px',
        transform: 'translate(-10%, -50%) translateZ(0)',
      },
      secondOrb: {
        width: '200px',
        height: '200px',
        right: '0',
        top: '800px',
        transform: 'translate(0%, -50%) translateZ(0)',
      },
      thirdOrb: {
        width: '250px',
        height: '250px',
        left: '0',
        bottom: '-20px',
        transform: 'translate(0%, 0) translateZ(0)',
      },
    },
  };

  return positions[screenSize] || positions.sm;
};

export const FeatureSection: React.FC<FeatureSectionProps> = ({ 
  title, 
  description, 
  features,
  isLastSection = false
}) => {
  const [size, setSize] = useState('lg');

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      let newSize;
      if (width >= 1536) {
        newSize = '2xl';
      } else if (width >= 1280) {
        newSize = 'xl';
      } else if (width >= 1024) {
        newSize = 'lg';
      } else if (width >= 768) {
        newSize = 'md';
      } else {
        newSize = 'sm';
      }
      setSize(newSize);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const orbPositions = getOrbPositions(size);

  const renderIcon = (icon: string | React.ReactNode) => {
    if (typeof icon === 'string') {
      return (
        <Image
          src={icon}
          alt="feature icon"
          width={48}
          height={48}
          className="w-12 h-12"
        />
      );
    }
    return icon;
  };

  return (
    <section className="w-full max-w-[1256px] mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* First orb */}
      <div
        className="absolute"
        style={{
          ...orbPositions.firstOrb,
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(242, 106, 27, 0.15) 0%, rgba(242, 106, 27, 0) 100%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Second orb */}
      <div
        className="absolute"
        style={{
          ...orbPositions.secondOrb,
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(242, 106, 27, 0.1) 0%, rgba(242, 106, 27, 0) 100%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Third orb */}
      {/* <div
        className="absolute"
        style={{
          ...orbPositions.thirdOrb,
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(242, 106, 27, 0.12) 0%, rgba(242, 106, 27, 0) 100%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      /> */}

      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-36 mb-20 items-start">
          {/* Left Column - Title and Description */}
          <div className="w-full lg:w-[500px] flex flex-col gap-4">
            <h2 className="text-white text-2xl sm:text-3xl md:text-[38px] font-medium font-['Inter'] leading-normal md:leading-[50px]">
              {title}
            </h2>
            <p className="text-[#dedcdd] text-base font-normal font-['Inter'] leading-normal max-w-[400px] description">
              {description}
            </p>
          </div>

          {/* Right Column - Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="w-full md:max-w-[296px] p-6 bg-white/5 rounded-2xl border border-white/5 flex flex-col gap-[30px] overflow-hidden"
              >
                {/* Feature Header */}
                <div className="flex flex-col gap-5 h-24">
                  {/* Icon Container */}
                  <div className="w-12 h-12 relative">
                    {renderIcon(feature.icon)}
                  </div>
                  <h3 className="text-white text-xl font-medium font-['Inter'] leading-7">
                    {feature.title}
                  </h3>
                </div>
                
                {/* Feature Description */}
                <p className="text-[#dedcdd] text-[15px] font-normal font-['Inter'] leading-snug ">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Border - Only show if not last section */}
        {!isLastSection && (
          <div className="w-full h-[1px] bg-gradient-to-r from-white/15 to-[#231F20]" />
        )}
      </div>
    </section>
  );
};


export const featureSectionData = {
  integration: {
    title: "Intelligent workflows with seamless integrations",
    description: "KAVIA meets where you are - adapting to your current state, instantly fit and accelerating growth as your needs evolve.",
    features: [
      {
        icon: "/assets/icons/orbit (1).svg",
        title: "API-First Architecture",
        description: "Rapid innovation and easy integration with your enterprise software"
      },
      {
        icon: "/assets/icons/rebase.svg",
        title: "Intelligent Workflows",
        description: "Adapt to your unique software development workflows"
      },
      {
        icon: "/assets/icons/ev_shadow.svg",
        title: "Elastic Scalability",
        description: "Lean, intelligent operations designed to scale from pilot projects to large-scale enterprise programs"
      },
      {
        icon: "/assets/icons/tab_inactive.svg",
        title: "Multi-Cloud Support",
        description: "Deploy KAVIA on your preferred cloud provider or on-premises"
      }
    ]
  },
  collaboration: {
    title: "Connected teams. Real-time insights. Smarter shipping",
    description: "Code as a team and think with AI.",
    features: [
      {
        icon: "/assets/icons/wifi_home.svg",
        title: "Real-Time Collaboration",
        description: "Collaborate directly in your workflow. Share changes instantly. Ship faster."
      },
      {
        icon: "/assets/icons/space_dashboard.svg",
        title: "Interactive Dashboards",
        description: "Get a bird's-eye view of project progress, team performance, and key metrics."
      },
      {
        icon: "/assets/icons/automation.svg",
        title: "AI-Powered Insights",
        description: "Receive actionable recommendations to improve workflow efficiency and project outcomes."
      },
      {
        icon: "/assets/icons/all_inclusive.svg",
        title: "Cross-Functional Alignment",
        description: "Connect Product, Engineering, Operations, Business and partner teams together."
      }
    ]
  },
  support: {
    title: "Dedicated Enterprise Support",
    description: "Ensure smooth operations with our comprehensive support package.",
    features: [
      {
        icon: "/assets/icons/support_agent.svg",
        title: "24/7 Priority Support",
        description: "Access our expert team around the clock for critical issues."
      },
      {
        icon: "/assets/icons/manage_accounts.svg",
        title: "Dedicated Account Manager",
        description: "Your single point of contact for all KAVIA-related matters."
      },
      // { 
      //   icon: "/assets/icons/strategy.svg",
      //   title: "Regular Strategy Reviews",
      //   description: "Align KAVIA's capabilities with your evolving business goals."
      // }
    ]
  }
};