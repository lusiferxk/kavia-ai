// src/components/background/optimized-background.tsx
'use client'

import { useScroll, motion, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function OptimizedBackground() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  })

  // Smoother parallax values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150])

  return (
    <div ref={ref} className="fixed inset-0 z-0">
      {/* Base background */}
      <div className="absolute inset-0 bg-[#231f20]" />

      {/* Gradient orbs - using CSS animations instead of JS */}
      <div 
        className="absolute w-[295px] h-[295px] left-[110px] top-[458px] bg-[#ff9358] rounded-full blur-[514px] animate-glow"
        style={{
          transform: `translateY(${y1}px)`,
          willChange: 'transform'
        }}
      />
      <div 
        className="absolute w-[295px] h-[295px] left-[1066px] top-[1006px] bg-[#e15e0d] rounded-full blur-[514px] animate-glow-delayed"
        style={{
          transform: `translateY(${y2}px)`,
          willChange: 'transform'
        }}
      />

      {/* Static circular patterns */}
      <div className="absolute origin-top-left -rotate-90 w-[647.09px] h-[950px] left-[245px] top-[607px]">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-[647.09px] h-[647.09px] origin-top-left -rotate-90 rounded-full border border-[#40281a]"
            style={{ 
              left: `${33.35 * i}px`,
              opacity: 0.3 + (i * 0.02)
            }}
          />
        ))}
      </div>

      {/* Gradient line */}
      <div className="absolute w-[604px] h-0.5 left-[92px] top-[4296px] bg-gradient-to-r from-[#40281a] to-transparent opacity-50" />

      {/* Subtle grain texture - static */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%\' height=\'100%\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px',
        }}
      />
    </div>
  )
}