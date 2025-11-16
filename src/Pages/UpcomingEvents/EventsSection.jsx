import React, { useContext, useEffect, useRef, useState } from 'react';
import { FaRegCalendarAlt } from "react-icons/fa";
import { ThemeContext } from '../../Contexts/ThemeContext';
import { GrLocation } from "react-icons/gr";
import { BiCategoryAlt } from "react-icons/bi";
import { Link } from 'react-router';
import { HiArrowNarrowRight } from "react-icons/hi";
import AuthProvider from '../../Contexts/AuthProvider/AuthProvider';
import { DataLoadingContext } from '../../Contexts/DataLoading';
import Loading from '../../Components/Loading/Loading';
import getTodayInFormat from '../../Utils/getTodayInFormat.js/getTodayInFormat';


const EventsSection = () => {
    const { isDark } = useContext(ThemeContext);
    const { isDataLoading, startLoading } = useContext(DataLoadingContext);
    const [events, setEvents] = useState([]);
    const hasFetched = useRef(false);

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;
        function fetchData() {
            const today = getTodayInFormat();
            console.log(today);
            const dataPromise = fetch(`http://localhost:3000/events?filterDate=${encodeURIComponent(today)}`)
                .then(res => res.json())
                .then(data => {
                    setEvents(data);
                    return data;
                });

            startLoading(
                dataPromise,
                'Loading events...',
                'Events loaded',
                'Failed to load events'
            );
        }
        fetchData();
    }, []);
    console.log(events)

    if (isDataLoading) {
        return <Loading />
    }
    return (
        <div className="max-w-[1440px] mx-auto px-4 py-12">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">Social Development Sessions Lineup</h1>
                <p className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"}`} >The Future Unfolds - Day by Day</p>
            </div>

            {/* Events List */}
            <div className="space-y-8">
                {events.map((event) => (
                    <div key={event._id} className={`flex flex-col lg:flex-row p-5 lg:gap-9 gap-5 text-base-content  border   border-purple-300 ${isDark ? "bg-[#fbb4fd54] [&_p]:text-white" : "bg-purple-50 [&_p]:text-gray-600"} rounded-2xl`} >
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
                                <h5 className='text-base lg:text-right text-center'>Claim Your Spot at <strong>{event.price > 0 ? `৳${event.price}` : `Free`}</strong></h5>
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