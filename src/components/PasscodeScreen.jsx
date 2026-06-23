import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Delete } from 'lucide-react';

// SVG Baby's Breath flowers component
const BabysBreath = ({ className, style, scale = 1, rotate = 0 }) => (
  <svg
    className={`babys-breath-svg ${className || ''}`.trim()}
    viewBox="0 0 150 300"
    fill="none"
    style={{
      transform: `scale(${scale}) rotate(${rotate}deg)`,
      ...style
    }}
  >
    {/* Main Stems */}
    <path d="M75 280 C70 190 40 130 25 90" stroke="#e5ed8dff" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M75 280 C78 200 95 140 115 100" stroke="#e7e3adff" strokeWidth="1.5" strokeLinecap="round" />
    {/* Branching */}
    <path d="M55 200 C45 170 30 150 20 140" stroke="#8CA095" strokeWidth="1.2" />
    <path d="M85 210 C95 180 110 160 120 150" stroke="#8CA095" strokeWidth="1.2" />

    <path d="M43 150 C33 130 20 120 10 115" stroke="#8CA095" strokeWidth="1.0" />
    <path d="M98 160 C108 140 122 130 132 125" stroke="#8CA095" strokeWidth="1.0" />

    <path d="M33 110 C27 90 15 80 8 75" stroke="#8CA095" strokeWidth="0.8" />
    <path d="M108 115 C115 95 127 85 135 80" stroke="#8CA095" strokeWidth="0.8" />

    {/* Flower Buds */}
    <circle cx="25" cy="90" r="4" fill="#FFFFFF" />
    <circle cx="25" cy="90" r="1.2" fill="#f0f08eff" />
    <circle cx="20" cy="140" r="4" fill="#FFFFFF" />
    <circle cx="20" cy="140" r="1.2" fill="#d2d273ff" />
    <circle cx="10" cy="115" r="3.5" fill="#FFFFFF" />
    <circle cx="8" cy="75" r="4" fill="#FFFFFF" />
    <circle cx="8" cy="75" r="1.2" fill="#d2d273ff" />

    <circle cx="115" cy="100" r="4" fill="#FFFFFF" />
    <circle cx="115" cy="100" r="1.2" fill="#e8e872ff" />
    <circle cx="120" cy="150" r="4" fill="#FFFFFF" />
    <circle cx="120" cy="150" r="1.2" fill="#d8d77bff" />
    <circle cx="132" cy="125" r="3.5" fill="#FFFFFF" />
    <circle cx="135" cy="80" r="4" fill="#FFFFFF" />
    <circle cx="135" cy="80" r="1.2" fill="#d9ed56ff" />

    {/* Tiny filler buds */}
    <circle cx="50" cy="170" r="2.5" fill="#FFFFFF" />
    <circle cx="95" cy="180" r="2.5" fill="#FFFFFF" />
    <circle cx="38" cy="130" r="2.5" fill="#FFFFFF" />
    <circle cx="104" cy="135" r="2.5" fill="#FFFFFF" />
  </svg>
);

// Heart Wire Clip SVG
const HeartWireClip = () => (
  <svg
    className="heart-wire-clip"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--mint-blue)"
    strokeWidth="1.6"
  >
    <path d="M12 5 C10.5 3 8 3.5 6.5 5 C5 6.5 5 9 6.5 10.5 L12 16 L17.5 10.5 C19 9 19 6.5 17.5 5 C16 3.5 13.5 3 12 5 Z" />
    <path d="M12 7 C11.5 5.8 9.5 6.2 8.5 7.2 C7.5 8.2 7.5 9.8 8.5 10.8 L12 14.3 L15.5 10.8 C16.5 9.8 16.5 8.2 15.5 7.2 C14.5 6.2 12.5 5.8 12 7 Z" />
  </svg>
);

