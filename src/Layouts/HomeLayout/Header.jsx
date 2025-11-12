import React, { useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import logo from "./../../assets/Civiconnect Logo.png"
import { Link, NavLink } from 'react-router';
import { ThemeContext } from '../../Contexts/ThemeContext';
import { BsTicketPerforatedFill } from "react-icons/bs";
import { BiSolidLogInCircle } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";


const NavLinks = (<>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/upcoming-events">Upcoming Events</NavLink></li>
    <li><NavLink to="/our-story">Our Story</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
</>)

const Header = () => {
    const { isDark } = useContext(ThemeContext);
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const drawerCheckboxRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }

        if (latest > 100 && latest > scrollY.getPrevious()) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    })
    const closeDrawer = () => {
        if (drawerCheckboxRef.current) {
            drawerCheckboxRef.current.checked = false;
        }
    };

    // Inside component
    const location = useLocation();

    useEffect(() => {
        closeDrawer();
    }, [location]);


    return (
        <motion.header
            className='lg:p-6 p-3 w-full z-99999 fixed top-0'
            animate={{ y: hidden ? -100 : 0 }}
            transition={{ duration: 0.3 }}
        >
            <nav className={`navbar w-full  p-3 rounded-[60px] justify-between ${isSticky
                ? (isDark ? "bg-neutral-200" : "bg-purple-400")
                : (isDark ? "bg-neutral-200" : "bg-[#ea99fab0]")
                }`}>
                <div className='lg:hidden block'>
                    <div className="drawer">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" ref={drawerCheckboxRef} />
                        <div className="drawer-content">
                            {/* Navbar */}
                            <div>
                                <div className="flex-none lg:hidden">
                                    <label htmlFor="my-drawer-2" ria-label="open sidebar" className="btn btn-circle bg-stable-200! border-0 text-stable-100 swap swap-rotate">
                                        {/* this hidden checkbox controls the state */}
                                        <input type="checkbox" />

                                        {/* hamburger icon */}
                                        <FiMenu className='text-xl' />


                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="drawer-side p-0!" >
                            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay">
                            </label>

                            <nav className="menu bg-base-100 min-h-full w-80 p-0">
                                <div className={`sidebar-header flex flex-nowrap justify-between ${isDark ? "border-gray-600" : "border-gray-200"} py-3 px-4 border-b items-center`}>
                                    <Link className="text-xl font-bold" to="/">
                                        <img
                                            src={logo}
                                            alt="Logo"
                                            className="max-h-10 inline-block"
                                        />
                                    </Link>
                                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className={`btn btn-circle ${isDark ? "bg-stable-200!" : "bg-primary!"}  border-0 ${isDark ? "text-stable-100" : "text-white!"} swap swap-rotate`}>
                                        {/* close icon */}

                                        <IoMdClose className='text-xl' />
                                    </label>
                                </div>
                                {/* Sidebar content here */}
                                <ul className='py-10 px-4 text-base font-semibold [&_li_a]:active:bg-light-accent [&_li_a.active]:bg-light-accent! [&_li_a]:active:text-white [&_li_a.active]:text-white!' >
                                    {NavLinks}
                                </ul>
                                <div className="inline-block grow-0 width-full gap-5 px-4 mt-auto mb-4">
                                    <Link to="/register" className="btn  border-0 bg-primary text-stable-200 text-base p-[13px_24px]! h-auto! rounded-[60px] flex gap-3 items-center hover:bg-secondary">Register Now <BsTicketPerforatedFill className='text-xl' /></Link>
                                    <Link to="/register" className="btn mt-5 border-0 bg-secondary text-stable-200 text-base p-[13px_24px]! h-auto! rounded-[60px] flex gap-3 items-center hover:bg-primary">Login <BiSolidLogInCircle className='text-xl' /></Link>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* Logo */}
                <div className="!width-auto grow-0! hi">
                    <Link className="text-xl font-bold" to="/">
                        <img
                            src={logo}
                            alt="Logo"
                            className="max-h-10 inline-block"
                        />
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="hidden lg:flex  flex-1 justify-center">
                    <ul className="menu menu-horizontal px-1 font-medium space-x-6 [&_li]:bg-transparent [&_li_a]:bg-transparent [&_li_a]:hover:opacity-70 [&_li_a]:hover:underline underline-offset-6 [&_li_a]:text-lg [&_li_a]:semi-bold [&_li_a]:text-base-100 [&_li_a.active]:opacity-70 [&_li_a.active]:underline">
                        {NavLinks}
                    </ul>
                </div>
                <div className="flex-auto grow-0 width-auto gap-5 hidden sm:flex">
                    <Link to="/register" className="btn border-0 bg-primary text-stable-200 text-base p-[13px_24px]! h-auto! rounded-[60px] flex gap-3 items-center hover:bg-secondary">Register Now <BsTicketPerforatedFill className='text-xl' /></Link>
                    <Link to="/register" className="btn border-0 bg-secondary text-stable-200 text-base p-[13px_24px]! h-auto! rounded-[60px] flex gap-3 items-center hover:bg-primary">Login <BiSolidLogInCircle className='text-xl' /></Link>
                </div>
            </nav>
        </motion.header >
    );
};

export default Header;