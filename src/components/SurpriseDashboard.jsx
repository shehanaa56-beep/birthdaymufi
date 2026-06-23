import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Vase of Sunflowers and Daisies inside the Polaroid
const SunflowerVaseSvg = () => (
  <svg viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    {/* Wall Background */}
    <rect width="120" height="150" fill="#FFFDF0" />
    
    {/* Glass Vase */}
    <ellipse cx="60" cy="115" rx="22" ry="18" fill="rgba(235, 245, 245, 0.7)" stroke="rgba(255, 255, 255, 0.9)" strokeWidth="1.2" />
    <rect x="52" y="90" width="16" height="16" fill="rgba(235, 245, 245, 0.6)" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="0.8" />
    <ellipse cx="60" cy="108" rx="21" ry="5" fill="rgba(195, 230, 230, 0.5)" />
    
    {/* Stems */}
    <path d="M60 70 L60 110" stroke="#7A8B4E" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M50 75 L56 102" stroke="#7A8B4E" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M72 72 L64 104" stroke="#7A8B4E" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M38 78 L54 105" stroke="#7A8B4E" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M82 80 L66 105" stroke="#7A8B4E" strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Leaves */}
    <path d="M42 90 C34 94 36 102 44 98 Z" fill="#6A7B3E" />
    <path d="M78 88 C86 92 84 100 76 96 Z" fill="#6A7B3E" />
    
    {/* Main Sunflower */}
    <g transform="translate(60, 55)">
      {Array.from({ length: 16 }).map((_, i) => (
        <path key={i} d="M0 0 C-4 -8 -8 -20 0 -24 C8 -20 4 -8 0 0" fill="#F3B323" transform={`rotate(${i * 22.5})`} />
      ))}
      {Array.from({ length: 16 }).map((_, i) => (
        <path key={i} d="M0 0 C-3 -6 -6 -16 0 -20 C6 -16 3 -6 0 0" fill="#F6C344" transform={`rotate(${i * 22.5 + 11.25})`} opacity="0.9" />
      ))}
      <circle cx="0" cy="0" r="7.5" fill="#3D2314" stroke="#2B160C" strokeWidth="0.6" />
      <circle cx="0" cy="0" r="5" fill="#241208" />
    </g>

    {/* Left Daisy */}
    <g transform="translate(35, 72) scale(0.85)">
      {Array.from({ length: 12 }).map((_, i) => (
        <ellipse key={i} cx="0" cy="-8" rx="2.4" ry="8" fill="#FFFFFF" transform={`rotate(${i * 30})`} />
      ))}
      <circle cx="0" cy="0" r="3" fill="#EAD575" stroke="#E6A115" strokeWidth="0.4" />
    </g>

    {/* Right Daisy */}
    <g transform="translate(85, 70) scale(0.85)">
      {Array.from({ length: 12 }).map((_, i) => (
        <ellipse key={i} cx="0" cy="-8" rx="2.4" ry="8" fill="#FFFFFF" transform={`rotate(${i * 30})`} />
      ))}
      <circle cx="0" cy="0" r="3" fill="#EAD575" stroke="#E6A115" strokeWidth="0.4" />
    </g>

    {/* Top Small Sunflower */}
    <g transform="translate(70, 32) scale(0.65)">
      {Array.from({ length: 12 }).map((_, i) => (
        <path key={i} d="M0 0 C-3 -6 -6 -16 0 -20 C6 -16 3 -6 0 0" fill="#E69110" transform={`rotate(${i * 30})`} />
      ))}
      <circle cx="0" cy="0" r="6" fill="#3D2314" />
    </g>

    {/* Left Small Sunflower */}
    <g transform="translate(46, 38) scale(0.7) rotate(-15)">
      {Array.from({ length: 12 }).map((_, i) => (
        <path key={i} d="M0 0 C-3 -6 -6 -16 0 -20 C6 -16 3 -6 0 0" fill="#F6C344" transform={`rotate(${i * 30})`} />
      ))}
      <circle cx="0" cy="0" r="6" fill="#3D2314" />
    </g>
  </svg>
);

