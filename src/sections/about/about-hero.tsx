'use client'
import React from 'react';

const teamMembers = [
  {
    name: "Labeeb Ismail",
    role: "Founder and CEO",
    bio: "Labeeb is the Founder and CEO of Kavia, bringing over 20 years of enterprise software and AI leadership. As a former SVP at Comcast/Sky, he led 2,000+ engineers and co-created the RDK video stack, now deployed on 150M+ devices.",
    bio2: "With 30+ software and AI patents, Labeeb is focused on transforming product development through full-stack AI automation, bridging the gaps between vibe coding and software development rigor for the next generation of software creators and enterprise alike.",
    image: "/assets/images/team/Labeeb.png",
    linkedin: "#"
  },
  {
    name: "Anita Ganti",
    role: "Chief Operating Officer",
    bio: "Anita is a seasoned technology executive and board leader with deep experience scaling global engineering teams and driving digital transformation. As former SVP at Wipro, she led 11,000+ engineers delivering $600M+ in services across software, hardware, and cloud.",
    bio2: "A NACD Directorship 100 honoree, Anita brings operational depth and governance expertise to Kavia, where she advises on operations, strategy and enterprise growth.",
    image: "/assets/images/team/Anita.png",
    linkedin: "#"
  },
  {
    name: "Richard Saffir",
    role: "Chief Legal Officer",
    bio: "Rich is a veteran business attorney with 37 years of experience advising closely held companies on M&A, tax strategy, and technology licensing. Based in the San Francisco Bay Area, he brings deep legal and transactional expertise to Kavia, supporting corporate structure, compliance, and strategic partnerships.",
    bio2: "",
    image: "/assets/images/team/Rich.png",
    linkedin: "#"
  },
  {
    name: "Matt Bernier",
    role: "Social Media & PR",
    bio: "Matt is a digital marketing leader with experience across industries and B2B + Consumer audiences. He's led marketing for established brands, startups and held leadership roles at digital agencies, with a focus on social media, influencer strategy and integrated marketing.",
    bio2: "At Kavia, Matt leads social, PR, and marketing to help shape the company's voice and drive engagement across platforms.",
    image: "/assets/images/team/Matt.png",
    linkedin: "#"
  },
  {
    name: "Suresh Somasundaram",
    role: "Product Strategy",
    bio: "Suresh is a veteran product and technology leader with deep experience in telecom, media, and tech. He's led global platform development at companies like T-Mobile and Verizon, with a focus on cloud-native systems, digital innovation, and go-to-market execution.",
    bio2: "At Kavia, Suresh advises on product strategy and GTM, helping shape the platform's vision to automate and unify the entire software development lifecycle.",
    image: "/assets/images/team/Suresh.png",
    linkedin: "#"
  },
  {
    name: "Babu Karunanithi",
    role: "Engineering Lead",
    bio: "Babu Karunanithi is a seasoned engineering leader with deep experience building scalable platforms and AI-powered systems. At Kavia, he leads the engineering team, ensuring seamless integration across the platform, AI workflows, and code generation automation (CGA).",
    bio2: "With a background spanning cloud infrastructure, intelligent automation, and full-stack development, Babu plays a key role in translating Kavia's technical vision into a high-performance, enterprise-ready product.",
    image: "/assets/images/team/babu.png",
    linkedin: "#"
  },
  {
    name: "Zoltan Kuscsik, PhD",
    role: "Code Generation Lead",
    bio: "Zoltan is an expert in embedded AI, LLMs, and computer vision with a background in secure systems and mobile security patents. He previously optimized VP9 at Google and HP, driving performance at scale.",
    bio2: "At Kavia, Zoltan leads code generation, applying advanced AI techniques to streamline and accelerate software development.",
    image: "/assets/images/team/Zoltan.png",
    linkedin: "#"
  },
  {
    name: "Jeff Wannamaker",
    role: "Knowledge Framework Lead",
    bio: "Jeff leads knowledge management at Kavia AI, bringing deep expertise in technology and enterprise data strategies to optimize how teams capture and leverage critical information across the organization through scalable knowledge frameworks and AI-driven solutions.",
    bio2: "",
    image: "/assets/images/team/Jeff.png",
    linkedin: "#"
  }
];

