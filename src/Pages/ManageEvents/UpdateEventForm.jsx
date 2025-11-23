import React, { useContext, useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router';
import Loading from '../../Components/Loading/Loading';
import toast, { Toaster } from 'react-hot-toast';
import { DataLoadingContext } from '../../Contexts/DataLoading';
import { ThemeContext } from '../../Contexts/ThemeContext';

const UpdateEventForm = ({ updateEventData, onEventUpdate, closeModal }) => {
    const [startDate, setStartDate] = useState(null);
    const { isDataLoading, startLoading } = useContext(DataLoadingContext);
    const { isDark } = useContext(ThemeContext)

    useEffect(() => {
        if (updateEventData?.date) {
            setStartDate(new Date(updateEventData.date));
        }
    }, [updateEventData]);

    const handleSubmit = async (e) => {
        e.preventDefault();


        const formData = {
            title: e.target.title.value,
            description: e.target.description.value,
            image: e.target.photoURL.value,
            type: e.target.type.value,
            location: e.target.location.value,
            date: e.target.date.value
        };

        try {
            const promise = fetch(`https://civiconnect-server.vercel.app/events/${updateEventData._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            }).then(async res => {
                const data = await res.json();
                if (!res.ok) {
                    toast.error(data.error)
                    throw new Error("Failed to update event");
                }

                onEventUpdate({ ...updateEventData, ...formData })
            })

            startLoading(promise, "Updating event", "Event Updated successfuly", "Error in updating event")
            await closeModal();
        } catch (error) {
            toast.error('Error updating event', error);
        }
    };

    if (isDataLoading) {
        return <Loading />
    };
    if (!updateEventData) {
        return (
            <div className='min-h-screen flex flex-col gap-5 justify-center items-center'>
                <h3 className='text-3xl'>No events found</h3>
                <p>Please create a new event</p>
                <Link to="/auth/create-events" className="btn border-0 text-base-100 bg-base-content text-base p-[13px_24px]! h-auto! rounded-[60px] shadow-none flex gap-3 items-center hover:text-white hover:bg-primary"> Create Event </Link>
            </div>
        )
    };
    return (
        <div className="bg-base-200 rounded-2xl shadow-lg border border-base-300 p-8 max-w-4xl w-full mx-auto" data-aos="fade-down">


            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title Field */}
                <div>
                    <label htmlFor="title" className="block text-sm font-normal text-base-content mb-2">
                        Event Title *
                    </label>
                    <input
                        type="text"
                        defaultValue={updateEventData.title}
                        id="title"
                        name="title"
                        className="w-full px-4 py-3 border border-base-300 rounded-lg focus:ring-2 focus:ring-amber focus:border-amber transition-all duration-300"
                        placeholder="Event Title"
                        required
                    />
                </div>
                {/* Description Field */}
                <div>
                    <label htmlFor="description" className="block text-sm font-normal text-base-content mb-2">
                        Event description *
                    </label>
                    <textarea
                        type="description"
                        defaultValue={updateEventData.description}
                        id="description"
                        name="description"
                        className="w-full px-4 py-3 border border-base-300 rounded-lg focus:ring-2 focus:ring-amber focus:border-amber transition-all duration-300"
                        placeholder="Event description"
                        required
                        rows="5"
                    />
                </div>
                {/* Photo URL Field */}
                <div>
                    <label htmlFor="photoURL" className="block text-sm font-normal text-base-content mb-2">
                        Photo URL *
                    </label>
                    <input
                        type="text"
                        id="photoURL"
                        defaultValue={updateEventData.image}
                        name="photoURL"
                        className="w-full px-4 py-3 border border-base-300 rounded-lg focus:ring-2 focus:ring-amber focus:border-amber transition-all duration-300"
                        placeholder="Photo URL"
                        required
                    />
                </div>
                {/* Event Type */}
                <div>
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend text-sm font-normal">Event type</legend>
                        <select defaultValue={updateEventData?.type || ""} name='type' className={`select w-full ${isDark ? "bg-[#966597]" : "bg-base-200"} border px-4 py-3 h-auto border-base-300  focus:ring-2 focus:ring-amber focus:border-amber transition-all duration-300 outline-0`} >

                            <option disabled={true}>Pick an event type</option>
                            <option>Conference</option>
                            <option>Seminar</option>
                            <option>Workshop</option>
                            <option>Offline</option>
                            <option>Cleanup</option>
                            <option>Plantation</option>
                            <option>Donation</option>


                        </select>
                        {/* <span className="label">Optional</span> */}
                    </fieldset>
                </div>

                {/* Location field */}
                <div>
                    <label htmlFor="location" className="block text-sm font-normal text-base-content mb-2">
                        Location address *
                    </label>

                    <input
                        type="text"
                        id="location"
                        defaultValue={updateEventData.location}
                        name="location"
                        autoComplete='address'
                        className="w-full px-4 py-3 border border-base-300 rounded-lg focus:ring-2 focus:ring-amber focus:border-amber transition-all duration-300"
                        placeholder="Location address"
                        required
                    />

                </div>

                {/* Date field */}
                <div className='[&_.react-datepicker-wrapper]:w-full'>
                    <label htmlFor="confirmPassword" className="block text-sm font-normal text-base-content mb-2">
                        Pick Event Date *
                    </label>
                    <DatePicker name="date" className='w-full!  px-4 py-3 border border-base-300 rounded-lg focus:ring-2 focus:ring-amber focus:border-amber transition-all duration-300' selected={startDate} onChange={(date) => setStartDate(date)} minDate={new Date()} placeholderText="YYYY-MM-dd" dateFormat="YYYY-MM-dd" />

                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-base-content text-base-100 font-medium py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105  text-md cursor-pointer"
                >
                    Update
                </button>
            </form>

        </div>
    );
};

export default UpdateEventForm;