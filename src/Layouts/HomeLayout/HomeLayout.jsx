import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <>
            <Header></Header>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>);
};

export default HomeLayout;