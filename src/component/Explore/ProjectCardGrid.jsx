// src/components/ProjectCardGrid.js
import React from 'react';
import ProjectCard from './ProjectCard'; // Import the reusable card component

const projectsData = [
  {
    id: 1,
    title: 'Restaurant App',
    image: '/images/updated-restaurant.webp',
    description: 'Launch an app for your restaurant within minutes and take your business to a new level. Create and publish native apps for Android and iOS.',
  },
  {
    id: 2,
    title: 'Clinic App',
    image: '/images/updated-clinic.webp',
    description: 'Our code-free clinic app builder simplifies app development for all. Create your own app and manage appointments with ease.',
  },
  {
    id: 3,
    title: 'Car Rental App',
    image: '/images/updated-car-rental.webp',
    description: 'AppMySite’s code-free car rental app builder simplifies and fast tracks app development. Create feature rich, white-labeled and native apps.',
  },
  {
    id: 4,
    title: 'E-commerce App',
    image: '/images/updated-ecommerce.webp',
    description: 'Create a powerful mobile shopping experience with personalized recommendations, secure checkout, and robust inventory management.',
  },
  {
    id: 5,
    title: 'Fitness App',
    image: '/images/updated-fitness.webp',
    description: 'A comprehensive fitness and workout planner to help users achieve their health goals with personalized routines and progress tracking.',
  },
  {
    id: 6,
    title: 'Real Estate App',
    image: '/images/updated-real-estate.webp',
    description: 'Showcase properties with high-quality images and virtual tours. An intuitive app for buyers and agents to connect and close deals faster.',
  },
  {
    id: 7,
    title: 'Social Media App',
    image: '/images/updated-dating.webp',
    description: 'Build a community-driven platform for connecting people with shared interests. Features include private messaging, groups, and news feeds.',
  },
  {
    id: 8,
    title: 'Education App',
    image: '/images/updated-education.webp',
    description: 'Deliver engaging learning content with interactive quizzes and progress tracking. A native app for students and teachers.',
  },
  {
    id: 9,
    title: 'Event Management App',
    image: '/images/updated-event.webp',
    description: 'Simplify event planning and management. Sell tickets, manage RSVPs, and keep attendees informed with real-time updates.',
  },
  {
    id: 10,
    title: 'On-demand Services App',
    image: '/images/updated-deal.webp',
    description: 'Connect users with local service providers in real-time. Features include booking, payment processing, and user ratings.',
  },
  {
    id: 11,
    title: 'Travel & Booking App',
    image: '/images/updated-travel.webp',
    description: 'A beautiful app for discovering new destinations and booking flights, hotels, and tours with ease. Integrated payment gateways and trip planners.',
  },
  {
    id: 12,
    title: 'Music Streaming App',
    image: '/images/updated-music.webp',
    description: 'Develop a high-quality music streaming platform with offline listening, personalized playlists, and seamless user experience.',
  },
  {
    id: 13,
    title: 'News & Magazine App',
    image: '/images/updated-news.webp',
    description: 'Deliver up-to-date news and articles in a native format. Features include push notifications, dark mode, and customizable feeds.',
  },
  {
    id: 14,
    title: 'Food Delivery App',
    image: '/images/updated-food.webp',
    description: 'A seamless platform for users to order food from their favorite local restaurants. Real-time tracking and secure payment options.',
  },
  {
    id: 15,
    title: 'Podcast App',
    image: 'images/updated-video.webp',
    description: 'Discover and listen to your favorite podcasts with features like offline downloads, playback speed control, and episode bookmarking.',
  },
];

const ProjectCardGrid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Responsive grid for the cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCardGrid;