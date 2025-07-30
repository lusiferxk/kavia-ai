//src/app/enterprise/EnterpriseHero.tsx

'use client'
import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'; // Changed from useRouter

import { FeatureSection  } from '@/sections/enterprise/feature-section';
import ProductSteps from '@/components/ui/products/ProductSeps';
import ProductSection from '@/components/ui/products/ProductSection';
import ProductInspectSection from '@/components/ui/products/ProductInspectSection';

import GradientBackground from './GradientBackground'




 const featureSectionData = {
  managementVisiblity: {
    title: "Management Visibility",
    description: "Real-time insights driving enterprise development decisions",
    features: [
      {
        icon: "/assets/icons/products/search_insights.svg",
        title: "Reduce Risk",
        description: "KAVIA AI's Workflow Manager provides teams with an unparalleled bird's-eye view of their entire workflow."
      },
      {
        icon: "/assets/icons/products/dynamic_form.svg",
        title: "Reduce Cost",
        description: "Achieve significant cost savings through automated planning, development, and maintenance across your SDLC."
      },
      {
        icon: "/assets/icons/products/orbit.svg",
        title: "Improved Velocity",
        description: "Convert complex requirements into production-ready code in hours instead of months through intelligent automation."
      },
      {
        icon: "/assets/icons/products/groups_2.svg",
        title: "Quality Metrics",
        description: "Enterprise-wide quality assurance metrics delivering real-time insights across development stages."
      }
    ]
  },
  collaboration: {
    title: "People in the Loop",
    description: "Seamlessly blend human expertise with AI abilities for optimal enterprise development",
    features: [
      {
        icon: "/assets/icons/products/psychology.svg",
        title: "Interactive engagement",
        description: "KAVIA Workflow Manager engages with your experts in interactive conversations to collect information and build out the project."
      },
      {
        icon: "/assets/icons/products/account_tree.svg",
        title: "Visibillity and Control",
        description: "KAVIA WorkFlow manager provides complete visibility to all steps performed by agent and allows users to modify individual steps."
      },
      {
        icon: "/assets/icons/products/person_play.svg",
        title: "Expert Leadership",
        description: "AI assists while experts lead - combining human judgment with intelligent automation for optimal development outcomes."
      },
      {
        icon: "/assets/icons/products/business_messages.svg",
        title: "Automated Insights",
        description: "Transform your stakeholder engagement through KAVIA AI, delivering real-time insights with precision."
      }
    ]
  },
 
};

const section = {
  stepNumber: "1",
  stepTitle: "Inspect",
  description: "Transform complex codebases into actionable insights with our AI-Powered In-depth analysis that processes 10,000+ files across repositories to deliver comprehensive understanding of any software ecosystem.",
  features: [
    {
      title: "Knowledge Graph-based code querying interface",
        icon: "/assets/icons/products/check_circle.svg"
    },
    {
      title: "Automated architecture and Feature extraction",
              icon: "/assets/icons/products/check_circle.svg"
    },
    {
      title: "Deep code analysis with fix recommendations",
              icon: "/assets/icons/products/check_circle.svg"
    },
    {
      title: "Custom documentation generation",
              icon: "/assets/icons/products/check_circle.svg"
    },
    {
      title: "Multi-repository analysis support",
              icon: "/assets/icons/products/check_circle.svg"
    }
  ],
  mediaUrl: "/assets/images/products/Inspect.png",
  mediaType: "image", // optional
  mobileMediaUrl: "/assets/images/products/Inspect-sm.png",
  useCases: [
    {
      icon: "/assets/icons/products/database_upload.svg",
      title: "System Migration",
      description: "Extract complete architecture documentation from legacy systems for modernization initiatives"
    },
    {
      icon: "/assets/icons/products/settings_account_box.svg",
      title: "Developer Onboarding",
      description: "Generate comprehensive codebase documentation and feature relationships"
    },
    {
      icon: "/assets/icons/products/terminal.svg",
      title: "Code Optimization",
      description: "Identify performance bottlenecks and receive AI-powered improvement suggestions"
    }
  ]
};


