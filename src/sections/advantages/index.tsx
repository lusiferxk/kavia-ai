import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { SyncAlt } from 'lucide-react';



interface HeroCardProps {
  title: string;
  description: string;
  leftImagePath: string;
  rightImagePath: string;
}

const HeroCard: React.FC<HeroCardProps> = ({
  title,
  description,
  leftImagePath,
  rightImagePath
}) => {
  return (
    <div className="w-full lg:w-[1256px] h-auto lg:h-[253px] relative bg-white rounded-2xl overflow-hidden p-4 lg:p-8">
      {/* Content Container */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Text Content */}
        <div className="flex flex-col gap-4 lg:max-w-[600px]">
          {/* Label */}
          <div className="h-6 px-2.5 bg-[#fbfaf9] rounded-[999px] shadow-[0px_1px_2px_0px_rgba(216,210,202,0.50)] shadow-[0px_0px_0px_1px_rgba(235,231,224,1.00)] shadow-[inset_0px_-1.5px_0px_0px_rgba(231,226,218,0.50)] justify-start items-center gap-[5px] inline-flex w-fit">
            <Image
              src={'/assets/icons/stack.svg'}
              alt="Stack"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span className="text-[#231f20] text-xs font-medium font-['Inter'] capitalize leading-normal tracking-wide">
              Advantages
            </span>
          </div>

          {/* Title */}
          <h3 className="text-[#231f20] text-2xl lg:text-[32px] font-medium font-['Inter'] leading-tight lg:leading-10">
            {title}
          </h3>

          {/* Description */}
          <p className="text-[#4a4340] text-sm lg:text-[15px] font-normal font-['Inter'] leading-normal">
            {description}
          </p>
        </div>

        {/* Image */}
        <div className="w-full lg:w-[493px] relative">
          <div className="aspect-[16/9] lg:aspect-auto lg:h-[224.61px] relative">
            <Image
              src={rightImagePath}
              alt="Integration illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};



const AdvantageCard = ({ imagePath, iconPath, title, description }) => {
  return (
    <div className="w-full md:w-[616px] h-auto md:h-[424px] bg-white rounded-2xl overflow-hidden">
      <div className="p-4 md:p-8 flex flex-col gap-4 md:gap-8">
        {/* Illustration Area */}
        <div className="relative w-full md:w-[552px] aspect-[2.46/1]">
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Text Content Area */}
        <div className="h-auto md:h-[77px] flex flex-col gap-2 md:gap-4">
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6 shrink-0">
              <Image
                src={iconPath}
                alt={`${title} icon`}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-[#231f20] text-base md:text-lg font-medium font-['Inter'] leading-tight">
              {title}
            </h3>
          </div>
          <p className="text-[#4a4340] text-sm md:text-[15px] font-normal font-['Inter'] leading-normal">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const MergedFeatureCard = ({ leftImage, rightContent }) => {
  const { imagePath, iconPath, title, description } = rightContent;

  return (
    <div className="w-full md:w-[1256px] h-auto md:h-[358px] relative bg-white rounded-2xl overflow-hidden p-4 md:p-0">
      <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-0">
        {/* Left side - Code Editor Area */}
        <div className="relative w-full md:w-[544px] aspect-[1.85/1] md:h-[294px] md:left-[32px] md:top-[32px] bg-white/90 rounded-lg overflow-hidden">
          <Image 
            src={leftImage} 
            alt="Code editor"
            fill
            className="object-cover"
          />
        </div>

       {/* Middle Icon - Desktop version */}
       <div className="hidden md:block w-10 h-10 md:left-[608px] md:top-[151px] md:absolute">
          <Image
            src="/assets/icons/sync_alt.svg" 
            alt="Sync arrows"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Middle Icon - Mobile version */}
        <div className="block md:hidden w-10 h-10 mx-auto -mt-4 -mb-4">
          <Image
            src="/assets/icons/sync_alt.svg" 
            alt="Sync arrows"
            width={40}
            height={40}
            className="object-contain rotate-90 transform"
          />
        </div>

        {/* Right side content */}
        <div className="flex flex-col gap-8 md:gap-0 md:absolute md:right-8 md:top-8">
          <div className="relative w-full md:w-[550px] aspect-[2.46/1] md:h-[159px]">
            <Image
              src={imagePath}
              alt="Architecture Diagram"
              fill
              className="object-contain"
            />
          </div>

          {/* Feature Description */}
          <div className="flex flex-col gap-3 md:absolute md:left-0 md:top-[210px]">
            <div className="flex items-center gap-2">
              <div className="relative w-6 h-6 shrink-0">
                <Image
                  src={iconPath}
                  alt="Feature icon"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-[#231f20] text-base md:text-lg font-medium font-['Inter'] leading-tight">
                {title}
              </div>
            </div>
            <div className="text-[#4a4340] text-sm md:text-[15px] font-normal font-['Inter'] leading-normal">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdvantagesSection = () => {
  const advantages = [
    {
      // imagePath: '/assets/images/advantages/adv-3.svg',
      imagePath: '/assets/images/advantages/Enterprise-Ready_Intelligence.svg',
      
      iconPath: '/assets/icons/search_insights.svg',
      title: 'Enterprise-Ready Intelligence',
      description: 'Scale development across multiple repositories and teams while maintaining consistency and quality of your Enterprise level products.'
    },
    {
      imagePath: '/assets/images/advantages/adv-3.svg',
      // imagePath: '/assets/images/advantages/adv-3.svg',
      iconPath: '/assets/icons/code.svg',
      title: 'Product Development Focus',
      description: 'Revolutionize your SDLC with intelligent automation designed for enterprise-scale development, from Planning to Deployment.'
    },
    {
      imagePath: '/assets/images/advantages/adv-4.svg',
      iconPath: '/assets/icons/network_intel_node.svg',
      title: 'Intelligent Workflow Orchestration',
      description: "KAVIA's Intelligent Workflow Manager transforms your development process that automates complex workflows with customized AI-Agents"
    },
    {
      // imagePath: '/assets/images/advantages/Enterprise-Ready_Intelligence.svg',
      imagePath: '/assets/images/advantages/optimization.svg',
      iconPath: '/assets/icons/orbit.svg',
      title: 'Strategic Resource Optimization',
      description: 'Maximize team efficiency through AI-driven workload distribution. Ensure optimal utilization of assets while reducing operational costs.'
    },
 


  ];

  return (
    <section className="w-full py-8 md:py-16 bg-[#fdf7f2]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 mb-8 md:mb-16">
          <div className="inline-flex items-center">
            <div className="h-6 px-2.5 bg-[#fbfaf9] rounded-[999px] shadow-[0px_1px_2px_0px_rgba(216,210,202,0.50),0px_0px_0px_1px_rgba(235,231,224,1.00),inset_0px_-1.5px_0px_0px_rgba(231,226,218,0.50)] inline-flex items-center gap-[5px]">
              <div className="w-[17px] h-4 relative">
                <Image 
                  src="/assets/icons/rocket.svg"
                  alt="rocket icon"
                  width={17}
                  height={16}
                  className="object-contain"
                />
              </div>
              <div className="text-[#231f20] text-xs font-medium font-['Inter'] tracking-[0.672px] leading-6">
                Increased productivity
              </div>
            </div>
          </div>
          <h2 className="text-[#231f20] text-3xl md:text-5xl font-semibold font-['Inter'] leading-tight md:leading-[56px] tracking-wide text-center">
            Unparalleled Advantages
          </h2>
          <p className="w-full md:w-[471px] text-center text-[#231f20] text-sm md:text-base font-normal font-['Inter'] leading-normal">
            A unified framework for workflow orchestration, visualization and collaboration
          </p>
        </div>
        <div className='pb-5'>
        <HeroCard
  title="Seamless Ecosystem Integration"
  description="KAVIA Workflow Manager doesn't exist in isolation, it becomes an integral part of your product development ecosystem."
  leftImagePath="/assets/images/advantages/adv-5.svg"
  rightImagePath="/assets/images/advantages/adv-1.svg"
/>
 
        </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={index}
              imagePath={advantage.imagePath}
              iconPath={advantage.iconPath}
              title={advantage.title}
              description={advantage.description}
            />
          ))}
          {/* <div className="col-span-1 lg:col-span-2">
            <MergedFeatureCard 
              leftImage={'/assets/images/adv-5.svg'}  
              rightContent={{
                imagePath: '/assets/images/adv-6-2.svg',
                iconPath: '/assets/icons/orbit.svg',
                title: 'Strategic Resource Optimization',
                description: 'Maximize team efficiency through AI-driven resource allocation and workload distribution. Ensure optimal utilization of enterprise assets while reducing operational costs.'
              }}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;