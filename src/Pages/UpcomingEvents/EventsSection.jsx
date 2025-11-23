import React, { useContext, useEffect, useState } from 'react';
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
import formatDateForDisplay from '../../Utils/formatDate';
import trimContent from '../../Utils/trimContent';
import displayPrice from '../../Utils/displayPrice';
import toast from 'react-hot-toast';


const EventsSection = () => {
    const { isDark } = useContext(ThemeContext);
    const [isDataLoading, setIsDataLoading] = useState(true);
    const [events, setEvents] = useState([]);
    // const [eventTypes, setEventTypes] = useState([]);
    // const eventTypes = [...new Set(events.map(event => event.type).filter(Boolean))];
    const [eventTypes, setEventTypes] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('all');
    const [isSearching, setIsSearching] = useState(false);


    // eslint-disable-next-line no-unused-vars
    function fetchData(search = searchTerm, type = selectedType) {
        try {
            const today = getTodayInFormat();


            let url = `https://civiconnect-server.vercel.app/events?filterDate=${encodeURIComponent(today)}`;

            if (search) {
                url += `&search=${search}`;
            }

            if (selectedType && selectedType !== 'all') {
                url += `&type=${type}`;
            }


            setIsSearching(true)
            // eslint-disable-next-line no-unused-vars
            const dataPromise = fetch(url)
                .then(async res => {
                    const data = await res.json();
                    if (!res.ok) {
                        setEvents([]);
                        setIsSearching(false);
                        throw new Error(data.error);
                    }
                    setEvents(data);
                    setIsSearching(false);

                    return data;
                })

            setIsDataLoading(false)
        } catch (error) {
            console.error(error);
            setIsSearching(false);
            toast.error(error)
        }
    }




    useEffect(() => {

        fetchData(searchTerm, selectedType);
    }, [searchTerm, selectedType]);

    useEffect(() => {
        if (events.length > 0 && eventTypes.length === 0) {
            const types = [...new Set(events.map(event => event.type).filter(Boolean))];
            setEventTypes(types);
        }
    }, [events]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
    };


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
            {/* SIMPLE Search and Filter */}


            {/* Filter Buttons */}
            <div className="flex gap-2 flex-wrap my-5">
                <form className='w-full flex md:flex-row flex-col justify-between md:items-stretch items-center gap-5'>
                    <div className=' basis-10 max-w-100 w-full flex-auto'>
                        <label className="input w-full">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" value={searchTerm} onChange={handleSearchChange} required placeholder="Search" className='placeholder-base-content!' />
                        </label>
                    </div>
                    <div className='max-w-100 w-full'>
                        <select onChange={handleTypeChange} value={selectedType} className="select max-w-100 w-full">
                            <option disabled={true}>Choose event type</option>
                            <option value="all">All Events</option>
                            {eventTypes?.map(type => {
                                return <option key={type} value={type}>{type}</option>
                            })}

                        </select>


                    </div>

                </form>
            </div>

            {/* Events List */}
            <div className="space-y-8">
                {
                    isSearching ? (
                        <Loading loadingText="Searching" className="max-h-400px" />
                    ) : events && events.length > 0 ? (
                        events.map((event) => (
                            <div data-aos="flip-up" data-aos-delay="120" key={event._id} className={`flex flex-col lg:flex-row p-5 lg:gap-9 gap-5 text-base-content border border-purple-300 ${isDark ? "bg-[#fbb4fd54] [&_p]:text-white" : "bg-purple-50 [&_p]:text-gray-600"} rounded-2xl`}>
                                <div className='flex-1'>
                                    <img src={event.image} className='rounded-2xl max-h-[190px] object-cover w-full' />
                                </div>
                                <div className='flex-2 flex flex-col justify-between lg:gap-6 gap-3'>
                                    <div className='flex lg:flex-row flex-col w-full lg:gap-4 gap-2 lg:items-center items-start'>
                                        <div className='flex items-center gap-2'>
                                            <FaRegCalendarAlt />
                                            <p className='text-sm'>{formatDateForDisplay(event.date)}</p>
                                        </div>
                                        <div className={`h-3.5 w-px ${isDark ? "bg-neutral-500" : "bg-purple-200"} hidden lg:block`}></div>
                                        <div className='flex items-center gap-2'>
                                            <GrLocation />
                                            <p className='text-sm'>{event.location}</p>
                                        </div>
                                    </div>
                                    <div className='max-w-[320px]'>
                                        <h2 className='font-bold leading-snug text-stable-100 text-2xl'>
                                            <Link to={`/single-event/${event._id}`}>{event.title}</Link>
                                        </h2>
                                    </div>
                                    <p className='max-w-[400px]'>{trimContent(event.description)}</p>
                                </div>
                                <div className={`lg:h-[180px] lg:w-px wp-full h-px ${isDark ? "bg-neutral-500" : "bg-purple-200"}`}></div>
                                <div className='flex-1 flex flex-col lg:items-end items-start justify-center'>
                                    <div className='flex items-center gap-2'>
                                        <span className='w-10 h-10 bg-purple-300 text-stable-100 flex justify-center items-center rounded-full'>
                                            <BiCategoryAlt />
                                        </span>
                                        <p className='text-base font-semibold'>{event.type}</p>
                                    </div>
                                    <div className='mt-6 lg:w-auto w-full'>
                                        <h5 className='text-base lg:text-right text-center'>
                                            Claim Your Spot at <strong>{displayPrice(event.price)}</strong>
                                        </h5>
                                        <Link
                                            to={`/single-event/${event._id}`}
                                            className="btn mt-3 border-0 bg-linear-to-br from-stable-100 via-primary to-light-accent hover:opacity-80 transition-all duration-200 text-white text-base p-[17px_30px]! h-auto! rounded-[60px] shadow-none flex gap-3 items-center hover:text-white hover:bg-primary"
                                        >
                                            View details <HiArrowNarrowRight className='text-xl' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='min-h-100 flex flex-col gap-5 justify-center items-center'>
                            <h3 className='text-3xl'>No events found</h3>
                            <p>Create Events Now</p>
                            <Link
                                to="/auth/create-events"
                                className="btn border-0 text-base-100 bg-base-content text-base p-[13px_24px]! h-auto! rounded-[60px] shadow-none flex gap-3 items-center hover:text-white hover:bg-primary"
                            >
                                Create event
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default EventsSection;