// src/components/ProjectShowcaseCarousel.js
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles and modules for a clean, fading effect
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Import required modules
import { EffectFade, Pagination, Navigation, Autoplay } from 'swiper/modules';

function ProjectShowcaseCarousel() {
    // Sample data for your mobile app projects
    const projects = [
        {
            id: 1,
            title: 'Finance Tracker App',
            description: 'An intuitive mobile app for personal finance management, budgeting, and expense tracking. Key features include data visualization and secure cloud sync.',
            image: 'https://placehold.co/400x800/A0E7E5/000000?text=Finance+App',
            link: '#project1',
            buttonText: 'View Case Study',
        },
        {
            id: 2,
            title: 'Fitness & Workout Planner',
            description: 'A personalized workout routine and progress tracker. The app features AI-driven recommendations and an easy-to-use interface for a healthier lifestyle.',
            image: 'https://placehold.co/400x800/F0B27A/000000?text=Fitness+App',
            link: '#project2',
            buttonText: 'See it in Action',
        },
        {
            id: 3,
            title: 'Recipe & Cooking Assistant',
            description: 'An assistant app for food lovers, helping them discover new recipes, create smart shopping lists, and follow step-by-step cooking instructions with a hands-free mode.',
            image: 'https://images.unsplash.com/photo-1581093556272-3580459a933f?q=80&w=2670&auto=format&fit=crop',
            link: '#project3',
            buttonText: 'Explore Features',
        },
        {
            id: 4,
            title: 'Smart Home Control',
            description: 'A sleek and unified interface to manage all your smart home devices. Control lighting, temperature, and security systems from a single, beautiful app.',
            image: 'https://images.unsplash.com/photo-1588872657578-7efd1f155551?q=80&w=2670&auto=format&fit=crop',
            link: '#project4',
            buttonText: 'Learn More',
        },

         {
            id: 5,
            title: 'Visa App',
            description: 'A sleek and unified interface to manage all your smart home devices. Control lighting, temperature, and security systems from a single, beautiful app.',
            image: 'https://images.unsplash.com/photo-1588872657578-7efd1f155551?q=80&w=2670&auto=format&fit=crop',
            link: '#project5',
            buttonText: 'Learn More',
        },
    ];

    return (
        <section className="py-16 px-4 ">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-12">
                    Featured Mobile App Projects
                </h2>

                <div className="relative">
                    <Swiper
                        effect={'fade'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{ 
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        navigation={true}
                        modules={[EffectFade, Pagination, Navigation, Autoplay]}
                        className="project-swiper"
                        style={{
                            width: '100%',
                            height: '500px',
                            overflow: 'hidden'
                        }}
                    >
                        {projects.map((project) => (
                            <SwiperSlide key={project.id}>
                                <div className="w-full h-full bg-white relative">
                                    {/* Mobile Layout */}
                                    <div className="block md:hidden w-full h-full p-6">
                                        <div className="flex flex-col items-center justify-center h-full space-y-6">
                                            {/* Phone Mockup */}
                                            <div className="relative w-40 h-80 bg-gray-100 rounded-3xl p-1.5 shadow-xl">
                                                <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => { 
                                                            e.target.onerror = null; 
                                                            e.target.src = `https://placehold.co/400x800/cccccc/000000?text=${project.title.replace(/\s/g, '+')}`; 
                                                        }}
                                                    />
                                                </div>
                                                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-2 bg-gray-800 rounded-full"></div>
                                            </div>
                                            
                                            {/* Content */}
                                            <div className="text-center space-y-4">
                                                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed px-2">{project.description}</p>
                                                <a
                                                    href={project.link}
                                                    className="inline-flex items-center px-4 py-2 border-2 border-blue-600 text-sm font-medium rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300"
                                                >
                                                    {project.buttonText}
                                                    <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M11 3a1 1 0 100 2h3.586l-7.293 7.293a1 1 0 101.414 1.414L16 6.414V10a1 1 0 102 0V4a1 1 0 00-1-1h-6z" />
                                                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Desktop Layout */}
                                    <div className="hidden md:block w-full h-full">
                                        <div className="flex items-center justify-center h-full px-16 py-12">
                                            {/* Phone Mockup */}
                                            <div className="w-1/2 flex justify-center">
                                                <div className="relative w-56 h-[450px] bg-gray-100 rounded-[2.5rem] p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                                                    <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                                                        <img
                                                            src={project.image}
                                                            alt={project.title}
                                                            className="w-full h-full object-cover"
                                                            onError={(e) => { 
                                                                e.target.onerror = null; 
                                                                e.target.src = `https://placehold.co/400x800/cccccc/000000?text=${project.title.replace(/\s/g, '+')}`; 
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-gray-800 rounded-full"></div>
                                                </div>
                                            </div>
                                            
                                            {/* Content */}
                                            <div className="w-1/2 pl-12 text-left">
                                                <div className="max-w-lg space-y-6">
                                                    <h3 className="text-3xl font-bold text-gray-900 leading-tight">{project.title}</h3>
                                                    <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
                                                    <a
                                                        href={project.link}
                                                        className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-base font-medium rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 shadow-lg hover:shadow-xl"
                                                    >
                                                        {project.buttonText}
                                                        <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M11 3a1 1 0 100 2h3.586l-7.293 7.293a1 1 0 101.414 1.414L16 6.414V10a1 1 0 102 0V4a1 1 0 00-1-1h-6z" />
                                                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default ProjectShowcaseCarousel;