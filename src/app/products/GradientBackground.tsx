import React from 'react';

export default function GradientOrbs() {
  return (
    <>
      {/* Top orb - behind Enterprise badge */}
      <div 
        className="absolute left-1/2 top-20 -translate-x-1/2 pointer-events-none"
        style={{
          width: '295px',
          height: '295px',
        }}
      >
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: '#FF9358',
            borderRadius: '50%',
            filter: 'blur(514px)',
          }}
        />
      </div>

      {/* Bottom orb - positioned according to Figma coordinates */}
      {/* <div 
        className="absolute pointer-events-none"
        style={{
          width: '295px',
          height: '295px',
          right: '374.5px',
          bottom: '754.5px',
        }}
      >
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: '#FF9358',
            borderRadius: '50%',
            filter: 'blur(514px)',
          }}
        />
      </div> */}
    </>
  );
}