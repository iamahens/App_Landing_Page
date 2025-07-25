// src/components/Carousel.js
import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

function Carousel() {
  // Placeholder images for the mobile app screens
  const mobileScreens = [
    { id: 1, src: 'https://placehold.co/250x500/A0E7E5/000000?text=App+Screen+1', alt: 'App Screen 1' },
    { id: 2, src: 'https://placehold.co/250x500/F0B27A/000000?text=App+Screen+2', alt: 'App Screen 2' },
    { id: 3, src: 'https://placehold.co/250x500/C8A2C8/000000?text=App+Screen+3', alt: 'App Screen 3' },
    { id: 4, src: 'https://placehold.co/250x500/E0BBE4/000000?text=App+Screen+4', alt: 'App Screen 4' },
    { id: 5, src: 'https://placehold.co/250x500/957DAD/000000?text=App+Screen+5', alt: 'App Screen 5' },
    { id: 6, src: 'https://placehold.co/250x500/B0E0E6/000000?text=App+Screen+6', alt: 'App Screen 6' },
    { id: 7, src: 'https://placehold.co/250x500/FFDAB9/000000?text=App+Screen+7', alt: 'App Screen 7' },
    { id: 8, src: 'https://placehold.co/250x500/957DAD/000000?text=App+Screen +8', alt: 'App Screen 8' },
    { id: 9, src: 'https://placehold.co/250x500/B0E0E6/000000?text=App+Screen +9', alt: 'App Screen 9' },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);

  React.useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mobileScreens.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, mobileScreens.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + mobileScreens.length) % mobileScreens.length);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mobileScreens.length);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <>
      <style>{`
        /* All original carousel CSS is here, isolated from the main component */
        .mobile-carousel {
          overflow: hidden;
          position: relative;
        }
        .mobile-carousel-wrapper {
          display: flex;
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
        }
        .mobile-slide {
          flex-shrink: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.4s ease;
        }
        .mobile-phone {
          position: relative;
          background: linear-gradient(145deg, #2d3748, #1a202c);
          border-radius: 2.5rem;
          padding: 0.25rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
        }
        .mobile-phone::before {
          content: '';
          position: absolute;
          top: 0.5rem;
          left: 50%;
          transform: translateX(-50%);
          width: 30%;
          height: 0.25rem;
          background: #4a5568;
          border-radius: 9999px;
          z-index: 10;
        }
        .mobile-phone::after {
          content: '';
          position: absolute;
          bottom: 0.5rem;
          left: 50%;
          transform: translateX(-50%);
          width: 25%;
          height: 0.25rem;
          background: #4a5568;
          border-radius: 9999px;
          z-index: 10;
        }
        .mobile-screen {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 2rem;
          background: #f7fafc;
        }
        .slide-active .mobile-phone {
          transform: scale(1) rotateY(0deg);
          opacity: 1;
          z-index: 3;
        }
        .slide-prev .mobile-phone, .slide-next .mobile-phone {
          transform: scale(0.85) rotateY(-15deg);
          opacity: 0.7;
          z-index: 2;
        }
        .slide-next .mobile-phone {
          transform: scale(0.85) rotateY(15deg);
        }
        .slide-far .mobile-phone {
          transform: scale(0.75) rotateY(-25deg);
          opacity: 0.4;
          z-index: 1;
        }
        .custom-pagination {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 2rem;
        }
        .pagination-bullet {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
          background: rgba(107, 114, 128, 0.3);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: none;
          outline: none;
        }
        .pagination-bullet:hover {
          background: rgba(107, 114, 128, 0.5);
          transform: scale(1.2);
        }
        .pagination-bullet-active {
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          box-shadow: 0 0 20px rgba(236, 72, 153, 0.6);
          transform: scale(1.3);
        }
        .navigation-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background: rgba(0, 0, 0, 0.7);
          border: none;
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        .navigation-btn:hover {
          background: rgba(0, 0, 0, 0.9);
          transform: translateY(-50%) scale(1.1);
        }
        .navigation-btn:active {
          transform: translateY(-50%) scale(0.95);
        }
        .nav-prev {
          left: 1rem;
        }
        .nav-next {
          right: 1rem;
        }
        @media (max-width: 640px) {
          .navigation-btn {
            width: 2.5rem;
            height: 2.5rem;
          }
          .nav-prev {
            left: 0.5rem;
          }
          .nav-next {
            right: 0.5rem;
          }
        }
      `}</style>
      
      {/* The isolated carousel JSX starts here */}
      <div 
        className="relative w-full max-w-5xl mx-auto py-8"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="mobile-carousel">
          <div 
            className="mobile-carousel-wrapper"
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% / 3 + ${100/3}%))`,
            }}
          >
            {mobileScreens.map((screen, index) => {
              const distance = Math.abs(index - currentIndex);
              const isActive = index === currentIndex;
              const isPrev = index === currentIndex - 1;
              const isNext = index === currentIndex + 1;
              const isFar = distance > 1;
              
              let slideClass = 'mobile-slide ';
              if (isActive) slideClass += 'slide-active';
              else if (isPrev) slideClass += 'slide-prev';
              else if (isNext) slideClass += 'slide-next';
              else if (isFar) slideClass += 'slide-far';

              return (
                <div 
                  key={screen.id} 
                  className={slideClass}
                  style={{ 
                    width: '33.333%',
                    minWidth: '200px'
                  }}
                >
                  <div 
                    className="mobile-phone"
                    style={{
                      width: isActive ? '280px' : '240px',
                      height: isActive ? '560px' : '480px',
                    }}
                  >
                    <img
                      src={screen.src}
                      alt={screen.alt}
                      className="mobile-screen"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/250x500/cccccc/000000?text=Image+Error`;
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button 
          className="navigation-btn nav-prev"
          onClick={goToPrevSlide}
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          className="navigation-btn nav-next"
          onClick={goToNextSlide}
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="custom-pagination">
        {mobileScreens.map((_, index) => (
          <button
            key={index}
            className={`pagination-bullet ${index === currentIndex ? 'pagination-bullet-active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}

export default Carousel;