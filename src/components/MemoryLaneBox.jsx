import React from 'react';
import { motion } from 'framer-motion';

// SVG Daisy Flower Component
const Daisy = ({ style }) => (
  <svg
    viewBox="0 0 100 100"
    style={{
      position: 'absolute',
      width: '46px',
      height: '46px',
      zIndex: 15,
      filter: 'drop-shadow(0 2px 5px rgba(49, 68, 74, 0.1))',
      ...style
    }}
  >
    {/* Petals */}
    {Array.from({ length: 12 }).map((_, i) => {
      const angle = (i * 30 * Math.PI) / 180;
      const x = 50 + Math.cos(angle) * 22;
      const y = 50 + Math.sin(angle) * 22;
      return (
        <ellipse
          key={i}
          cx={x}
          cy={y}
          rx="8"
          ry="20"
          transform={`rotate(${i * 30 + 90}, ${x}, ${y})`}
          fill="#FFFFFF"
          stroke="#E9EEF0"
          strokeWidth="0.5"
        />
      );
    })}
    {/* Golden center */}
    <circle cx="50" cy="50" r="14" fill="#EAD575" stroke="#D1B849" strokeWidth="0.5" />
    <circle cx="48" cy="48" r="11" fill="#FFEAA0" opacity="0.6" />
  </svg>
);

// SVG Forget-Me-Not Flower Component
const ForgetMeNot = ({ style }) => (
  <svg
    viewBox="0 0 100 100"
    style={{
      position: 'absolute',
      width: '32px',
      height: '32px',
      zIndex: 15,
      filter: 'drop-shadow(0 2px 4px rgba(49, 68, 74, 0.08))',
      ...style
    }}
  >
    {/* 5 Petals - Soft Mint Blue */}
    {Array.from({ length: 5 }).map((_, i) => {
      const angle = (i * 72 * Math.PI) / 180;
      const x = 50 + Math.cos(angle) * 18;
      const y = 50 + Math.sin(angle) * 18;
      return (
        <circle
          key={i}
          cx={x}
          cy={y}
          r="16"
          fill="#8BC7C7"
          stroke="#6FB8B8"
          strokeWidth="0.5"
        />
      );
    })}
    {/* Center */}
    <circle cx="50" cy="50" r="8" fill="#FFEAA0" stroke="#EAD575" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="3.5" fill="#FFFFFF" />
  </svg>
);

// SVG Baby's Breath Branch Component
const BabysBreathBranch = ({ style }) => (
  <svg
    viewBox="0 0 100 120"
    style={{
      position: 'absolute',
      width: '65px',
      height: '78px',
      zIndex: 8,
      pointerEvents: 'none',
      filter: 'drop-shadow(0 2px 4px rgba(49, 68, 74, 0.05))',
      ...style
    }}
  >
    {/* Stems */}
    <path d="M50 110 C48 80 30 60 20 40" stroke="#BFD8D2" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M50 110 C52 75 70 55 80 35" stroke="#BFD8D2" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M50 110 C50 60 55 45 60 20" stroke="#BFD8D2" strokeWidth="1.2" strokeLinecap="round" fill="none" />

    <path d="M35 70 C28 60 25 55 15 50" stroke="#BFD8D2" strokeWidth="1" fill="none" />
    <path d="M62 70 C70 60 75 55 85 50" stroke="#BFD8D2" strokeWidth="1" fill="none" />

    {/* White buds */}
    <circle cx="20" cy="40" r="3.5" fill="#FFFFFF" stroke="#E9EEF0" strokeWidth="0.5" />
    <circle cx="20" cy="40" r="1" fill="#FFEAA0" />
    <circle cx="80" cy="35" r="3.5" fill="#FFFFFF" stroke="#E9EEF0" strokeWidth="0.5" />
    <circle cx="80" cy="35" r="1" fill="#FFEAA0" />
    <circle cx="60" cy="20" r="3.5" fill="#FFFFFF" stroke="#E9EEF0" strokeWidth="0.5" />
    <circle cx="60" cy="20" r="1" fill="#FFEAA0" />
    <circle cx="15" cy="50" r="3" fill="#FFFFFF" />
    <circle cx="85" cy="50" r="3" fill="#FFFFFF" />
    <circle cx="38" cy="55" r="3" fill="#FFFFFF" stroke="#E9EEF0" strokeWidth="0.5" />
  </svg>
);

