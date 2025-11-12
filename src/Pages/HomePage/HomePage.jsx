import React from 'react';
import HeroSection from './HeroSection';
import EventFeatures from './EventFeatures';
import EventsCarousel from './EventsCarousel';
import NewsletterSection from './NewsletterSection';

const HomePage = () => {
    return (
        <div className=''>
            <HeroSection></HeroSection>
            <EventFeatures />
            <EventsCarousel />
            <NewsletterSection />
        </div>
    );
};

export default HomePage;