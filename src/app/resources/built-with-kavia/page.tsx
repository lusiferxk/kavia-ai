'use client'

import { useEffect } from 'react'
import { BuiltWithKaviaHero } from './BuiltWithKaviaHero'

export default function BuiltWithKaviaPage() {
  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const headerHeight = 80; // Adjust based on your header height
          const elementTop = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementTop - headerHeight,
            behavior: 'instant'
          });
        }
      }
    };

    // Handle initial load
    handleScroll();

    // Handle browser back/forward
    window.addEventListener('hashchange', handleScroll);
    return () => window.removeEventListener('hashchange', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#231F20]">
      <BuiltWithKaviaHero />
    </main>
  );
}