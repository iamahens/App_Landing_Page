// src/components/HeroSection.js
import React from 'react';
import FloatingElements from './FloatingElements'; // Make sure this import path is correct

// Note: In a real project, you would install and import Swiper like this:
// npm install swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import FeatureCard from './FeatureCard';
import Carousel from './Carousel';
import TabSection from './TabSection'
import ProjectShowcaseCarousel from './ProjectShowcaseCarousel'

// For this demo, we'll create a simplified version that mimics Swiper's behavior
function HeroSection() {
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

  // Simplified carousel state for demo
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);

  // Auto-play functionality
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
      {/* Swiper CSS simulation */}
      <style>{`
        /* ... (Your existing CSS styles remain here) ... */
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
          box-shadow:
            0 25px 50px -12px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
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

        .slide-prev .mobile-phone,
        .slide-next .mobile-phone {
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


          /* Custom fluid font size for the heading on small screens */
@media (max-width: 639px) { /* Applies to screens smaller than 'sm' breakpoint */
    .mobile-fluid-heading {
        font-size: calc(1.75rem + 1.5vw); /* Responsive font size based on viewport width */
    }
}

/* Custom CSS for a fluid, responsive heading */
.hero-main-heading {
    /* Fluid font size: scales smoothly between 2rem and 4rem on small screens */
    font-size: clamp(2rem, 5vw + 1rem, 4rem);
    
    /* Prevents the element from becoming wider than its parent */
    max-width: 95%; 
    
    /* Centers the block element horizontally */
    margin-left: auto;
    margin-right: auto;

    /* Ensures the text is always centered within the element */
    text-align: center;
}

/* Override for larger screens (tablets and desktops) */
@media (min-width: 768px) {
    .hero-main-heading {
        /* Scales fluidly between 4rem and 7rem on larger screens */
        font-size: clamp(4rem, 7vw + 1rem, 7rem);
        max-width: 100%; /* Allow it to use full width on desktop */
    }
}
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 font-sans flex flex-col items-center p-4 relative overflow-hidden">
        {/* Floating Elements (Background) */}
        <FloatingElements />

        {/* Header/Logo Section */}
        <header className="w-full py-6 flex justify-center sticky top-0 bg-gradient-to-br from-blue-100 to-purple-100 z-20">
          <div className="flex items-center space-x-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-800"
            >
              <path
                d="M12 2L2 7V17L12 22L22 17V7L12 2ZM12 4.472L20 8.886V15.114L12 19.528L4 15.114V8.886L12 4.472ZM12 11.5L17 8.75L12 6L7 8.75L12 11.5Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-lg font-bold text-gray-800">FUTURE DESKS</span>
          </div>
        </header>

        {/* Main Hero Content */}
        <main className="flex flex-col items-center text-center p-4 pt-16 z-10">
          {/* Main Heading */}
 
          {/* Subheading/Paragraph */}


<h1 class="
  text-xl            /* Base font size for mobile (e.g., 30px) */
  sm:text-4xl         /* Larger on small screens and up (e.g., 48px) */
  md:text-5xl         /* Even larger on medium screens and up (e.g., 60px) */
  lg:text-7xl         /* Massive on large desktops (e.g., 72px) */
  font-bold
  text-gray-700 mb-8 
  max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-6xl /* Control max width for readability */
  mx-auto             /* Center the heading horizontally */
  px-4                /* Add horizontal padding */
">
Build Your First Mobile App <br class="hidden lg:inline" /> With US
</h1>


          <p class="
  text-base           /* Default for smallest screens */
  sm:text-lg          /* Larger on small screens and up */
  md:text-xl          /* Even larger on medium screens and up */
  text-gray-700 mb-8
  max-w-xs sm:max-w-md lg:max-w-2xl /* Control max width for readability */
  mx-auto             /* Center the paragraph itself horizontally */
  px-4                /* Add horizontal padding */
">
  If you also want to make an APP for your startup then book free consultancy today and let's start your startup together.
</p>

          {/* Action Buttons */}
         {/* Action Buttons Container */}
<div class="
  flex flex-col sm:flex-row /* Stack vertically on small, row on small+ */
  space-y-4 sm:space-y-0   /* Vertical spacing for stacked, no vertical space when in a row */
  sm:space-x-4             /* Horizontal spacing when in a row */
  mb-12
  w-full                   /* Full width on smallest screens */
  max-w-sm                 /* Limit width on very small screens */
  sm:max-w-lg              /* Limit width on small screens (e.g., tablets) */
  lg:max-w-xl              /* Limit width on large screens (desktops) */
  mx-auto                  /* Center this container horizontally */
  justify-center           /* Center the buttons *within* this container */
  px-4                     /* Add horizontal padding to the container */
">
  {/* Your WhatsApp button goes here */}

            <button className="flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 w-full sm:w-auto">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.21 22L7.43 20.64C8.87 21.49 10.46 21.93 12.04 21.93C17.5 21.93 21.95 17.48 21.95 12.02C21.95 6.57 17.5 2 12.04 2ZM16.59 15.15C16.34 15.68 15.09 16.32 14.82 16.39C14.56 16.47 14.31 16.5 13.84 16.27C13.37 16.04 11.86 15.47 10.04 13.81C8.6 12.55 7.61 11.06 7.33 10.59C7.05 10.12 7.13 9.88 7.36 9.66C7.56 9.46 7.83 9.17 8.05 8.91C8.27 8.65 8.36 8.49 8.5 8.19C8.64 7.89 8.57 7.64 8.47 7.42C8.37 7.2 7.63 5.42 7.32 4.74C7.01 4.06 6.71 4.13 6.47 4.13C6.23 4.13 5.86 4.13 5.59 4.13C5.32 4.13 4.88 4.24 4.51 4.65C4.15 5.06 3.65 5.57 3.65 6.5C3.65 7.43 4.38 8.35 4.48 8.47C4.59 8.59 5.94 10.63 7.26 11.8C8.59 12.97 9.68 13.3 9.94 13.43C10.21 13.56 10.47 13.53 10.7 13.29C10.94 13.05 11.58 12.72 12.29 12.1C13.29 11.24 14.04 11.01 14.3 10.93C14.56 10.85 15.19 10.62 15.74 11.45C16.29 12.28 16.48 12.8 16.59 13.04C16.7 13.28 16.7 13.41 16.65 13.53C16.6 13.65 16.52 13.85 16.38 14.04C16.24 14.23 16.11 14.36 15.99 14.49C15.87 14.62 15.74 14.77 15.88 15.01C16.02 15.25 16.34 15.68 16.59 15.15Z" />
              </svg>
              WhatsApp
            </button>
            <button className="flex items-center justify-center px-6 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:bg-pink-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-75 w-full sm:w-auto">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07c1.325.063 2.115.354 2.665.579.55.225.99.549 1.488 1.048.498.498.822.938 1.047 1.488.225.55.516 1.34.578 2.664.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.063 1.32-.354 2.11-.579 2.66-.225.55-.549.99-1.048 1.488-.498.498-.822.938-1.488 1.047-.55.225-1.34-.516-2.664-.578-1.265.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.32-.063-2.11-.354-2.66-.579-.55-.225-.99-.549-1.488-1.048-.498-.498-.822-.938-1.047-1.488-.225-.55-.516-1.34-.578-2.664-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.063-1.32.354-2.11.579 2.66.225-.55.549-.99 1.048-1.488.498-.498.938-.822 1.488-1.047.55-.225 1.34-.516 2.664-.578 1.265-.058 1.645-.07 4.85-.07zm0 2.883c-3.267 0-3.676.012-4.947.07c-1.178.056-1.78.307-2.164.465-.384.158-.667.356-.96.649-.293.293-.491.576-.649.96-.158.384-.409.986-.465 2.164-.058 1.271-.07 1.68-.07 4.947s.012 3.676.07 4.947c.056 1.178.307 1.78.465 2.164.158.384.356.667.649.96.293.293.491.576.649.96.384.158.986.409 2.164.465 1.271.058 1.68.07 4.947.07s3.676-.012 4.947-.07c1.178-.056 1.78-.307 2.164-.465-.384-.158-.667-.356-.96-.649-.293-.293-.576-.491-.96-.649-.384-.158-.986-.409-2.164-.465-1.271-.058-1.68-.07-4.947-.07zm0 5.811c-2.31 0-4.197 1.887-4.197 4.197s1.887 4.197 4.197 4.197 4.197-1.887 4.197-4.197-1.887-4.197-4.197-4.197zm0 7.02c-3.766 0-6.823-3.057-6.823-6.823s3.057-6.823 6.823-6.823 6.823 3.057 6.823 6.823-3.057 6.823-6.823 6.823zm5.25-9.186c-.786 0-1.424.638-1.424 1.424s.638 1.424 1.424 1.424 1.424-.638 1.424-1.424-.638-1.424-1.424-1.424z" />
              </svg>
              Instagram
            </button>
          </div>

          {/* Mobile Screens Carousel Section - Swiper Style */}
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

            {/* Navigation Arrows */}
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

          {/* Custom Pagination */}
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
        </main>
      </div>
 
        <TabSection />
            <FeatureCard />
               <ProjectShowcaseCarousel />
    </>
  );
}

export default HeroSection;