import React from 'react';

export const Generic = ({ color = "#DAD9D9", className = "" }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect 
        x="3" 
        y="3" 
        width="18" 
        height="18" 
        rx="2" 
        stroke={color} 
        strokeWidth="2" 
        fill="none"
      />
      <path 
        d="M9 9h6v6H9z" 
        fill={color}
      />
    </svg>
  );
};