export default function AboutUsPage() {
  const circlePositions = [302.91, 266.91, 233.56, 200.17, 166.83, 133.46, 100.09, 66.74, 33.35, 0]

  return (
    <div className="min-h-screen relative bg-[#231f20] overflow-hidden">
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

      {/* Background Effects */}
      <div className="size-[295px] left-[-150px] top-[1955px] absolute bg-[#ff9358] rounded-full blur-[257px]" />
      <div className="size-[295px] left-[14px] top-[499px] absolute opacity-80 bg-[#ff9358] rounded-full blur-[257px]" />
      
      <div className="px-6 lg:px-[92px] pt-32 pb-10 relative inline-flex flex-col justify-start items-center gap-8 overflow-hidden w-full">
        {/* About Us Section */}
        <div className="self-stretch text-center justify-start text-white text-[48px] lg:text-[70px] font-bold font-['Inter'] leading-[1.3]">
          About Us
        </div>
        
        <div className="w-full max-w-[1256px] pb-20 relative rounded-xl backdrop-blur-[2px] flex flex-col justify-start items-center gap-12">
          <div className="w-[1297px] h-[1075px] left-[-41px] top-0 absolute" />
          
          <div className="self-stretch px-6 lg:px-[70px] flex flex-col justify-start items-center gap-[11px]">
            <div className="self-stretch text-center justify-start">
              <span className="text-white/70 text-[20px] lg:text-[28px] font-medium font-['Inter'] leading-9">
                We&apos;re KAVIA AI, a San Francisco, CA based startup backed by a seasoned global Engineering + Product team across the U.S., India and South America.
              </span>
              <span className="text-white text-[20px] lg:text-[28px] font-medium font-['Inter'] leading-9"> </span>
              <span className="text-white text-[20px] lg:text-[28px] font-medium font-['Inter'] leading-9">
                Our mission is to reinvent how software gets built for both Enterprise and Consumers, making software development more accessible and empowering the next generation of software creators – faster, smarter, and at scale.
              </span>
            </div>
          </div>
          
          <div className="self-stretch px-6 lg:px-[70px] relative flex flex-col justify-start items-center gap-[11px]">
            <div className="w-[585px] h-[401px] left-[721px] top-[447px] absolute opacity-25 bg-[#f26a1b] rounded-full blur-[152px]" />
            <div className="self-stretch text-center justify-start relative z-10">
              <span className="text-white/70 text-[20px] lg:text-[28px] font-medium font-['Inter'] leading-9">
                Our AI powered coding platform streamlines the entire development lifecycle, from early planning to post-launch fixes.
              </span>
              <span className="text-white text-[20px] lg:text-[28px] font-medium font-['Inter'] leading-9"> </span>
              <span className="text-white text-[20px] lg:text-[28px] font-medium font-['Inter'] leading-9">
                Built for speed and designed for complex enterprise codebases, backends and database integration, Kavia helps teams ship faster, break less, and focus on what matters: building great products.
              </span>
            </div>
          </div>
        </div>

        {/* Meet the Team Section */}
        <div className="flex flex-col justify-start items-center gap-8">
          <div className="w-full max-w-[745px] text-center justify-start text-white text-[36px] lg:text-5xl font-semibold font-['Inter'] leading-[62px] tracking-wide">
            Meet the Team
          </div>
          
          <div className="w-full max-w-[1256px] inline-flex justify-center lg:justify-start items-start gap-6 flex-wrap content-start overflow-hidden">
                         {teamMembers.map((member) => (
               <div key={member.name} className="w-full lg:w-[616px] p-4 bg-white/0 rounded-[8px] inline-flex justify-start items-start gap-6 overflow-hidden relative">
                 {/* Background Pattern */}
                 <div className="absolute inset-0 rounded-[8px] overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-[#231f20] to-[#2a1f1a]"></div>
                   <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l  to-transparent"></div>
                  
                 </div>
                                 {/* Image Container with Effects */}
                 <div className="w-[190px] h-[230px] relative bg-[#231f20] rounded-[8px] overflow-hidden flex-shrink-0 z-10">
                  <div className="w-[593px] h-[588px] left-[15px] top-[-32px] absolute opacity-60 bg-[#f26a1b] rounded-full blur-[152px]" />
                  <div className="size-[279px] left-[328.35px] top-[87.20px] absolute rounded-full border-[0.66px] border-[#40281a]" />
                  <div className="size-[279px] left-[318.32px] top-[99.05px] absolute rounded-full border-[0.66px] border-[#40281a]" />
                  <div className="size-[279px] left-[309.03px] top-[110.03px] absolute rounded-full border-[0.66px] border-[#40281a]" />
                  <div className="size-[279px] left-[299.73px] top-[121.02px] absolute rounded-full border-[0.66px] border-[#40281a]" />
                  <div className="size-[279px] left-[290.45px] top-[131.99px] absolute rounded-full border-[0.66px] border-[#40281a]" />
                  <div className="size-[279px] left-[281.15px] top-[142.98px] absolute rounded-full border-[0.66px] border-[#40281a]" />
                  <div className="size-[279px] left-[271.86px] top-[153.96px] absolute rounded-full border-[0.66px] border-[#40281a]" />
                  <div className="size-[279px] left-[262.57px] top-[164.94px] absolute rounded-full border-[0.66px] border-[#40281a]" />
                  <div className="size-[279px] left-[253.27px] top-[175.92px] absolute rounded-full border-[0.66px] border-[#40281a]" />
                  <div className="size-[279px] left-[243.98px] top-[186.90px] absolute rounded-full border-[0.66px] border-[#40281a]" />
                  <img 
                    className="w-[190px] h-[227px] left-0 top-[3px] absolute rounded-[8px]" 
                    src={member.image} 
                    alt={member.name}
                  />
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-8 left-[150px] top-[198px] absolute bg-[#231f20]/60 rounded-tl-[8px] overflow-hidden flex items-center justify-center hover:bg-[#231f20]/80 transition-colors cursor-pointer"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.632 13.632h-2.37V9.922c0-.885-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.775h-2.37V6h2.277v1.047h.032c.316-.6 1.09-1.233 2.246-1.233 2.405 0 2.845 1.58 2.845 3.637v4.181zM3.558 4.955a1.376 1.376 0 11-.001-2.751 1.376 1.376 0 01.001 2.751zm1.188 8.677H2.37V6h2.376v7.632zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fill="white" fillOpacity="0.8"/>
                    </svg>
                  </a>
                </div>
                
                                 {/* Content */}
                 <div className="flex-1 inline-flex flex-col justify-start items-start gap-3 z-10 relative">
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-start text-white text-xl font-semibold font-['Inter'] leading-7">
                      {member.name}
                    </div>
                    <div className="justify-start text-[#dedcdd] text-sm font-medium font-['Inter'] leading-[21px]">
                      {member.role}
                    </div>
                  </div>
                  
                  <div className="self-stretch h-[164px] relative">
                    <div className="absolute inset-0 overflow-y-auto pr-2 custom-scrollbar">
                      <div className="inline-flex flex-col justify-start items-start gap-3">
                        <div className="text-[#dedcdd] text-[13px] font-normal font-['Inter'] leading-tight">
                          {member.bio}
                        </div>
                        {member.bio2 && (
                          <div className="text-[#dedcdd] text-[13px] font-normal font-['Inter'] leading-tight">
                            {member.bio2}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="self-stretch max-w-[1256px] bg-[#231f20] rounded-xl flex flex-col justify-start items-end overflow-hidden">
          <div className="self-stretch p-8 relative flex flex-col justify-center items-start gap-8">
            <div className="w-[1126px] h-[295px] left-[41px] top-[-263px] absolute opacity-30 bg-[#f26a1b] rounded-full blur-[152px]" />
            <div className="self-stretch inline-flex flex-col lg:flex-row justify-start items-start lg:items-center gap-8">
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-3">
                <div className="self-stretch justify-start text-white text-[28px] lg:text-[32px] font-normal font-['Inter'] leading-[38.40px]">
                  Want to join our team?
                </div>
                <div className="self-stretch justify-start text-[#dedcdd] text-base font-normal font-['Inter'] leading-snug">
                  Send us an email we&apos;d love to hear from you.
                </div>
              </div>
              <div data-icon="true" data-state="Default" className="h-10 px-5 py-1.5 bg-[#f26a1b] rounded-[6px] flex justify-center items-center gap-2 cursor-pointer hover:bg-[#f26a1b]/90 transition-colors">
                <div className="justify-center text-white text-sm font-semibold font-['Inter'] leading-tight">
                  Contact Us
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #484546;
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #5a5758;
        }

        /* Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #484546 transparent;
        }
      `}</style>
    </div>
  );
}