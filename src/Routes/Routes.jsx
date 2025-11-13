import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layouts/HomeLayout/HomeLayout';
import HomePage from '../Pages/HomePage/HomePage';
import UpcomingEvents from '../Pages/UpcomingEvents/UpcomingEvents';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import Auth from '../Pages/Auth/Auth';
import CreateEvents from '../Pages/CreateEvents/CreateEvents';
import ManageEvents from '../Pages/ManageEvents/ManageEvents';
import JoinedEvents from '../Pages/JoinedEvents/JoinedEvents';
import SingleEvent from '../Pages/SingleEvent/SingleEvent';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "/upcoming-events",
                element: <UpcomingEvents></UpcomingEvents>
            },
            {
                path: "/single-event",
                element: <SingleEvent />,
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/auth",
                element: <Auth></Auth>,
                children: [
                    {
                        path: "/auth/create-events",
                        element: <CreateEvents></CreateEvents>
                    },
                    {
                        path: "/auth/manage-events",
                        element: <ManageEvents></ManageEvents>
                    },
                    {
                        path: "/auth/joined-events",
                        element: <JoinedEvents></JoinedEvents>
                    }
                ]
            }
        ]
    },
]);

export default Routes;