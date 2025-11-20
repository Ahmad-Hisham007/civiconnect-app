import React, { useContext, useEffect, useRef, useState } from 'react';
import HeroSection from './HeroSection';
import { ThemeContext } from '../../Contexts/ThemeContext';
import { BiCategoryAlt } from "react-icons/bi";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router';
import { DataLoadingContext } from '../../Contexts/DataLoading';
import Loading from '../../Components/Loading/Loading';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const SingleEvent = () => {
    const { id } = useParams();
    const { isDark } = useContext(ThemeContext);
    const { user } = useContext(AuthContext);

    const [event, setEvent] = useState(null);
    const { startLoading } = useContext(DataLoadingContext);
    const hasFetched = useRef(false);
    const location = useLocation();
    const navigate = useNavigate()


    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;
        const fetchEvent = async () => {

            try {
                const promise = fetch(`http://localhost:3000/events/${id}`)
                    .then(res => res.json());

                startLoading(promise, 'Loading event...', 'Event loaded!', 'Failed to load event');

                const data = await promise;
                setEvent(data);
            } catch (error) {
                console.error('Failed to fetch event:', error);
            }
        };

        fetchEvent();
    }, [id]);




    const addJoinedEvent = async (event) => {
        if (!user) {
            toast.error("To join the event, user needs to login first")
            navigate("/login", { state: location.pathname })
            return

        }
        const newJoinedEvent = {
            eventId: id,
            date: event.date,
            title: event.title,
            image: event.image,
            location: event.location,
            type: event.type,
            price: event.price,
            currentUser: user.email
        }
        try {
            const joinedEventPromise = fetch(`http://localhost:3000/joined-events`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newJoinedEvent)
            }).then(async res => {
                const data = await res.json();
                if (!res.ok) {
                    toast.error(data.error);
                    throw new Error(data.error || "Request failed");

                }
                return data
            })
            startLoading(joinedEventPromise, 'Processing request...', 'Event Joined successfully!', `Failed to complete the request`);


        } catch (error) {
            console.error('Failed to join event:', error);
            toast.error(`${error.message}, failed to join event`)
        }
    }

    if (!event) {
        return <Loading />
    };


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
                                <div className={`${isDark ? "border-neutral-400" : "border-purple-300"}  border border-dotted rounded-lg px-5 py-3`}>
                                    <h4 className='text-base-content font-bold'>Organizer</h4>
                                    <p className={`text-xs ${isDark ? "text-neutral-300" : "text-gray-500"} capitalize `}>{event.organizerDetails.displayName}</p>
                                </div>
                            </div>
                            <div className={`${isDark ? "bg-[#ffffff31]" : "bg-purple-100"} p-8 mt-6 rounded-lg space-y-5`}>
                                <button onClick={() => addJoinedEvent(event)} className="btn w-full border-0 bg-linear-to-br from-stable-100 via-primary to-light-accent hover:opacity-80 transition-all duration-200  text-white text-base p-[17px_30px]! h-auto! rounded-[60px] shadow-none flex gap-3 items-center hover:text-white hover:bg-primary"> Join now <HiArrowNarrowRight className='text-xl' /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SingleEvent;