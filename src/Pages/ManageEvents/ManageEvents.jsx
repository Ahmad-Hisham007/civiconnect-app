import React from 'react';
import HeroSection from '../../Components/ThemeSwitcher/HeroSection/HeroSection';
import ManageEventsTable from './ManageEventsTable';

const ManageEvents = () => {
    return (
        <>
            <HeroSection title={"Create Event"} />
            <ManageEventsTable />
        </>
    );
};

export default ManageEvents;