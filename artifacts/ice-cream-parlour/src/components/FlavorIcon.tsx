import type { ReactElement } from "react";

type FlavorIconProps = {
  flavorId: string;
  className?: string;
};

const icons: Record<string, ReactElement> = {
  "1": (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bg1" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#ff8fa3" />
          <stop offset="100%" stopColor="#c9184a" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="38" fill="url(#bg1)" />
      <ellipse cx="28" cy="24" rx="9" ry="7" fill="white" opacity="0.25" />
      <path d="M40 20 C30 20 22 28 22 38 C22 50 30 58 40 62 C50 58 58 50 58 38 C58 28 50 20 40 20Z" fill="#ff4d6d" opacity="0.9" />
      <path d="M40 20 C36 16 32 18 33 22 C34 26 40 25 40 20Z" fill="#52b788" />
      <circle cx="34" cy="36" r="2" fill="white" opacity="0.7" />
      <circle cx="44" cy="34" r="1.5" fill="white" opacity="0.7" />
      <circle cx="38" cy="44" r="1.5" fill="white" opacity="0.7" />
      <circle cx="30" cy="44" r="1.5" fill="white" opacity="0.7" />
      <circle cx="48" cy="44" r="1.5" fill="white" opacity="0.7" />
      <ellipse cx="30" cy="28" rx="8" ry="5" fill="white" opacity="0.15" transform="rotate(-20 30 28)" />
    </svg>
  ),
  "2": (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bg2" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#74c69d" />
          <stop offset="100%" stopColor="#1b4332" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="38" fill="url(#bg2)" />
      <ellipse cx="28" cy="24" rx="9" ry="7" fill="white" opacity="0.2" />
      <path d="M40 58 C40 58 20 46 20 32 C20 24 28 18 36 22 C38 23 39 25 40 27 C41 25 42 23 44 22 C52 18 60 24 60 32 C60 46 40 58 40 58Z" fill="#40916c" opacity="0.9" />
      <circle cx="34" cy="38" r="3.5" fill="#1b4d3e" opacity="0.85" />
      <circle cx="44" cy="36" r="3" fill="#1b4d3e" opacity="0.85" />
      <circle cx="40" cy="46" r="3" fill="#1b4d3e" opacity="0.85" />
      <circle cx="30" cy="46" r="3" fill="#1b4d3e" opacity="0.85" />
      <circle cx="50" cy="44" r="3" fill="#1b4d3e" opacity="0.85" />
      <ellipse cx="29" cy="26" rx="8" ry="5" fill="white" opacity="0.15" transform="rotate(-25 29 26)" />
    </svg>
  ),
  "3": (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bg3" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#ffca3a" />
          <stop offset="100%" stopColor="#d4780a" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="38" fill="url(#bg3)" />
      <ellipse cx="28" cy="24" rx="9" ry="7" fill="white" opacity="0.22" />
      <path d="M26 42 C24 34 28 22 38 20 C46 19 56 26 56 36 C56 48 46 60 40 62 C34 60 28 52 26 42Z" fill="#f4a72a" opacity="0.9" />
      <path d="M38 20 C41 14 46 15 45 19" stroke="#52b788" strokeWidth="3" strokeLinecap="round" fill="none" />
      <ellipse cx="35" cy="35" rx="6" ry="4" fill="white" opacity="0.3" transform="rotate(-15 35 35)" />
      <ellipse cx="29" cy="27" rx="7" ry="5" fill="white" opacity="0.15" transform="rotate(-25 29 27)" />
    </svg>
  ),
  "4": (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bg4" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#c77dff" />
          <stop offset="100%" stopColor="#5a189a" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="38" fill="url(#bg4)" />
      <ellipse cx="28" cy="24" rx="9" ry="7" fill="white" opacity="0.2" />
      <circle cx="40" cy="40" r="6" fill="#e040fb" opacity="0.9" />
      {[0,60,120,180,240,300].map((angle, i) => (
        <ellipse
          key={i}
          cx={40 + 14 * Math.cos((angle * Math.PI) / 180)}
          cy={40 + 14 * Math.sin((angle * Math.PI) / 180)}
          rx="6"
          ry="8"
          fill="#9d4edd"
          opacity="0.85"
          transform={`rotate(${angle} ${40 + 14 * Math.cos((angle * Math.PI) / 180)} ${40 + 14 * Math.sin((angle * Math.PI) / 180)})`}
        />
      ))}
      <ellipse cx="30" cy="27" rx="8" ry="5" fill="white" opacity="0.15" transform="rotate(-20 30 27)" />
    </svg>
  ),
  "5": (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bg5" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#74b9ff" />
          <stop offset="100%" stopColor="#2d3561" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="38" fill="url(#bg5)" />
      <ellipse cx="28" cy="24" rx="9" ry="7" fill="white" opacity="0.22" />
      <circle cx="40" cy="40" r="18" fill="#4a90d9" opacity="0.85" />
      <circle cx="33" cy="35" r="4" fill="#2c3e7a" opacity="0.8" />
      <circle cx="48" cy="37" r="5" fill="#2c3e7a" opacity="0.8" />
      <circle cx="38" cy="47" r="4.5" fill="#2c3e7a" opacity="0.8" />
      <circle cx="28" cy="44" r="3" fill="#2c3e7a" opacity="0.8" />
      <circle cx="50" cy="48" r="3.5" fill="#2c3e7a" opacity="0.8" />
      <ellipse cx="29" cy="27" rx="7" ry="4" fill="white" opacity="0.18" transform="rotate(-20 29 27)" />
    </svg>
  ),
  "6": (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bg6" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#ffb347" />
          <stop offset="100%" stopColor="#8b4513" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="38" fill="url(#bg6)" />
      <ellipse cx="28" cy="24" rx="9" ry="7" fill="white" opacity="0.22" />
      <path d="M40 22 C40 22 54 30 54 42 C54 52 48 60 40 60 C32 60 26 52 26 42 C26 30 40 22 40 22Z" fill="#d4870f" opacity="0.85" />
      <path d="M40 28 Q48 34 48 42 Q48 50 40 54 Q32 50 32 42 Q32 34 40 28Z" fill="#ffd280" opacity="0.5" />
      <circle cx="36" cy="42" r="2" fill="white" opacity="0.6" />
      <circle cx="44" cy="38" r="1.5" fill="white" opacity="0.5" />
      <ellipse cx="29" cy="27" rx="7" ry="5" fill="white" opacity="0.18" transform="rotate(-20 29 27)" />
    </svg>
  ),
  "7": (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bg7" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#a8d8a8" />
          <stop offset="100%" stopColor="#5c4a3b" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="38" fill="url(#bg7)" />
      <ellipse cx="28" cy="24" rx="9" ry="7" fill="white" opacity="0.22" />
      <circle cx="40" cy="40" r="7" fill="#f48fb1" opacity="0.9" />
      {[0,45,90,135,180,225,270,315].map((angle, i) => (
        <ellipse
          key={i}
          cx={40 + 12 * Math.cos((angle * Math.PI) / 180)}
          cy={40 + 12 * Math.sin((angle * Math.PI) / 180)}
          rx="5"
          ry="7.5"
          fill={i % 2 === 0 ? "#f48fb1" : "#7cba6d"}
          opacity="0.85"
          transform={`rotate(${angle} ${40 + 12 * Math.cos((angle * Math.PI) / 180)} ${40 + 12 * Math.sin((angle * Math.PI) / 180)})`}
        />
      ))}
      <ellipse cx="29" cy="27" rx="7" ry="5" fill="white" opacity="0.18" transform="rotate(-20 29 27)" />
    </svg>
  ),
  "8": (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bg8" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#6b7280" />
          <stop offset="100%" stopColor="#111827" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="38" fill="url(#bg8)" />
      <ellipse cx="28" cy="24" rx="9" ry="7" fill="white" opacity="0.18" />
      {[32,40,48,36,44,32,40,48,36,44,38,42].map((x, i) => (
        <circle
          key={i}
          cx={x}
          cy={30 + Math.floor(i / 4) * 10 + (i % 2) * 3}
          r="3.5"
          fill="#374151"
          opacity="0.9"
        />
      ))}
      <ellipse cx="29" cy="27" rx="7" ry="4" fill="white" opacity="0.15" transform="rotate(-20 29 27)" />
    </svg>
  ),
  "9": (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bg9" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#86efac" />
          <stop offset="100%" stopColor="#14532d" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="38" fill="url(#bg9)" />
      <ellipse cx="28" cy="24" rx="9" ry="7" fill="white" opacity="0.22" />
      <rect x="28" y="38" width="24" height="18" rx="3" fill="#166534" opacity="0.85" />
      <path d="M28 38 Q40 28 52 38" fill="#15803d" opacity="0.9" />
      <rect x="37" y="56" width="6" height="5" rx="1" fill="#166534" opacity="0.8" />
      <rect x="32" y="60" width="16" height="3" rx="1.5" fill="#166534" opacity="0.7" />
      <path d="M33 43 Q40 35 47 43" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      <ellipse cx="29" cy="27" rx="7" ry="5" fill="white" opacity="0.18" transform="rotate(-20 29 27)" />
    </svg>
  ),
  "10": (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bg10" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="38" fill="url(#bg10)" />
      <ellipse cx="28" cy="24" rx="9" ry="7" fill="white" opacity="0.2" />
      <circle cx="40" cy="44" r="9" fill="#4338ca" opacity="0.9" />
      <circle cx="30" cy="40" r="7" fill="#3730a3" opacity="0.9" />
      <circle cx="50" cy="40" r="7" fill="#3730a3" opacity="0.9" />
      <circle cx="38" cy="33" r="6" fill="#4338ca" opacity="0.9" />
      <circle cx="40" cy="44" r="4" fill="#a5b4fc" opacity="0.35" />
      <circle cx="30" cy="40" r="3" fill="#a5b4fc" opacity="0.3" />
      <circle cx="50" cy="40" r="3" fill="#a5b4fc" opacity="0.3" />
      <ellipse cx="29" cy="27" rx="7" ry="5" fill="white" opacity="0.15" transform="rotate(-20 29 27)" />
    </svg>
  ),
  "11": (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bg11" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#fed7aa" />
          <stop offset="100%" stopColor="#7c2d12" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="38" fill="url(#bg11)" />
      <ellipse cx="28" cy="24" rx="9" ry="7" fill="white" opacity="0.22" />
      <ellipse cx="38" cy="44" rx="12" ry="9" fill="#92400e" opacity="0.9" />
      <ellipse cx="44" cy="38" rx="9" ry="7" fill="#b45309" opacity="0.85" />
      <ellipse cx="36" cy="36" rx="7" ry="5" fill="#d97706" opacity="0.85" />
      <path d="M36 36 L34 28 L38 24" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="38" cy="23" r="3" fill="#b45309" />
      <ellipse cx="30" cy="28" rx="6" ry="4" fill="white" opacity="0.18" transform="rotate(-20 30 28)" />
    </svg>
  ),
  "12": (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bg12" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#fda4af" />
          <stop offset="100%" stopColor="#9f1239" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="38" fill="url(#bg12)" />
      <ellipse cx="28" cy="24" rx="9" ry="7" fill="white" opacity="0.22" />
      <circle cx="40" cy="42" r="10" fill="#fb7185" opacity="0.9" />
      {[0,72,144,216,288].map((angle, i) => (
        <ellipse
          key={i}
          cx={40 + 14 * Math.cos((angle * Math.PI) / 180)}
          cy={42 + 14 * Math.sin((angle * Math.PI) / 180)}
          rx="6"
          ry="8"
          fill="#f43f5e"
          opacity="0.85"
          transform={`rotate(${angle} ${40 + 14 * Math.cos((angle * Math.PI) / 180)} ${42 + 14 * Math.sin((angle * Math.PI) / 180)})`}
        />
      ))}
      <circle cx="40" cy="42" r="4" fill="#fda4af" opacity="0.4" />
      <ellipse cx="29" cy="27" rx="7" ry="5" fill="white" opacity="0.15" transform="rotate(-20 29 27)" />
    </svg>
  ),
};

export default function FlavorIcon({ flavorId, className = "w-16 h-16" }: FlavorIconProps) {
  const icon = icons[flavorId];
  if (!icon) return null;
  return (
    <div className={`${className} drop-shadow-lg`} aria-hidden="true">
      {icon}
    </div>
  );
}