const planSection = {
  stepNumber: "2",
  stepTitle: "Plan",
  description: "Streamline your software development lifecycle with our AI-powered planning system that converts requirements into actionable architectures and detailed specifications.",
  features: [
    {
      title: "End-to-end project Plan generation",
      icon: "/assets/icons/products/check_circle.svg"
    },
    {
      title: "Multi-container architecture design",
      icon: "/assets/icons/products/check_circle.svg"
    },
    {
      title: "Automated requirements extraction from documents",
      icon: "/assets/icons/products/check_circle.svg"
    },
    {
      title: "Interface definition and API specification",
      icon: "/assets/icons/products/check_circle.svg"
    }
  ],
  mediaUrl: "/assets/images/products/PLAN.png",
  mediaType: "image",
  useCases: [
    {
      icon: "/assets/icons/products/model_training.svg",
      title: "Digital Transformation",
      description: "Convert business requirements into technical specifications"
    },
    {
      icon: "/assets/icons/products/host.svg",
      title: "Microservice Design",
      description: "Generate scalable architecture for complex distributed systems"
    },
    {
      icon: "/assets/icons/products/folder_data.svg",
      title: "Legacy Modernization",
      description: "Transform existing documentation into modern architecture plans"
    }
  ]
};

const buildSection = {
  stepNumber: "3",
  stepTitle: "Build",
  description: "Accelerate development with our intelligent code generation and maintenance platform that brings your designs to life while ensuring quality and consistency.",
  features: [
    {
      title: "AI-powered code generation from designs",
      icon: "/assets/icons/products/check_circle.svg"
    },
    {
      title: "Automated test case creation and execution",
      icon: "/assets/icons/products/check_circle.svg"
    },
    {
      title: "Figma to production-ready code conversion",
      icon: "/assets/icons/products/check_circle.svg"
    },
    {
      title: "Interactive code maintenance and updates",
      icon: "/assets/icons/products/check_circle.svg"
    }
  ],
  mediaUrl: "/assets/images/products/BUILD.png",
  mediaType: "image",
  useCases: [
    {
      icon: "/assets/icons/products/playing_cards.svg",
      title: "Rapid Prototyping",
      description: "Convert design mockups to functional applications"
    },
    {
      icon: "/assets/icons/products/aod_tablet.svg",
      title: "Feature Development",
      description: "Generate production-ready code from specifications"
    },
    {
      icon: "/assets/icons/products/tabs.svg",
      title: "Application Maintenance",
      description: "Automated code updates with regression prevention"
    }
  ]
};

export function EnterpriseHero() {
  const circlePositions = [302.91, 266.91, 233.56, 200.17, 166.83, 133.46, 100.09, 66.74, 33.35, 0]
  const [size, setSize] = useState('lg')
  const pathname = usePathname();
  
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
      <div
        className="absolute top-0 left-0 w-full"
        style={{
          height: getOrbPositions(size).firstOrb.top,
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(242, 106, 27, 0.6) 0%, rgba(242, 106, 27, 0) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Badge Orb Gradient */}
      <div
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
      />

      {/* Bottom Orb Gradient */}
      <div
        className="absolute bottom-0 right-0"
        style={{
          width: getOrbPositions(size).secondOrb.right,
          height: getOrbPositions(size).secondOrb.bottom,
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(255, 147, 88, 0.4) 0%, rgba(255, 147, 88, 0) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

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
              Product
            </span>
          </div>

          {/* Main Title */}
          <div className="text-center mt-0.4 w-full lg:w-[930px] px-4 sm:px-0">
            <h1 className="text-center">
         
              <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-bold font-['Inter'] leading-tight lg:leading-[91px]">
                {' '}
                Empowering the
                <br />
                Enterprises with Inspect.
                <br />
                Plan. Build.
              </span>
            </h1>
          </div>

          {/* Description */}
          <div className="w-full px-4 sm:px-6 md:px-8 lg:w-[930px] lg:px-0 text-center mt-[0.5px]">
            {/* <span className="text-white text-base sm:text-lg font-bold font-['Inter'] uppercase">
              KAVIA AI
            </span> */}
            <span className="text-white text-base sm:text-lg font-normal font-['Inter'] leading-[30.60px]">
              {' '}
              Unified AI powered tools across Entire Software Product Development Lifecycle.
            </span>
          </div>
        </div> 
  

 {/* Product Steps */}
 <ProductSteps />

{/* Sections */}
<ProductSection {...section} badgeColor="#F4682C" id="inspect-section" imageBgColor='#FDF7F2' />
<ProductSection {...planSection} badgeColor="#4997B3" id="plan-section" imageBgColor='#DEF4FC'/>
<ProductSection {...buildSection} badgeColor="#F4B25A" id="build-section" imageBgColor='#FDF2E2' />

        
        {/* <ProductInspectSection /> */}


        <div className="flex flex-col gap-20">
        <FeatureSection {...featureSectionData.managementVisiblity} />
        <FeatureSection {...featureSectionData.collaboration} />
        </div>
      </div>
    </section>
  )
}
