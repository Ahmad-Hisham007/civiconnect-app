import React, { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../../Contexts/ThemeContext';
import { DataLoadingContext } from '../../Contexts/DataLoading';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import Loading from '../../Components/Loading/Loading';
import { Link } from 'react-router';
import displayPrice from '../../Utils/displayPrice';
import formatDateForDisplay from '../../Utils/formatDate';

const JoinedEventsTable = () => {
    const { isDark } = useContext(ThemeContext);
    const [events, setEvents] = useState([]);
    const { user } = useContext(AuthContext);
    const { isDataLoading, startLoading } = useContext(DataLoadingContext);
    const hasFetched = useRef(false);

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;
        const fetchEvents = async () => {
            try {
                const eventsPromise = fetch(`http://localhost:3000/joined-events?email=${user.email}`).then(async (res) => {
                    const data = await res.json();
                    if (!res.ok) {
                        toast.error(data.error);
                        throw new Error(data.error)
                    }
                    setEvents(data);
                })
                startLoading(eventsPromise, "Loading events", "events loaded succesfully", "No events found")

            } catch (err) {
                console.error(err.message)
                toast.error(err.message)
            }
        }
        fetchEvents();

    }, [user.email])

    if (isDataLoading) {
        return <Loading />
    };
    if (!events.length > 0) {
        return (
            <div className='min-h-screen flex flex-col gap-5 justify-center items-center'>
                <h3 className='text-3xl'>No events found</h3>
                <p>Please join any event</p>
                <Link to="/upcoming-events" className="btn border-0 text-base-100 bg-base-content text-base p-[13px_24px]! h-auto! rounded-[60px] shadow-none flex gap-3 items-center hover:text-white hover:bg-primary"> Upcoming Events </Link>
            </div>
        )
    };
    return (
        <section data-aos="fade-down">
            <div className='max-w-[1300px] mx-auto py-20 px-4'>
                <div className="overflow-x-auto">

                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <p className={`text-base-content text-2xl font-cursive ${isDark ? "text-gray-400" : "text-gray-600"}`} >Events you joined</p>
                        <h1 className="text-4xl font-bold mb-4">Joined Events</h1>

                    </div>

                    <table className="table rounded-sm">
                        {/* head */}
                        <thead className={`bg-base-content text-base-100  [&_th]:font-normal`} >
                            <tr>
                                <th className='min-w-10'>Id</th>
                                <th className='min-w-60!'>Date & Location</th>
                                <th className='min-w-60!'>Title & Category</th>
                                <th>Fee</th>
                            </tr>
                        </thead>
                        <tbody className={`${isDark ? "bg-[#fbb4fd54] [&_p]:text-white" : "bg-purple-50 [&_p]:text-gray-600"}`}>
                            {/* row 1 */}

                            {
                                events.map((event, index) => {
                                    return <tr key={event._id}>
                                        <th>
                                            <label>
                                                {index + 1}
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={event.image} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{formatDateForDisplay(event.date)}</div>
                                                    <div className="text-sm opacity-50">{event.location}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {event.title}
                                            <br />
                                            <span className={`badge badge-ghost badge-sm bg-base-content text-base-100`} >{event.type}</span>
                                        </td>
                                        <td>{displayPrice(event.price)}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                        {/* foot */}
                        {/* <tfoot>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                    <th></th>
                                </tr>
                            </tfoot> */}
                    </table>
                </div>
            </div>
        </section>
    );
};

export default JoinedEventsTable;