// Scalloped tag sticker
const ScallopedTag = () => (
  <div className="scalloped-tag-wrapper">
    <style>{`
      .scalloped-tag-wrapper {
        position: absolute;
        bottom: -20px;
        left: -25px;
        width: 90px;
        height: 90px;
        z-index: 10;
        transform: rotate(-12deg);
        filter: drop-shadow(0 4px 10px rgba(49, 68, 74, 0.08));
      }
      .scalloped-badge {
        width: 100%;
        height: 100%;
        background-color: var(--white);
        border-radius: 50%;
        border: 2px dashed var(--mint-green);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 6px;
        text-align: center;
        position: relative;
        box-sizing: border-box;
      }
      .scalloped-badge::before {
        content: '';
        position: absolute;
        inset: -3px;
        border-radius: 50%;
        border: 3px dotted rgba(248, 231, 165, 0.7);
      }
      .tag-text {
        font-family: var(--font-hand);
        font-size: 12px;
        line-height: 1.15;
        color: var(--text);
        font-weight: bold;
      }
      .tag-heart {
        font-size: 8px;
        color: var(--mint-blue);
        margin-top: 2px;
      }
      .tag-bow {
        position: absolute;
        top: -10px;
        left: 25px;
        width: 38px;
        height: 16px;
        color: var(--mint-blue);
      }
        @media (max-width: 480px) {
          .scalloped-tag-wrapper {
            transform: scale(0.8) rotate(-12deg);
            left: -15px;
            bottom: -15px;
          }
        }
      `}</style>
    <svg className="tag-bow" viewBox="0 0 24 10" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 5 C8 1 4 1 4 4 C4 7 8 5 12 5" />
      <path d="M12 5 C16 1 20 1 20 4 C20 7 16 5 12 5" />
      <circle cx="12" cy="5" r="1.2" fill="currentColor" />
      <path d="M12 5 C11 8 9 10 7 10" />
      <path d="M12 5 C13 8 15 10 17 10" />
    </svg>
    <div className="scalloped-badge">
      <div className="tag-text">a little surprise awaits</div>
      <div className="tag-heart">🩵</div>
    </div>
  </div>
);

// Keypad card corner ribbon bow with daisy
const RibbonBow = () => (
  <svg
    className="ribbon-bow"
    viewBox="0 0 100 80"
  >
    {/* Bow Loops */}
    <path d="M50 40 C32 12 12 12 12 32 C12 52 32 45 50 40" fill="rgba(248, 231, 165, 0.95)" stroke="var(--mint-blue)" strokeWidth="1" />
    <path d="M50 40 C68 12 88 12 88 32 C88 52 68 45 50 40" fill="rgba(248, 231, 165, 0.95)" stroke="var(--mint-blue)" strokeWidth="1" />

    {/* Ribbon tails */}
    <path d="M50 40 C46 55 32 75 14 78" fill="none" stroke="rgba(248, 231, 165, 0.95)" strokeWidth="5.5" strokeLinecap="round" />
    <path d="M50 40 C46 55 32 75 14 78" fill="none" stroke="var(--mint-blue)" strokeWidth="1" strokeLinecap="round" />

    <path d="M50 40 C54 55 68 75 86 78" fill="none" stroke="rgba(248, 231, 165, 0.95)" strokeWidth="5.5" strokeLinecap="round" />
    <path d="M50 40 C54 55 68 75 86 78" fill="none" stroke="var(--mint-blue)" strokeWidth="1" strokeLinecap="round" />

    {/* Daisy in Center */}
    <circle cx="50" cy="40" r="7" fill="var(--white)" stroke="var(--mint-blue)" strokeWidth="1" />
    <circle cx="50" cy="40" r="2.8" fill="#EAD575" />
    {Array.from({ length: 8 }).map((_, i) => {
      const angle = (i * 45 * Math.PI) / 180;
      const px = 50 + Math.cos(angle) * 5.8;
      const py = 40 + Math.sin(angle) * 5.8;
      return <circle key={i} cx={px} cy={py} r="2.2" fill="var(--white)" />;
    })}
  </svg>
);

