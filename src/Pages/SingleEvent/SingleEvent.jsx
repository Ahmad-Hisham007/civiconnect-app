import React, { useContext } from 'react';
import HeroSection from './HeroSection';
import { ThemeContext } from '../../Contexts/ThemeContext';
import { BiCategoryAlt } from "react-icons/bi";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-router';

const SingleEvent = () => {
    const { isDark } = useContext(ThemeContext)
    const event =
    {
        id: 1,
        title: "Digital Bangladesh Summit 2026",
        description: "Mark your calendars for a landmark event in the heart of Bangladesh's technological evolution. The Digital Bangladesh Summit 2026, scheduled for March 15th in the dynamic capital of Dhaka, is not just another seminar—it is a definitive call to action for business leaders, visionary entrepreneurs, and innovative thinkers ready to shape the future of the nation's economy. As we move deeper into the 21st century, the line between traditional industry and digital enterprise is blurring.This summit is designed to be the crucible where this transformation is forged.We are gathering the brightest minds and the most successful pioneers to provide a comprehensive roadmap for businesses of all sizes to not just adapt, but to thrive in the new digital economy.The summit will delve deep into the practical applications of groundbreaking technologies such as Artificial Intelligence, Blockchain, the Internet of Things(IoT), and Big Data Analytics, demonstrating how they can solve real- world business challenges, streamline operations, and unlock unprecedented growth.",
        image: "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?_gl=1*1kji8jo*_ga*ODIyMzk2ODEwLjE3NjE0NzExODU.*_ga_8JE65Q40S6*czE3NjI5NzYwMzgkbzUkZzEkdDE3NjI5NzYwNzIkajI2JGwwJGgw",
        date: "15, Mar - 2026",
        location: "Dhaka, Bangladesh",
        type: "Seminar",
        attendees: "200+ People registered",
        buttonText: "Buy Ticket Now"
    }
    return (
        <div>
            <HeroSection />
            <section className='py-20'>
                <div className='max-w-300 mx-auto grid grid-cols-3 gap-8'>

                    {/* Left Column */}

                    <div className='col-span-2'>
                        <img className='rounded-2xl' src={event.image} />
                        <div className='flex items-center gap-2 mt-6'>
                            <span className='w-10 h-10 bg-purple-300 text-stable-100 flex justify-center items-center rounded-full'><BiCategoryAlt /></span>
                            <p className='text-base font-semibold'>In: {event.type}</p>
                        </div>
                        <div className='mt-6'>
                            <h2 className='font-semibold text-2xl'>{event.title}</h2>

                            <p className='font-normal mt-5'>
                                {event.description}
                            </p>
                        </div>
                    </div>

                    {/* Right column */}

                    <div className='col-span-1 h-full'>
                        <div className='md:sticky  top-22'>
                            <div className={`${isDark ? "bg-[#ffffff31]" : "bg-purple-100"} p-8 rounded-lg space-y-5`}>
                                <div className={`${isDark ? "border-neutral-400" : "border-purple-300"}  border border-dotted rounded-lg px-5 py-3`}>
                                    <h4 className='text-base-content font-bold'>Date</h4>
                                    <p className={`text-xs ${isDark ? "text-neutral-300" : "text-gray-500"}`}>{event.date}</p>
                                </div>
                                <div className={`${isDark ? "border-neutral-400" : "border-purple-300"}  border border-dotted rounded-lg px-5 py-3`}>
                                    <h4 className='text-base-content font-bold'>Location</h4>
                                    <p className={`text-xs ${isDark ? "text-neutral-300" : "text-gray-500"}`}>{event.location}</p>
                                </div>
                            </div>
                            <div className={`${isDark ? "bg-[#ffffff31]" : "bg-purple-100"} p-8 mt-6 rounded-lg space-y-5`}>
                                <Link to="/register" className="btn border-0 bg-linear-to-br from-stable-100 via-primary to-light-accent hover:opacity-80 transition-all duration-200  text-white text-base p-[17px_30px]! h-auto! rounded-[60px] shadow-none flex gap-3 items-center hover:text-white hover:bg-primary"> Join now <HiArrowNarrowRight className='text-xl' /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SingleEvent;