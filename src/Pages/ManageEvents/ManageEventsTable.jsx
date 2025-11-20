
import React, { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../../Contexts/ThemeContext';
import UpdateEventForm from './UpdateEventForm';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { DataLoadingContext } from '../../Contexts/DataLoading';
import Loading from '../../Components/Loading/Loading';
import { Link } from 'react-router';
import toast from 'react-hot-toast';

const ManageEventsTable = () => {
    const { isDark } = useContext(ThemeContext);
    const [events, setEvents] = useState([]);
    const [updateEventData, setUpdateEventData] = useState(null)
    const [isUpdateEventDataLoading, setIsUpdateEventDataLoading] = useState(false)
    const { isDataLoading, startLoading } = useContext(DataLoadingContext);
    const { user } = useContext(AuthContext);
    const hasFetched = useRef(false);
    const updateEventModalRef = useRef(null)

    useEffect(() => {

        const fetchEvents = async () => {
            if (hasFetched.current) return;
            hasFetched.current = true;
            try {
                const eventsPromise = fetch(`http://localhost:3000/manage-events?email=${user.email}`).then(async (res) => {
                    const data = await res.json();
                    console.log(res)
                    console.log(data)
                    if (!res.ok) {
                        console.log(res)
                        toast.error(data.error);
                        throw new Error(data.error)
                    }
                    const sortedEvents = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
                    setEvents(sortedEvents)

                })
                startLoading(eventsPromise, "Loading events", "events loaded succesfully", "No events found")

            } catch (err) {
                console.error(err.message)
                toast.error(err.message)
            }
        }
        fetchEvents();

    }, [user.email])

    const loadEventDetails = (id) => {
        setIsUpdateEventDataLoading(true)
        updateEventModalRef.current.showModal();
        try {

            const eventsPromise = fetch(`http://localhost:3000/events/${id}`).then(async (res) => {
                const data = await res.json();
                console.log(res)
                console.log(data)
                if (!res.ok) {
                    console.log(res)
                    toast.error(data.error);
                    throw new Error(data.error)
                }
                setUpdateEventData(data)
                setIsUpdateEventDataLoading(false)
            })
            startLoading(eventsPromise, "Loading event data", "event loaded succesfully", "No event found")


        } catch (err) {
            console.error(err.message)
            toast.error(err.message)
        }
    }

    const handleEventUpdate = (updatedData) => {
        setEvents(prevEvents =>
            prevEvents.map(event =>
                event._id === updatedData._id ? updatedData : event
            )
        );
    }


    if (isDataLoading && !isUpdateEventDataLoading) {
        return <Loading />
    };
    if (!events.length > 0) {
        return (
            <div className='min-h-screen flex flex-col gap-5 justify-center items-center'>
                <h3 className='text-3xl'>No events found</h3>
                <p>Please create a new event</p>
                <Link to="/auth/create-events" className="btn border-0 text-base-100 bg-base-content text-base p-[13px_24px]! h-auto! rounded-[60px] shadow-none flex gap-3 items-center hover:text-white hover:bg-primary"> Create Event </Link>
            </div>
        )
    };
    return (
        <section>
            <div className='max-w-[1300px] mx-auto py-20 px-4'>
                <div className="overflow-x-auto">

                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <p className={`text-base-content text-2xl font-cursive ${isDark ? "text-gray-400" : "text-gray-600"}`} >Events Created by you</p>
                        <h1 className="text-4xl font-bold mb-4">Manage Events</h1>

                    </div>

                    <table className="table rounded-sm">
                        {/* head */}
                        <thead className={`bg-base-content text-base-100  [&_th]:font-normal`} >
                            <tr>
                                <th className='min-w-10'>Id</th>
                                <th className='min-w-60!'>Date & Location</th>
                                <th className='min-w-60!'>Title & Category</th>
                                <th>Fee</th>
                                <th>Action</th>
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
                                                    <div className="font-bold">{event.date}</div>
                                                    <div className="text-sm opacity-50">{event.location}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {event.title}
                                            <br />
                                            <span className={`badge badge-ghost badge-sm bg-base-content text-base-100`} >{event.type}</span>
                                        </td>
                                        <td>Free</td>
                                        <th>
                                            <div className='flex gap-3 items-center'>
                                                <button onClick={() => loadEventDetails(event._id)} className="btn btn-ghost btn-xs font-medium bg-base-content text-base-100">Update</button>
                                            </div>
                                        </th>
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
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
            <dialog id="updateEventModal" ref={updateEventModalRef} className="modal modal-bottom sm:modal-middle">

                <div className="modal-box p-0 relative">
                    <button onClick={() => updateEventModalRef.current.close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <div className='max-h-[60vh] w-full p-6 overflow-y-auto'>

                        <p className={`text-2xl font-cursive text-center text-content`} >Update Event</p>
                        <h2 className="text-3xl font-bold text-main font-primary text-center mb-8">
                            Edit current event
                        </h2>
                        <div className="modal-action">
                            <form method="dialog " onSubmit={(e) => e.preventDefault}>
                            </form>
                            {/* if there is a button in form, it will close the modal */}
                            <UpdateEventForm updateEventData={updateEventData} isDataLoading={isDataLoading} onEventUpdate={handleEventUpdate} closeModal={() => updateEventModalRef.current.close()} />


                        </div>
                    </div>
                </div>
            </dialog>
        </section>
    );
};

export default ManageEventsTable;