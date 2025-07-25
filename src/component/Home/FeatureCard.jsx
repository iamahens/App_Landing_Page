// src/components/FeatureCard.jsx
import React from 'react';

// A small, reusable component to render a single full-row card.
const SingleCard = ({ title, heading, description, buttonText, buttonLink, visual, listItems, reverseLayout }) => {
    return (
        <div className="bg-white rounded-lg shadow-xl overflow-hidden p-6 md:p-12 mb-8 mx-auto w-full max-w-7xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div
                className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 ${reverseLayout ? 'md:flex-row-reverse' : ''}`}
            >
                <div className="flex-1 text-center md:text-left">
                    {title && (
                        <h3 className="text-sm sm:text-base font-semibold text-blue-600 mb-2 uppercase tracking-wide">
                            {title}
                        </h3>
                    )}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                        {heading}
                    </h2>
                    {description && (
                        <p className="text-base sm:text-lg text-gray-700 max-w-prose mx-auto md:mx-0 mb-6">
                            {description}
                        </p>
                    )}
                    
                    {/* List of Content */}
                    {listItems && listItems.length > 0 && (
                        <ul className="text-left text-gray-800 space-y-2 mb-6 w-full max-w-prose mx-auto md:mx-0">
                            {listItems.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm sm:text-base">{item}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    {buttonText && buttonLink && (
                        <a href={buttonLink} className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out shadow-md" target="_blank" rel="noopener noreferrer">
                            {buttonText}
                            <svg className="ml-2 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M11 3a1 1 0 100 2h3.586l-7.293 7.293a1 1 0 101.414 1.414L16 6.414V10a1 1 0 102 0V4a1 1 0 00-1-1h-6z" />
                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                            </svg>
                        </a>
                    )}
                </div>
                
                {/* Visual Element (Image/SVG) with hover effect */}
                <div className="flex-1 max-w-xl md:max-w-2xl w-full">
                    <div className="relative w-full h-[400px] bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
                        {visual}
                    </div>
                </div>

            </div>
        </div>
    );
};

// This is the main component that you will import.
// It defines the data and renders all 5 cards in the requested alternating pattern.
const FeatureCard = () => {

    const cardsData = [
        {
            id: 1,
            title: "Developer Experience",
            heading: "Transform your workflow",
            description: "Take control of your codebase with automated testing, developer tooling, and everything else you need to build production-quality apps.",
            listItems: [
                "Hot Reload for instant UI updates",
                "Extensive debugging tools built-in",
                "Rich set of pre-built UI widgets",
                "Automated testing frameworks (unit, widget, integration)"
            ],
            visual: (
                <div className="relative w-full h-[400px] bg-white rounded-lg overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1627398242477-c9991d74a004?q=80&w=2670&auto=format&fit=crop" alt="Developer tools screenshot" className="absolute inset-0 w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400?text=Image+1'; }} />
                </div>
            ),
            buttonText: "Flutter for developers",
            buttonLink: "#developers"
        },
        {
            id: 2,
            title: "Stable & Reliable",
            heading: "Trusted by many",
            description: "Flutter is supported and used by Google, trusted by well-known brands around the world, and maintained by a community of global developers.",
            listItems: [
                "Native compilation for fast app startup",
                "Optimized rendering engine for smooth animations",
                "Consistent UI/UX across iOS and Android",
                "Memory efficiency for resource-constrained devices"
            ],
            visual: (
                <div className="relative w-full h-[400px] bg-white rounded-lg overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1549692520-acc6669f6e0b?q=80&w=2787&auto=format&fit=crop" alt="Team working together" className="absolute inset-0 w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400?text=Image+2'; }} />
                </div>
            ),
            buttonText: "Join the Community",
            buttonLink: "#community"
        },
        
      
    ];

    return (
        <section className="py-16 px-4 bg-gray-50 mt-5">
            <div className="max-w-7xl mx-auto">
                {cardsData.map((card, index) => (
                    <SingleCard
                        key={card.id}
                        title={card.title}
                        heading={card.heading}
                        description={card.description}
                        buttonText={card.buttonText}
                        buttonLink={card.buttonLink}
                        visual={card.visual}
                        listItems={card.listItems}
                        reverseLayout={index % 2 !== 0} // This is the logic for alternating
                    />
                ))}
            </div>
        </section>
    );
};

export default FeatureCard;