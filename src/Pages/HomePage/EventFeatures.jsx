import React from 'react';
import { Link } from 'react-router';
import { HiArrowNarrowRight } from "react-icons/hi";
import { ImUserTie } from "react-icons/im";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { GiShop } from "react-icons/gi";
import { RiUserCommunityFill } from "react-icons/ri";


const EventFeatures = () => {
    return (
        <section className="py-16 px-6">
            <div className="max-w-[1300px] mx-auto">
                <div className="flex lg:flex-row lg:items-stretch flex-col gap-7">

                    {/* Left Column - Experienced Speaker */}
                    <div className="space-y-8 lg:max-w-78 h-full">
                        <div className="p-[33px_40px] bg-purple-200  rounded-2xl lg:rounded-[60px_0_0_0]">
                            <div className="flex items-center lg:flex-row flex-col text-center gap-5 mb-4">
                                <ImUserTie className='text-primary text-6xl' />
                                <h3 className="text-2xl font-bold text-stable-100">Experienced Speaker</h3>
                            </div>
                            <p className="text-gray-600 font-medium text-center lg:text-left">
                                Civiconnect is a creative platform dedicated to organizing.
                            </p>
                        </div>

                        <div className="p-[33px_40px] bg-purple-200  rounded-2xl lg:rounded-[0_0_0_60px]">
                            <div className="flex items-center lg:flex-row flex-col text-center gap-5 mb-4">
                                <MdOutlineQuestionAnswer className='text-primary text-6xl' />
                                <h3 className="text-2xl font-bold text-stable-100">Live Q&A Sessions</h3>
                            </div>
                            <p className="text-gray-600  font-medium text-center lg:text-left">
                                Civiconnect is a creative platform dedicated to organizing.
                            </p>
                        </div>
                    </div>

                    {/* Middle Column - Event Highlights */}
                    <div
                        className="bg-cover bg-center lg:rounded-[60px] rounded-3xl  lg:p-[85px_115px] p-[40px_20px] flex flex-col items-center justify-center lg:max-w-156 text-center"
                        style={{
                            backgroundImage: 'url(https://demo.rstheme.com/wordpress/vibent/wp-content/uploads/2025/10/e-h3-f-bg1.jpg)'
                        }}
                    >
                        <div>
                            <span className="inline-block font-cursive bg-base-100 px-4 py-2 rounded-full text-lg font-bold mb-4">
                                EVENT FEATURES
                            </span>
                            <h2 className="md:text-5xl text-3xl font-bold text-white mb-4">
                                Event Highlights
                            </h2>
                            <p className="text-white text-[15px] text-lg mb-10">
                                Civiconnect is a creative platform dedicated to organizing world-class design Event that brings together:
                            </p>
                        </div>
                        <Link to="/register" className="btn border-0 bg-white text-stable-100 text-base p-[13px_24px]! h-auto! rounded-[60px] shadow-none flex gap-3 items-center hover:text-white hover:bg-primary">Explore Events <HiArrowNarrowRight className='text-xl' /></Link>

                    </div>

                    {/* Right Column */}
                    <div className="space-y-8 lg:max-w-78 h-full">
                        <div className="p-[33px_40px] bg-purple-200  rounded-2xl lg:rounded-[0_60px_0_0]">
                            <div className="flex items-center lg:flex-row flex-col text-center gap-5 mb-4">
                                <GiShop className='text-primary text-6xl' />
                                <h3 className="text-2xl font-bold text-stable-100">Live Workshop Program</h3>
                            </div>
                            <p className="text-gray-600 font-medium text-center lg:text-left">
                                Civiconnect is a creative platform dedicated to organizing.
                            </p>
                        </div>

                        <div className="p-[33px_40px] bg-purple-200  rounded-2xl lg:rounded-[0_0_60px_0]">
                            <div className="flex items-center lg:flex-row flex-col text-center gap-5 mb-4">
                                <RiUserCommunityFill className='text-primary text-6xl!' />
                                <h3 className="text-2xl font-bold text-stable-100">Networking Opportunities</h3>
                            </div>
                            <p className="text-gray-600 font-medium  text-center lg:text-left">
                                Civiconnect is a creative platform dedicated to sorganizing.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EventFeatures;