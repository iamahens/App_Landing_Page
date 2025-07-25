// src/components/FloatingElements.js
import React from 'react';

const FloatingElements = () => {
  // Define your floating elements with their properties
  const elements = [
    // Bubbles (with translucent and slightly lighter colors)
    { type: 'bubble', size: 'w-12 h-12', color: 'rgba(173, 216, 230, 0.6)', icon: null, delay: '0s', duration: '15s' }, // Light Blue
    { type: 'bubble', size: 'w-8 h-8', color: 'rgba(221, 160, 221, 0.5)', icon: null, delay: '2s', duration: '12s' }, // Plum
    { type: 'bubble', size: 'w-16 h-16', color: 'rgba(255, 192, 203, 0.7)', icon: null, delay: '4s', duration: '18s' }, // Pink
    { type: 'bubble', size: 'w-10 h-10', color: 'rgba(144, 238, 144, 0.4)', icon: null, delay: '1s', duration: '10s' }, // Light Green
    { type: 'bubble', size: 'w-14 h-14', color: 'rgba(255, 255, 153, 0.6)', icon: null, delay: '3s', duration: '16s' }, // Light Yellow
    { type: 'bubble', size: 'w-12 h-12', color: 'rgba(175, 238, 238, 0.55)', icon: null, delay: '0.8s', duration: '14s' }, // Pale Turquoise
    { type: 'bubble', size: 'w-9 h-9', color: 'rgba(200, 180, 250, 0.65)', icon: null, delay: '2.5s', duration: '13s' }, // Light Lavender
    { type: 'bubble', size: 'w-11 h-11', color: 'rgba(250, 200, 220, 0.5)', icon: null, delay: '5s', duration: '19s' }, // Rosy Pink

    // App Development Icons (using simplified Material Design Icons paths)
    // Code Brackets Icon
    { type: 'icon', size: 'w-8 h-8', color: 'text-blue-600', icon: 'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z', delay: '0.5s', duration: '14s', spin: 'slow' },
    // Mobile Phone Icon
    { type: 'icon', size: 'w-7 h-7', color: 'text-purple-600', icon: 'M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z', delay: '2.5s', duration: '11s', spin: 'medium' },
    // Cloud Icon (for cloud computing/storage)
    { type: 'icon', size: 'w-9 h-9', color: 'text-pink-600', icon: 'M19.35 10.04C18.67 6.59 15.64 4 12 4c-3.72 0-6.75 2.68-7.77 6.2C2.86 11.83 2 13.8 2 16c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z', delay: '3.5s', duration: '17s', spin: 'slow' },
    // Settings/Gear Icon
    { type: 'icon', size: 'w-6 h-6', color: 'text-green-600', icon: 'M19.43 12.98c.08-.34.16-.67.16-1s-.08-.66-.16-1l2.45-1.87c.25-.19.32-.53.15-.81l-2-3.46c-.17-.29-.5-.4-.79-.2L16.2 6.1c-.57-.45-1.2-.81-1.87-1.1L13.79 2.4c-.09-.28-.35-.48-.65-.48h-4c-.3 0-.56.2-.65.48L7.67 5c-.67.29-1.3.65-1.87 1.1L3.2 4.7c-.29-.2-.62-.09-.79.2l-2 3.46c-.17.28-.1.62.15.81L4.6 11c-.08.33-.16.66-.16 1s.08.67.16 1l-2.45 1.87c-.25.19-.32.53-.15.81l2 3.46c.17.29.5.4.79.2l2.57-1.95c.57.45 1.2.81 1.87 1.1l.48 2.58c.09.28.35.48.65.48h4c.3 0 .56-.2.65-.48l.48-2.58c.67-.29 1.3-.65 1.87-1.1l2.57 1.95c.29.2.62.09.79-.2l2-3.46c.17-.28.1-.62-.15-.81L19.43 12.98zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z', delay: '1.5s', duration: '15s', spin: 'fast' },
    // Database/Storage Icon
    { type: 'icon', size: 'w-7 h-7', color: 'text-yellow-600', icon: 'M16 4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H8V6h8v12zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z', delay: '4.5s', duration: '10s', spin: 'slow' },
    // Another Code Icon (simpler angular brackets)
    { type: 'icon', size: 'w-9 h-9', color: 'text-teal-600', icon: 'M14 6l-3.5 4.5 3.5 4.5M10 6l-3.5 4.5 3.5 4.5', delay: '1s', duration: '16s', spin: 'none' },
    // Processor/Chip Icon
    { type: 'icon', size: 'w-8 h-8', color: 'text-red-500', icon: 'M6 11V7H2v4h4zm0 6H2v4h4v-4zm6-6v-4h-4v4h4zm0 6h-4v4h4v-4zm6-6v-4h-4v4h4zm0 6h-4v4h4v-4zM22 3H10c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H10V5h12v14z', delay: '2s', duration: '13s', spin: 'medium' },
  ];

  return (
    <>
      <style>{`
        /* Keyframes for the floating animation */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(10deg);
          }
          50% {
            transform: translateY(-40px) translateX(-10px) rotate(0deg);
          }
          75% {
            transform: translateY(-20px) translateX(5px) rotate(-10deg);
          }
        }

        /* Keyframes for smooth fading in and out */
        @keyframes fadeInOut {
            0% { opacity: 0; }
            10% { opacity: 0.7; } /* Increased peak opacity for visibility */
            90% { opacity: 0.7; }
            100% { opacity: 0; }
        }

        /* Keyframes for different spin speeds */
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinMedium {
          from { transform: rotate(0deg); }
          to { transform: rotate(720deg); }
        }
        @keyframes spinFast {
          from { transform: rotate(0deg); }
          to { transform: rotate(1080deg); }
        }

        /* NEW: Keyframes for the subtle hue rotation effect */
        @keyframes hueRotateEffect {
            0% { filter: hue-rotate(0deg); }
            50% { filter: hue-rotate(30deg); } /* Shifts hue by 30 degrees */
            100% { filter: hue-rotate(0deg); }
        }

        /* Base styles for all floating elements */
        .floating-element {
          position: absolute;
          border-radius: 9999px; /* For bubbles, icons remain square unless specified */
          opacity: 0; /* Start invisible, fadeInOut handles actual visibility */
          animation-name: float, fadeInOut, hueRotateEffect; /* Apply hue effect */
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
          pointer-events: none; /* Prevent interference with clicks on content below */
          z-index: 0; /* Ensure elements are in the background */
          animation-duration: var(--element-duration, 15s); /* Use variable for duration */
          animation-delay: var(--element-delay, 0s);       /* Use variable for delay */
        }
        
        /* Styles specific to bubble types */
        .floating-element.bubble {
            /* Background color set directly via inline style for RGBA translucency */
        }

        /* Styles specific to icon types */
        .floating-element.icon svg {
            width: 100%;
            height: 100%;
            display: block; /* Ensures SVG takes up full space */
        }

        /* Apply spin animations based on class */
        .spin-slow { animation: spinSlow 30s linear infinite; }
        .spin-medium { animation: spinMedium 20s linear infinite; }
        .spin-fast { animation: spinFast 10s linear infinite; }
      `}</style>
      <div className="absolute inset-0 overflow-hidden z-0">
        {elements.map((el, i) => {
            // Random initial positioning for diversity
            const top = `${Math.random() * 90}%`;
            const left = `${Math.random() * 90}%`;

            // Dynamic style for bubbles to apply RGBA color
            const bubbleStyle = el.type === 'bubble' ? { backgroundColor: el.color } : {};

          return (
            <div
              key={i}
              className={`floating-element ${el.size} ${el.type} ${el.icon ? el.color : ''} ${el.spin ? `spin-${el.spin}` : ''}`}
              style={{
                top: top,
                left: left,
                // Pass duration and delay as CSS variables to be used in the animation property
                '--element-duration': el.duration,
                '--element-delay': el.delay,
                ...bubbleStyle, // Apply custom style for translucent bubbles
              }}
            >
              {el.icon && (
                <svg
                  className="w-full h-full"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={el.icon} />
                </svg>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FloatingElements;