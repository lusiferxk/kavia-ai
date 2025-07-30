// src/components/background/base-background.tsx
'use client'

export function BaseBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Main background color */}
      <div className="absolute inset-0 bg-[#231f20]" />

      {/* Gradient orbs */}
      <div className="absolute w-[295px] h-[295px] left-[110px] top-[458px] bg-[#ff9358] rounded-full blur-[514px]" />
      <div className="absolute w-[295px] h-[295px] left-[1066px] top-[1006px] bg-[#e15e0d] rounded-full blur-[514px]" />
      <div className="absolute w-[295px] h-[295px] left-[949px] top-[5099px] bg-[#e15e0d] rounded-full blur-[514px]" />
      <div className="absolute w-[295px] h-[295px] left-[-43px] top-[6312px] bg-[#e15e0d] rounded-full blur-[514px]" />
      <div className="absolute w-[295px] h-[295px] left-[1201px] top-[6966px] bg-[#e15e0d] rounded-full blur-[514px]" />

      {/* Circular border patterns */}
      <div className="absolute origin-top-left -rotate-90 w-[647.09px] h-[950px] left-[245px] top-[607px]">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-[647.09px] h-[647.09px] origin-top-left -rotate-90 rounded-full border border-[#40281a]"
            style={{ left: `${33.35 * i}px` }}
          />
        ))}
      </div>

      {/* Grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%\' height=\'100%\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* Gradient lines */}
      <div className="absolute w-[604px] h-0.5 left-[92px] top-[4296px] bg-gradient-to-r from-[#40281a] to-transparent" />
    </div>
  )
}