// Teddy Bear Sticker SVG Component
const TeddyBearSticker = ({ style }) => (
  <svg
    viewBox="0 0 100 100"
    style={{
      position: 'absolute',
      width: '58px',
      height: '58px',
      zIndex: 12,
      filter: 'drop-shadow(0 3px 6px rgba(49, 68, 74, 0.12))',
      ...style
    }}
  >
    {/* Sticker die-cut backing */}
    <rect x="12" y="12" width="76" height="76" rx="38" fill="#FFFFFF" stroke="#CFE8E1" strokeWidth="1.5" />
    {/* Teddy Body */}
    <circle cx="50" cy="64" r="20" fill="#BFD8D2" />
    {/* Teddy Head */}
    <circle cx="50" cy="41" r="15" fill="#BFD8D2" />
    {/* Ears */}
    <circle cx="37" cy="29" r="6" fill="#BFD8D2" />
    <circle cx="37" cy="29" r="3.2" fill="#CFE8E1" />
    <circle cx="63" cy="29" r="6" fill="#BFD8D2" />
    <circle cx="63" cy="29" r="3.2" fill="#CFE8E1" />
    {/* Snout */}
    <ellipse cx="50" cy="44" rx="5" ry="4" fill="#FFFFFF" />
    <polygon points="48,42 52,42 50,44" fill="#31444A" />
    {/* Eyes */}
    <circle cx="44" cy="38" r="1.5" fill="#31444A" />
    <circle cx="56" cy="38" r="1.5" fill="#31444A" />
    {/* Blush */}
    <circle cx="39" cy="42" r="1.8" fill="#FFC8C8" />
    <circle cx="61" cy="42" r="1.8" fill="#FFC8C8" />
    {/* Belly details */}
    <circle cx="50" cy="64" r="12" fill="#E8F2EF" />
    {/* Arms */}
    <circle cx="28" cy="60" r="5" fill="#BFD8D2" />
    <circle cx="72" cy="60" r="5" fill="#BFD8D2" />
    {/* Feet */}
    <circle cx="38" cy="80" r="6.2" fill="#BFD8D2" />
    <circle cx="62" cy="80" r="6.2" fill="#BFD8D2" />
  </svg>
);

// Bunny Sticker SVG Component
const BunnySticker = ({ style }) => (
  <svg
    viewBox="0 0 100 100"
    style={{
      position: 'absolute',
      width: '56px',
      height: '56px',
      zIndex: 12,
      filter: 'drop-shadow(0 3px 6px rgba(49, 68, 74, 0.12))',
      ...style
    }}
  >
    {/* Sticker die-cut backing */}
    <rect x="14" y="10" width="72" height="80" rx="36" fill="#FFFFFF" stroke="#CFE8E1" strokeWidth="1.5" />
    {/* Bunny Head */}
    <circle cx="50" cy="56" r="18" fill="#E9EEF0" />
    {/* Ears */}
    <ellipse cx="41" cy="31" rx="5" ry="14" transform="rotate(-12, 41, 31)" fill="#E9EEF0" />
    <ellipse cx="41" cy="33" rx="2.5" ry="10" transform="rotate(-12, 41, 33)" fill="#CFE8E1" />
    <ellipse cx="59" cy="31" rx="5" ry="14" transform="rotate(12, 59, 31)" fill="#E9EEF0" />
    <ellipse cx="59" cy="33" rx="2.5" ry="10" transform="rotate(12, 59, 33)" fill="#CFE8E1" />
    {/* Eyes */}
    <circle cx="43" cy="53" r="1.5" fill="#31444A" />
    <circle cx="57" cy="53" r="1.5" fill="#31444A" />
    {/* Mouth */}
    <path d="M 50 57 L 50 59 Q 48.5 60 47.5 59 M 50 59 Q 51.5 60 52.5 59" stroke="#31444A" strokeWidth="1.2" fill="none" />
    <polygon points="48.5,56 51.5,56 50,57.5" fill="#6FB8B8" />
    {/* Blush */}
    <ellipse cx="37" cy="56" rx="3" ry="1.8" fill="#FFC2C2" />
    <ellipse cx="63" cy="56" rx="3" ry="1.8" fill="#FFC2C2" />
    {/* Paws */}
    <circle cx="41" cy="71" r="4.5" fill="#E9EEF0" />
    <circle cx="59" cy="71" r="4.5" fill="#E9EEF0" />
  </svg>
);

// Macarons Sticker SVG Component
const MacaronsSticker = ({ style }) => (
  <svg
    viewBox="0 0 100 100"
    style={{
      position: 'absolute',
      width: '54px',
      height: '54px',
      zIndex: 12,
      filter: 'drop-shadow(0 3px 6px rgba(49, 68, 74, 0.12))',
      ...style
    }}
  >
    {/* Sticker die-cut backing */}
    <rect x="12" y="16" width="76" height="68" rx="16" fill="#FFFFFF" stroke="#CFE8E1" strokeWidth="1.5" />
    {/* Macaron 1 (Mint green) */}
    <path d="M30 36 C30 28, 70 28, 70 36 L70 38 C70 40, 30 40, 30 38 Z" fill="#CFE8E1" stroke="#BFD8D2" strokeWidth="0.5" />
    <rect x="30" y="38" width="40" height="4" rx="2" fill="#E8F2EF" />
    <path d="M30 42 C30 44, 70 44, 70 42 L70 44 C70 52, 30 52, 30 44 Z" fill="#CFE8E1" stroke="#BFD8D2" strokeWidth="0.5" />

    {/* Macaron 2 (Soft Blue-green, stacked askew) */}
    <g transform="rotate(-15, 50, 58)">
      <path d="M32 50 C32 44, 68 44, 68 50 L68 52 C68 54, 32 54, 32 52 Z" fill="#8BC7C7" stroke="#6FB8B8" strokeWidth="0.5" />
      <rect x="32" y="52" width="36" height="4" rx="2" fill="#FFFFFF" />
      <path d="M32 56 C32 58, 68 58, 68 56 L68 58 C68 64, 32 64, 32 58 Z" fill="#8BC7C7" stroke="#6FB8B8" strokeWidth="0.5" />
    </g>
  </svg>
);