// Polaroid Decor component
const DashboardPolaroid = () => (
  <div className="deco-polaroid">
    <div className="deco-washi-tape"></div>
    <div className="polaroid-img-wrapper">
      <SunflowerVaseSvg />
    </div>
    <div className="polaroid-caption-text">a little surprise awaits 💛</div>
  </div>
);

// Paperclip SVG icon
const PaperClipIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#7A6F5D" strokeWidth="1.8" className="deco-paperclip">
    <path d="M6 9 v7 c0 3 2.5 5.5 5.5 5.5 s5.5 -2.5 5.5 -5.5 v-11 c0 -2 -1.5 -3.5 -3.5 -3.5 s-3.5 1.5 -3.5 3.5 v10 c0 1 0.8 1.8 1.8 1.8 s1.8 -0.8 1.8 -1.8 v-8" />
  </svg>
);

// Torn Note Decor component
const DashboardTornNote = () => (
  <div className="deco-torn-note">
    <PaperClipIcon />
    <div className="note-content">
      <div className="handwriting-line">made with ♡</div>
      <div className="handwriting-line">all my heart</div>
      <div className="handwriting-line">for you</div>
      <div className="handwriting-line">♡♡♡</div>
    </div>
  </div>
);

// Sunflower Bouquet Bottom Left Corner component
const DashboardLeftBouquet = () => (
  <div className="deco-left-bouquet">
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      {/* Leaves */}
      <path d="M40 180 C20 160 15 130 35 110 C50 120 45 150 40 180 Z" fill="#708238" opacity="0.9" />
      <path d="M120 180 C140 170 145 140 125 125 C115 135 115 160 120 180 Z" fill="#708238" opacity="0.85" />
      <path d="M80 180 C60 195 40 190 35 170 C45 160 70 165 80 180 Z" fill="#8A9A5B" opacity="0.95" />
      
      {/* Left/Bottom Large Sunflower */}
      <g transform="translate(45, 160) scale(1.1)">
        {Array.from({ length: 16 }).map((_, i) => (
          <path key={i} d="M0 0 C-4 -8 -8 -20 0 -25 C8 -20 4 -8 0 0" fill="#E69110" transform={`rotate(${i * 22.5})`} />
        ))}
        {Array.from({ length: 16 }).map((_, i) => (
          <path key={i} d="M0 0 C-3 -6 -6 -16 0 -20 C6 -16 3 -6 0 0" fill="#F3B323" transform={`rotate(${i * 22.5 + 11.25})`} opacity="0.95" />
        ))}
        <circle cx="0" cy="0" r="9" fill="#3D2314" stroke="#2B160C" strokeWidth="0.8" />
        <circle cx="0" cy="0" r="6" fill="#241208" />
      </g>

      {/* Small Sunflower */}
      <g transform="translate(95, 175) scale(0.8)">
        {Array.from({ length: 14 }).map((_, i) => (
          <path key={i} d="M0 0 C-3 -6 -6 -16 0 -20 C6 -16 3 -6 0 0" fill="#F6C344" transform={`rotate(${i * 25.7})`} />
        ))}
        <circle cx="0" cy="0" r="7" fill="#3D2314" />
      </g>

      {/* Daisies */}
      <g transform="translate(100, 135) scale(0.9)">
        {Array.from({ length: 12 }).map((_, i) => (
          <ellipse key={i} cx="0" cy="-10" rx="3.2" ry="10" fill="#FFFFFF" transform={`rotate(${i * 30})`} />
        ))}
        <circle cx="0" cy="0" r="4.5" fill="#EAD575" stroke="#E6A115" strokeWidth="0.5" />
      </g>
      <g transform="translate(25, 115) scale(0.75)">
        {Array.from({ length: 12 }).map((_, i) => (
          <ellipse key={i} cx="0" cy="-10" rx="3.2" ry="10" fill="#FFFFFF" transform={`rotate(${i * 30})`} />
        ))}
        <circle cx="0" cy="0" r="4.5" fill="#EAD575" stroke="#E6A115" strokeWidth="0.5" />
      </g>
    </svg>
    
    {/* Torn label text */}
    <div className="bouquet-torn-label">
      <div>today is</div>
      <div>all about</div>
      <div>you ♡</div>
    </div>
  </div>
);

