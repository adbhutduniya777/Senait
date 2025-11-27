import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ filter: 'drop-shadow(0 0 15px rgba(30, 136, 255, 0.4))' }}
  >
    <defs>
      <linearGradient id="logo_grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0FF2F2" /> {/* Cyber Cyan */}
        <stop offset="50%" stopColor="#1E88FF" /> {/* Electric Blue */}
        <stop offset="100%" stopColor="#0A0F1F" /> {/* Deep Navy */}
      </linearGradient>
      
      <linearGradient id="bezel_grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
        <stop offset="50%" stopColor="#ffffff" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.5" />
      </linearGradient>
    </defs>

    {/* Main Shield Body */}
    <path
      d="M50 94C50 94 90 82 90 48V18L50 6L10 18V48C10 82 50 94 50 94Z"
      fill="url(#logo_grad)"
      fillOpacity="0.2"
      stroke="url(#logo_grad)"
      strokeWidth="3"
    />

    {/* Bezel Highlight (Glossy effect) */}
    <path
      d="M50 94C50 94 90 82 90 48V18L50 6L10 18V48C10 82 50 94 50 94Z"
      stroke="url(#bezel_grad)"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
      opacity="0.8"
    />

    {/* Circuit Lines */}
    <g transform="translate(0, 5)">
      {/* Center Line */}
      <path
        d="M50 30V60" 
        stroke="#0FF2F2"
        strokeWidth="3"
        strokeLinecap="round"
        filter="drop-shadow(0 0 3px #0FF2F2)"
      />
      <circle cx="50" cy="30" r="4.5" fill="#1E88FF" stroke="#fff" strokeWidth="1.5" />
      
      {/* Left Branch */}
      <path
        d="M32 36V50L45 58"
        stroke="#0FF2F2"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        filter="drop-shadow(0 0 3px #0FF2F2)"
      />
      <circle cx="32" cy="36" r="4.5" fill="#1E88FF" stroke="#fff" strokeWidth="1.5" />

      {/* Right Branch */}
      <path
        d="M68 36V50L55 58"
        stroke="#0FF2F2"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        filter="drop-shadow(0 0 3px #0FF2F2)"
      />
      <circle cx="68" cy="36" r="4.5" fill="#1E88FF" stroke="#fff" strokeWidth="1.5" />

      {/* Central Hub Connection */}
      <path 
        d="M45 58L50 60L55 58" 
        stroke="#0FF2F2" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none"
      />
    </g>
  </svg>
);