// Hanging Charm Component (Pearl and Heart)
const HangingCharm = ({ style }) => (
  <svg
    viewBox="0 0 60 120"
    style={{
      position: 'absolute',
      width: '32px',
      height: '64px',
      zIndex: 12,
      transformOrigin: 'top center',
      animation: 'swingingCharm 3s ease-in-out infinite alternate',
      ...style
    }}
  >
    {/* Chain/String */}
    <line x1="30" y1="0" x2="30" y2="70" stroke="#B0D5D5" strokeWidth="1.2" strokeDasharray="3,3" />
    <circle cx="30" cy="18" r="1.8" fill="#EAD575" />
    <circle cx="30" cy="38" r="1.8" fill="#EAD575" />
    <circle cx="30" cy="58" r="1.8" fill="#EAD575" />
    {/* Pearl bead */}
    <circle cx="30" cy="72" r="5" fill="#FFFFFF" stroke="#E9EEF0" strokeWidth="0.5" />
    <circle cx="28.5" cy="70" r="1.5" fill="#FFFFFF" opacity="0.8" />
    <line x1="30" y1="77" x2="30" y2="84" stroke="#B0D5D5" strokeWidth="1" />
    {/* Pearl Heart */}
    <path d="M30 86 C27 82 22 83 22 88 C22 94 30 100 30 100 C30 100 38 94 38 88 C38 83 33 82 30 86 Z" fill="#FFE8E8" stroke="#FFFFFF" strokeWidth="1" />
    <circle cx="25" cy="87" r="1" fill="#FFFFFF" />
  </svg>
);

// Ribbon Bow Component
const MiniBowSticker = ({ style }) => (
  <svg
    viewBox="0 0 60 40"
    style={{
      position: 'absolute',
      width: '45px',
      height: '30px',
      zIndex: 11,
      filter: 'drop-shadow(0 2px 4px rgba(49, 68, 74, 0.1))',
      ...style
    }}
  >
    <path d="M30 20 C18 6 6 8 6 18 C6 28 18 24 30 20" fill="rgba(207, 232, 225, 0.95)" stroke="var(--mint-blue)" strokeWidth="1" />
    <path d="M30 20 C42 6 54 8 54 18 C54 28 42 24 30 20" fill="rgba(207, 232, 225, 0.95)" stroke="var(--mint-blue)" strokeWidth="1" />
    <path d="M30 20 C27 28 18 36 10 38" fill="none" stroke="rgba(207, 232, 225, 0.95)" strokeWidth="3.2" strokeLinecap="round" />
    <path d="M30 20 C33 28 42 36 50 38" fill="none" stroke="rgba(207, 232, 225, 0.95)" strokeWidth="3.2" strokeLinecap="round" />
    <circle cx="30" cy="20" r="4.5" fill="#FFFFFF" stroke="var(--mint-blue)" strokeWidth="1" />
    <circle cx="30" cy="20" r="1.5" fill="#FFEAA0" />
  </svg>
);

// Mini Envelope Sticker Component
const MiniEnvelopeSticker = ({ style }) => (
  <svg
    viewBox="0 0 60 50"
    style={{
      position: 'absolute',
      width: '44px',
      height: '37px',
      zIndex: 12,
      filter: 'drop-shadow(0 3px 6px rgba(49, 68, 74, 0.1))',
      ...style
    }}
  >
    <rect x="2" y="2" width="56" height="46" rx="6" fill="#FFFFFF" stroke="#CFE8E1" strokeWidth="1.5" />
    <rect x="6" y="10" width="48" height="30" rx="3" fill="#E8F2EF" stroke="#BFD8D2" strokeWidth="1" />
    <path d="M6 10 L30 26 L54 10" fill="none" stroke="#BFD8D2" strokeWidth="1" />
    <path d="M6 40 L22 26" stroke="#BFD8D2" strokeWidth="0.8" />
    <path d="M54 40 L38 26" stroke="#BFD8D2" strokeWidth="0.8" />
    <path d="M30 22 C29 20 27 20 27 22 C27 25 30 27 30 27 C30 27 33 25 33 22 C33 20 31 20 30 22 Z" fill="#6FB8B8" />
  </svg>
);

