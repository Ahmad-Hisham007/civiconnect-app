import React, { useContext, useState } from 'react';
import { signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, Navigate, useLocation } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import toast from 'react-hot-toast';
import { auth, AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const googleProvider = new GoogleAuthProvider();

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const { setLoading } = useContext(AuthContext);
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const location = useLocation();
    // const emailRef = useRef(null);
    // const navigate = useNavigate();

    // const switchToResetPassword = () => {
    //     const email = emailRef.current?.value || "";
    //     navigate("/auth/resetpassword", { state: { email } })
    // }

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // eslint-disable-next-line no-unused-vars
                const user = userCredential.user;
                toast.success('Login Successful');
                setError('');
                setLoading(false)
                setIsAuthenticated(true);
            })
            .catch((err) => {
                const errorMessage = err.message;
                setError(errorMessage);
                toast.error(`Login Failed: ${errorMessage}`);
            });

    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // eslint-disable-next-line no-unused-vars
                const user = result.user;
                toast.success('Login Successful');
                setError('');
                setLoading(false);
                setIsAuthenticated(true);
            })
            .catch((err) => {
                let errorMessage = err.message;
                setError(errorMessage);
                toast.error(`Login Failed: ${errorMessage}`);
            });
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
                    Login to your account
                </h2>

                <form onSubmit={handleLogin} className="space-y-6">

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
                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-base-content text-base-100 font-medium py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105  text-md cursor-pointer"
                    >
                        Login to your account
                    </button>
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </form>
                <button onClick={handleGoogleSignIn} className=" my-3 w-full border border-main hover:border-amber active:border-amber text-main font-medium py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-amber focus:ring-opacity-50 text-md cursor-pointer flex items-center justify-center gap-2"> <FcGoogle className='text-2xl' /> Login with Google </button>
                <p className='text-center text-normal'>Don't have an account? <Link className='underline text-amber font-medium' to='/register'>Please register</Link></p>
            </div>
        </section>
    );
};

export default LoginForm;