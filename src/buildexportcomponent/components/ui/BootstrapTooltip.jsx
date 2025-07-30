import React, { useState } from 'react';

export const BootstrapTooltip = ({ title, placement = 'top', children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div 
          className={`absolute z-50 px-2 py-1 text-xs text-white bg-gray-900 rounded shadow-lg whitespace-nowrap
            ${placement === 'top' ? 'bottom-full left-1/2 transform -translate-x-1/2 mb-2' : ''}
            ${placement === 'bottom' ? 'top-full left-1/2 transform -translate-x-1/2 mt-2' : ''}
            ${placement === 'left' ? 'right-full top-1/2 transform -translate-y-1/2 mr-2' : ''}
            ${placement === 'right' ? 'left-full top-1/2 transform -translate-y-1/2 ml-2' : ''}
          `}
        >
          {title}
          <div 
            className={`absolute w-0 h-0 border-solid
              ${placement === 'top' ? 'top-full left-1/2 transform -translate-x-1/2 border-t-gray-900 border-t-4 border-x-transparent border-x-4 border-b-0' : ''}
              ${placement === 'bottom' ? 'bottom-full left-1/2 transform -translate-x-1/2 border-b-gray-900 border-b-4 border-x-transparent border-x-4 border-t-0' : ''}
              ${placement === 'left' ? 'left-full top-1/2 transform -translate-y-1/2 border-l-gray-900 border-l-4 border-y-transparent border-y-4 border-r-0' : ''}
              ${placement === 'right' ? 'right-full top-1/2 transform -translate-y-1/2 border-r-gray-900 border-r-4 border-y-transparent border-y-4 border-l-0' : ''}
            `}
          />
        </div>
      )}
    </div>
  );
};
