import React from 'react';

export default function DocumentationGradientBackground() {
  return (
    <>
      {/* Gradient orb behind the "Get Started" button - matching the image */}
      <div 
        className="absolute pointer-events-none"
        style={{
          width: '400px',
          height: '400px',
          right: '50px', // Position closer to the button
          top: '-150px', // Position higher to create the glow effect seen in image
        }}
      >
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle, #FF9358 0%, #FF7A00 30%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(200px)',
            opacity: 0.5, // Reduced opacity for more subtle effect
          }}
        />
      </div>
      
      {/* Additional subtle glow for enhanced effect */}
      <div 
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '300px',
          right: '-50px',
          top: '-100px',
        }}
      >
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(255, 147, 88, 0.2) 0%, rgba(255, 122, 0, 0.1) 50%, transparent 100%)',
            borderRadius: '50%',
            filter: 'blur(300px)',
          }}
        />
      </div>
    </>
  );
} 