export function GradientBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* First orange orb */}
      <div
        style={{
          position: 'absolute',
          width: '295px',
          height: '295px',
          left: '-100px',
          top: '200px',
          backgroundColor: 'rgba(255, 147, 88, 1)',
          borderRadius: '50%',
          filter: 'blur(200px)',
          zIndex: 0,
        }}
      />
      {/* Second orange orb */}
      <div
        style={{
          position: 'absolute',
          width: '295px',
          height: '295px',
          right: '-100px',
          bottom: '300px',
          backgroundColor: 'rgba(225, 94, 13, 1)',
          borderRadius: '50%',
          filter: 'blur(200px)',
          zIndex: 0,
        }}
      />
    </div>
  )
} 