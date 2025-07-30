'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type DropdownType = 'features' | 'community' | 'company' | null;

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);

  const handleDropdownClick = (dropdown: DropdownType) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Function to determine if a path is active
  const isActivePath = (path: string) => pathname === path;
  
  // Function to determine if a path is part of a dropdown section
  const isActiveSection = (paths: string[]) => paths.some(path => pathname?.startsWith(path));

  // Function to get text color class based on active state
  const getLinkClass = (path: string) => {
    return `text-[15px] font-normal leading-[1.2] tracking-[0.15px] transition-colors ${
      isActivePath(path) ? 'text-white' : 'text-[#dedcdd] hover:text-white'
    }`;
  };

  // Function to get dropdown button class based on active state
  const getDropdownClass = (paths: string[]) => {
    return `flex items-center gap-1 text-[15px] font-normal leading-[1.2] tracking-[0.15px] transition-colors ${
      isActiveSection(paths) ? 'text-white' : 'text-[#dedcdd] hover:text-white'
    }`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#231f20]/90 border-b border-black/10 backdrop-blur-[35px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center py-[23px] px-8">
          {/* Logo */}
          <div className="flex justify-start items-center pr-[109.97px]">
            <div className="flex items-center gap-x-[6.6px] py-[5.33px] px-[9.29px]">
              <Link href="/" className="flex items-center">
                <img
                  src="/logo.svg"
                  alt="KAVIA AI"
                  className="w-auto h-9"
                  style={{
                    width: '137px',
                    height: '36px',
                  }}
                />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center items-center gap-12">
            <div
              className="relative flex items-center gap-1"
              onMouseEnter={() => setFeaturesDropdownOpen(true)}
              onMouseLeave={() => setFeaturesDropdownOpen(false)}
            >
              <button
                className={getDropdownClass(['/features'])}
                type="button"
              >
                Features
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transform transition-transform ${featuresDropdownOpen ? 'rotate-180' : ''}`}
                >
                  <path
                    d="M8.51017 12.6673C8.26265 12.6673 8.02529 12.5738 7.8503 12.4074L4.11697 8.85912C4.02782 8.77729 3.95672 8.6794 3.90781 8.57118C3.85889 8.46295 3.83314 8.34655 3.83207 8.22876C3.83099 8.11098 3.8546 7.99417 3.90153 7.88515C3.94846 7.77614 4.01776 7.67709 4.1054 7.5938C4.19303 7.51051 4.29724 7.44464 4.41194 7.40004C4.52665 7.35544 4.64955 7.33299 4.77347 7.33402C4.8974 7.33504 5.01987 7.35951 5.13374 7.406C5.24761 7.45249 5.3506 7.52007 5.4367 7.6048L8.51017 10.5259L11.5836 7.6048C11.7597 7.44321 11.9954 7.3538 12.2401 7.35582C12.4849 7.35784 12.719 7.45113 12.892 7.6156C13.065 7.78007 13.1632 8.00256 13.1653 8.23515C13.1675 8.46774 13.0734 8.69181 12.9034 8.85912L9.17003 12.4074C8.99504 12.5738 8.75768 12.6673 8.51017 12.6673Z"
                    fill="currentColor"
                    fillOpacity="0.5"
                  />
                </svg>
              </button>
              {featuresDropdownOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 min-w-[700px] z-50"
                  style={{ pointerEvents: 'auto' }}
                >
                  <div style={{ height: 8, marginTop: -8 }} /> {/* Invisible buffer to prevent flicker */}
                  <div className="bg-[#181617] rounded-2xl shadow-2xl py-6 px-6 flex flex-row gap-6 border border-[#232021]">
                    {/* Inspect Card */}
                    <a href="/features/inspect" className="flex-1 min-w-[200px] max-w-[260px] bg-[#232021] rounded-xl p-6 flex flex-col relative hover:bg-[#232021]/80 transition group">
                      <span className="absolute top-4 right-4 bg-[#232021] rounded-full p-1 flex items-center justify-center">
                        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7.5 12.5L12.5 7.5M12.5 7.5H8.33333M12.5 7.5V11.6667" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      <img src="/assets/icons/inspect-icon.svg" alt="Inspect" className="w-8 h-8 mb-4" onError={e => {e.currentTarget.style.display='none'}} />
                      <span className="text-white text-2xl font-semibold mb-2">Inspect</span>
                      <span className="text-[#b0aead] text-base font-normal mb-4">Learn more about Inspect</span>
                    </a>
                    {/* Plan Card */}
                    <a href="/features/plan" className="flex-1 min-w-[200px] max-w-[260px] bg-[#232021] rounded-xl p-6 flex flex-col relative hover:bg-[#232021]/80 transition group">
                      <span className="absolute top-4 right-4 bg-[#232021] rounded-full p-1 flex items-center justify-center">
                        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7.5 12.5L12.5 7.5M12.5 7.5H8.33333M12.5 7.5V11.6667" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      <img src="/assets/icons/plan.svg" alt="Plan" className="w-8 h-8 mb-4" onError={e => {e.currentTarget.style.display='none'}} />
                      <span className="text-white text-2xl font-semibold mb-2">Plan</span>
                      <span className="text-[#b0aead] text-base font-normal mb-4">Learn more about Plan</span>
                    </a>
                    {/* Build Card */}
                    <a href="/features/build" className="flex-1 min-w-[200px] max-w-[260px] bg-[#232021] rounded-xl p-6 flex flex-col relative hover:bg-[#232021]/80 transition group">
                      <span className="absolute top-4 right-4 bg-[#232021] rounded-full p-1 flex items-center justify-center">
                        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7.5 12.5L12.5 7.5M12.5 7.5H8.33333M12.5 7.5V11.6667" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      <img src="/assets/icons/build.svg" alt="Build" className="w-8 h-8 mb-4" onError={e => {e.currentTarget.style.display='none'}} />
                      <span className="text-white text-2xl font-semibold mb-2">Build</span>
                      <span className="text-[#b0aead] text-base font-normal mb-4">Learn more about Build</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/enterprise"
              className={getLinkClass('/enterprise')}
            >
              Enterprise
            </Link>
            <div
              className="relative flex items-center gap-1"
              onMouseEnter={() => setActiveDropdown('community')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleDropdownClick('community')}
                className={getDropdownClass(['/community'])}
                type="button"
              >
                Community
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transform transition-transform ${activeDropdown === 'community' ? 'rotate-180' : ''}`}
                >
                  <path
                    d="M8.51017 12.6673C8.26265 12.6673 8.02529 12.5738 7.8503 12.4074L4.11697 8.85912C4.02782 8.77729 3.95672 8.6794 3.90781 8.57118C3.85889 8.46295 3.83314 8.34655 3.83207 8.22876C3.83099 8.11098 3.8546 7.99417 3.90153 7.88515C3.94846 7.77614 4.01776 7.67709 4.1054 7.5938C4.19303 7.51051 4.29724 7.44464 4.41194 7.40004C4.52665 7.35544 4.64955 7.33299 4.77347 7.33402C4.8974 7.33504 5.01987 7.35951 5.13374 7.406C5.24761 7.45249 5.3506 7.52007 5.4367 7.6048L8.51017 10.5259L11.5836 7.6048C11.7597 7.44321 11.9954 7.3538 12.2401 7.35582C12.4849 7.35784 12.719 7.45113 12.892 7.6156C13.065 7.78007 13.1632 8.00256 13.1653 8.23515C13.1675 8.46774 13.0734 8.69181 12.9034 8.85912L9.17003 12.4074C8.99504 12.5738 8.75768 12.6673 8.51017 12.6673Z"
                    fill="currentColor"
                    fillOpacity="0.5"
                  />
                </svg>
              </button>
              {activeDropdown === 'community' && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 min-w-[700px] z-50"
                  style={{ pointerEvents: 'auto' }}
                >
                  <div style={{ height: 8, marginTop: -8 }} /> {/* Invisible buffer to prevent flicker */}
                  <div className="bg-[#181617] rounded-2xl shadow-2xl py-6 px-6 flex flex-row gap-6 border border-[#232021]">
                    {/* Built With Kavia Card */}
                    <a href="/community/built-with-kavia" className="flex-1 min-w-[200px] max-w-[260px] bg-[#232021] rounded-xl p-6 flex flex-col relative hover:bg-[#232021]/80 transition group">
                      <span className="absolute top-4 right-4 bg-[#232021] rounded-full p-1 flex items-center justify-center">
                        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7.5 12.5L12.5 7.5M12.5 7.5H8.33333M12.5 7.5V11.6667" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      <img src="/assets/icons/inspect-icon.svg" alt="Built With Kavia" className="w-8 h-8 mb-4" onError={e => {e.currentTarget.style.display='none'}} />
                      <span className="text-white text-2xl font-semibold mb-2">Built With Kavia</span>
                      <span className="text-[#b0aead] text-base font-normal mb-4">See key builds</span>
                    </a>
                    {/* Documentation Card */}
                    <a href="/documentation/home" className="flex-1 min-w-[200px] max-w-[260px] bg-[#232021] rounded-xl p-6 flex flex-col relative hover:bg-[#232021]/80 transition group">
                      <span className="absolute top-4 right-4 bg-[#232021] rounded-full p-1 flex items-center justify-center">
                        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7.5 12.5L12.5 7.5M12.5 7.5H8.33333M12.5 7.5V11.6667" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      <img src="/assets/icons/document-validation.svg" alt="Document Validation Icon" className="w-8 h-8 mb-4" />
                      <span className="text-white text-2xl font-semibold mb-2">Documentation</span>
                      <span className="text-[#b0aead] text-base font-normal mb-4">Learn how to use KAVIA AI</span>
                    </a>
                    {/* Discord Card */}
                    <a href="/community/discord" className="flex-1 min-w-[200px] max-w-[260px] bg-[#232021] rounded-xl p-6 flex flex-col relative hover:bg-[#232021]/80 transition group">
                      <span className="absolute top-4 right-4 bg-[#232021] rounded-full p-1 flex items-center justify-center">
                        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7.5 12.5L12.5 7.5M12.5 7.5H8.33333M12.5 7.5V11.6667" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      <img src="/assets/icons/discord.svg" alt="Discord Icon" className="w-8 h-8 mb-4" />
                      <span className="text-white text-2xl font-semibold mb-2">Discord</span>
                      <span className="text-[#b0aead] text-base font-normal mb-4">Join our community on Discord</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/pricing"
              className={getLinkClass('/pricing')}
            >
              Pricing
            </Link>
            <div
              className="relative flex items-center gap-1"
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleDropdownClick('company')}
                className={getDropdownClass(['/about', '/news', '/contact'])}
                type="button"
              >
                Company
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transform transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`}
                >
                  <path
                    d="M8.51017 12.6673C8.26265 12.6673 8.02529 12.5738 7.8503 12.4074L4.11697 8.85912C4.02782 8.77729 3.95672 8.6794 3.90781 8.57118C3.85889 8.46295 3.83314 8.34655 3.83207 8.22876C3.83099 8.11098 3.8546 7.99417 3.90153 7.88515C3.94846 7.77614 4.01776 7.67709 4.1054 7.5938C4.19303 7.51051 4.29724 7.44464 4.41194 7.40004C4.52665 7.35544 4.64955 7.33299 4.77347 7.33402C4.8974 7.33504 5.01987 7.35951 5.13374 7.406C5.24761 7.45249 5.3506 7.52007 5.4367 7.6048L8.51017 10.5259L11.5836 7.6048C11.7597 7.44321 11.9954 7.3538 12.2401 7.35582C12.4849 7.35784 12.719 7.45113 12.892 7.6156C13.065 7.78007 13.1632 8.00256 13.1653 8.23515C13.1675 8.46774 13.0734 8.69181 12.9034 8.85912L9.17003 12.4074C8.99504 12.5738 8.75768 12.6673 8.51017 12.6673Z"
                    fill="currentColor"
                    fillOpacity="0.5"
                  />
                </svg>
              </button>
              {activeDropdown === 'company' && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 min-w-[700px] z-50"
                  style={{ pointerEvents: 'auto' }}
                >
                  <div style={{ height: 8, marginTop: -8 }} /> {/* Invisible buffer to prevent flicker */}
                  <div className="bg-[#181617] rounded-2xl shadow-2xl py-6 px-6 flex flex-row gap-6 border border-[#232021]">
                    {/* About Us Card */}
                    <Link href="/about" className="flex-1 min-w-[200px] max-w-[260px] bg-[#232021] rounded-xl p-6 flex flex-col relative hover:bg-[#232021]/80 transition group">
                      <span className="absolute top-4 right-4 bg-[#232021] rounded-full p-1 flex items-center justify-center">
                        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7.5 12.5L12.5 7.5M12.5 7.5H8.33333M12.5 7.5V11.6667" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      <img src="/assets/icons/kavia-ind-logo.svg" alt="About Us" className="w-8 h-8 mb-4" onError={e => {e.currentTarget.style.display='none'}} />
                      <span className="text-white text-2xl font-semibold mb-2">About Us</span>
                      <span className="text-[#b0aead] text-base font-normal mb-4">Know more about us</span>
                    </Link>
                    {/* News and Events Card */}
                    <Link href="/news" className="flex-1 min-w-[200px] max-w-[260px] bg-[#232021] rounded-xl p-6 flex flex-col relative hover:bg-[#232021]/80 transition group">
                      <span className="absolute top-4 right-4 bg-[#232021] rounded-full p-1 flex items-center justify-center">
                        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7.5 12.5L12.5 7.5M12.5 7.5H8.33333M12.5 7.5V11.6667" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      <img src="/assets/icons/license-draft.svg" alt="News and Events" className="w-8 h-8 mb-4" onError={e => {e.currentTarget.style.display='none'}} />
                      <span className="text-white text-2xl font-semibold mb-2">News and Events</span>
                      <span className="text-[#b0aead] text-base font-normal mb-4">Read the latest news from us</span>
                    </Link>
                    {/* Contact Card */}
                    <Link href="/contact" className="flex-1 min-w-[200px] max-w-[260px] bg-[#232021] rounded-xl p-6 flex flex-col relative hover:bg-[#232021]/80 transition group">
                      <span className="absolute top-4 right-4 bg-[#232021] rounded-full p-1 flex items-center justify-center">
                        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7.5 12.5L12.5 7.5M12.5 7.5H8.33333M12.5 7.5V11.6667" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      <img src="/assets/icons/mail-01.svg" alt="Contact" className="w-8 h-8 mb-4" onError={e => {e.currentTarget.style.display='none'}} />
                      <span className="text-white text-2xl font-semibold mb-2">Contact</span>
                      <span className="text-[#b0aead] text-base font-normal mb-4">Connect with us</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-[16px]">
            <Link href="/contact">
              <button
                className="h-[40px] px-5 bg-transparent text-white text-[15px] font-medium font-['Inter'] leading-[22.5px] tracking-[0.15px] hover:text-[#dedcdd] transition-colors"
              >
                Contact
              </button>
            </Link>
            <Link href="/login">
              <button
                className="h-[40px] px-5 bg-[#F26A1B] rounded-[8px] text-white text-[15px] font-medium font-['Inter'] leading-[22.5px] tracking-[0.15px] hover:bg-[#e15e0d] transition-colors"
                style={{
                  boxShadow: `
                    inset 0px -2px 0px rgba(0, 0, 0, 0.75),
                    0px 12px 24px -6px rgba(45, 32, 17, 0.3),
                    0px 4px 8px rgba(45, 32, 17, 0.2),
                    0px 1.5px 3px rgba(45, 32, 17, 0.2),
                    0px 1px 1px rgba(45, 32, 17, 0.12)
                  `,
                }}
              >
                Log In
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#231f20] border-t border-black/10">
            <div className="px-8 py-6 flex flex-col gap-6">
              <Link
                href="/products"
                className={`text-[15px] font-normal leading-[18px] tracking-[0.15px] ${
                  isActivePath('/products') ? 'text-white' : 'text-[#dedcdd]'
                }`}
              >
                Products
              </Link>
              <Link
                href="/enterprise"
                className={`text-[15px] font-normal leading-[18px] tracking-[0.15px] ${
                  isActivePath('/enterprise') ? 'text-white' : 'text-[#dedcdd]'
                }`}
              >
                Enterprise
              </Link>
              <Link
                href="/security"
                className={`text-[15px] font-normal leading-[18px] tracking-[0.15px] ${
                  isActivePath('/security') ? 'text-white' : 'text-[#dedcdd]'
                }`}
              >
                Security
              </Link>
              <button
                onClick={() => handleDropdownClick('community')}
                className={`flex items-center justify-between text-[15px] font-normal leading-[18px] tracking-[0.15px] ${
                  isActiveSection(['/community/built-with-kavia', '/community/documentation', '/community/discord']) ? 'text-white' : 'text-[#dedcdd]'
                }`}
              >
                Community
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transform transition-transform ${activeDropdown === 'community' ? 'rotate-180' : ''}`}
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {activeDropdown === 'community' && (
                <div className="pl-4 flex flex-col gap-4">
                  <Link 
                    href="/community/built-with-kavia" 
                    className={`text-[15px] ${isActivePath('/community/built-with-kavia') ? 'text-white' : 'text-[#dedcdd]'}`}
                  >
                    Built With Kavia
                  </Link>
                  <Link 
                    href="/community/documentation" 
                    className={`text-[15px] ${isActivePath('/community/documentation') ? 'text-white' : 'text-[#dedcdd]'}`}
                  >
                    Documentation
                  </Link>
                  <Link 
                    href="/community/discord" 
                    className={`text-[15px] ${isActivePath('/community/discord') ? 'text-white' : 'text-[#dedcdd]'}`}
                  >
                    Discord
                  </Link>
                </div>
              )}
              <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
                <Link
                  href="/contact"
                  className="h-[40px] px-5 bg-transparent text-white text-[15px] font-medium font-['Inter'] leading-[22.5px] tracking-[0.15px] hover:text-[#dedcdd] transition-colors flex items-center justify-center"
                >
                  Contact
                </Link>
                <Link
                  href="/login"
                  className="h-[40px] px-5 bg-[#F26A1B] rounded-[8px] text-white text-[15px] font-medium font-['Inter'] leading-[22.5px] tracking-[0.15px] hover:bg-[#e15e0d] transition-colors"
                  style={{
                    boxShadow: `
                      inset 0px -2px 0px rgba(0, 0, 0, 0.75),
                      0px 12px 24px -6px rgba(45, 32, 17, 0.3),
                      0px 4px 8px rgba(45, 32, 17, 0.2),
                      0px 1.5px 3px rgba(45, 32, 17, 0.2),
                      0px 1px 1px rgba(45, 32, 17, 0.12)
                    `,
                  }}
                >
                  Log In
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}