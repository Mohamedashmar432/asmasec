
import React from 'react';

const AIAttackIcon = () => {
  return (
    <div className="animate-float" style={{ animationDelay: '1s' }}>
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.8">
          {/* AI Brain core */}
          <circle 
            cx="35" cy="35" 
            r="15" 
            stroke="url(#ai-gradient)" 
            strokeWidth="2" 
            fill="rgba(139, 92, 246, 0.1)"
            className="animate-pulse"
          />
          {/* Neural connections */}
          <path 
            d="M25 25 Q35 20 45 25 Q40 35 45 45 Q35 50 25 45 Q30 35 25 25Z" 
            stroke="url(#ai-gradient)" 
            strokeWidth="1.5" 
            fill="none"
            opacity="0.6"
          />
          {/* Attack vectors */}
          <g className="animate-pulse" style={{ animationDelay: '0.5s' }}>
            <line x1="35" y1="20" x2="35" y2="10" stroke="#dc2626" strokeWidth="2" />
            <line x1="50" y1="35" x2="60" y2="35" stroke="#dc2626" strokeWidth="2" />
            <line x1="35" y1="50" x2="35" y2="60" stroke="#dc2626" strokeWidth="2" />
            <line x1="20" y1="35" x2="10" y2="35" stroke="#dc2626" strokeWidth="2" />
          </g>
          {/* Warning symbols */}
          <polygon 
            points="35,28 38,34 32,34" 
            fill="#ef4444"
            className="animate-pulse"
          />
          <circle cx="35" cy="38" r="1.5" fill="#ef4444" />
        </g>
        <defs>
          <linearGradient id="ai-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default AIAttackIcon;
