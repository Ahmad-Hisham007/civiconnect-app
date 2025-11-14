import React, { useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Loading from '../../Components/Loading/Loading';

const HomeLayout = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <Loading />
    } else {
        return (
            <>
                <Header></Header>
                <main className='min-h-screen'>
                    <Outlet></Outlet>
                </main>
                <Footer></Footer>
            </>);
    }


};

export default HomeLayout;