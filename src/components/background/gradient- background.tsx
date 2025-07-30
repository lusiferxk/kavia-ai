// src/components/background/gradient-background.tsx
'use client'

const GradientBackground = () => {
  return (
    <>
      {/* Base dark background */}
      <div className="fixed inset-0 bg-[#231f20] -z-10" />

      {/* Main gradient orbs */}
      <div aria-hidden="true" className="fixed inset-0 -z-10">
        {/* Hero section orange glow */}
        <div 
          className="absolute left-[110px] top-[458px] w-[295px] h-[295px] bg-[#ff9358]/40 rounded-full blur-[514px] animate-pulse-slow"
          style={{ animationDelay: '0s' }}
        />

        {/* Secondary orange glow */}
        <div 
          className="absolute left-[1066px] top-[1006px] w-[295px] h-[295px] bg-[#e15e0d]/40 rounded-full blur-[514px] animate-pulse-slow"
          style={{ animationDelay: '1s' }}
        />
        
        {/* Additional glows */}
        <div 
          className="absolute left-[949px] top-[5099px] w-[295px] h-[295px] bg-[#e15e0d]/40 rounded-full blur-[514px] animate-pulse-slow"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Circular pattern */}
      <div aria-hidden="true" className="fixed inset-0 -z-10">
        <div className="absolute left-[245px] top-[607px] w-[647.09px] h-[950px] origin-top-left -rotate-90">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-[647.09px] rounded-full border border-[#40281a]/20"
              style={{
                left: `${33.35 * i}px`,
                transform: 'rotate(-90deg)',
                transformOrigin: 'top left',
              }}
            />
          ))}
        </div>
      </div>

      {/* Grain texture overlay */}
      <div 
        aria-hidden="true" 
        className="fixed inset-0 bg-repeat pointer-events-none opacity-20 -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
        }}
      />
    </>
  )
}

export default GradientBackground