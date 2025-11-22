import React, { useContext, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { IoLocationOutline } from "react-icons/io5";
import { ThemeContext } from '../../Contexts/ThemeContext';

const EventsCarousel = () => {
    const { isDark } = useContext(ThemeContext);

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const programs = [
        {
            id: 1,
            title: "Women Empowerment Program",
            description: "Skill development and entrepreneurship training for women in rural Bengal",
            image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            location: "Kolkata, West Bengal"
        },
        {
            id: 2,
            title: "Digital Literacy Initiative",
            description: "Providing computer education to underprivileged children across Bengal villages",
            image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            location: "Howrah District"
        },
        {
            id: 3,
            title: "Sustainable Agriculture Project",
            description: "Organic farming techniques and modern irrigation methods for farmers",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            location: "Burdwan, West Bengal"
        },
        {
            id: 4,
            title: "Healthcare Access Program",
            description: "Mobile medical units serving remote villages in Sundarbans region",
            image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            location: "Sundarbans Area"
        },
        {
            id: 5,
            title: "Education for All Campaign",
            description: "Building schools and providing educational materials in tribal areas",
            image: "https://www.ei-ie.org/image/2eY5LHcFkawnGUlOVoKlsYdiJObYPEWZVpYvkN1k.jpg/lead.jpg",
            location: "Jalpaiguri District"
        },
        {
            id: 6,
            title: "Clean Water Initiative",
            description: "Installing water purification systems in arsenic-affected areas",
            image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            location: "North 24 Parganas"
        }
    ];

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-12" data-aos="fade-up">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-base-content mb-4">
                    Most Recent Events Highlight
                </h2>
                <p className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`} >
                    Transforming communities through sustainable development initiatives across West Bengal
                </p>
            </div>

            <Swiper
                modules={[Navigation, Pagination, Thumbs, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 5000 }}
                loop={true}
                thumbs={{ swiper: thumbsSwiper }}
                className="main-swiper rounded-xl shadow-2xl mb-4 [&_.swiper-button-next_.swiper-navigation-icon]:text-primary [&_.swiper-button-prev_.swiper-navigation-icon]:text-primary [&_.swiper-button-next:hover]:text-secondary [&_.swiper-button-prev:hover]:text-secondary"
            >
                {programs.map((program) => (
                    <SwiperSlide key={program.id}>
                        <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden">
                            <img
                                src={program.image}
                                alt={program.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                    {program.title}
                                </h3>
                                <p className="text-lg mb-2">{program.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-purple-400 flex items-center gap-2"><IoLocationOutline /> {program.location}</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Thumbnail Carousel */}
            <Swiper
                modules={[Navigation, Thumbs]}
                spaceBetween={12}
                slidesPerView={4}
                watchSlidesProgress
                onSwiper={setThumbsSwiper}
                className="thumb-swiper rounded-lg"
                breakpoints={{
                    320: { slidesPerView: 2 },
                    768: { slidesPerView: 4 },
                }}
            >
                {programs.map((program, index) => (
                    <SwiperSlide key={index}>
                        <div className="cursor-pointer rounded-lg overflow-hidden border-2 border-transparent hover:border-primary transition-all duration-300">
                            <img
                                src={program.image}
                                alt={program.title}
                                className="w-full h-20 md:h-24 object-cover"
                            />
                            <div className="p-2 bg-white">
                                <p className="text-xs font-semibold text-primary truncate">
                                    {program.title}
                                </p>
                                <p className="text-xs text-gray-600 truncate">
                                    {program.location}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default EventsCarousel;