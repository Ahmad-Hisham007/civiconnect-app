import React, { useState } from 'react';
import { ThemeContext } from '../../Contexts/ThemeContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateEventForm = () => {
    const [error, setError] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    return (
        <section className='min-h-screen py-20 px-4 flex items-center [&_input]:outline-0'>
            <div className="bg-base-200 rounded-2xl shadow-lg border border-base-300 p-8 max-w-4xl w-full mx-auto" data-aos="fade-down">
                {/* Header */}
                <p className={`text-2xl font-cursive text-center text-content`} >New Event</p>
                <h2 className="text-3xl font-bold text-main font-primary text-center mb-8">
                    Launch your own event
                </h2>

                <form /* onSubmit = { handleRegister } */ className="space-y-6">
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
                            <select defaultValue="Pick a browser" className={`select w-full bg-base-200 border px-4 py-3 h-auto border-base-300  focus:ring-2 focus:ring-amber focus:border-amber transition-all duration-300 outline-0`} >
                                <div className='bg-white text-stable-100 rounded-lg'>
                                    <option disabled={true}>Pick an event type</option>
                                    <option>Conference</option>
                                    <option>Seminar</option>
                                    <option>Workshop</option>
                                    <option>Offline</option>
                                    <option>Cleanup</option>
                                    <option>Plantation</option>
                                    <option>Donation</option>
                                </div>

                            </select>
                            {/* <span className="label">Optional</span> */}
                        </fieldset>
                    </div>

                    {/* Password Field */}
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

                    {/* Confirm Password Field */}
                    <div className='[&_.react-datepicker-wrapper]:w-full'>
                        <label htmlFor="confirmPassword" className="block text-sm font-normal text-base-content mb-2">
                            Confirm Password *
                        </label>
                        <DatePicker className='w-full!  px-4 py-3 border border-base-300 rounded-lg focus:ring-2 focus:ring-amber focus:border-amber transition-all duration-300' selected={startDate} onChange={(date) => setStartDate(date)} minDate={new Date()} placeholderText="MM/DD/YYYY" />

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