// Flower & Washi Tape Bottom Right Corner component
const DashboardRightBouquet = () => (
  <div className="deco-right-bouquet">
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <path d="M40 80 C30 65 35 55 45 45" stroke="#8CA095" strokeWidth="1.2" />
      {/* Daisies */}
      <g transform="translate(60, 60) scale(0.85)">
        {Array.from({ length: 12 }).map((_, i) => (
          <ellipse key={i} cx="0" cy="-10" rx="3.2" ry="10" fill="#FFFFFF" transform={`rotate(${i * 30})`} />
        ))}
        <circle cx="0" cy="0" r="4.5" fill="#EAD575" stroke="#E6A115" strokeWidth="0.5" />
      </g>
      <g transform="translate(30, 45) scale(0.7)">
        {Array.from({ length: 12 }).map((_, i) => (
          <ellipse key={i} cx="0" cy="-10" rx="3.2" ry="10" fill="#FFFFFF" transform={`rotate(${i * 30})`} />
        ))}
        <circle cx="0" cy="0" r="4.5" fill="#EAD575" stroke="#E6A115" strokeWidth="0.5" />
      </g>
    </svg>
    
    {/* Gingham washi tape with music note */}
    <div className="deco-gingham-tape">
      <svg viewBox="0 0 24 24" fill="currentColor" className="music-note-icon">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
      </svg>
    </div>
  </div>
);

