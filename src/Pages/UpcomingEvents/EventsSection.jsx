import React, { useContext } from 'react';
import { FaRegCalendarAlt } from "react-icons/fa";
import { ThemeContext } from '../../Contexts/ThemeContext';
import { GrLocation } from "react-icons/gr";
import { BiCategoryAlt } from "react-icons/bi";
import { Link } from 'react-router';
import { HiArrowNarrowRight } from "react-icons/hi";



const EventsSection = () => {
    const { isDark } = useContext(ThemeContext)

    const events = [
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
        },
        {
            id: 2,
            title: "Startup Dhaka Innovation Workshop",
            description: "Hands-on workshop for aspiring entrepreneurs and startup founders",
            image: "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?_gl=1*1kji8jo*_ga*ODIyMzk2ODEwLjE3NjE0NzExODU.*_ga_8JE65Q40S6*czE3NjI5NzYwMzgkbzUkZzEkdDE3NjI5NzYwNzIkajI2JGwwJGgw",
            date: "22, Apr - 2026",
            location: "Bangladesh ICT Incubator",
            type: "Workshop",
            attendees: "150+ People registered",
            buttonText: "Buy Ticket Now"
        },
        {
            id: 3,
            title: "Fintech Revolution Webinar",
            description: "Exploring the future of digital payments and financial technology in Bangladesh",
            image: "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?_gl=1*1kji8jo*_ga*ODIyMzk2ODEwLjE3NjE0NzExODU.*_ga_8JE65Q40S6*czE3NjI5NzYwMzgkbzUkZzEkdDE3NjI5NzYwNzIkajI2JGwwJGgw",
            date: "08, May - 2026",
            location: "Online Event",
            type: "Webinar",
            attendees: "300+ People registered",
            buttonText: "Join Free"
        },
        {
            id: 4,
            title: "RMG Industry 4.0 Conference",
            description: "Modernizing ready-made garments sector with automation and AI integration",
            image: "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?_gl=1*1kji8jo*_ga*ODIyMzk2ODEwLjE3NjE0NzExODU.*_ga_8JE65Q40S6*czE3NjI5NzYwMzgkbzUkZzEkdDE3NjI5NzYwNzIkajI2JGwwJGgw",
            date: "18, Jun - 2026",
            location: "Chittagong, Bangladesh",
            type: "Conference",
            attendees: "180+ People registered",
            buttonText: "Buy Ticket Now"
        },
        {
            id: 5,
            title: "AgriTech Farmers Meetup",
            description: "Connecting farmers with technology solutions for sustainable agriculture",
            image: "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?_gl=1*1kji8jo*_ga*ODIyMzk2ODEwLjE3NjE0NzExODU.*_ga_8JE65Q40S6*czE3NjI5NzYwMzgkbzUkZzEkdDE3NjI5NzYwNzIkajI2JGwwJGgw",
            date: "05, Jul - 2026",
            location: "Rajshahi, Bangladesh",
            type: "Offline",
            attendees: "250+ People registered",
            buttonText: "Register Now"
        },
        {
            id: 6,
            title: "Bangladesh E-commerce Expo",
            description: "Largest gathering of e-commerce entrepreneurs and digital marketers",
            image: "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?_gl=1*1kji8jo*_ga*ODIyMzk2ODEwLjE3NjE0NzExODU.*_ga_8JE65Q40S6*czE3NjI5NzYwMzgkbzUkZzEkdDE3NjI5NzYwNzIkajI2JGwwJGgw",
            date: "12, Aug - 2026",
            location: "Dhaka, Bangladesh",
            type: "Exhibition",
            attendees: "400+ People registered",
            buttonText: "Get Pass"
        }
    ];

    return (
        <div className="max-w-[1440px] mx-auto px-4 py-12">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">Business Growth Sessions Lineup</h1>
                <p className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"}`} >The Future Unfolds - Day by Day</p>
            </div>

            {/* Events List */}
            <div className="space-y-8">
                {events.map((event) => (
                    <div className={`flex flex-col lg:flex-row p-5 lg:gap-9 gap-5 text-base-content  border   border-purple-300 ${isDark ? "bg-[#fbb4fd54] [&_p]:text-white" : "bg-purple-50 [&_p]:text-gray-600"} rounded-2xl`} >
                        <div className='flex-1'>
                            <img src={event.image} className='rounded-2xl max-h-[190px] object-cover w-full' />
                        </div>
                        <div className='flex-2 flex flex-col justify-between lg:gap-6 gap-3'>
                            <div className='flex lg:flex-row flex-col w-full lg:gap-4 gap-2 lg:items-center items-start'>
                                <div className='flex items-center gap-2'>
                                    <FaRegCalendarAlt />
                                    <p className='text-sm'>{event.date}</p>
                                </div>
                                <div className={`h-3.5 w-px ${isDark ? "bg-neutral-500" : "bg-purple-200"} hidden lg:block`} ></div>
                                <div className='flex items-center gap-2'>
                                    <GrLocation />
                                    <p className='text-sm'>{event.location}</p>
                                </div>
                            </div>
                            <div className='max-w-[320px]' >
                                <h2 className='font-bold  leading-snug text-stable-100 text-2xl'> <Link to="/single-event">{event.title}</Link> </h2>
                            </div>
                            <p className='max-w-[400px]'>{event.description}</p>

                        </div>
                        <div className={`lg:h-[180px] lg:w-px wp-full h-px ${isDark ? "bg-neutral-500" : "bg-purple-200"}`} ></div>
                        <div className='flex-1 flex flex-col lg:items-end items-start justify-center'>
                            <div className='flex items-center gap-2'>
                                <span className='w-10 h-10 bg-purple-300 text-stable-100 flex justify-center items-center rounded-full'><BiCategoryAlt /></span>
                                <p className='text-base font-semibold'>{event.type}</p>
                            </div>
                            <div className='mt-6 lg:w-auto w-full'>
                                <h5 className='text-base lg:text-right text-center'>Claim Your <strong>Spot</strong></h5>
                                <Link to="/register" className="btn mt-3 border-0 bg-linear-to-br from-stable-100 via-primary to-light-accent hover:opacity-80 transition-all duration-200  text-white text-base p-[17px_30px]! h-auto! rounded-[60px] shadow-none flex gap-3 items-center hover:text-white hover:bg-primary"> Join now <HiArrowNarrowRight className='text-xl' /></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventsSection;