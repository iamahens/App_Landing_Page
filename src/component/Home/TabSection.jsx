// src/components/FeatureCard.jsx
import React, { useState, useRef, useEffect } from 'react';

const FeatureCard = () => {
    const tabsData = [
        {
            id: 'fast',
            label: 'Fast',
            title: 'Fast Performance',
            heading: 'Experience lightning-fast speeds',
            description: 'Our technology ensures incredibly fast performance, allowing for seamless user experiences and quick load times. See the speed in action.',
            visual: (
                <video
                    src="/images/vdo1.mp4"
                    autoPlay
                    loop
                    muted
                    poster="https://placehold.co/600x400/cccccc/000000?text=Fast+Video"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            ),
            buttonText: 'See More Examples',
            buttonLink: '#fast-examples'
        },
        {
            id: 'productive',
            label: 'Productive',
            title: 'Boost Your Productivity',
            heading: 'Work smarter, not harder',
            description: 'Our platform is designed to enhance your productivity, providing you with the tools and features you need to achieve more in less time. Watch how it transforms your workflow.',
            visual: (
                <video
                     src="/images/vdo2.mp4"
                    autoPlay
                    loop
                    muted
                    poster="https://placehold.co/600x400/cccccc/000000?text=Productive+Video"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            ),
            buttonText: 'Explore Features',
            buttonLink: '#productive-features'
        },
        {
            id: 'flexible',
            label: 'Flexible',
            title: 'Enjoy Ultimate Flexibility',
            heading: 'Adapt to any situation',
            description: 'Our flexible solutions can be tailored to meet your specific needs, providing you with the adaptability required in today\'s dynamic environment. See how flexible we can be.',
            visual: (
                <video
                     src="/images/vdo3.mp4"
                    autoPlay
                    loop
                    muted
                    poster="https://placehold.co/600x400/cccccc/000000?text=Flexible+Video"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            ),
            buttonText: 'Discover Possibilities',
            buttonLink: '#flexible-solutions'
        },
        {
            id: 'expressive',
            label: 'Expressive',
            title: 'Create Expressive Experiences',
            heading: 'Bring your ideas to life visually',
            description: 'Our tools allow you to create rich and expressive user interfaces and content that truly captivate your audience. Watch the power of expression.',
            visual: (
                <video
                     src="/images/vdo1.mp4"
                    autoPlay
                    loop
                    muted
                    poster="https://placehold.co/600x400/cccccc/000000?text=Expressive+Video"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            ),
            buttonText: 'Explore Creative Tools',
            buttonLink: '#expressive-tools'
        },
        {
            id: 'stable',
            label: 'Stable',
            title: 'Enjoy a Stable Foundation',
            heading: 'Built for reliability',
            description: 'Our platform is built on a stable and reliable foundation, ensuring consistent performance and a dependable experience. See our stability in action.',
            visual: (
                <video
                    src="/images/vdo2.mp4"
                    autoPlay
                    loop
                    muted
                    poster="https://placehold.co/600x400/cccccc/000000?text=Stable+Video"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            ),
            buttonText: 'Learn About Our Infrastructure',
            buttonLink: '#stable-infrastructure'
        },
        {
            id: 'open_source',
            label: 'Open Source',
            title: 'Embrace Open Source Power',
            heading: 'Collaborate and innovate freely',
            description: 'Being open source fosters collaboration and innovation, allowing for continuous improvement and community-driven development. Watch the spirit of open source.',
            visual: (
                <video
                     src="/images/vdo3.mp4"
                    autoPlay
                    loop
                    muted
                    poster="https://placehold.co/600x400/cccccc/000000?text=Open+Source+Video"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            ),
            buttonText: 'Explore on GitHub',
            buttonLink: '#open-source-repo'
        },
    ];

    const [activeTab, setActiveTab] = useState(tabsData[0].id);
    const videoRefs = useRef([]);

    useEffect(() => {
        // Pause all videos first
        videoRefs.current.forEach(video => {
            if (video) {
                video.pause();
            }
        });
        
        // Then play the active one
        const activeVideo = videoRefs.current[tabsData.findIndex(tab => tab.id === activeTab)];
        if (activeVideo) {
            activeVideo.play().catch(e => console.error("Video playback failed:", e));
        }
    }, [activeTab]);

    return (
        <section className="py-16 px-4 ">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-12">
                    Experience the power of our platform
                </h2>

                <div className="inline-flex bg-gray-200 rounded-full p-1 mb-12 flex-wrap justify-center">
                    {tabsData.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                                px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out
                                ${activeTab === tab.id
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'text-gray-700 hover:bg-gray-300 hover:text-gray-900'
                                }
                                m-1 md:m-0.5
                            `}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="bg-transparent p-6 md:p-12 text-left relative min-h-[500px]">
                    {tabsData.map((tab, index) => (
                        <div
                            key={tab.id}
                            className={`
                                absolute inset-0 transition-opacity duration-500 ease-in-out
                                ${activeTab === tab.id ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}
                            `}
                        >
                            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
                                <div className="flex-1 w-full max-w-lg md:max-w-none">
                                    <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                                        {React.cloneElement(tab.visual, { ref: el => videoRefs.current[index] = el })}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                                        {tab.heading}
                                    </h3>
                                    <p className="text-base sm:text-lg text-gray-700 mb-6">
                                        {tab.description}
                                    </p>
                                    {tab.buttonText && tab.buttonLink && (
                                        <a
                                            href={tab.buttonLink}
                                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out shadow-md"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {tab.buttonText}
                                            <svg className="ml-2 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M11 3a1 1 0 100 2h3.586l-7.293 7.293a1 1 0 101.414 1.414L16 6.414V10a1 1 0 102 0V4a1 1 0 00-1-1h-6z" />
                                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureCard;