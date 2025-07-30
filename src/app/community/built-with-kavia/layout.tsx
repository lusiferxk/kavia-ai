import React from 'react';

export default function BuiltWithKaviaCommunityLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#231F20] min-h-screen">
      {children}
    </div>
  );
} 