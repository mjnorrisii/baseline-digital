import React from 'react';

const Logo = ({ className = "h-8 w-auto", showText = true }: { className?: string, showText?: boolean }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* 
        This is the original logo file with its background removed 
        using a transparency script to perfectly match the theme.
      */}
      <img 
        src="/logo-transparent.png" 
        alt="Baseline Digital Logo" 
        className="h-full w-auto object-contain"
      />
    </div>
  );
};

export default Logo;
