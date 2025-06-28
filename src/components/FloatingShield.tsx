
import React from 'react';

const FloatingShield = () => {
  return (
    <div className="absolute top-1/4 right-1/4 animate-float animate-pulse-glow">
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="shield-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00bfff" />
            <stop offset="50%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Main shield */}
        <path 
          d="M60 10 C45 15 30 15 15 20 C15 35 15 50 15 65 C15 85 35 105 60 110 C85 105 105 85 105 65 C105 50 105 35 105 20 C90 15 75 15 60 10 Z"
          fill="url(#shield-gradient)"
          opacity="0.2"
          filter="url(#glow)"
        />
        
        {/* Shield outline */}
        <path 
          d="M60 10 C45 15 30 15 15 20 C15 35 15 50 15 65 C15 85 35 105 60 110 C85 105 105 85 105 65 C105 50 105 35 105 20 C90 15 75 15 60 10 Z"
          stroke="url(#shield-gradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.8"
        />
        
        {/* Inner protection symbol */}
        <circle 
          cx="60" cy="50" 
          r="20" 
          stroke="url(#shield-gradient)" 
          strokeWidth="2" 
          fill="none"
          opacity="0.6"
        />
        
        {/* AI protection indicator */}
        <polygon 
          points="60,40 65,50 60,60 55,50" 
          fill="url(#shield-gradient)"
          opacity="0.8"
        />
      </svg>
    </div>
  );
};

export default FloatingShield;
