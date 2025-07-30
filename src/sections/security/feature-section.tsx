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
            <p className="text-[#dedcdd] text-base font-normal font-['Inter'] leading-normal max-w-[400px]">
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
                <p className="text-[#dedcdd] text-[15px] font-normal font-['Inter'] leading-snug">
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


export const securityFeatureData = {
  // codeProtection: {
  //   title: "Code & IP Protection",
  //   description: "Secure your code and intellectual property with advanced security measures.",
  //   features: [
  //     {
  //       icon: "/assets/icons/security/file.svg",
  //       title: "File",
  //       description: "Your data is kept in encrypted storage and at rest using AES-256."
  //     },
  //     {
  //       icon: "/assets/icons/security/code.svg",
  //       title: "Code",
  //       description: "Ensures secure transmission across layers, preventing data exposure during development sprint or afterward."
  //     },
  //     {
  //       icon: "/assets/icons/security/tag.svg",
  //       title: "Tag",
  //       description: "Access logging by default reveals IP, a transparent and well-publicized internal process."
  //     }
  //   ]
  // },
  cloudInfra: {
    title: "Secure Cloud Infrastructure",
    description: "SourceLink leverages AWS for a robust and secure foundation, supporting multi-provider SCM integration",
    features: [
      {
        icon: "/assets/icons/security/settings_account_box.svg",
        title: "Multi-Tenant Isolation",
        description: "Our architecture employs strict tenant isolation, ensuring your data and processes are securely separated from other customers."
      },
      {
        icon: "/assets/icons/security/security.svg",
        title: "AWS Security Services",
        description: "We harness AWS's advanced security services to fortify data protection and maintain compliance across all integrated SCM providers."
      },
      {
        icon: "/assets/icons/security/vpn_lock.svg",
        title: "Encrypted Data Storage",
        description: "All data, including SCM tokens, is encrypted at rest and in transit using industry-standard encryption protocols."
      }
    ]
  },
  compliance: {
    title: "Security Compliance Framework",
    description: "SourceLink's security measures are built on industry-leading standards and best practices",
    features: [
      {
        icon: "/assets/icons/security/verified_user.svg",
        title: "ISO/IEC 27001",
        description: "Our information security management system is structured in alignment with ISO/IEC 27001, providing a comprehensive framework for managing and protecting sensitive information."
      },
      {
        icon: "/assets/icons/security/captive_portal.svg",
        title: "NIST 800-53",
        description: "We apply security controls based on NIST 800-53 guidelines, adapting federal-grade security measures to protect your data and systems effectively."
      },
      {
        icon: "/assets/icons/security/published_with_changes.svg",
        title: "SOC 2",
        description: "Our security practices are designed with SOC 2 principles in mind, focusing on security, availability, and confidentiality to ensure trust and peace of mind for our customers."
      }
    ]
  },
  scmIntegration: {
    title: "SCM Integration Security",
    description: "SourceLink ensures secure integration with multiple SCM providers for seamless SDLC automation",
    features: [
      {
        icon: "/assets/icons/security/passkey.svg",
        title: "OAuth-based Authentication",
        description: "We implement OAuth protocols to secure authentication and authorization processes across all supported SCM providers."
      },
      {
        icon: "/assets/icons/security/cloud_lock.svg",
        title: "Secure Token Handling",
        description: "Access tokens for SCM providers are securely managed and stored using advanced encryption techniques."
      },
      {
        icon: "/assets/icons/security/account_tree.svg",
        title: "Automated Git Operations",
        description: "Our system enables secure automation of git operations, maintaining integrity across your entire workflow."
      }
    ]
  },
  dataProtection: {
    title: "Data Protection",
    description: "SourceLink implements robust measures to protect your code and data across all integrated SCM platforms",
    features: [
      {
        icon: "/assets/icons/security/settings_account_box.svg",
        title: "Isolated Processing Environments",
        description: "Code processing occurs in secure, isolated environments, preventing unauthorized access and ensuring consistency across SCM providers."
      },
      {
        icon: "/assets/icons/security/security.svg",
        title: "End-to-End Encryption",
        description: "We employ end-to-end encryption for all data in transit and at rest, using state-of-the-art cryptographic protocols."
      },
      {
        icon: "/assets/icons/security/vpn_lock.svg",
        title: "Ephemeral Data Handling",
        description: "Your code is processed ephemerally, ensuring no persistent storage after analysis completion."
      }
    ]
  },
  accessControl: {
    title: "Access Controls and Auditing",
    description: "SourceLink provides comprehensive access management and auditing capabilities",
    features: [
      {
        icon: "/assets/icons/security/shield_person.svg",
        title: "Fine-grained Access Control",
        description: "Implement granular permissions to manage user access effectively across all integrated SCM platforms."
      },
      {
        icon: "/assets/icons/security/lock_reset.svg",
        title: "Extensive Audit Logging",
        description: "Our system maintains detailed logs of all activities, supporting thorough security monitoring and compliance verification."
      },
      {
        icon: "/assets/icons/security/finance.svg",
        title: "Continuous Security Monitoring",
        description: "We employ ongoing security assessments and monitoring to proactively identify and address potential vulnerabilities."
      }
    ]
  }
};