// Flowy satin ribbon tail wrapping around
const FlowingRibbon = () => (
  <svg
    className="flowing-ribbon"
    viewBox="0 0 400 100"
  >
    <path
      d="M10 60 C80 35 180 115 280 55 C330 25 365 40 390 60"
      fill="none"
      stroke="rgba(248, 231, 165, 0.55)"
      strokeWidth="24"
      strokeLinecap="round"
    />
    <path
      d="M10 60 C80 35 180 115 280 55 C330 25 365 40 390 60"
      fill="none"
      stroke="rgba(230, 161, 21, 0.2)"
      strokeWidth="25"
      strokeLinecap="round"
      strokeDasharray="1 16"
    />
  </svg>
);

// Sunflower Bouquet SVG Component (Two sunflowers, three daisies, stems and leaves)
const SunflowerBouquet = () => (
  <svg
    className="sunflower-bouquet-svg"
    viewBox="0 0 160 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Stems & Leaves */}
    <path d="M70 120 C60 140 55 170 65 200" stroke="#8A9A5B" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M90 120 C95 140 100 170 95 200" stroke="#8A9A5B" strokeWidth="2" strokeLinecap="round" />
    <path d="M80 120 L80 200" stroke="#8A9A5B" strokeWidth="2.2" strokeLinecap="round" />

    {/* Soft green leaves */}
    <path d="M48 135 C38 138 28 148 34 158 C42 165 48 152 52 142 Z" fill="#708238" opacity="0.9" />
    <path d="M102 125 C112 122 122 130 118 140 C112 148 106 138 100 132 Z" fill="#708238" opacity="0.9" />
    <path d="M105 155 C115 158 122 170 114 178 C106 182 102 168 100 160 Z" fill="#708238" opacity="0.85" />

    {/* Left Sunflower (Slightly tilted) */}
    <g transform="translate(45, 95) rotate(-15)">
      {/* Petals */}
      {Array.from({ length: 16 }).map((_, i) => {
        const rot = i * 22.5;
        return (
          <path
            key={i}
            d="M 0 0 C -6 -12 -12 -28 0 -34 C 12 -28 6 -12 0 0"
            fill="#F3B323"
            transform={`rotate(${rot})`}
          />
        );
      })}
      {Array.from({ length: 16 }).map((_, i) => {
        const rot = i * 22.5 + 11.25;
        return (
          <path
            key={i}
            d="M 0 0 C -4 -10 -8 -24 0 -30 C 8 -24 4 -10 0 0"
            fill="#F6C344"
            transform={`rotate(${rot})`}
            opacity="0.95"
          />
        );
      })}
      {/* Sunflower Center Disc */}
      <circle cx="0" cy="0" r="13" fill="#3D2314" stroke="#5D3A21" strokeWidth="1" />
      <circle cx="0" cy="0" r="10" fill="#2B160C" />
      {/* Texture details */}
      <circle cx="0" cy="0" r="7" fill="none" stroke="#5D3A21" strokeWidth="1.5" strokeDasharray="2,2" />
      <circle cx="0" cy="0" r="4" fill="none" stroke="#D3A261" strokeWidth="1" strokeDasharray="1,1" />
    </g>

    {/* Right / Main Sunflower */}
    <g transform="translate(100, 80) rotate(5)">
      {/* Outer Petals */}
      {Array.from({ length: 18 }).map((_, i) => {
        const rot = i * 20;
        return (
          <path
            key={i}
            d="M 0 0 C -7 -14 -14 -32 0 -40 C 14 -32 7 -14 0 0"
            fill="#E69110"
            transform={`rotate(${rot})`}
          />
        );
      })}
      {/* Inner Petals */}
      {Array.from({ length: 18 }).map((_, i) => {
        const rot = i * 20 + 10;
        return (
          <path
            key={i}
            d="M 0 0 C -5 -12 -10 -28 0 -35 C 10 -28 5 -12 0 0"
            fill="#F3B323"
            transform={`rotate(${rot})`}
            opacity="0.95"
          />
        );
      })}
      {/* Sunflower Center Disc */}
      <circle cx="0" cy="0" r="16" fill="#3D2314" stroke="#5D3A21" strokeWidth="1.5" />
      <circle cx="0" cy="0" r="12" fill="#241208" />
      {/* Texture details */}
      <circle cx="0" cy="0" r="9" fill="none" stroke="#5D3A21" strokeWidth="2" strokeDasharray="3,2" />
      <circle cx="0" cy="0" r="5" fill="none" stroke="#E69110" strokeWidth="1.5" strokeDasharray="1,2" />
    </g>

    {/* White Daisy 1 (Top Right) */}
    <g transform="translate(115, 45)">
      {Array.from({ length: 12 }).map((_, i) => (
        <ellipse key={i} cx="0" cy="-12" rx="4.5" ry="12" fill="#FFFFFF" transform={`rotate(${i * 30})`} />
      ))}
      <circle cx="0" cy="0" r="5" fill="#EAD575" stroke="#E6A115" strokeWidth="0.5" />
    </g>

    {/* White Daisy 2 (Bottom Left) */}
    <g transform="translate(48, 140) scale(0.95)">
      {Array.from({ length: 12 }).map((_, i) => (
        <ellipse key={i} cx="0" cy="-12" rx="4.5" ry="12" fill="#FFFFFF" transform={`rotate(${i * 30})`} />
      ))}
      <circle cx="0" cy="0" r="5" fill="#EAD575" stroke="#E6A115" strokeWidth="0.5" />
    </g>

    {/* White Daisy 3 (Bottom Right) */}
    <g transform="translate(85, 125) scale(0.9)">
      {Array.from({ length: 12 }).map((_, i) => (
        <ellipse key={i} cx="0" cy="-12" rx="4.5" ry="12" fill="#FFFFFF" transform={`rotate(${i * 30})`} />
      ))}
      <circle cx="0" cy="0" r="5" fill="#EAD575" stroke="#E6A115" strokeWidth="0.5" />
    </g>

    {/* Tiny yellow accent buds */}
    <circle cx="25" cy="85" r="3" fill="#FFFFFF" />
    <circle cx="25" cy="85" r="1" fill="#EAD575" />
    <circle cx="32" cy="70" r="2.5" fill="#FFFFFF" />
    <circle cx="32" cy="70" r="0.8" fill="#EAD575" />
    <circle cx="130" cy="75" r="3" fill="#FFFFFF" />
    <circle cx="130" cy="75" r="1" fill="#EAD575" />
  </svg>
);

