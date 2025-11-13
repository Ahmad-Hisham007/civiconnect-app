import React from 'react';
import HomeLayout from '../../Layouts/HomeLayout/HomeLayout';
import { Outlet } from 'react-router';

const Auth = () => {
    return (
        <main>
            <Outlet></Outlet>
        </main>
    );
};

export default Auth;