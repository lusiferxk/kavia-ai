import React from 'react';

// Simple tooltip component placeholder
export const BootstrapTooltip = ({ children, title, placement = "top" }) => {
  return (
    <div className="relative group">
      {children}
      <div className={`absolute z-50 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none
        ${placement === 'top' ? 'bottom-full mb-1 left-1/2 transform -translate-x-1/2' : ''}
        ${placement === 'bottom' ? 'top-full mt-1 left-1/2 transform -translate-x-1/2' : ''}
        ${placement === 'left' ? 'right-full mr-1 top-1/2 transform -translate-y-1/2' : ''}
        ${placement === 'right' ? 'left-full ml-1 top-1/2 transform -translate-y-1/2' : ''}
      `}>
        {title}
      </div>
    </div>
  );
};
