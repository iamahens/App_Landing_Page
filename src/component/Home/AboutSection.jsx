import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ start = 0, end, duration = 2000 }) => {
    const [count, setCount] = useState(start);
    const counterRef = useRef(null);

    useEffect(() => {
        let observer;
        let interval;

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
                            clearInterval(interval);
                        }

                        if (Number.isInteger(end)) {
                            setCount(Math.min(Math.floor(nextCount), end));
                        } else {
                            setCount(parseFloat(Math.min(nextCount, end).toFixed(1)));
                        }
                        
                        if (nextCount < end) {
                            requestAnimationFrame(animate);
                        }
                    };

                    requestAnimationFrame(animate);
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
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [end, start, duration]);

    return (
        <span ref={counterRef} className="text-2xl font-bold text-gray-900">
            {count}
            {Number.isInteger(end) ? '' : '+'}
        </span>
    );
};

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 xl:px-0">
        <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              Know This First
            </h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Some of the best features
            </h3>
            <div className="border-b-4 border-blue-500 w-12 mb-6"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
              sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
              nisi ut aliquid ex ea commodi consequatur.
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