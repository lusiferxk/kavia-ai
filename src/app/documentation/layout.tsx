"use client";
import "./documentation.css";
import type React from "react";

import PageTOC from "./components/PageTOC";
import HeroSection from "./integrations/components/HeroSection";
import { usePathname } from "next/navigation";
import Footer from "./footer/page";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/layout/header";
import { useAnchorScroll } from "./components/hooks/useAnchorScroll";

export default function DocumentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showTOC = pathname !== "/documentation/home";

  const [showStickyTOC, setShowStickyTOC] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useAnchorScroll();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyTOC(!entry.isIntersecting);
      },
      {
        rootMargin: "-40px 0px 0px 0px",
        threshold: 0.1,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Fixed Header */}
      {/* <div className="fixed top-0 left-0 right-0 z-50 h-16 px-4 md:px-8 bg-[#1e1b1b] border-b border-[#333] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <DocumentationGradientBackground />
          <Link href="/">
            <img src="/logo-white.png" alt="logo" className="h-8 w-auto" />
          </Link>
          <span className="text-sm text-[#787878d6]">|</span>
          <span className="text-sm text-gray-300 font-inter font-normal hidden sm:inline">
            Help Center
          </span>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/waitlist"
            className="text-sm font-medium text-gray-300 hidden sm:inline"
          >
            Contact Support
          </Link>
          <Link href="/login" className="doc-header-started-btn">
            Log In
          </Link>
        </div>
      </div> */}

      {/* header */}
      <Header />

      {/* Main Layout Container */}
      <div className="pt-24 flex">
        {/* Main Content */}
        <main
          className={`flex-1 ${showTOC ? "sm:pr-80 px-10" : ""} transition-all duration-300`}
        >
          <div className={`mx-auto py-8 ${showTOC ? "max-w-5xl" : "sm:px-24 px-10"}`}>
            {children}
          </div>
        </main>

        {/* TOC Sidebar (only shows after Hero is out of view) */}
        {showTOC && showStickyTOC && (
          <div className="hidden md:block fixed top-24 right-0 w-80 h-[calc(100vh-4rem)] z-40">
            <div className="p-6">
              <PageTOC />
            </div>
          </div>
        )}
      </div>

      {/* Hero & Footer */}
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <Footer />
    </div>
  );
}