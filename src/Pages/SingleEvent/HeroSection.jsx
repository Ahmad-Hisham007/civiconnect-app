import React from 'react';

const HeroSection = () => {
    const event =
    {
        id: 1,
        title: "Digital Bangladesh Summit 2026",
        description: "Transforming traditional businesses into digital enterprises with cutting-edge technology",
        image: "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?_gl=1*1kji8jo*_ga*ODIyMzk2ODEwLjE3NjE0NzExODU.*_ga_8JE65Q40S6*czE3NjI5NzYwMzgkbzUkZzEkdDE3NjI5NzYwNzIkajI2JGwwJGgw",
        date: "15, Mar - 2026",
        location: "Dhaka, Bangladesh",
        type: "Seminar",
        attendees: "200+ People registered",
        buttonText: "Buy Ticket Now"
    }

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
                {event.title}
            </p>
        </ section>
    );
};

export default HeroSection;