// Sunflower button at bottom center
const SunflowerButton = () => (
  <div className="deco-sunflower-button">
    <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
      {Array.from({ length: 16 }).map((_, i) => (
        <path
          key={i}
          d="M50 50 C45 35 40 10 50 5 C60 10 55 35 50 50"
          fill="#F3B323"
          transform={`rotate(${i * 22.5} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="14" fill="#3D2314" stroke="#2B160C" strokeWidth="1" />
      <circle cx="50" cy="50" r="10" fill="#241208" />
    </svg>
  </div>
);

// Floating butterflies
const FloatingButterfly = ({ style, rotate = 0 }) => (
  <svg
    viewBox="0 0 100 100"
    className="deco-butterfly"
    style={{
      position: 'absolute',
      width: '32px',
      height: '32px',
      pointerEvents: 'none',
      zIndex: 2,
      transform: `rotate(${rotate}deg)`,
      filter: 'drop-shadow(0 2px 5px rgba(72, 47, 24, 0.15))',
      ...style
    }}
  >
    <path d="M50 50 C20 15 5 35 15 65 C25 85 45 70 50 55" fill="#FFEAA0" stroke="#D98A0F" strokeWidth="1.5" />
    <path d="M50 50 C80 15 95 35 85 65 C75 85 55 70 50 55" fill="#FFEAA0" stroke="#D98A0F" strokeWidth="1.5" />
    <path d="M50 42 L50 68" stroke="#8A6E45" strokeWidth="2" strokeLinecap="round" />
    <path d="M50 42 C48 35 43 32 43 32" stroke="#8A6E45" strokeWidth="1" />
    <path d="M50 42 C52 35 57 32 57 32" stroke="#8A6E45" strokeWidth="1" />
  </svg>
);

// Custom SVG Icons for tags
const LetterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#8A6E45" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}>
    <rect x="3" y="4" width="18" height="15" rx="2.5" />
    <path d="M3 6.5 l9 6.5 l9 -6.5" />
    <path d="M12 12.5 c-0.6 -0.6 -1.6 -0.6 -2.2 0 c-0.6 0.6 -0.6 1.6 0 2.2 l2.2 2.2 l2.2 -2.2 c0.6 -0.6 0.6 -1.6 0 -2.2 c-0.6 -0.6 -1.6 -0.6 -2.2 0" fill="#E69110" stroke="none" />
  </svg>
);

const CameraIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#8A6E45" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}>
    <path d="M20 21H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2z" />
    <circle cx="12" cy="13" r="4" />
    <path d="M12 15 c-0.5 -0.5 -1.2 -0.5 -1.7 0 c-0.5 0.5 -0.5 1.2 0 1.7 l1.7 1.7 l1.7 -1.7 c0.5 -0.5 0.5 -1.2 0 -1.7 c-0.5 -0.5 -1.2 -0.5 -1.7 0" transform="translate(12, 13) scale(0.35) translate(-12, -13)" fill="#E69110" stroke="none" />
    <circle cx="18" cy="8" r="1.2" fill="#8A6E45" stroke="none" />
  </svg>
);

const CakeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#8A6E45" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}>
    <path d="M4 18 h16 v3 a1 1 0 0 1 -1 1 h-14 a1 1 0 0 1 -1 -1 v-3 z" />
    <path d="M6 11 h12 v7 h-12 z" />
    <path d="M6 13 q3 -2 6 0 q3 -2 6 0" />
    <line x1="12" y1="7" x2="12" y2="11" />
    <path d="M12 4 c-0.5 0.8 -0.5 1.6 0 2.2 c0.5 -0.6 0.5 -1.4 0 -2.2" fill="#FFEAA0" stroke="#EAD575" strokeWidth="0.5" />
  </svg>
);

// Detailed 3D Gift Box Component with Floral Wraps and Bows
const PremiumGiftBox = ({ boxId }) => (
  <div className="premium-giftbox">
    {/* Box body */}
    <div className="box-body">
      {/* Box Lid */}
      <div className="box-lid">
        <div className="lid-ribbon-vertical"></div>
        <div className="lid-ribbon-horizontal"></div>
      </div>

      {/* Box Base */}
      <div className="box-base">
        <div className="base-ribbon-vertical"></div>
      </div>

      {/* Golden Satin Bow on top */}
      <div className="box-bow-container">
        <svg viewBox="0 0 100 80" className="gold-bow-svg" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 3px 6px rgba(72, 47, 24, 0.12))' }}>
          {/* Left loop */}
          <path d="M50 40 C30 15 8 20 8 38 C8 52 30 46 50 40" fill="#FFE066" stroke="#E6A115" strokeWidth="1.5" />
          <path d="M50 40 C35 22 15 25 15 38" fill="none" stroke="#FFF5B8" strokeWidth="1" />
          {/* Right loop */}
          <path d="M50 40 C70 15 92 20 92 38 C92 52 70 46 50 40" fill="#FFE066" stroke="#E6A115" strokeWidth="1.5" />
          <path d="M50 40 C65 22 85 25 85 38" fill="none" stroke="#FFF5B8" strokeWidth="1" />
          
          {/* Bow tails */}
          <path d="M50 40 C42 56 30 72 15 76" fill="none" stroke="#FFE066" strokeWidth="5.5" strokeLinecap="round" />
          <path d="M50 40 C42 56 30 72 15 76" fill="none" stroke="#E6A115" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M50 40 C58 56 70 72 85 76" fill="none" stroke="#FFE066" strokeWidth="5.5" strokeLinecap="round" />
          <path d="M50 40 C58 56 70 72 85 76" fill="none" stroke="#E6A115" strokeWidth="1.2" strokeLinecap="round" />
          
          {/* Center Daisy */}
          <g transform="translate(50, 40) scale(0.95)">
            {Array.from({ length: 12 }).map((_, i) => (
              <ellipse key={i} cx="0" cy="-10" rx="3.2" ry="10" fill="#FFFFFF" transform={`rotate(${i * 30})`} />
            ))}
            <circle cx="0" cy="0" r="4.5" fill="#FFEAA0" stroke="#E6A115" strokeWidth="0.8" />
          </g>
        </svg>
      </div>

      {/* Small Baby's breath sprig tucked in the bow */}
      <div className="box-sprig">
        <svg viewBox="0 0 40 40">
          <path d="M10 30 C18 22 25 15 28 8" stroke="#8CA095" strokeWidth="1" />
          <circle cx="28" cy="8" r="2" fill="#FFFFFF" />
          <circle cx="28" cy="8" r="0.6" fill="#EAD575" />
          <path d="M18 23 C24 20 28 17 31 14" stroke="#8CA095" strokeWidth="0.8" />
          <circle cx="31" cy="14" r="1.8" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Hanging tag */}
      <div className="box-hanging-tag">
        <div className="tag-string-svg">
          <svg viewBox="0 0 20 40" fill="none">
            <path d="M10 0 C8 15 5 28 10 38" stroke="#8A6E45" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
        <div className="tag-card">
          {boxId === 'box1' && <LetterIcon />}
          {boxId === 'box2' && <CameraIcon />}
          {boxId === 'box3' && <CakeIcon />}
          <div className="tag-heart">♡</div>
        </div>
      </div>
    </div>
  </div>
);

export default function SurpriseDashboard({ completedBoxes, onSelectBox, onEnterGarden }) {
  const allOpened = completedBoxes.box1 && completedBoxes.box2 && completedBoxes.box3;

  const boxes = [
    {
      id: 'box1',
      title: 'Letter For You',
      subtext: 'a few words from my heart',
      completed: completedBoxes.box1,
    },
    {
      id: 'box2',
      title: 'Memory Lane',
      subtext: 'moments we\'ve collected',
      completed: completedBoxes.box2,
    },
    {
      id: 'box3',
      title: 'Birthday Surprise',
      subtext: 'make a wish ✦',
      completed: completedBoxes.box3,
    },
  ];

  return (
    <div className="dashboard-container">
      <style>{`
        .dashboard-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 950px;
          min-height: 85vh;
          position: relative;
          z-index: 10;
        }

        .dashboard-header {
          text-align: center;
          margin-bottom: 50px;
          position: relative;
        }

        .dashboard-intro-hint {
          font-family: var(--font-hand);
          font-size: 26px;
          color: #D98A0F;
          font-weight: bold;
          margin-bottom: 6px;
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.6);
        }

        .dashboard-title-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          position: relative;
        }

        .title-heart {
          font-size: 26px;
          color: #E6A115;
          margin-left: 2px;
          display: inline-block;
          transform: translateY(2px);
        }

        .dashboard-title {
          font-family: var(--font-serif);
          font-size: 56px;
          font-weight: bold;
          color: #8A6E45;
          margin: 0;
          text-shadow: 0 1px 3px rgba(255, 255, 255, 0.8);
        }

        .dashboard-desc {
          font-family: var(--font-hand);
          font-size: 20px;
          font-weight: bold;
          line-height: 1.4;
          color: #8A6E45;
          max-width: 520px;
          margin: 14px auto 0 auto;
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.6);
        }

        .boxes-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 45px;
          width: 100%;
          margin-bottom: 50px;
          justify-items: center;
          position: relative;
          z-index: 5;
        }

        .box-card-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: pointer;
        }

        .box-title-text {
          font-family: var(--font-serif);
          font-size: 22px;
          color: #8A6E45;
          margin-top: 20px;
          font-weight: bold;
        }

        .box-sub-text {
          font-family: var(--font-hand);
          font-size: 16px;
          font-weight: bold;
          color: #B59929;
          opacity: 0.95;
          margin-top: 4px;
          margin-bottom: 12px;
        }

        .status-badge {
          font-size: 11px;
          font-weight: bold;
          letter-spacing: 1.5px;
          color: #8A6E45;
          background-color: rgba(255, 253, 220, 0.6);
          border: 1px solid rgba(230, 161, 21, 0.2);
          padding: 4px 12px;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          text-transform: uppercase;
        }

        .status-badge.unopened {
          opacity: 0.8;
        }

        .badge-leaf {
          font-size: 12px;
        }

        .garden-btn-container {
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 5;
        }

        .garden-btn {
          background-color: #E6A115;
          color: var(--white);
          font-family: var(--font-serif);
          font-size: 15px;
          letter-spacing: 1.5px;
          padding: 16px 36px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(230, 161, 21, 0.3);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .garden-btn:hover {
          background-color: #D98A0F;
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 12px 30px rgba(230, 161, 21, 0.45);
        }

        .garden-btn:active {
          transform: translateY(1px) scale(0.99);
        }

        /* 3D Premium Gift Box Styles */
        .premium-giftbox {
          position: relative;
          width: 200px;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 600px;
        }

        .box-body {
          position: relative;
          width: 170px;
          height: 155px;
          background-color: #FFFCE8;
          background-image: 
            radial-gradient(#FFFFFF 20%, transparent 20%),
            radial-gradient(#FFFFFF 20%, transparent 20%);
          background-size: 16px 16px;
          background-position: 0 0, 8px 8px;
          border-radius: 20px;
          box-shadow: 
            inset 0 3px 6px rgba(255, 255, 255, 0.8),
            0 15px 35px rgba(72, 47, 24, 0.1);
          border: 1.5px solid rgba(230, 161, 21, 0.15);
          display: flex;
          flex-direction: column;
          transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .base-ribbon-vertical {
          position: absolute;
          left: calc(50% - 13px);
          top: 0;
          width: 26px;
          height: 100%;
          background: linear-gradient(to right, #FFE066 0%, #F5C22A 50%, #FFE066 100%);
          border-left: 1px solid rgba(230, 161, 21, 0.2);
          border-right: 1px solid rgba(230, 161, 21, 0.2);
          z-index: 2;
        }

        .box-lid {
          position: absolute;
          top: -6px;
          left: -4px;
          width: 178px;
          height: 38px;
          background-color: #FFFCE8;
          background-image: 
            radial-gradient(#FFFFFF 20%, transparent 20%),
            radial-gradient(#FFFFFF 20%, transparent 20%);
          background-size: 16px 16px;
          background-position: 0 0, 8px 8px;
          border-radius: 8px 8px 6px 6px;
          box-shadow: 0 4px 10px rgba(72, 47, 24, 0.08), inset 0 2px 2px rgba(255,255,255,0.7);
          border: 1.5px solid rgba(230, 161, 21, 0.15);
          z-index: 5;
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: top center;
        }

        .lid-ribbon-vertical {
          position: absolute;
          left: calc(50% - 14px);
          top: 0;
          width: 28px;
          height: 100%;
          background: linear-gradient(to right, #FFE066 0%, #F5C22A 50%, #FFE066 100%);
          border-left: 1px solid rgba(230, 161, 21, 0.2);
          border-right: 1px solid rgba(230, 161, 21, 0.2);
          z-index: 2;
        }

        .lid-ribbon-horizontal {
          position: absolute;
          top: calc(50% - 7px);
          left: 0;
          width: 100%;
          height: 14px;
          background: linear-gradient(to bottom, #FFE066 0%, #F5C22A 50%, #FFE066 100%);
          border-top: 1px solid rgba(230, 161, 21, 0.2);
          border-bottom: 1px solid rgba(230, 161, 21, 0.2);
          z-index: 2;
        }

        .box-bow-container {
          position: absolute;
          top: -38px;
          left: calc(50% - 48px);
          width: 96px;
          height: 76px;
          z-index: 6;
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .box-sprig {
          position: absolute;
          top: -24px;
          left: 20px;
          width: 38px;
          height: 38px;
          z-index: 4;
          transform: rotate(-15deg);
          pointer-events: none;
        }

        .box-hanging-tag {
          position: absolute;
          top: 25px;
          left: calc(50% - 24px);
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 8;
          transform: rotate(-4deg);
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .tag-string-svg {
          width: 12px;
          height: 24px;
          margin-bottom: -4px;
        }

        .tag-card {
          width: 48px;
          height: 64px;
          background: #FFFDF4;
          border: 1px solid #EAD575;
          border-radius: 6px;
          box-shadow: 0 4px 10px rgba(72, 47, 24, 0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 4px;
        }

        .tag-heart {
          font-size: 8px;
          color: #E6A115;
          margin-top: -2px;
        }

        /* Hover animations */
        .box-card-container:hover .box-body {
          transform: translateY(2px);
          box-shadow: 0 8px 24px rgba(72, 47, 24, 0.12);
        }

        .box-card-container:hover .box-lid {
          transform: translateY(-16px) rotateX(-5deg);
        }

        .box-card-container:hover .box-bow-container {
          transform: translateY(-12px) scale(1.05);
        }

        .box-card-container:hover .box-hanging-tag {
          transform: translateY(-2px) rotate(8deg);
        }

        /* Decorative Polaroid */
        .deco-polaroid {
          position: absolute;
          left: -110px;
          top: -25px;
          width: 140px;
          background: #FFFFFF;
          padding: 8px 8px 14px 8px;
          box-shadow: -8px 12px 28px rgba(72, 47, 24, 0.08);
          transform: rotate(-12deg);
          border-radius: 4px;
          z-index: 2;
          border: 1px solid rgba(0,0,0,0.03);
        }

        .deco-washi-tape {
          position: absolute;
          top: -12px;
          left: calc(50% - 35px);
          width: 70px;
          height: 18px;
          background-color: rgba(248, 231, 165, 0.85);
          background-image: repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(230, 161, 21, 0.15) 4px, rgba(230, 161, 21, 0.15) 8px);
          backdrop-filter: blur(1px);
          transform: rotate(3deg);
          border-left: 1px dashed rgba(255,255,255,0.4);
          border-right: 1px dashed rgba(255,255,255,0.4);
        }

        .polaroid-img-wrapper {
          width: 124px;
          height: 136px;
          overflow: hidden;
          border: 1px solid rgba(0,0,0,0.04);
          border-radius: 2px;
        }

        .polaroid-caption-text {
          font-family: var(--font-hand);
          font-size: 11px;
          color: #6C5A3E;
          text-align: center;
          margin-top: 8px;
          font-weight: bold;
        }

        /* Torn Note clip note */
        .deco-torn-note {
          position: absolute;
          right: -100px;
          top: -35px;
          width: 130px;
          background-color: #FFFDF0;
          border-left: 2px solid rgba(230, 161, 21, 0.15);
          box-shadow: 8px 10px 24px rgba(72, 47, 24, 0.08);
          transform: rotate(8deg);
          padding: 22px 14px 14px 14px;
          z-index: 2;
          font-family: var(--font-hand);
          color: #6C5A3E;
          clip-path: polygon(
            0% 0%, 100% 0%, 98% 10%, 100% 20%, 97% 30%, 100% 40%, 98% 50%, 100% 60%, 97% 70%, 100% 80%, 99% 90%, 95% 100%,
            80% 98%, 60% 100%, 40% 97%, 20% 100%, 0% 96%
          );
        }

        .deco-paperclip {
          position: absolute;
          top: -8px;
          right: 35px;
          width: 18px;
          height: 28px;
          z-index: 3;
          transform: rotate(-10deg);
        }

        .note-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
          align-items: center;
          text-align: center;
        }

        .handwriting-line {
          font-size: 13px;
          font-weight: bold;
          line-height: 1.2;
        }

        /* Bouquet Bottom Left */
        .deco-left-bouquet {
          position: absolute;
          left: -130px;
          bottom: -70px;
          width: 200px;
          height: 200px;
          z-index: 4;
          pointer-events: none;
        }

        .bouquet-torn-label {
          position: absolute;
          left: 80px;
          bottom: 50px;
          background-color: #FFFDF0;
          padding: 8px 10px;
          box-shadow: 3px 5px 12px rgba(72, 47, 24, 0.08);
          transform: rotate(-5deg);
          border-left: 2.5px solid #F3B323;
          font-family: var(--font-hand);
          font-size: 11px;
          font-weight: bold;
          color: #6C5A3E;
          line-height: 1.25;
          text-align: center;
          border-radius: 2px;
          clip-path: polygon(
            0% 0%, 100% 0%, 98% 15%, 100% 30%, 97% 45%, 100% 60%, 98% 75%, 100% 90%, 96% 100%,
            80% 98%, 60% 100%, 40% 97%, 20% 100%, 0% 96%
          );
        }

        /* Bouquet Bottom Right */
        .deco-right-bouquet {
          position: absolute;
          right: -90px;
          bottom: -50px;
          width: 140px;
          height: 140px;
          z-index: 4;
          pointer-events: none;
        }

        .deco-gingham-tape {
          position: absolute;
          right: 25px;
          bottom: 25px;
          width: 48px;
          height: 22px;
          background-color: rgba(140, 160, 149, 0.7);
          background-image: 
            repeating-linear-gradient(90deg, rgba(255,255,255,0.2) 0px, rgba(255,255,255,0.2) 4px, transparent 4px, transparent 8px),
            repeating-linear-gradient(0deg, rgba(255,255,255,0.2) 0px, rgba(255,255,255,0.2) 4px, transparent 4px, transparent 8px);
          transform: rotate(-35deg);
          border-radius: 1px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }

        .music-note-icon {
          width: 12px;
          height: 12px;
          color: #FFFFFF;
        }

        /* Center flower button */
        .deco-sunflower-button {
          position: absolute;
          bottom: -60px;
          left: calc(50% - 22px);
          width: 44px;
          height: 44px;
          background-color: #FFFDF0;
          border-radius: 50%;
          border: 1px solid rgba(230, 161, 21, 0.2);
          box-shadow: 0 4px 10px rgba(72, 47, 24, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          z-index: 4;
        }

        /* Responsive Design */
        @media (max-width: 980px) {
          .boxes-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }

          .box-card-container:nth-child(3) {
            grid-column: span 2;
          }

          .deco-polaroid {
            left: -40px;
            top: -50px;
            transform: scale(0.8) rotate(-10deg);
          }

          .deco-torn-note {
            right: -30px;
            top: -50px;
            transform: scale(0.8) rotate(6deg);
          }

          .deco-left-bouquet {
            left: -60px;
            bottom: -80px;
            transform: scale(0.8);
          }

          .deco-right-bouquet {
            right: -40px;
            bottom: -60px;
            transform: scale(0.8);
          }
        }

        @media (max-width: 580px) {
          .dashboard-title {
            font-size: 38px;
          }

          .dashboard-desc {
            font-size: 16px;
          }

          .boxes-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .box-card-container:nth-child(3) {
            grid-column: span 1;
          }

          .deco-polaroid, .deco-torn-note, .deco-left-bouquet, .deco-right-bouquet {
            display: none !important;
          }
        }
      `}</style>

      {/* Decorative Polaroid, notes, and bouquets */}
      <DashboardPolaroid />
      <DashboardTornNote />
      <DashboardLeftBouquet />
      <DashboardRightBouquet />
      <SunflowerButton />

      {/* Floating Butterflies */}
      <FloatingButterfly style={{ left: '23%', top: '22%' }} rotate={-15} />
      <FloatingButterfly style={{ right: '18%', top: '35%' }} rotate={25} />
      <FloatingButterfly style={{ left: '28%', top: '75%' }} rotate={45} />

      {/* Header */}
      <div className="dashboard-header">
        <div className="dashboard-intro-hint">✦ you're in ✦</div>
        <div className="dashboard-title-wrapper">
          <h1 className="dashboard-title">Choose Your Surprise</h1>
          <span className="title-heart">♡</span>
        </div>
        <p className="dashboard-desc">
          Three little boxes, tied with love. <br />
          Open them in any order — but open them all.
        </p>
      </div>

      {/* Boxes Grid */}
      <div className="boxes-grid">
        {boxes.map((box) => (
          <motion.div
            key={box.id}
            className="box-card-container"
            onClick={() => onSelectBox(box.id)}
            whileHover={{
              y: -8,
              rotate: [0, -1, 1, -1, 1, 0],
              transition: {
                y: { duration: 0.3 },
                rotate: { duration: 0.5, repeat: Infinity, repeatType: "mirror" }
              }
            }}
          >
            <PremiumGiftBox boxId={box.id} />
            <div className="box-title-text">{box.title}</div>
            <div className="box-sub-text">{box.subtext}</div>

            {box.completed ? (
              <div className="status-badge">
                <span className="badge-leaf">🍃</span> OPENED <span className="badge-leaf">🍃</span>
              </div>
            ) : (
              <div className="status-badge unopened">
                <span className="badge-leaf">🍃</span> MYSTERY BOX <span className="badge-leaf">🍃</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Secret Garden Button Trigger */}
      <div className="garden-btn-container">
        {allOpened && (
          <motion.button
            className="garden-btn"
            onClick={onEnterGarden}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            ✦ ENTER THE SECRET GARDEN ✦
          </motion.button>
        )}
      </div>
    </div>
  );
}
