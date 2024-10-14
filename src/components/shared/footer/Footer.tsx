/* eslint-disable @next/next/no-img-element */
'use client'

import Link from "next/link";


const Footer: React.FC = () => {
    return (
        <footer className=" md:!pt-padding_lg lg:!pb-padding_lg !pt-20 body_padding bg-black text-white">
            {/* Main footer container with grid layout */}
            <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 items-start lg:mb-m_xl md:mb-m_lg mb-m_primary lg:gap-0 md:gap-8 gap-6">
                {/* Company logo and name */}
                <Link href="/" className={`group block col-span-2 md:mt-0 mt-10`}>
                    <div className="flex items-center gap-2">
                        <img src="https://cdn-icons-png.freepik.com/256/1487/1487577.png?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid" alt="logo" className='md:w-12 w-8' />
                        <p className="md:text-3xl font-bold">power<span className="text-primary group-hover:text-secondary">GYM</span></p>
                    </div>

                </Link>
                {/* About Us section */}
                <div>
                    <p className="text-text_base font-semibold text-primary mb-m_secondary">About US</p>
                    <div className="lg:space-y-3 space-y-2">
                        <p className="  hover:text-secondary">Trainers</p>
                        <p className="  hover:text-secondary">Class</p>
                        <p className="  hover:text-secondary">Trainer</p>
                        <p className="  hover:text-secondary">Plans</p>
                        <p className="  hover:text-secondary">Blog</p>
                        <p className="  hover:text-secondary">Contact</p>
                    </div>
                </div>
                {/* Explore EEVE section */}
                <div>
                    <p className="text-text_base font-semibold text-primary mb-m_primary ">Explore Services</p>
                    <div className="lg:space-y-3 space-y-2">
                        <p className="  hover:text-secondary">Personal Training</p>
                        <p className="  hover:text-secondary">Body Building</p>
                        <p className="  hover:text-secondary">Nutritional Counseling</p>
                        <p className="  hover:text-secondary">Fitness Classes</p>
                        <p className="  hover:text-secondary">Yoga Sessions</p>
                        <p className="  hover:text-secondary">Recovery Services</p>
                    </div>
                </div>
                {/* Community and Support section */}
                <div>
                    <p className="text-text_base font-semibold text-primary mb-m_primary ">Community and Support</p>
                    <div className="lg:space-y-3 space-y-2">
                        <p className="  hover:text-secondary">PowerGYM X Community</p>
                        <p className="  hover:text-secondary">Developer & Maker Access</p>
                        <p className="  hover:text-secondary">Special Cases</p>
                    </div>
                </div>
            </div>
            <div className="border-b border-[#252948] "></div> {/* Divider line */}
            {/* Social links and legal section */}
            <div className="lg:mt-m_secondary mt-m_primary grid lg:grid-cols-4 grid-cols-1 lg:gap-0 gap-4 md:gap-8">
                {/* Social media icons */}
                <div className="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook hover:stroke-secondary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram hover:stroke-secondary"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter hover:stroke-secondary"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin hover:stroke-secondary"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                {/* Links to additional resources */}
                <div className="flex items-center flex-wrap gap-gap_primary col-span-2">
                    <p className="  hover:text-secondary no-wrap">March22 Recap</p>
                    <p className="  hover:text-secondary no-wrap">Privacy Policy</p>
                    <p className="  hover:text-secondary no-wrap">General Terms</p>
                    <p className="  hover:text-secondary no-wrap">Contact</p>
                </div>
                {/* Country and language selection */}
                <div className="flex items-center  gap-2 lg:justify-end">
                    <img className="w-4" src="https://cdn-icons-png.freepik.com/256/3127/3127492.png?ga=GA1.1.961467854.1725388054&semt=ais_hybrid" alt="" /> {/* Country icon */}
                    <p className="  hover:text-secondary">United States (English)</p> {/* Language option */}
                </div>
            </div>
            <p className=" text-center  hover:text-secondary mt-m_lg md:pb-0 pb-4">PG © 2024. All rights reserved.</p>
        </footer>
    );
};

export default Footer;