// Washi Tape Component
const WashiTape = ({ style }) => (
  <div
    className="washi-tape-sticker"
    style={{
      position: 'absolute',
      width: '85px',
      height: '24px',
      backgroundColor: 'rgba(207, 232, 225, 0.8)',
      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(111, 184, 184, 0.2) 4px, rgba(111, 184, 184, 0.2) 8px)',
      borderLeft: '1.8px dashed rgba(255,255,255,0.6)',
      borderRight: '1.8px dashed rgba(255,255,255,0.6)',
      boxShadow: '0 1.5px 3px rgba(49, 68, 74, 0.04)',
      backdropFilter: 'blur(1px)',
      zIndex: 10,
      ...style
    }}
  />
);

// Pearl String Component
const PearlString = ({ style }) => (
  <svg
    viewBox="0 0 100 20"
    style={{
      position: 'absolute',
      width: '105px',
      height: '21px',
      zIndex: 12,
      pointerEvents: 'none',
      ...style
    }}
  >
    <path d="M 10 5 Q 50 18 90 5" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" />
    {Array.from({ length: 9 }).map((_, i) => {
      const t = (i + 1) / 10;
      const x = (1 - t) * (1 - t) * 10 + 2 * (1 - t) * t * 50 + t * t * 90;
      const y = (1 - t) * (1 - t) * 5 + 2 * (1 - t) * t * 18 + t * t * 5;
      return (
        <g key={i} transform={`translate(${x}, ${y})`}>
          <circle cx="0" cy="0" r="2.8" fill="url(#pearl-grad-small)" />
          <circle cx="-1.2" cy="-1.2" r="0.8" fill="#FFFFFF" opacity="0.8" />
        </g>
      );
    })}
    <defs>
      <radialGradient id="pearl-grad-small" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="60%" stopColor="#E9EEF0" />
        <stop offset="100%" stopColor="#BFD8D2" />
      </radialGradient>
    </defs>
  </svg>
);

// 3D Flapping Butterfly Component
const FlappingButterfly = ({ style, delay = '0s' }) => (
  <div className="flapping-butterfly-wrapper" style={{ ...style }}>
    <div className="butterfly-body-container" style={{ animationDelay: delay }}>
      <div className="wing left" style={{ animationDelay: delay }}></div>
      <div className="wing right" style={{ animationDelay: delay }}></div>
      <div className="butterfly-center"></div>
    </div>
  </div>
);

// 3D Pearl Pin / Accent Bead
const PearlAccent = ({ style }) => (
  <div
    className="pearl-accent"
    style={{
      position: 'absolute',
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: 'radial-gradient(circle at 2.5px 2.5px, #FFFFFF 0%, #E9EEF0 60%, #BFD8D2 100%)',
      boxShadow: '1px 1px 2px rgba(49, 68, 74, 0.2), inset -0.8px -0.8px 1.5px rgba(0,0,0,0.08)',
      zIndex: 15,
      ...style
    }}
  />
);

// Cute hand-drawn arrow icon
const CuteArrow = () => (
  <svg viewBox="0 0 40 40" className="cute-arrow-svg">
    <path
      d="M20 5 C22 15 25 25 20 35 M12 27 C16 30 20 35 20 35 C20 35 24 30 28 27"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Floating Scrapbook Background Particles
const ScrapbookParticles = () => {
  const particles = React.useMemo(() => {
    return Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 12 + 6,
      delay: Math.random() * -15,
      duration: Math.random() * 8 + 8,
      type: ['sparkle', 'heart', 'star', 'dot'][i % 4],
    }));
  }, []);

  return (
    <div className="scrapbook-particles-container">
      {particles.map((p) => {
        let content;
        if (p.type === 'sparkle') {
          content = (
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '100%', height: '100%', color: 'var(--mint-blue)', opacity: 0.55 }}>
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
          );
        } else if (p.type === 'heart') {
          content = (
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '100%', height: '100%', color: '#FFAFAF', opacity: 0.5 }}>
              <path d="M12 21 C12 21 3 13.5 3 8.5 C3 5.5 5.5 3 8.5 3 C10.5 3 11.5 4.5 12 5 C12.5 4.5 13.5 3 15.5 3 C18.5 3 21 5.5 21 8.5 C21 13.5 12 21 12 21 Z" />
            </svg>
          );
        } else if (p.type === 'star') {
          content = (
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '100%', height: '100%', color: '#FFE169', opacity: 0.65 }}>
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          );
        } else {
          content = (
            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(255,255,255,0.75)', filter: 'blur(1px)' }} />
          );
        }

        return (
          <div
            key={p.id}
            className="scrapbook-particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animation: `floatUp ${p.duration}s linear infinite`,
              animationDelay: `${p.delay}s`,
            }}
          >
            {content}
          </div>
        );
      })}
    </div>
  );
};

