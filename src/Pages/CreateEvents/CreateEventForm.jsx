import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../Contexts/ThemeContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DataLoadingContext } from '../../Contexts/DataLoading';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const CreateEventForm = () => {
    const [error, setError] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const { startLoading } = useContext(DataLoadingContext);
    const { user } = useContext(AuthContext);


    const handleCreateEvent = (e) => {
        e.preventDefault();

        const title = e.target.title.value;
        const description = e.target.description.value;
        const image = e.target.photoURL.value;
        const type = e.target.eventType.value;
        const location = e.target.location.value;
        const date = e.target.date.value;
        const price = e.target.price.value;
        console.log(title,
            description,
            image,
            type,
            location,
            date,
            price)

        const newEvent = {
            title,
            description,
            image,
            type,
            location,
            date,
            price,
            organizer: user.email
        }
        function fetchData() {


            const newEventPormise = fetch("http://localhost:3000/events", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newEvent)
            })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch((err) => {
                    setError(err.message)
                    toast.error(err.message)
                })

            startLoading(
                newEventPormise,
                'Creating new event',
                'Event created successfully',
                'Failed creating new event')

        }
        fetchData();
        e.target.reset();
    }

    return (
        <section className='min-h-screen py-20 px-4 flex items-center [&_input]:outline-0'>
            <div className="bg-base-200 rounded-2xl shadow-lg border border-base-300 p-8 max-w-4xl w-full mx-auto" data-aos="fade-down">
                {/* Header */}
                <p className={`text-2xl font-cursive text-center text-content`} >New Event</p>
                <h2 className="text-3xl font-bold text-main font-primary text-center mb-8">
                    Launch your own event
                </h2>

                <form onSubmit={handleCreateEvent} className="space-y-6">
                    {/* Title Field */}
                    <div>
                        <label htmlFor="title" className="block text-sm font-normal text-base-content mb-2">
                            Event Title *
                        </label>
                        <input
                            type="text"
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
                            <select defaultValue="Pick a browser" name='eventType' className={`select w-full bg-base-200 border px-4 py-3 h-auto border-base-300  focus:ring-2 focus:ring-amber focus:border-amber transition-all duration-300 outline-0`} >
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

                    {/* Location Address */}
                    <div>
                        <label htmlFor="location" className="block text-sm font-normal text-base-content mb-2">
                            Location address *
                        </label>

                        <input
                            type="text"
                            id="location"
                            name="location"
                            autoComplete='address'
                            className="w-full px-4 py-3 border border-base-300 rounded-lg focus:ring-2 focus:ring-amber focus:border-amber transition-all duration-300"
                            placeholder="Location address"
                            required
                        />

                    </div>

                    {/* Event Date and price */}
                    <div className='flex gap-6 md:items-center items-stretch flex-col md:flex-row' >
                        <div className='[&_.react-datepicker-wrapper]:w-full w-full'>
                            <label htmlFor="eventDate" className="block text-sm font-normal text-base-content mb-2">
                                Event date *
                            </label>
                            <DatePicker name='date' className='w-full!  px-4 py-3 border border-base-300 rounded-lg focus:ring-2 focus:ring-amber focus:border-amber transition-all duration-300' selected={startDate} onChange={(date) => setStartDate(date)} minDate={new Date()} placeholderText="MM/DD/YYYY" dateFormat="dd MMM, yyyy" />

                        </div>
                        <div>
                            <label htmlFor="price" className="block md:max-w-30 max-w-full text-sm font-normal text-base-content mb-2">
                                Event price in BDT*
                            </label>

                            <input
                                type="text"
                                id="price"
                                name="price"
                                className="w-full px-4 py-3 border border-base-300 rounded-lg focus:ring-2 focus:ring-amber focus:border-amber transition-all duration-300"
                                placeholder="E.g. 99"
                                required
                            />

                        </div>
                    </div>


                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-base-content text-base-100 font-medium py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105  text-md cursor-pointer"
                    >
                        Create
                    </button>
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </form>

            </div>
        </section>
    );
};

export default CreateEventForm;