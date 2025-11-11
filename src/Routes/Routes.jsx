import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layouts/HomeLayout/HomeLayout';
import HomePage from '../Pages/HomePage/HomePage';

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
                path: "/upcoming-events"
            },
            {
                path: "/register"
            },
            {
                path: "/login"
            },
            {
                path: "/auth",
                children: [
                    {
                        path: "/auth/create-events"
                    },
                    {
                        path: "/auth/manage-events"
                    },
                    {
                        path: "/auth/joined-events"
                    }
                ]
            }
        ]
    },
]);

export default Routes;