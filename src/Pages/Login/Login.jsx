import React from 'react';
import HeroSection from '../../Components/HeroSection/HeroSection';
import LoginForm from './LoginForm';

const Login = () => {
    return (
        <>
            <HeroSection title="Login To your existing account" />
            <LoginForm />
        </>
    );
};

export default Login;