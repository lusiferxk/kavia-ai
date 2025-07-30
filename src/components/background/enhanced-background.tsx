// src/components/background/enhanced-background.tsx
'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function EnhancedBackground() {
  const [scrollY, setScrollY] = useState(0)

  // Handle scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-[#231f20]" />

      {/* Animated gradient orbs with parallax effect */}
      <motion.div 
        className="absolute w-[295px] h-[295px] left-[110px] bg-[#ff9358] rounded-full blur-[514px]"
        animate={{
          opacity: [0.4, 0.6, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          top: `${458 + scrollY * 0.1}px`
        }}
      />
      <motion.div 
        className="absolute w-[295px] h-[295px] left-[1066px] bg-[#e15e0d] rounded-full blur-[514px]"
        animate={{
          opacity: [0.5, 0.7, 0.5],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        style={{
          top: `${1006 + scrollY * 0.15}px`
        }}
      />

      {/* Animated circular patterns */}
      <motion.div 
        className="absolute origin-top-left -rotate-90 w-[647.09px] h-[950px] left-[245px] top-[607px]"
        animate={{
          rotate: [-90, -88, -90],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {[...Array(10)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute w-[647.09px] h-[647.09px] origin-top-left -rotate-90 rounded-full border border-[#40281a]"
            style={{ left: `${33.35 * i}px` }}
            animate={{
              opacity: [0.3, 0.4, 0.3],
              scale: [1, 1 + (i * 0.001), 1],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}
      </motion.div>

      {/* Gradient lines with scroll effect */}
      <motion.div 
        className="absolute w-[604px] h-0.5 left-[92px] bg-gradient-to-r from-[#40281a] to-transparent"
        style={{
          top: `${4296 + scrollY * 0.2}px`,
          opacity: Math.min(1, Math.max(0, (scrollY - 3800) / 500))
        }}
      />

      {/* Dynamic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#231f20]/50 to-transparent opacity-50" />

      {/* Animated grain texture */}
      <motion.div 
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%\' height=\'100%\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px',
        }}
      />

      {/* Scroll-based color shift overlay */}
      <div 
        className="absolute inset-0 mix-blend-overlay"
        style={{
          background: `linear-gradient(to bottom, 
            rgba(255, 147, 88, ${Math.max(0, 0.1 - scrollY * 0.0001)}), 
            rgba(225, 94, 13, ${Math.max(0, 0.1 - scrollY * 0.0001)})
          )`
        }}
      />
    </div>
  )
}