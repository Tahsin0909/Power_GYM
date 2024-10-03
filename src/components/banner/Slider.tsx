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

export default function Slider({ images }: SliderProps) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          images?.map((image, idx) => (
            <SwiperSlide key={idx}>
              <img className="w-full max-h-[70vh] object-fill " src={image} alt={`Slide ${idx + 1}`} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
