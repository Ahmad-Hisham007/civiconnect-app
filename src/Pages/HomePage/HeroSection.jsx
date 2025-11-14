import React from 'react';
import { GrLocation } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";

const HeroSection = () => {
    return (
        <section
            className="relative overflow-hidden bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
            style={{
                backgroundImage: "url(/hero_area_image_3.jpg)"
            }}
        >


            {/* Floating decorative images */}
            <div className=" hidden md:block absolute top-20 right-20 w-64 h-64 z-10">
                <img
                    src="https://demo-themewinter.com/eventplace/wp-content/uploads/2022/11/hero_area_image_1.png"
                    alt="Event decoration"
                    className="w-full h-full object-contain drop-shadow-2xl"
                />
            </div>

            <div className=" hidden md:block absolute bottom-10 -right-5 max-w-84 z-12">
                <img
                    src="https://demo-themewinter.com/eventplace/wp-content/uploads/2022/11/hero_area_image_2.png"
                    alt="Event decoration"
                    className="w-full h-auto object-contain drop-shadow-2xl"
                />
            </div>

            {/* Main content container */}
            <div className="z-15 mx-auto px-6 flex items-center justify-center md:pe-30 md:pt-84 pt-48 md:pb-20 pb-20">
                <div className="max-w-3xl">
                    {/* Main heading */}
                    <h3 className="text-xl md:text-5xl md:text-left text-center font-bold text-indigo-200  leading-tight font-cursive">
                        Find Your Next Experience
                    </h3>

                    {/* Subheading */}
                    <p className="text-2xl md:text-[80px] md:text-left text-center font-bold text-white mb-12 leading-auto">
                        Discover & Promote<br />
                        Upcoming Event
                    </p>

                    {/* Search form */}
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-1 w-full">
                        <div className="flex flex-col  md:flex-row md:items-center gap-1 bg-white rounded-xl px-5 py-2">
                            <div className="flex-1">
                                <div className="flex items-center px-4">
                                    <IoSearchOutline className='text-2xl text-gray-400 me-2' />
                                    <input
                                        type="text"
                                        placeholder="Search Event"
                                        className="w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-500 text-base py-3"
                                    />
                                </div>
                            </div>

                            <div className="hidden md:block w-px bg-gray-300 mx-2"></div>

                            <div className="flex-1">
                                <div className="flex items-center px-4 py-3">
                                    <GrLocation className='text-2xl text-gray-400 me-2' />
                                    <input
                                        type="text"
                                        placeholder="Search Location"
                                        className="w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-500 py-3"
                                    />
                                </div>
                            </div>

                            <button className="bg-primary cursor-pointer hover:bg-secondary text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;