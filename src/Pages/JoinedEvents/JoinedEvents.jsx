import React from 'react';
import HeroSection from '../../Components/HeroSection/HeroSection';
import JoinedEventsTable from './JoinedEventsTable';
import { useParams } from 'react-router';

const JoinedEvents = () => {
    return (
        <>
            <HeroSection title="Joined Events" />
            <JoinedEventsTable />
        </>
    );
};

export default JoinedEvents;