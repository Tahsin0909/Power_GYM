/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react';
import 'swiper/css'; // Import Swiper's CSS
import { A11y, Navigation, Pagination } from 'swiper/modules'; // Import modules for Swiper functionality
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import { Swiper as SwiperCore } from 'swiper'; // Import Swiper core for typing
import { Atom, BicepsFlexed, BookHeart, ChevronLeft, ChevronRight, HeartPulse, MessageCircleQuestion, School } from 'lucide-react'; // Import icons for navigation buttons

const ServicesSlider = () => {

    // Define an interface for the colors object
    interface Service {
        id: number;
        title: string;
        icon: JSX.Element;
        imgSrc: string;
        rating: number;
        priceRange: string;
    }

    const services: Service[] = [
        {
            id: 1,
            title: 'Personal Training',
            icon: <BookHeart size={20} />,
            imgSrc: 'https://t4.ftcdn.net/jpg/02/52/90/75/360_F_252907556_KLgfnaiDROoVeoj1kH7eXuAmDJgJu185.jpg',
            rating: 4.5,
            priceRange: '$100 - $500/month',
        },
        {
            id: 2,
            title: 'Body Building',
            icon:  <BicepsFlexed size={20} />,
            imgSrc: 'https://i.ibb.co/NpYLRGN/istockphoto-615284982-612x612.jpg',
            rating: 4,
            priceRange: '$100 - $300/month',
        },
        {
            id: 3,
            title: 'Nutritional Counseling',
            icon: <MessageCircleQuestion size={20}/>,
            imgSrc: 'https://i.ibb.co/Yhg6t7S/rawImage.jpg',
            rating: 5,
            priceRange: '$50 - $200/month',
        },
        {
            id: 4,
            title: 'Fitness Classes',
            icon: <School size={20}/>,
            imgSrc: 'https://i.ibb.co/XytTdyz/1920-1662117740-fungroupfitnessideas.jpg',
            rating: 4,
            priceRange: '$200 - $800/month',
        },
        {
            id: 5,
            title: 'Yoga Sessions',
            icon: <Atom size={20} />,
            imgSrc: 'https://i.ibb.co/nRSLnLf/clases-yoga-barcelona.jpg',
            rating: 3,
            priceRange: '$100 - $300/month',
        },
        {
            id: 6,
            title: 'Recovery Services',
            icon: <HeartPulse size={20} />,
            imgSrc: 'https://i.ibb.co/Y7HQmNT/Recovery-Studios.jpgg',
            rating: 5,
            priceRange: '$500 - $1000/month',
        },
    ];


    // State for tracking the active slide index
    const [activeIndex, setActiveIndex] = useState(0);

    // State for storing the Swiper instance, typed with SwiperCore
    const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

    return (
        <div className='relative'>
            {/* Swiper container */}
            <Swiper
                slidesPerView={'auto'} // Automatically adjust the number of slides shown
                spaceBetween={20} // Space between each slide
                centeredSlides={true} // Center the active slide
                modules={[Navigation, Pagination, A11y]} // Add modules for navigation and pagination
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Update active slide index on change
                onSwiper={(swiper) => setSwiperInstance(swiper)} // Capture the swiper instance when initialized
                className="mySwiper"
            >
                {/* Loop through the colors array to create slides */}
                {services.map((service, index) => (
                        <SwiperSlide key={index} className='overview_swiper flex items-center rounded-lg'>
                            <div className={`w-full rounded-lg transition-all duration-300 flex justify-center items-center ${activeIndex === index ? 'h-full' : 'md:h-80 h-48'}`}>
                                <div className="relative rounded-lg group cursor-pointer overflow-hidden duration-500 md:w-[350px] w-[300px] h-[350px] md:h-[400px] bg-zinc-800 text-gray-50">
                                    <div className="group-hover:scale-110 duration-500">
                                        <img
                                            className='md:w-[350px] w-[300px] h-[350px] md:h-[400px] object-fill'
                                            src={service.imgSrc}
                                            alt={service.title}
                                        />
                                    </div>
                                    <div className="absolute md:w-[350px] w-[300px] left-0 -bottom-14 duration-500 group-hover:md:-translate-y-12 group-hover:-translate-y-24">

                                        <div className={`absolute ${activeIndex === index ? '' : ' hidden'} -z-10 left-0 md:w-[350px] w-[300px] h-40 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-primary`}>

                                        </div>
                                        <div className={` ${activeIndex === index ? 'flex' : ' hidden'}  items-center gap-2 p-4`}>

                                            {service.icon}
                                            <span className="lg:text-xl md:text-base text-sm font-semibold">{service.title}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom navigation buttons */}
            <div className='flex gap-4 items-center justify-end md:mt-0 mt-4'>
                {/* Left (Previous) button */}
                <button className={`${activeIndex > 0 ? "opacity-100" : "opacity-0"} p-3 rounded-full bg-black`}
                    onClick={() => swiperInstance?.slidePrev()}>
                    <ChevronLeft className='fill-transparent text-white relative ' />
                </button>

                {/* Right (Next) button */}
                <button className={` p-3 rounded-full bg-black`}
                    onClick={() => swiperInstance?.slideNext()}>
                    <ChevronRight className='fill-transparent text-white relative ' />
                </button>
            </div>
        </div>
    );
};

export default ServicesSlider;