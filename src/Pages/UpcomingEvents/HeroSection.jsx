import React from 'react';

const HeroSection = () => {
    return (
        < section
            className="relative overflow-hidden md:pt-64 pt-34 bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center"
            style={{
                backgroundImage: "url(/hero_area_image_3.jpg)"
            }}
        >
            <h3 className="text-xl md:text-5xl md:text-left text-center font-bold text-indigo-200  leading-tight font-cursive">
                Find Your Next Experience
            </h3>

            {/* Subheading */}
            <p className="text-2xl md:text-[80px] md:text-left text-center font-bold text-white mb-12 leading-auto">
                Upcoming Events
            </p>
        </ section>
    );
};

export default HeroSection;