// Heart indicator icon
const HeartIcon = ({ filled }) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill={filled ? "var(--mint-blue)" : "none"}
    stroke="var(--mint-blue)"
    strokeWidth="2"
    style={{
      margin: '0 4px',
      transition: 'all 0.3s ease',
      filter: filled ? 'drop-shadow(0 0 4px rgba(111,184,184,0.4))' : 'none'
    }}
  >
    <path d="M12 21 C12 21 3 13.5 3 8.5 C3 5.5 5.5 3 8.5 3 C10.5 3 11.5 4.5 12 5 C12.5 4.5 13.5 3 15.5 3 C18.5 3 21 5.5 21 8.5 C21 13.5 12 21 12 21 Z" />
  </svg>
);

export default function PasscodeScreen({ onSuccess }) {
  const [code, setCode] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const correctCode = '2017';

  const handleKeyPress = (num) => {
    if (isSuccess) return;
    if (code.length < 4) {
      setCode((prev) => prev + num);
      setIsError(false);
    }
  };

  const handleDelete = () => {
    if (isSuccess) return;
    setCode((prev) => prev.slice(0, -1));
    setIsError(false);
  };

  // Auto-verify code when it reaches 4 digits
  useEffect(() => {
    if (code.length === 4) {
      if (code === correctCode) {
        setIsSuccess(true);
        playTone(600, 'sine', 0.1);
        setTimeout(() => playTone(800, 'sine', 0.15), 100);
        setTimeout(() => {
          onSuccess();
        }, 1200);
      } else {
        playTone(150, 'triangle', 0.2);
        setIsError(true);
        setTimeout(() => {
          setCode('');
          setIsError(false);
        }, 800);
      }
    }
  }, [code, onSuccess]);

  const playTone = (freq, type = 'sine', duration = 0.1) => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.type = type;
      oscillator.frequency.value = freq;
      gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.start();
      oscillator.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // AudioContext blocked
    }
  };

  const keys = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
  ];

  return (
    <div className="passcode-screen">
      <style>{`
        .passcode-screen {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 90px;
          max-width: 1200px;
          width: 100%;
          z-index: 10;
          position: relative;
        }

        .polaroid-holder {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        /* Soft envelope backing behind polaroid */
        .polaroid-envelope-bg {
          position: absolute;
          width: 370px; /* Reduced Polaroid backing */
          height: 460px; /* Reduced Polaroid backing */
          background-color: rgba(176, 215, 215, 0.7);
          backdrop-filter: blur(2px);
          border: 1px solid rgba(255,255,255,0.5);
          border-radius: 12px;
          transform: rotate(-10deg) translate(-20px, 15px);
          z-index: -1;
          box-shadow: -12px 16px 40px rgba(49, 68, 74, 0.08);
        }

        .polaroid-card-box {
          width: 360px; /* Reduced Polaroid card */
          position: relative;
          z-index: 2;
        }

        /* Custom washi tape grid effect */
        .washi-tape {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%) rotate(-1deg);
          width: 120px; /* Reduced tape width */
          height: 26px; /* Reduced tape height */
          background-color: rgba(207, 232, 225, 0.85);
          background-image: 
            repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(111, 184, 184, 0.2) 5px, rgba(111, 184, 184, 0.2) 10px),
            repeating-linear-gradient(-45deg, transparent, transparent 5px, rgba(111, 184, 184, 0.15) 5px, rgba(111, 184, 184, 0.15) 10px);
          backdrop-filter: blur(1px);
          border-left: 2px dashed rgba(255,255,255,0.4);
          border-right: 2px dashed rgba(255,255,255,0.4);
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
          z-index: 6;
        }

        .polaroid-card-box .polaroid-img-container {
          width: 100%;
          height: 380px; /* Reduced Polaroid height */
          aspect-ratio: auto;
        }

        .polaroid-card-box .polaroid-caption {
          font-size: 30px; /* Reduced font size */
        }

        .polaroid-inner-letter {
          font-family: var(--font-serif);
          font-size: 110px; /* Bigger monogram text */
          font-weight: 300;
          color: var(--text);
          margin-bottom: 2px;
        }

        .polaroid-inner-sub {
          font-family: var(--font-hand);
          font-size: 42px; /* Bigger subtext */
          color: var(--mint-blue);
          opacity: 0.85;
        }

        /* Light-glassmorphic Keypad Card */
        .keypad-container {
          width: 380px;
          padding: 45px 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
        }

        .keypad-header-hint {
          font-family: var(--font-hand);
          font-size: 22px;
          color: var(--mint-blue);
          margin-bottom: 6px;
        }

        .keypad-title {
          font-family: var(--font-serif);
          font-size: 32px;
          color: var(--text);
          font-weight: 400;
          margin-bottom: 4px;
        }

        .keypad-subtitle {
          font-size: 11px;
          letter-spacing: 2px;
          color: var(--text);
          opacity: 0.6;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        /* Heart Indicators */
        .hearts-row {
          display: flex;
          gap: 6px;
          margin-bottom: 30px;
        }

        .grid-pad {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px 22px;
          width: 100%;
          max-width: 260px;
          margin-bottom: 15px;
        }

        /* Light Neumorphic Tactile Buttons */
        .neumorphic-btn {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.7);
          background: linear-gradient(135deg, #FFFFFF 0%, #F5FAF9 100%);
          box-shadow: 
            -3px -3px 8px rgba(255, 255, 255, 0.95), 
            3px 3px 8px rgba(111, 184, 184, 0.16);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-serif);
          font-size: 20px;
          color: var(--text);
          cursor: pointer;
          user-select: none;
          outline: none;
          transition: all 0.15s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .neumorphic-btn:hover {
          transform: translateY(-1px);
          box-shadow: 
            -4px -4px 10px rgba(255, 255, 255, 0.98), 
            4px 4px 10px rgba(111, 184, 184, 0.2);
        }

        .neumorphic-btn:active {
          transform: translateY(1px);
          background: linear-gradient(135deg, #F5FAF9 0%, #FFFFFF 100%);
          box-shadow: 
            inset -2px -2px 5px rgba(255, 255, 255, 0.8), 
            inset 2px 2px 5px rgba(111, 184, 184, 0.15);
        }

        .neumorphic-btn.action-btn {
          font-size: 16px;
          color: var(--text);
          opacity: 0.85;
        }

        /* Dashed Hint border at bottom */
        .dashed-hint-box {
          border: 1.5px dashed rgba(111, 184, 184, 0.35);
          border-radius: 20px;
          padding: 8px 24px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: var(--text);
          opacity: 0.8;
          background: rgba(255, 255, 255, 0.4);
          margin-top: 40px;
          box-shadow: 0 4px 10px rgba(111, 184, 184, 0.04);
        }
        
        .dashed-hint-box span {
          color: var(--mint-blue);
          font-weight: 500;
        }

        .sunflower-bouquet-svg {
          position: absolute;
          right: -80px;
          top: 80px;
          width: 145px;
          height: auto;
          z-index: 5;
          pointer-events: none;
          filter: drop-shadow(0 6px 15px rgba(72, 47, 24, 0.12));
        }

        @media (max-width: 980px) {
          .passcode-screen {
            flex-direction: column;
            gap: 75px;
            padding-top: 40px;
          }

          .polaroid-envelope-bg {
            display: none;
          }

          .polaroid-card-box {
            width: 310px; /* Smaller polaroid on mobile */
          }
          
          .polaroid-card-box .polaroid-img-container {
            height: 320px;
          }

          .polaroid-card-box .polaroid-caption {
            font-size: 26px;
          }

          .keypad-container {
            width: 100%;
            max-width: 360px;
          }

          .sunflower-bouquet-svg {
            right: -60px;
            top: 100px;
            width: 110px;
          }
        }

        @media (max-width: 480px) {
          .passcode-screen {
            gap: 50px;
            padding-top: 20px;
          }
          
          .polaroid-card-box {
            width: 100%;
            max-width: 280px;
          }
          
          .polaroid-card-box .polaroid-img-container {
            height: 290px;
          }
          
          .polaroid-card-box .polaroid-caption {
            font-size: 22px;
          }
          
          .keypad-container {
            max-width: 300px;
            padding: 30px 20px;
          }
          
          .keypad-title {
            font-size: 26px;
          }
          
          .grid-pad {
            max-width: 240px;
            gap: 12px 16px;
          }
          
          .neumorphic-btn {
            width: 50px;
            height: 50px;
            font-size: 18px;
          }
          
          .dashed-hint-box {
            padding: 6px 16px;
            font-size: 11px;
            margin-top: 25px;
          }

          .babys-breath-svg {
            transform: scale(0.6) !important;
          }
          
          .flowing-ribbon {
            width: 300px;
            left: -10px;
            bottom: -25px;
          }
          
          .ribbon-bow {
            transform: scale(0.8);
            top: -12px;
            right: -12px;
          }

          .sunflower-bouquet-svg {
            right: -45px;
            top: 120px;
            width: 90px;
          }
        }
        
        /* New CSS classes for extracted inline styles */
        .babys-breath-svg {
          position: absolute;
          width: 190px;
          height: 380px;
          pointer-events: none;
          z-index: -1;
        }
        
        .heart-wire-clip {
          position: absolute;
          top: -24px;
          left: calc(50% - 15px);
          width: 30px;
          height: 30px;
          z-index: 10;
          transform: rotate(-5deg);
          filter: drop-shadow(0 1.5px 2px rgba(49, 68, 74, 0.15));
        }
        
        .ribbon-bow {
          position: absolute;
          top: -18px;
          right: -18px;
          width: 85px;
          height: 68px;
          z-index: 15;
          filter: drop-shadow(0 2px 4px rgba(49, 68, 74, 0.12));
        }
        
        .flowing-ribbon {
          position: absolute;
          bottom: -35px;
          left: -20px;
          width: 420px;
          height: 105px;
          z-index: -2;
          pointer-events: none;
          filter: drop-shadow(0 4px 8px rgba(49, 68, 74, 0.08));
        }
      `}</style>

      {/* Decorative Baby's Breath Flowers placed behind cards */}
      <BabysBreath className="babys-breath-svg" style={{ left: '-50px', top: '-110px' }} scale={0.9} rotate={-15} />
      <BabysBreath className="babys-breath-svg" style={{ left: '270px', top: '-130px' }} scale={0.8} rotate={35} />
      <BabysBreath className="babys-breath-svg" style={{ right: '-50px', bottom: '-50px' }} scale={0.9} rotate={160} />

      {/* Polaroid Hanging Photo Section */}
      <div className="polaroid-holder">
        {/* Rotated soft envelope backing */}
        <div className="polaroid-envelope-bg"></div>

        <motion.div
          className="polaroid polaroid-card-box"
          style={{ transformOrigin: 'top center' }}
          animate={{
            rotate: [-1.5, 1.5, -1.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Wire Clip */}
          <HeartWireClip />
          {/* Grid pattern Washi tape */}
          <div className="washi-tape" />

          <div className="polaroid-img-container">
            <img
              src="/images/m1.jpeg"
              alt="Birthday Surprise"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '4px'
              }}
            />
          </div>

          {/* Scalloped tag sticker attached to polaroid */}
          <ScallopedTag />

          <div className="polaroid-caption">
            Happy Birthday <span style={{ color: 'var(--mint-blue)' }}>🌻</span>
          </div>
        </motion.div>
      </div>

      {/* Passcode Entry Card */}
      <AnimatePresence>
        <motion.div
          key="keypad"
          className="glass-panel keypad-container"
          animate={isError ? {
            x: [0, -10, 10, -10, 10, -5, 5, 0],
            transition: { duration: 0.5 }
          } : isSuccess ? {
            scale: [1, 1.02, 0.95],
            opacity: [1, 1, 0],
            transition: { duration: 0.8, delay: 0.3 }
          } : {}}
        >
          {/* Keypad Corner Ribbon and Daisy */}
          <RibbonBow />
          {/* Ribbon tails wrapping underneath */}
          <FlowingRibbon />
          {/* Sunflower bouquet overlapping on the right side */}
          <SunflowerBouquet />

          <div className="keypad-header-hint">psst...</div>
          <h2 className="keypad-title">Enter the Secret Code</h2>
          <div className="keypad-subtitle">A LITTLE JOURNEY AWAITS</div>

          {/* Heart indicators */}
          <div className="hearts-row">
            {Array.from({ length: 4 }).map((_, i) => (
              <HeartIcon
                key={i}
                filled={isSuccess || i < code.length}
              />
            ))}
          </div>

          {/* Tactile keypad */}
          <div className="grid-pad">
            {keys.map((num) => (
              <motion.button
                key={num}
                className="neumorphic-btn"
                onClick={() => {
                  playTone(400, 'sine', 0.05);
                  handleKeyPress(num);
                }}
                whileTap={{ scale: 0.96 }}
              >
                {num}
              </motion.button>
            ))}

            {/* Sparkle action key */}
            <motion.button
              className="neumorphic-btn action-btn"
              onClick={() => playTone(500, 'sine', 0.05)}
              whileTap={{ scale: 0.96 }}
            >
              ✦
            </motion.button>

            {/* Zero key */}
            <motion.button
              className="neumorphic-btn"
              onClick={() => {
                playTone(400, 'sine', 0.05);
                handleKeyPress('0');
              }}
              whileTap={{ scale: 0.96 }}
            >
              0
            </motion.button>

            {/* Backspace delete key */}
            <motion.button
              className="neumorphic-btn action-btn"
              onClick={() => {
                playTone(300, 'sine', 0.05);
                handleDelete();
              }}
              whileTap={{ scale: 0.96 }}
            >
              <Delete size={18} strokeWidth={1.5} />
            </motion.button>
          </div>

          {/* Dash-bordered Hint Box */}
          <div className="dashed-hint-box">
            <span>🌻</span>
            hint: a year that started everythingg
            <span>🌻</span>
          </div>
        </motion.div>
      </AnimatePresence>h
    </div>
  );
}
