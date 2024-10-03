/* eslint-disable @next/next/no-img-element */
'use client';

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
    // State to control the display of the menu and active navlink
    const [activeNav, setActiveNav] = useState('Home');  // State for active nav

    // State to toggle the visibility of the menu
    const [toggle, setToggle] = useState<boolean>(false);

    // Ref to track the navbar menu element for outside click detection
    const ref = useRef<HTMLDivElement>(null);

    // Toggle the menu open or closed when the menu icon is clicked
    const handleToggle = (event: React.MouseEvent) => {
        event.stopPropagation(); // Prevents triggering handleClickOutside when clicking inside
        setToggle((prevToggle) => !prevToggle); // Toggle the state
    };

    // Handles clicks outside the menu; closes the menu if clicked outside
    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setToggle(false); // Close the menu
        }
    };

    // Effect hook to listen for clicks outside the navbar and clean up
    useEffect(() => {
        if (window.innerWidth > 425) {
            setToggle(false);
        }
        document.addEventListener("mousedown", handleClickOutside); // Listen for outside clicks
        return () => {
            document.removeEventListener("mousedown", handleClickOutside); // Clean up listener on unmount
        };
    }, []);


    // Handle active navigation link
    const handleActiveNav = (link: string) => {
        setActiveNav(link);
    };

    // Array for navigation links
    const navLinks = [
        { name: 'Home', href: '/' },
    ];

    return (
        <header className='flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
            <div className='flex flex-wrap items-center justify-between gap-5 w-full'>
                <Link href="/">
                    <div className="flex items-center gap-2">
                        <img src="https://cdn-icons-png.freepik.com/256/1487/1487577.png?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid" alt="logo" className='w-8' />
                        <p className="text-lg font-bold">power<span className="text-primary">GYM</span></p>
                    </div>

                </Link>

                <div
                    id="collapseMenu"
                    className={`lg:!block ${toggle ? 'block w-fit' : 'hidden'} max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
                >
                    <div ref={ref}>
                        <ul
                            className='lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
                            <li className='mb-6 hidden max-lg:block'>
                                <a href="#">
                                    <img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-36' />
                                </a>
                            </li>
                            {/* Map through navigation links */}
                            {navLinks.map((link, index) => (
                                <li key={index} className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                                    <Link
                                        href={link.href}
                                        className={`block font-semibold text-[15px] ${activeNav === link.name ? 'text-[#007bff]' : 'text-gray-500'} hover:text-[#007bff]`}
                                        onClick={() => handleActiveNav(link.name)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='flex max-lg:ml-auto space-x-3'>
                    <button
                        className='px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]'>
                        Login
                    </button>
                    <button
                        className='px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]'>
                        Sign up
                    </button>

                    <button id="toggleOpen" onClick={handleToggle} className='lg:hidden'>
                        <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
