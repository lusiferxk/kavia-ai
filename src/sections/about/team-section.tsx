// src/sections/about/about-hero.tsx
const teamMembers = [
    {
      name: "Labeeb Ismail",
      role: "Founder & CEO, KAVIA",
      bio: "With over 20+ years of experience as Senior Vice President at Comcast/Sky, Labeeb led a global team of 2,000+ engineers and was instrumental in the creation of the RDK video software stack, now running on over 150 million devices worldwide.",
      featured: true,
    },
    {
      name: "Dan Watson",
      role: "Marketing, Business Development",
      bio: "Dan has 30 years experience in marketing, advertising and content creation, with work featured in 6 Super Bowls, and campaigns for brands like Chevrolet, Pepsi, Meta, Fitbit, and Cisco.",
    },
    {
      name: "Alfred Gracias",
      role: "Advisor HR, Business Development, Partnerships",
      bio: "Alfred is a serial entrepreneur with global experience and a unique background of working in small, medium and large enterprises. An exponential thinker, he is great at connecting dots for growth hacks and lasting relationships.",
    },
    {
      name: "Richard Saffir",
      role: "Advisor Corporate Legal",
      bio: "Rich has practiced law in the SF Bay area for 37 years, focusing on closely held businesses, M&A, tax and technology licensing.",
    },
    {
      name: "Jon Gibbs",
      role: "Advisor Operations Partnerships",
      bio: "Jon has spent over 16 years building Global Sales Teams within the technology industry providing solutions for the most recognisable brands in the world.",
    },
    {
      name: "Sanjay Dorairaj",
      role: "Technical Advisor",
      bio: "Sanjay Dorairaj is a entrepreneur and AI innovator, founding jammin.ai, emspal.com, easy-donate.com, ccpathways.org and campaignsplanet.com. He leads Data Science at San Jose City College and advises the California Community College Chancellor's Office on AI.",
    },
    {
      name: "Joe Chow",
      role: "Advisor Business Development, Partnerships",
      bio: "Joe is a serial innovator, technologist, operational executive, strategist and a driver of transformation with over 40 years of experience building leading edge solutions at global companies.",
    },
    {
      name: "Perl Kamboj",
      role: "Advisor Business Development, Partnerships",
      bio: "Manee Kamboj, CEO Hexert Technology. Manee Kamboj excels as a Growth & Transformation Officer and investor, advising strategic financial and healthcare technology companies. She spearheads strategic partnerships and d...",
    },
    {
      name: "Aljit Joy",
      role: "Advisor Business Development",
      bio: "Aljit Joy invests in and advises early stage companies building breakthrough platforms and products. He has successfully created and invested in new platforms in Media/ Telecom, Technology and AI domains.",
    },
    {
      name: "Shiva Patibanda",
      role: "Advisor Business Development, Partnerships",
      bio: "Investor and entrepreneur, pioneered the development of software stacks deployed in millions of HD TV and cable STB from leading TV manufacturers and cable operators worldwide.",
    },
    {
      name: "Sophie Duncan",
      role: "Advisor, Social Media Specialist",
      bio: "With extensive experience connecting global brands and partners for accelerated reach, Sophie has successfully guided startups from Day 1 to success through innovative strategies and meaningful relationships.",
    },
    {
      name: "Sridhar Solur",
      role: "Advisor Business Development, Partnerships",
      bio: "",
    }
  ];
  
  export default function AboutHero() {
    return (
      <section className="relative w-full bg-[#231F20] overflow-hidden">
        {/* Background SVG with Glow Effect */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <div className="w-[1323px] h-[752px]">
              <svg className="w-full h-full" viewBox="0 0 1323 752" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_2878_14155)">
                  <circle cx="661.5" cy="90.5" r="147.5" fill="#FF9358"/>
                </g>
                <defs>
                  <filter id="filter0_f_2878_14155" x="0" y="-571" width="1323" height="1323" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="257" result="effect1_foregroundBlur_2878_14155"/>
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
  
        {/* About Content */}
        <div className="relative z-10">
          <div className="container mx-auto px-6">
            {/* Hero Section */}
            <div className="flex flex-col items-center py-24 gap-12">
              <h1 className="text-7xl font-bold text-white">
                About Us
              </h1>
              <div className="max-w-[1032px] space-y-8 text-[28px] leading-[1.8] text-[#DEDCDD] text-center">
                <p>
                  <span className="font-semibold">KAVIA AI is a pioneering startup based in San Francisco, dedicated to revolutionizing workflow management.</span>
                  <span> Our cutting-edge AI tools leverage Large language models and deep learning techniques to dramatically accelerate time-to-market for new products and features, ensuring our clients lead in innovation.</span>
                </p>
                <p>
                  At KAVIA AI, we are committed to transforming businesses by making workflow automation more efficient and effective.
                </p>
              </div>
            </div>
  
            {/* Team Section */}
            <div className="pb-24">
              <div className="text-center mb-16">
                <div className="inline-block px-2.5 py-1 bg-[#37322F] rounded-full mb-4 shadow-[inset_0px_1px_0px_0px_rgba(214,207,194,0.12),0px_3px_3px_0px_rgba(12,9,8,0.1),0px_1px_2px_0px_rgba(12,9,8,0.32)]">
                  <span className="text-white text-xs font-medium tracking-wider">
                    Meet with Advisors
                  </span>
                </div>
                <h2 className="text-5xl font-semibold text-white tracking-wide">
                  Team & Advisors
                </h2>
              </div>
  
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                  <div
                    key={member.name}
                    className={`p-6 rounded-2xl border border-white/5 h-[280px] ${
                      member.featured
                        ? 'bg-gradient-to-b from-[rgba(242,106,27,0.04)] to-[rgba(35,31,32,0.04)]'
                        : 'bg-white/2'
                    }`}
                  >
                    <div className="flex items-center gap-5 mb-6">
                      <div className="w-[68px] h-[68px]">
                        <img
                          src="/api/placeholder/68/68"
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white leading-[1.4]">
                          {member.name}
                        </h3>
                        <p className="text-sm text-[#DEDCDD] font-medium">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <div className="border-b border-white/5 mb-6" />
                    <p className="text-sm text-[#DEDCDD] leading-[1.6] min-h-[90px] max-h-[120px]">
                      {member.bio}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }