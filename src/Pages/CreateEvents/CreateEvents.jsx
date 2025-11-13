import React from 'react';
import HeroSection from '../../Components/HeroSection/HeroSection';
import CreateEventForm from './CreateEventForm';

const CreateEvents = () => {
    return (
        <>
            <HeroSection title="Create Event" />
            <CreateEventForm/>
        </>
    );
};

export default CreateEvents;