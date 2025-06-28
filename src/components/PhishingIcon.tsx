
import React from 'react';

const PhishingIcon = () => {
  return (
    <div className="animate-float">
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.7">
          {/* Hook */}
          <path 
            d="M20 15 C20 15 25 10 35 15 C45 20 40 30 30 30 C25 30 20 25 20 25" 
            stroke="url(#phishing-gradient)" 
            strokeWidth="2" 
            fill="none"
            className="animate-pulse"
          />
          {/* Line */}
          <line 
            x1="30" y1="30" 
            x2="30" y2="45" 
            stroke="url(#phishing-gradient)" 
            strokeWidth="2"
            className="animate-pulse"
          />
          {/* Email envelope */}
          <rect 
            x="10" y="35" 
            width="20" height="15" 
            rx="2" 
            stroke="url(#phishing-gradient)" 
            strokeWidth="1.5" 
            fill="rgba(239, 68, 68, 0.1)"
          />
          <path 
            d="M10 38 L20 43 L30 38" 
            stroke="url(#phishing-gradient)" 
            strokeWidth="1.5" 
            fill="none"
          />
        </g>
        <defs>
          <linearGradient id="phishing-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default PhishingIcon;
