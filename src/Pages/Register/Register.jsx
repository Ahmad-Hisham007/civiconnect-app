import React from 'react';
import HeroSection from '../../Components/HeroSection/HeroSection';
import RegistrationForm from './RegistrationForm';

const Register = () => {
    return (
        <>
            <HeroSection title="Register your account" />
            <RegistrationForm />
        </>
    );
};

export default Register;