
import React from 'react';

const FloatingBrain = () => {
  return (
    <div className="absolute bottom-1/3 left-1/6 animate-float animate-pulse-glow" style={{ animationDelay: '3s' }}>
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="brain-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
          <filter id="brain-glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Brain outline */}
        <path 
          d="M30 35 C25 25 35 15 45 20 C50 15 60 15 65 20 C75 15 85 25 80 35 C85 40 85 50 80 55 C85 65 75 75 65 70 C60 75 50 75 45 70 C35 75 25 65 30 55 C25 50 25 40 30 35 Z"
          stroke="url(#brain-gradient)"
          strokeWidth="2"
          fill="rgba(139, 92, 246, 0.1)"
          filter="url(#brain-glow)"
          opacity="0.8"
        />
        
        {/* Neural pathways */}
        <g opacity="0.6" className="animate-pulse">
          <path d="M35 40 Q50 35 65 40" stroke="url(#brain-gradient)" strokeWidth="1" fill="none" />
          <path d="M35 50 Q50 45 65 50" stroke="url(#brain-gradient)" strokeWidth="1" fill="none" />
          <path d="M40 45 Q50 55 60 45" stroke="url(#brain-gradient)" strokeWidth="1" fill="none" />
        </g>
        
        {/* Neural nodes */}
        <g className="animate-pulse" style={{ animationDelay: '1s' }}>
          <circle cx="40" cy="40" r="2" fill="url(#brain-gradient)" opacity="0.8" />
          <circle cx="60" cy="40" r="2" fill="url(#brain-gradient)" opacity="0.8" />
          <circle cx="50" cy="50" r="2" fill="url(#brain-gradient)" opacity="0.8" />
          <circle cx="45" cy="60" r="2" fill="url(#brain-gradient)" opacity="0.8" />
          <circle cx="55" cy="60" r="2" fill="url(#brain-gradient)" opacity="0.8" />
        </g>
        
        {/* AI indicator */}
        <text x="50" y="85" textAnchor="middle" fill="url(#brain-gradient)" fontSize="10" opacity="0.7">AI</text>
      </svg>
    </div>
  );
};

export default FloatingBrain;
