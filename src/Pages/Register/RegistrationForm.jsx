import React, { useContext, useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, Navigate, useLocation } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { auth, AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import toast from 'react-hot-toast';

const googleProvider = new GoogleAuthProvider();

const RegistrationForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');
    const [passwordError, setPasswordError] = useState([]);
    const { setLoading } = useContext(AuthContext);
    const location = useLocation();
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    const validatePassword = (password) => {
        const errors = [];

        //  uppercase letter
        if (!/(?=.*[A-Z])/.test(password)) {
            errors.push("Must have at least one uppercase letter");
        }

        //  lowercase letter
        if (!/(?=.*[a-z])/.test(password)) {
            errors.push("Must have at least one lowercase letter");
        }

        // minimum length
        if (password.length < 6) {
            errors.push("Must be at least 6 characters long");
        }

        return {
            isValid: errors.length === 0,
            errors: errors
        };
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        const { isValid, errors } = validatePassword(password);

        if (!isValid) {
            setPasswordError([...errors]);
            errors.map((err) => {
                toast.error(err)
            })
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            toast.error('Passwords do not match!');
            return;
        }

        try {
            setLoading(true);

            //Create user account
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Update user profile
            await updateProfile(user, {
                displayName: name,
                photoURL: photoURL
            });

            const newUser = {
                uid: user.uid,
                displayName: name,
                email: email,
                photoURL: photoURL,
                registeredAt: new Date().toISOString()
            }
            if (user.uid) {
                const response = await fetch('https://civiconnect-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newUser)
                });
                if (!response.ok) {
                    throw new Error('Failed to create user in database');
                }
            }


            // Success
            e.target.reset();
            setError('');
            setPasswordError([]);
            setLoading(false);
            setIsAuthenticated(true);
            toast.success('Account created successfully!');

        } catch (error) {
            console.error('Registration failed:', error);
            toast.error(`Registration failed: ${error.message}`);
            setError(error.message);
            setLoading(false);
        }

    };

    const handleGoogleSignIn = async () => {

        try {
            const result = await signInWithPopup(auth, googleProvider);
            // eslint-disable-next-line no-unused-vars
            const user = result.user;

            const newUser = {
                uid: user.uid,
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                registeredAt: new Date().toISOString()
            }

            const response = await fetch('https://civiconnect-server.vercel.app/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser)
            });
            const data = await response.json();

            if (user && !response.ok) {
                setError(data.error);
                setLoading(false);
                setIsAuthenticated(true);
                toast.success(`${data.error}, redirecting...`);
            } else if (response.insertedId) {

                toast.success('Signup successfull');
                setError('');
                setLoading(false);
                setIsAuthenticated(true);
            }


        }

        catch (error) {

            toast.error('Error creating user:', error.message || error.error);
            setError(error.message);
        };
    };

    if (isAuthenticated) {
        return <Navigate Navigate to={`${location.state ? location.state : "/"}`
        }></Navigate >
    }

    return (
        <section className='min-h-screen py-20 px-4 flex items-center [&_input]:outline-0'>
            <div className="bg-base-200 rounded-2xl shadow-lg border border-base-300 p-8 max-w-4xl w-full mx-auto" data-aos="fade-down">
                {/* Header */}
                <h2 className="text-3xl font-bold text-main font-primary text-center mb-8">
                    Create A Free Account
                </h2>

                <form onSubmit={handleRegister} className="space-y-6">
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-base-content mb-2">
                            Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-3 border border-base-300 rounded-lg focus:ring-2 focus:ring-amber focus:border-amber transition-all duration-300"
                            placeholder="name"
                            required
                        />
                    </div>
                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-base-content mb-2">
                            Email *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            autoComplete='email'
                            className="w-full px-4 py-3 border border-base-300 rounded-lg focus:ring-2 focus:ring-amber focus:border-amber transition-all duration-300"
                            placeholder="Email"
                            required
                        />
                    </div>
                    {/* Photo URL Field */}
                    <div>
                        <label htmlFor="photoURL" className="block text-sm font-medium text-base-content mb-2">
                            Photo URL *
                        </label>
                        <input
                            type="text"
                            id="photoURL"
                            name="photoURL"
                            className="w-full px-4 py-3 border border-base-300 rounded-lg focus:ring-2 focus:ring-amber focus:border-amber transition-all duration-300"
                            placeholder="Photo URL"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-base-content mb-2">
                            Password *
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                autoComplete='new-password'
                                className="w-full px-4 py-3 border border-base-300 rounded-lg focus:ring-2 focus:ring-amber focus:border-amber transition-all duration-300"
                                placeholder="Password"
                                required
                            />
                            <span onClick={() => setShowPassword(!showPassword)} className='absolute top-[50%] right-5 cursor-pointer hover:scale-120 translate-y-[-50%]'> {showPassword ? <FaEyeSlash /> : <FaEye />} </span>
                        </div>
                        {passwordError.length > 0 && <ul className='gap-1 mt-2'>
                            {
                                passwordError.map((err, index) => <li className='text-red-500 text-sm' key={index} >{err}</li>)
                            }
                        </ul>}
                    </div>

                    {/* Confirm Password Field */}
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-base-content mb-2">
                            Confirm Password *
                        </label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                name="confirmPassword"
                                autoComplete='new-password'
                                className="w-full px-4 py-3 border border-base-300 rounded-lg focus:ring-2 focus:ring-amber focus:border-amber transition-all duration-300"
                                placeholder="Confirm Password"
                                required
                            />
                            <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className='absolute top-[50%] right-5 cursor-pointer hover:scale-120 translate-y-[-50%]'> {showConfirmPassword ? <FaEyeSlash /> : <FaEye />} </span>
                        </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="terms"
                            name="terms"
                            className="w-4 h-4 text-base bg-gray-100 border-base-300 rounded"
                            required
                        />
                        <label htmlFor="terms" className="ml-2 text-sm text-base-300-content">
                            You accept our <a href="#" className="text-amber hover:underline">Terms and Conditions</a> and <a href="#" className="text-amber hover:underline">Privacy Policy</a>
                        </label>
                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-base-content text-base-100 font-medium py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105  text-md cursor-pointer"
                    >
                        Register Now
                    </button>
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </form>
                <button onClick={handleGoogleSignIn} className=" my-3 w-full border border-main hover:border-amber active:border-amber text-main font-medium py-4 px-5 rounded-lg transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-amber focus:ring-opacity-50 text-md cursor-pointer flex items-center justify-center gap-2"> <FcGoogle className='text-2xl' /> Signup with Google </button>
                <p className='text-center text-normal'>Already have an account? <Link className='underline text-amber font-medium' to='/login'>Login</Link></p>
            </div>
        </section>
    );
};

export default RegistrationForm;