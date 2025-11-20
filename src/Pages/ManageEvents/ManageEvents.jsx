import React from 'react';
import HeroSection from '../../Components/HeroSection/HeroSection';
import ManageEventsTable from './ManageEventsTable';

const ManageEvents = () => {
    return (
        <>
            <HeroSection title={"Manage Events"} />
            <ManageEventsTable />
        </>
    );
};

export default ManageEvents;