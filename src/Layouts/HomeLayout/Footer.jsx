import React from 'react';
import logo from "../../assets/Civiconnect Logo.png"
import { Link } from 'react-router';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
    return (
        <footer className="bg-linear-to-br from-stable-100 to-light-accent via-primary">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-7 lg:gap-8 gap-0">

                    {/* Company Details */}
                    <aside className='lg:col-span-2 col-span-1 flex flex-col justify-between gap-7 items-start lg:pt-20 lg:pb-20 lg:px-20 px-10 pt-15'>
                        <Link className="text-xl font-bold" to="/">
                            <img
                                src={logo}
                                alt="Logo"
                                className="max-h-10 inline-block"
                            />
                        </Link>
                        <div className="flex items-center gap-3">
                            <h3 className="text-lg font-semibold text-center text-stable-200">Social Link:</h3>
                            <div className="flex justify-center space-x-2">

                                <a href='facebook.com' className="w-8 h-8 flex justify-center items-center text-white bg-stable-100 hover:bg-white hover:text-stable-100 rounded-sm"> <FaFacebookF /> </a>
                                <a href='facebook.com' className="w-8 h-8 flex justify-center items-center text-white bg-stable-100 hover:bg-white hover:text-stable-100 rounded-sm"> <FaInstagram /> </a>
                                <a href='facebook.com' className="w-8 h-8 flex justify-center items-center text-white bg-stable-100 hover:bg-white hover:text-stable-100 rounded-sm"> <FaXTwitter /> </a>

                            </div>
                        </div>
                    </aside>
                    <aside className='lg:col-span-5 col-span-1 lg:border-l border-0 border-purple-800'>
                        <div className='lg:grid-cols-3 flex flex-col gap-6 lg:grid px-11 lg:py-20 py-10'>
                            {/* Menu Section */}
                            <div>
                                <h3 className="text-2xl font-semibold mb-4  text-white">Our Venue</h3>
                                <div className="space-y-2">
                                    <div>
                                        <h4 className="font-medium mb-1 text-white">Address</h4>
                                        <p className=" text-purple-200">A3T Washington, mg</p>
                                        <p className="text-purple-200">Manchester, Kentucky 39495</p>
                                    </div>
                                    <div className="mt-3">
                                        <h4 className="font-medium mb-1 text-white">Phone Call</h4>
                                        <p className="text-purple-200">2018-6666-0112</p>
                                        <p className="text-purple-200">2018-5555-0113</p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Us Section */}
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-white">Contact Us</h3>
                                <div className="space-y-2">
                                    <div>
                                        <h4 className="font-medium mb-1 text-white">Address</h4>
                                        <p className="text-purple-200">45T Washington, mg</p>
                                        <p className="text-purple-200">Manchester, Kentucky 39495</p>
                                    </div>
                                    <div className="mt-3">
                                        <h4 className="font-medium mb-1 text-white">Phone Call</h4>
                                        <p className="text-purple-200">2018-6666-0112</p>
                                        <p className="text-purple-200">2018-5555-0113</p>
                                    </div>
                                </div>
                            </div>

                            {/* Newsletter Section */}
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-white">Newsletter</h3>
                                <div className="space-y-4">
                                    <p className="text-purple-200">
                                        Sign up to searing weekly newsletter to get the latest updates.
                                    </p>

                                    <div>
                                        <p className="text-purple-200 mb-2">Your email address:</p>
                                        <div className="flex md:flex-row flex-col gap-2">
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                className="flex-1 px-3 py-2 border text-purple-200 focus:text-white border-purple-200 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                                            />
                                            <button className="px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition-colors cursor-pointer">
                                                Subscribe
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="privacy-policy"
                                            className="w-4 h-4 text-primary border-purple-200 rounded focus:ring-primary"
                                        />
                                        <label htmlFor="privacy-policy" className="ml-2 text-purple-200 text-sm">
                                            I agree to the <a href='#'>Privacy Policy.</a>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Copyright Section */}
                        <div className="border-t border-purple-800 py-6 px-11 text-center flex md:flex-row flex-col justify-between items-center">
                            <p className="text-purple-200">
                                ©2025 All rights For Viberet. Designed By RSThems.
                            </p>
                            <a href='#' className="text-purple-200 mt-2">
                                Privacy policy
                            </a>
                        </div>
                    </aside>
                </div>


            </div>
        </footer>
    );
};

export default Footer;