import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';


const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();


    if (!user || !user?.email) {

        return <Navigate state={location.pathname} to='/login' replace></Navigate>;
    }
    return (
        children
    );
};

export default PrivateRoute;