// Flowy satin ribbon tail wrapping around
const FlowingRibbon = ({ style }) => (
  <svg
    viewBox="0 0 400 100"
    style={{
      position: 'absolute',
      width: '420px',
      height: '105px',
      zIndex: -2,
      pointerEvents: 'none',
      filter: 'drop-shadow(0 4px 8px rgba(49, 68, 74, 0.08))',
      ...style
    }}
  >
    <path
      d="M10 60 C80 35 180 115 280 55 C330 25 365 40 390 60"
      fill="none"
      stroke="rgba(207, 232, 225, 0.55)"
      strokeWidth="24"
      strokeLinecap="round"
    />
    <path
      d="M10 60 C80 35 180 115 280 55 C330 25 365 40 390 60"
      fill="none"
      stroke="rgba(111, 184, 184, 0.2)"
      strokeWidth="25"
      strokeLinecap="round"
      strokeDasharray="1 16"
    />
  </svg>
);

export default function MemoryLaneBox({ onBack, onComplete }) {
  const memories = [
    {
      id: '01',
      title: 'Pachakkili',
      subtitle: 'My green forest ☘️',
      image: '/images/m2.jpeg',
      rotation: -3,
      styleClass: 'mint',
      decorations: (
        <>
          <WashiTape style={{ top: '-10px', left: '-20px', transform: 'rotate(-25deg)' }} />
          <Daisy style={{ top: '-15px', right: '-15px' }} />
          <HangingCharm style={{ bottom: '-20px', left: '15px', transform: 'rotate(-5deg)' }} />
          <PearlAccent style={{ top: '8px', left: '8px' }} />
          <PearlAccent style={{ top: '8px', right: '8px' }} />
        </>
      )
    },
    {
      id: '02',
      title: 'Pretty',
      subtitle: 'Blooming beauty🌸',
      image: '/images/m1.jpeg',
      rotation: 2,
      styleClass: 'eggshell',
      decorations: (
        <>
          <MiniBowSticker style={{ top: '-12px', left: '50%', transform: 'translateX(-50%)' }} />
          <TeddyBearSticker style={{ bottom: '-20px', right: '-15px', transform: 'rotate(10deg)' }} />
          <ForgetMeNot style={{ bottom: '-10px', left: '-10px' }} />
          <PearlAccent style={{ bottom: '8px', left: '8px' }} />
          <PearlAccent style={{ bottom: '8px', right: '8px' }} />
        </>
      )
    },
    {
      id: '03',
      title: 'Too glam to handle',
      subtitle: 'Desi edition',
      image: '/images/m4.jpeg',
      rotation: -2,
      styleClass: 'sage',
      decorations: (
        <>
          <WashiTape style={{ top: '-8px', right: '-25px', transform: 'rotate(35deg)' }} />
          <BabysBreathBranch style={{ top: '-25px', left: '-20px', transform: 'rotate(-15deg)' }} />
          <MiniEnvelopeSticker style={{ bottom: '-15px', left: '-15px', transform: 'rotate(-10deg)' }} />
          <PearlAccent style={{ top: '8px', left: '8px' }} />
        </>
      )
    },
    {
      id: '04',
      title: '💙',
      subtitle: 'You are my blue',
      image: '/images/m3.jpeg',
      rotation: 3,
      styleClass: 'white',
      decorations: (
        <>
          <BunnySticker style={{ top: '-22px', right: '-20px', transform: 'rotate(15deg)' }} />
          <MacaronsSticker style={{ bottom: '-22px', left: '-15px', transform: 'rotate(-12deg)' }} />
          <FlappingButterfly style={{ top: '30%', left: '-18px' }} delay="0.5s" />
          <PearlAccent style={{ top: '8px', left: '8px' }} />
          <PearlAccent style={{ top: '8px', right: '8px' }} />
        </>
      )
    },
    {
      id: '05',
      title: '😉',
      subtitle: 'Cryptic girl',
      image: '/images/m5.jpeg',
      rotation: -1,
      styleClass: 'silver',
      decorations: (
        <>
          <WashiTape style={{ top: '-10px', left: '50%', transform: 'translateX(-50%) rotate(5deg)' }} />
          <Daisy style={{ bottom: '-20px', left: '-15px', transform: 'scale(1.1)' }} />
          <PearlString style={{ bottom: '-12px', right: '10px' }} />
          <PearlAccent style={{ top: '8px', left: '8px' }} />
          <PearlAccent style={{ top: '8px', right: '8px' }} />
        </>
      )
    },
    {
      id: '06',
      title: 'Our Happy Place',
      subtitle: 'Pure joy 💛',
      image: '/images/m6.jpeg',
      rotation: 3,
      styleClass: 'mint',
      decorations: (
        <>
          <MiniBowSticker style={{ top: '-12px', right: '-15px', transform: 'rotate(15deg)' }} />
          <Daisy style={{ bottom: '-20px', right: '-15px', transform: 'scale(0.95)' }} />
          <PearlAccent style={{ top: '8px', left: '8px' }} />
          <PearlAccent style={{ top: '8px', right: '8px' }} />
        </>
      )
    },
    {
      id: '07',
      title: 'Together is Better',
      subtitle: 'Infinite laughs ☀️',
      image: '/images/m7.jpeg',
      rotation: -2,
      styleClass: 'eggshell',
      decorations: (
        <>
          <WashiTape style={{ top: '-10px', left: '-15px', transform: 'rotate(-15deg)' }} />
          <ForgetMeNot style={{ bottom: '-15px', left: '15px' }} />
          <PearlAccent style={{ bottom: '8px', right: '8px' }} />
        </>
      )
    },
    {
      id: '08',
      title: 'Chasing Sunsets',
      subtitle: 'Golden memories ✨',
      image: '/images/m8.jpeg',
      rotation: 2,
      styleClass: 'sage',
      decorations: (
        <>
          <FlappingButterfly style={{ top: '25%', right: '-18px' }} delay="0.8s" />
          <PearlString style={{ bottom: '-12px', left: '10px' }} />
          <PearlAccent style={{ top: '8px', left: '8px' }} />
        </>
      )
    },
    {
      id: '09',
      title: 'Best Day Ever',
      subtitle: 'Side by side, always 🧸',
      image: '/images/m9.jpeg',
      rotation: -3,
      styleClass: 'silver',
      decorations: (
        <>
          <TeddyBearSticker style={{ top: '-22px', left: '-20px', transform: 'rotate(-10deg)' }} />
          <WashiTape style={{ bottom: '-10px', right: '-15px', transform: 'rotate(25deg)' }} />
          <PearlAccent style={{ top: '8px', right: '8px' }} />
        </>
      )
    },
  ];

  const handleReturn = () => {
    onComplete();
    onBack();
  };

  return (
    <div className="memory-lane-container">
      {/* SVG filter for rendering realistic torn paper edges */}
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
        <defs>
          <filter id="torn-paper-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <style>{`
        .memory-lane-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 950px;
          min-height: 80vh;
          position: relative;
          z-index: 10;
          padding: 0 16px;
          box-sizing: border-box;
        }

        .back-link {
          align-self: flex-start;
          font-family: var(--font-hand);
          font-size: 20px;
          color: #E8F2EF;
          opacity: 0.8;
          cursor: pointer;
          background: none;
          border: none;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 30px;
          transition: all 0.2s ease;
          text-shadow: 0 1px 3px rgba(30, 62, 62, 0.15);
        }

        .back-link:hover {
          opacity: 1;
          color: #FFFFFF;
          transform: translateX(-3px);
        }

        .memory-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .memory-intro-hint {
          font-family: var(--font-hand);
          font-size: 24px;
          color: #CFE8E1;
          font-weight: bold;
          margin-bottom: 6px;
          text-shadow: 0 1px 3px rgba(30, 62, 62, 0.2);
        }

        .memory-title {
          font-family: var(--font-serif);
          font-size: 46px;
          font-weight: 400;
          color: #FFFFFF;
          margin-bottom: 8px;
          text-shadow: 0 2px 10px rgba(30, 62, 62, 0.25);
        }

        .memory-desc {
          font-family: var(--font-sans);
          font-size: 14.5px;
          color: #E8F2EF;
          opacity: 0.95;
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.5;
          text-shadow: 0 1px 4px rgba(30, 62, 62, 0.15);
        }

        .scrapbook-board {
          width: 100%;
          background: linear-gradient(135deg, rgba(232, 242, 239, 0.8) 0%, rgba(207, 232, 225, 0.85) 100%);
          background-image: 
            radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.5) 0%, transparent 40%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='watercolorNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.03' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23watercolorNoise)' opacity='0.04'/%3E%3C/svg%3E");
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 28px;
          padding: 50px 40px;
          box-shadow: 
            0 24px 60px rgba(49, 68, 74, 0.14),
            inset 0 2px 4px rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          position: relative;
          z-index: 2;
          overflow: hidden;
          margin-bottom: 50px;
          box-sizing: border-box;
        }

        .lace-border-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 14px;
          background: radial-gradient(circle at 6px 14px, transparent 6px, rgba(255,255,255,0.9) 6px);
          background-size: 12px 14px;
          filter: drop-shadow(0 2px 2px rgba(49, 68, 74, 0.04));
          z-index: 10;
        }

        .lace-border-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 14px;
          background: radial-gradient(circle at 6px 0px, transparent 6px, rgba(255,255,255,0.9) 6px);
          background-size: 12px 14px;
          filter: drop-shadow(0 -2px 2px rgba(49, 68, 74, 0.04));
          z-index: 10;
        }

        .scrapbook-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px 30px;
          width: 100%;
          position: relative;
          z-index: 5;
        }

        .grid-arrow-cell {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 40px;
          color: var(--mint-blue);
          opacity: 0.65;
          animation: arrowFloat 2s ease-in-out infinite alternate;
        }

        .cute-arrow-svg {
          width: 28px;
          height: 28px;
        }

        @keyframes arrowFloat {
          0% { transform: translateY(-2px); }
          100% { transform: translateY(2px); }
        }

        .scrapbook-paper-frame {
          background-color: var(--white);
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.08' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' fill='%23ffffff'/%3E%3Crect width='100%25' height='100%25' filter='url(%23paperNoise)' opacity='0.07'/%3E%3C/svg%3E");
          padding: 14px 14px 28px 14px;
          filter: url(#torn-paper-filter) drop-shadow(0 10px 22px rgba(49, 68, 74, 0.12));
          border-radius: 6px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          cursor: pointer;
          z-index: 5;
          width: 100%;
          max-width: 245px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .scrapbook-paper-frame::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          transform: rotate(-3deg) scale(0.99);
          filter: url(#torn-paper-filter) drop-shadow(0 2px 6px rgba(0,0,0,0.05));
          transition: all 0.4s ease;
          border-radius: 6px;
        }

        .scrapbook-paper-frame.mint::before { background-color: var(--mint-green); }
        .scrapbook-paper-frame.eggshell::before { background-color: var(--eggshell); }
        .scrapbook-paper-frame.sage::before { background-color: var(--soft-sage); }
        .scrapbook-paper-frame.white::before {
          background-color: var(--white);
          border: 1px dashed rgba(111, 184, 184, 0.45);
        }
        .scrapbook-paper-frame.silver::before { background-color: var(--silver); }

        .paper-inner-img-wrapper {
          width: 100%;
          aspect-ratio: 0.85;
          overflow: hidden;
          border: 1px solid rgba(111, 184, 184, 0.12);
          border-radius: 4px;
          background-color: var(--silver);
          box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .paper-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .scrapbook-paper-frame:hover .paper-img {
          transform: scale(1.04);
        }

        .paper-id-tag {
          position: absolute;
          top: 8px;
          right: 8px;
          background: rgba(111, 184, 184, 0.8);
          color: #FFFFFF;
          font-family: var(--font-serif);
          font-size: 11px;
          font-weight: bold;
          padding: 2px 6px;
          border-radius: 10px;
          backdrop-filter: blur(2px);
          z-index: 10;
        }

        .paper-caption-main {
          font-family: var(--font-hand);
          font-size: 21px;
          font-weight: bold;
          color: var(--text);
          margin-top: 15px;
          line-height: 1.1;
          text-align: center;
        }

        .paper-caption-sub {
          font-size: 10px;
          letter-spacing: 1px;
          color: var(--text);
          opacity: 0.55;
          margin-top: 4px;
          font-weight: 600;
          text-transform: none;
        }

        .return-btn-container {
          margin-top: 20px;
          margin-bottom: 40px;
        }

        .flapping-butterfly-wrapper {
          perspective: 400px;
          display: inline-block;
          pointer-events: none;
          position: absolute;
        }
        
        .butterfly-body-container {
          position: relative;
          width: 34px;
          height: 34px;
          transform-style: preserve-3d;
          animation: butterflyHover 4s ease-in-out infinite alternate;
        }
        
        .wing {
          position: absolute;
          width: 17px;
          height: 28px;
          top: 3px;
          background: linear-gradient(135deg, rgba(111, 184, 184, 0.9) 0%, rgba(207, 232, 225, 0.95) 100%);
          border: 0.5px solid rgba(255,255,255,0.7);
          box-shadow: 0 2px 5px rgba(49, 68, 74, 0.06);
        }
        
        .wing.left {
          left: 0;
          border-radius: 12px 3px 3px 12px;
          transform-origin: right center;
          animation: flapLeft 0.5s ease-in-out infinite alternate;
        }
        
        .wing.right {
          right: 0;
          border-radius: 3px 12px 12px 3px;
          transform-origin: left center;
          animation: flapRight 0.5s ease-in-out infinite alternate;
        }
        
        .butterfly-center {
          position: absolute;
          width: 1.8px;
          height: 18px;
          left: 16.1px;
          top: 8px;
          background-color: var(--text);
          border-radius: 1px;
        }

        @keyframes flapLeft {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(-65deg); }
        }
        
        @keyframes flapRight {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(65deg); }
        }
        
        @keyframes butterflyHover {
          0% { transform: translateY(0px) rotate(-5deg); }
          100% { transform: translateY(-5px) rotate(5deg); }
        }

        @keyframes swingingCharm {
          0% { transform: rotate(-5deg); }
          100% { transform: rotate(5deg); }
        }

        .scrapbook-particles-container {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .scrapbook-particle {
          position: absolute;
          opacity: 0;
          transform: translateY(0);
        }

        @keyframes floatUp {
          0% { opacity: 0; transform: translateY(30px) scale(0.7) rotate(0deg); }
          15% { opacity: 0.7; }
          85% { opacity: 0.7; }
          100% { opacity: 0; transform: translateY(-90px) scale(1.1) rotate(180deg); }
        }

        @media (max-width: 860px) {
          .memory-lane-container { padding: 0 12px; }
          .memory-title { font-size: 36px; }
          .scrapbook-board { padding: 35px 20px; border-radius: 20px; }
          .scrapbook-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 35px 20px;
          }
          .grid-arrow-cell { display: none !important; }
          .scrapbook-paper-frame { max-width: 100%; }
        }

        @media (max-width: 520px) {
          .memory-lane-container { padding: 0 8px; }
          .memory-header { margin-bottom: 24px; }
          .memory-intro-hint { font-size: 18px; }
          .memory-title { font-size: 26px; margin-bottom: 6px; }
          .back-link { font-size: 16px; margin-bottom: 18px; }
          .memory-desc { font-size: 13px; max-width: 92vw; }
          .scrapbook-board {
            padding: 28px 12px;
            border-radius: 16px;
            margin-bottom: 30px;
          }
          .scrapbook-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 28px 14px;
          }
          .grid-arrow-cell { display: none !important; }
          .scrapbook-paper-frame {
            max-width: 100%;
            padding: 10px 10px 20px 10px;
          }
          .paper-caption-main { font-size: 16px; margin-top: 10px; }
          .paper-caption-sub { font-size: 9px; }
          .return-btn-container { margin-bottom: 24px; }
        }

        @media (max-width: 360px) {
          .scrapbook-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .scrapbook-paper-frame { max-width: 220px; }
        }
      `}</style>

      {/* Back link */}
      <button className="back-link" onClick={onBack}>
        ← back to the boxes
      </button>

      {/* Header */}
      <div className="memory-header" style={{ position: 'relative' }}>
        <FlowingRibbon style={{ top: '10px', left: '50%', transform: 'translateX(-50%)', opacity: 0.6 }} />
        <div className="memory-intro-hint">✦ box two ✦</div>
        <h1 className="memory-title">Memory Lane</h1>
        <p className="memory-desc">
          Our sweet little scrapbook. Hover the torn handmade paper journals — they remember every moment.
        </p>
      </div>

      {/* Scrapbook Board Panel */}
      <div className="scrapbook-board">
        <div className="lace-border-top"></div>
        <div className="lace-border-bottom"></div>
        <ScrapbookParticles />

        <div className="scrapbook-grid">
          {/* Row 1 */}
          {memories.slice(0, 3).map((m) => (
            <div key={m.id} className="grid-cell" style={{ position: 'relative' }}>
              <motion.div
                className={`scrapbook-paper-frame ${m.styleClass}`}
                style={{ rotate: m.rotation }}
                whileHover={{
                  rotate: 0,
                  scale: 1.04,
                  y: -8,
                  boxShadow: '0 22px 50px rgba(49, 68, 74, 0.18)',
                  zIndex: 20,
                }}
              >
                {m.decorations}
                <div className="paper-inner-img-wrapper">
                  <img src={m.image} alt={m.title} className="paper-img" />
                  <div className="paper-id-tag">{m.id}</div>
                </div>
                <div className="paper-caption-main">{m.title}</div>
                <div className="paper-caption-sub">{m.subtitle}</div>
              </motion.div>
            </div>
          ))}

          {/* Row 2 (Connecting Arrows) */}
          <div className="grid-arrow-cell"><CuteArrow /></div>
          <div className="grid-arrow-cell"><CuteArrow /></div>
          <div className="grid-arrow-cell"><CuteArrow /></div>

          {/* Row 3 */}
          {memories.slice(3, 6).map((m) => (
            <div key={m.id} className="grid-cell" style={{ position: 'relative' }}>
              <motion.div
                className={`scrapbook-paper-frame ${m.styleClass}`}
                style={{ rotate: m.rotation }}
                whileHover={{
                  rotate: 0,
                  scale: 1.04,
                  y: -8,
                  boxShadow: '0 22px 50px rgba(49, 68, 74, 0.18)',
                  zIndex: 20,
                }}
              >
                {m.decorations}
                <div className="paper-inner-img-wrapper">
                  <img src={m.image} alt={m.title} className="paper-img" />
                  <div className="paper-id-tag">{m.id}</div>
                </div>
                <div className="paper-caption-main">{m.title}</div>
                <div className="paper-caption-sub">{m.subtitle}</div>
              </motion.div>
            </div>
          ))}

          {/* Row 4 (Connecting Arrows) */}
          <div className="grid-arrow-cell"><CuteArrow /></div>
          <div className="grid-arrow-cell"><CuteArrow /></div>
          <div className="grid-arrow-cell"><CuteArrow /></div>

          {/* Row 5 */}
          {memories.slice(6, 9).map((m) => (
            <div key={m.id} className="grid-cell" style={{ position: 'relative' }}>
              <motion.div
                className={`scrapbook-paper-frame ${m.styleClass}`}
                style={{ rotate: m.rotation }}
                whileHover={{
                  rotate: 0,
                  scale: 1.04,
                  y: -8,
                  boxShadow: '0 22px 50px rgba(49, 68, 74, 0.18)',
                  zIndex: 20,
                }}
              >
                {m.decorations}
                <div className="paper-inner-img-wrapper">
                  <img src={m.image} alt={m.title} className="paper-img" />
                  <div className="paper-id-tag">{m.id}</div>
                </div>
                <div className="paper-caption-main">{m.title}</div>
                <div className="paper-caption-sub">{m.subtitle}</div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Return button */}
      <div className="return-btn-container">
        <button className="glass-button" onClick={handleReturn}>
          RETURN TO THE BOXES
        </button>
      </div>
    </div>
  );
}
