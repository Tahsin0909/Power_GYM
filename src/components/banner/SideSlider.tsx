'use client';

/* eslint-disable @next/next/no-img-element */

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// Define the type for the props
interface SliderProps {
  images: string[];
}

export default function SideSlider({ images }: SliderProps) {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        autoplay={{
          delay: 2000, 
          disableOnInteraction: false,
        }}
      >
        {
          images?.map((image, idx) => (
            <SwiperSlide key={idx}>
              <img className="w-full md:h-[90vh] h-[50vh] object-fill " src={image} alt={`Slide ${idx + 1}`} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
