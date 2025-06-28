
import React from 'react';

const LeakedCredentialsIcon = () => {
  return (
    <div className="animate-float" style={{ animationDelay: '2s' }}>
      <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.7">
          {/* Lock body */}
          <rect 
            x="20" y="35" 
            width="25" height="20" 
            rx="3" 
            stroke="url(#leak-gradient)" 
            strokeWidth="2" 
            fill="rgba(245, 101, 101, 0.1)"
          />
          {/* Broken lock shackle */}
          <path 
            d="M25 35 C25 28 30 23 32.5 23 C35 23 40 28 40 35" 
            stroke="url(#leak-gradient)" 
            strokeWidth="2" 
            fill="none"
          />
          {/* Break in shackle */}
          <circle cx="37" cy="29" r="2" fill="none" stroke="#ef4444" strokeWidth="2" />
          {/* Leaked data drops */}
          <g className="animate-pulse">
            <circle cx="32" cy="52" r="1.5" fill="#06b6d4" opacity="0.8" />
            <circle cx="28" cy="56" r="1" fill="#06b6d4" opacity="0.6" />
            <circle cx="36" cy="58" r="1.2" fill="#06b6d4" opacity="0.7" />
            <circle cx="40" cy="54" r="0.8" fill="#06b6d4" opacity="0.5" />
          </g>
          {/* Key hole */}
          <circle cx="32.5" cy="42" r="2" fill="none" stroke="url(#leak-gradient)" strokeWidth="1.5" />
          <path d="M32.5 44 L32.5 47" stroke="url(#leak-gradient)" strokeWidth="1.5" />
        </g>
        <defs>
          <linearGradient id="leak-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default LeakedCredentialsIcon;
