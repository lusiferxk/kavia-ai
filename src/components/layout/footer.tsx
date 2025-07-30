'use client'

import React from 'react'
import { Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface IconProps {
  className?: string;
}

const XIcon = () => {
  return (
    <svg
      stroke="currentColor"
      fill="white"
      strokeWidth="0"
      viewBox="0 0 16 16"
      className="text-black hover:text-gray-600 cursor-pointer"
      height="25"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
    </svg>
  )
}

const LinkedInIcon = () => {
  return (
    <svg
      stroke="currentColor"
      fill="white"
      strokeWidth="0"
      viewBox="0 0 16 16"
      className="text-black hover:text-gray-600 cursor-pointer"
      height="25"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path>
    </svg>
  )
}

const InstagramIcon = () => {
  return (
    <svg
      stroke="currentColor"
      fill="white"
      strokeWidth="0"
      viewBox="0 0 16 16"
      className="text-black hover:text-gray-600 cursor-pointer"
      height="25"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"></path>
    </svg>
  )
}

const FooterHero = () => {
  const generateLines = React.useMemo(() => {
    const lines = []
    const baseOpacity = 1
    const baseColor = '75, 70, 70'

    for (let i = 0; i < 200; i++) {
      const opacity = baseOpacity
      const heightVariation = Math.round(Math.sin(i * 0.1) * 20 * 1000) / 1000
      const leftPercentage = ((i / 200) * 100).toFixed(3)
      
      lines.push(
        <div
          key={i}
          className="absolute bottom-0 w-px"
          style={{
            left: `${leftPercentage}%`,
            height: `${40 + heightVariation}%`,
            background: `rgba(${baseColor}, ${opacity})`,
            transition: 'all 0.5s ease-in-out',
          }}
        />
      )
    }
    return lines
  }, [])

  return (
    <div className="relative overflow-hidden h-[485px] md:h-[485px] bg-[#161314] rounded-t-[40px]">
      {/* Pattern Container */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-50">{generateLines}</div>

        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#161314] via-[#161314]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#161314] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#161314] via-transparent to-[#161314]" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10 pt-[60px] md:pt-[116px]">
        <div className="text-center text-white text-[32px] md:text-[48px] font-medium font-inter leading-[130%] max-w-[514px] mx-auto mb-6 md:mb-8">
          Inspect. Plan. Build.
          {/* <br />
          Build. */}
        </div>
        <div className="text-center text-[#DEDCDD] text-sm md:text-base font-normal font-inter leading-[150%] max-w-[514px] mx-auto mb-6 md:mb-8 px-4">
          Transform Enterprise Software Development Process with{' '}
          <span className="font-semibold">KAVIA AI</span>
        </div>
        <Link
          href="/waitlist"
          className="inline-block bg-white text-[#231F20] font-medium px-4 py-2 rounded-[8px] hover:bg-gray-100 transition-colors cursor-pointer"
        >
          Get started with Kavia AI
        </Link>
      </div>

      <div className="absolute w-[90%] md:w-[496px] h-[102px] -translate-x-1/2 left-1/2 top-[213px] mix-blend-screen">
        <div
          className="absolute inset-0 bg-[#F26A1B] rounded-full"
          style={{
            filter: 'blur(200px)',
          }}
        />
      </div>
    </div>
  )
}

interface FooterLinkItemProps {
  href: string
  children: React.ReactNode
}

const FooterLinkItem: React.FC<FooterLinkItemProps> = ({ href, children }) => {
  const router = useRouter();
  
  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Handle external links (social media etc.)
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }

    // For internal navigation
    try {
      // Split the href into path and hash
      const [path, hash] = href.split('#');
      const cleanPath = path.endsWith('/') ? path.slice(0, -1) : path;
      const currentPath = window.location.pathname.endsWith('/') 
        ? window.location.pathname.slice(0, -1) 
        : window.location.pathname;

      // If we're already on the same page
      if (currentPath === cleanPath) {
        if (hash) {
          const element = document.getElementById(hash);
          if (element) {
            const headerOffset = 120;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        } else {
          // If no hash, scroll to top of the page
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      } else {
        // Navigate to new page
        if (hash) {
          // For pages with hash
          await router.push(href);
        } else {
          // For regular page navigation
          await router.push(cleanPath);
        }
      }
    } catch (error) {
      console.error('Navigation error:', error);
      // Fallback to traditional navigation
      window.location.href = href;
    }
  };

  // External link rendering
  if (href.startsWith('http')) {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block py-[5.5px] w-full relative z-10"
      >
        <span className="text-white text-[15px] font-medium leading-[18px] tracking-tight hover:text-[#F26A1B] transition-colors cursor-pointer block w-full">
          {children}
        </span>
      </a>
    );
  }

  // Internal link rendering
  return (
    <Link 
      href={href} 
      onClick={handleClick} 
      className="block py-[5.5px] w-full relative z-10"
    >
      <span className="text-white text-[15px] font-medium leading-[18px] tracking-tight hover:text-[#F26A1B] transition-colors cursor-pointer block w-full">
        {children}
      </span>
    </Link>
  );
};

const Footer = () => {
  const footerSections = [
    {
      title: 'Products',
      links: [
        { name: 'Inspect', href: '/products#inspect-section' }, // No trailing slash
        { name: 'Plan', href: '/products#plan-section' }, // No trailing slash
        { name: 'Build', href: '/products#build-section' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about/' },
        { name: 'News', href: '/news/' },
        { name: 'Contact', href: '/contact/' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { name: 'Built With KAVIA', href: '/resources/built-with-kavia/' },
        { name: 'Enterprise', href: '/enterprise/' },
        { name: 'Security', href: '/security/' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy/' },
        { name: 'Terms of Service', href: '/terms/' },
      ],
    },
  ]

  const socialLinks = [
    { Icon: XIcon, href: 'https://x.com/kaviaai', label: 'X' },
    { Icon: LinkedInIcon, href: 'https://www.linkedin.com/company/kavia-ai/', label: 'LinkedIn' },
    { Icon: InstagramIcon, href: 'https://www.instagram.com/kavia.ai/', label: 'Instagram' },
  ]

  return (
    <footer className="bg-[#161314] relative">
      <div className="rounded-t-[40px] bg-[#161314]">
        <FooterHero />

        {/* Gradient Transition */}
        <div
          className="w-full h-[101px] opacity-70"
          style={{
            background: `linear-gradient(180deg, 
              rgba(49, 45, 43, 0.7) 0%,
              rgba(45, 41, 39, 0.7) 10%,
              rgba(42, 38, 36, 0.7) 20%,
              rgba(39, 35, 33, 0.7) 30%,
              rgba(36, 32, 30, 0.7) 40%,
              rgba(33, 29, 27, 0.7) 50%,
              rgba(30, 26, 24, 0.7) 60%,
              rgba(27, 23, 22, 0.7) 70%,
              rgba(24, 21, 21, 0.7) 80%,
              rgba(22, 19, 20, 0.7) 90%,
              rgba(22, 19, 20, 0.7) 100%
            )`,
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
        />

        {/* Footer Content Section */}
        <div className="relative">
          {/* Orange glow orb for bottom section */}
          <div className="absolute w-[90%] md:w-[496px] h-[50px] -translate-x-1/2 left-1/2 top-20 mix-blend-screen">
            <div
              className="absolute inset-0 bg-[#F26A1B] rounded-full"
              style={{
                filter: 'blur(200px)',
              }}
            />
          </div>

          {/* Main Footer Content */}
          <div className="container mx-auto px-4 md:px-[8px] -mt-3">
            <div className="w-full max-w-[1256px] mx-auto flex flex-col md:flex-row justify-start items-start gap-8 md:gap-[69px]">
              {/* Logo & Social Section */}
              <div className="w-full md:w-[376px] pr-0 md:pr-10 flex flex-col gap-7">
                <Link href="/" className="w-12 h-12 relative block">
                  <Image
                    src="/assets/icons/KaviaAILogo.svg"
                    alt="Kavia Logo"
                    width={48}
                    height={48}
                  />
                </Link>
                <p className="text-[#DEDCDD] text-[15px] font-normal leading-snug">
                  KAVIA AI Workflow Manager revolutionizes how teams collaborate, analyze code, and
                  deliver software projects.
                </p>
                <div className="pt-[5px] flex items-center gap-5">
                  {socialLinks.map(({ Icon, href, label }) => (
                    <Link key={label} href={href} className="block" aria-label={label}>
                      <Icon />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Links Sections Container */}
              <div className="w-full md:flex-1 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-[69px] relative z-20">
                {footerSections.map((section) => (
                  <div key={section.title} className="flex flex-col relative ">
                    <div className="pb-4 md:pb-6">
                      <h3 className="text-white text-[15px] font-medium leading-[18px] tracking-tight">
                        {section.title}
                      </h3>
                    </div>
                    <div className="flex flex-col relative">
                      {section.links.map((link) => (
                        <FooterLinkItem key={link.name} href={link.href}>
                          {link.name}
                        </FooterLinkItem>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-12 md:mt-16">
          <div className="container mx-auto px-4 md:px-[84px] py-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <p className="text-[#B3B3B3] text-sm font-medium text-center md:text-left">
              © 2024 KAVIA AI - All Rights Reserved.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-[#E15E0D] hover:text-[#F26A1B] transition-colors cursor-pointer"
            >
              <span className="text-[15px] font-medium">Back to Top</span>
              <ArrowUp className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
