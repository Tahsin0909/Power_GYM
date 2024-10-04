/* eslint-disable @next/next/no-img-element */
'use client'


import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import Title from "../shared/title/Title";
// import CountUp from "react-countup/build/CountUp";
const FeedBack = () => {


    const testimonials = [
        {
            "email": "john.doe@gymexample.com",
            "name": "John Doe",
            "photoUrl": "https://i.ibb.co/LnbRVVf/smiley-handsome-man-posing-1.jpg",
            "story": "Joining this gym has completely transformed my fitness journey. The personalized workout plans and the expert guidance have helped me achieve my fitness goals faster than I ever imagined!"
        },
        {
            "email": "jane.smith@gymexample.com",
            "name": "Jane Smith",
            "photoUrl": "https://i.ibb.co/bKBrtZT/handsome-young-man-with-arms-crossed-white-background-1.jpg",
            "story": "I love the supportive community at this gym! The trainers are knowledgeable, and the equipment is top-notch. It's more than just a place to work out—it's a place where I feel motivated and inspired."
        },
        {
            "email": "alex.jones@gymexample.com",
            "name": "Alex Jones",
            "photoUrl": "https://i.ibb.co/N3tcvhy/portrait-man-laughing-1.jpg",
            "story": "This gym has everything I need: great equipment, awesome trainers, and a motivating environment. I've never felt more committed to my fitness goals, and it's all thanks to this amazing place."
        }
    ];

    return (
        <div className="lg:my-28 md:my-16 my-10">
            <Title title={'What You Say About Us'} subtitle={'Join us in celebrating our journey of culinary exploration and community building'} />

            <div>
                {/* testimonials  */}
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper lg:mt-20 md:mt-14 mt-10 w-[80vw] lg:w-[50vw] md:w-[70vw] mx-auto flex justify-center items-center" >
                    {
                        testimonials.map((data, idx) => <SwiperSlide key={idx} className="flex flex-col justify-center items-center mb-4" >
                            <div className="space-y-4 lg:h-[35vh] h-[40vh]  lg:p-8  p-4 rounded-lg mb-4 shadow-md bg-[#f7f6ec]">
                                <div className="flex gap-2 items-center">
                                    <img src={data.photoUrl} alt="" className="md:w-16 w-8 md:h-16 h-8 rounded-full" />
                                    <div>
                                        <p className="md:text-lg text-sm font-semibold uppercase">{data.name}</p>
                                        <p className="md:text-lg text-sm font-semibold">{data.email}</p>
                                    </div>
                                </div>
                                <p className="text-xs md:text-base">{data.story}</p>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>

            {/* why choose us  */}


            {/* counter  */}


        </div>
    );
};

export default FeedBack;