import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ start = 0, end, duration = 2000 }) => {
    const [count, setCount] = useState(start);
    const counterRef = useRef(null);

    useEffect(() => {
        let observer;
        let animationFrameId;

        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let startTime = null;
                    const animate = (timestamp) => {
                        if (!startTime) startTime = timestamp;
                        const progress = timestamp - startTime;
                        const increment = (end - start) * (progress / duration);
                        let nextCount = start + increment;

                        if (nextCount >= end) {
                            nextCount = end;
                        }

                        if (Number.isInteger(end)) {
                            setCount(Math.min(Math.floor(nextCount), end));
                        } else {
                            setCount(parseFloat(Math.min(nextCount, end).toFixed(1)));
                        }
                        
                        if (nextCount < end) {
                            animationFrameId = requestAnimationFrame(animate);
                        }
                    };
                    animationFrameId = requestAnimationFrame(animate);
                }
            });
        };

        if (counterRef.current) {
            observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
            observer.observe(counterRef.current);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [end, start, duration]);

    // Format large numbers with commas
    const formatNumber = (num) => {
        if (num >= 1000) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return num;
    };

    return (
        <span ref={counterRef} className="text-2xl font-bold text-gray-900">
            {formatNumber(count)}
            {/* The '+' is now handled by the formatNumber logic for integers */}
        </span>
    );
};


const AboutSection = () => {
  return (
    // The outer section is now simpler
    <section className="py-16 bg-white">
      {/* --- CHANGE IS HERE ---
        Using a max-width container with mx-auto creates the left/right margins on larger screens.
        The px-* classes inside this container handle padding on smaller screens.
        This is a standard and robust way to create centered, spaced content.
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              About Us
            </h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              We Build for Every Industry
            </h3>
            <div className="border-b-4 border-blue-500 w-12 mb-6"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Hikups, we provide seamless solutions for businesses across all industries. Whether you're running a tech startup, an ecommerce store, or a SaaS platform, our team ensures your digital product runs smooth—without the hiccups. From healthtech to fintech, edtech to logistics—We make it easy for you.
            </p>
            
          </div>
          <div className="relative">
            <img
              src="/images/about.png"
              alt="About Us Illustration"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 bg-white bg-opacity-80 backdrop-filter backdrop-blur-md w-full py-6 px-6 rounded-b-lg shadow-md">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <AnimatedCounter end={4.7} />
                  <span className="text-gray-600 block text-sm mt-1">Reviews</span>
                </div>
                <div>
                  <AnimatedCounter end={13} />
                  <span className="text-gray-600 block text-sm mt-1">Awards</span>
                </div>
                <div>
                  <AnimatedCounter end={100000} />
                  <span className="text-gray-600 block text-sm mt-1">Downloads</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;